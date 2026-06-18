import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import yaml from "yaml";
import {
  TourPackageSchema,
  DestinationSchema,
  AccommodationSchema,
  VehicleSchema,
} from "@/lib/content/shared/types";

import { packages } from "@/lib/content/tourPackages";
import { accommodations } from "@/lib/content/accommodations";
import { vehicles } from "@/lib/content/car-rental";

const destinationsDir = join(import.meta.dirname, "..", "src", "content", "destinations");
const destinationDirs = readdirSync(destinationsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

function parseMdxFrontmatter(filePath: string) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`No frontmatter in ${filePath}`);
  return yaml.parse(match[1]);
}

describe("TourPackage data validation", () => {
  packages.forEach((pkg) => {
    it(`${pkg.title} has valid data`, () => {
      const result = TourPackageSchema.safeParse(pkg);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid package "${pkg.title}":\n${issues.join("\n")}`);
      }
    });
  });
});

describe("Destination data validation", () => {
  for (const slug of destinationDirs) {
    const dirPath = join(destinationsDir, slug);
    const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      it(`${slug}/${file} has valid data`, () => {
        const data = parseMdxFrontmatter(join(dirPath, file));
        const entry = { slug, ...data };
        const result = DestinationSchema.safeParse(entry);
        if (!result.success) {
          const issues = result.error.issues.map(
            (i) => `  ${i.path.join(".")}: ${i.message}`
          );
          expect.fail(`Invalid destination "${slug}/${file}":\n${issues.join("\n")}`);
        }
      });
    }
  }
});

describe("Accommodation data validation", () => {
  accommodations.forEach((acc) => {
    it(`${acc.name} has valid data`, () => {
      const result = AccommodationSchema.safeParse(acc);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid accommodation "${acc.name}":\n${issues.join("\n")}`);
      }
    });
  });
});

describe("Vehicle data validation", () => {
  vehicles.forEach((v) => {
    it(`${v.name} has valid data`, () => {
      const result = VehicleSchema.safeParse(v);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid vehicle "${v.name}":\n${issues.join("\n")}`);
      }
    });
  });
});
