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

import { destinations } from "@/lib/content/destinations";
import { accommodations } from "@/lib/content/accommodations";
import { vehicles } from "@/lib/content/car-rental";

const TOUR_PACKAGES_DIR = "src/content/tourPackages";

function parseMdxFrontmatter(filePath: string) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`No frontmatter in ${filePath}`);
  return yaml.parse(match[1]);
}

describe("TourPackage MDX frontmatter validation", () => {
  const packageDirs = readdirSync(TOUR_PACKAGES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  for (const dir of packageDirs) {
    const slug = dir.name;
    const dirPath = join(TOUR_PACKAGES_DIR, slug);
    const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      const locale = file.replace(/\.mdx$/, "");

      it(`${slug} (${locale}) has valid data`, () => {
        const frontmatter = parseMdxFrontmatter(join(dirPath, file));
        const pkg = { ...frontmatter, slug, featured: frontmatter.featured ?? false };
        const result = TourPackageSchema.safeParse(pkg);
        if (!result.success) {
          const issues = result.error.issues.map(
            (i) => `  ${i.path.join(".")}: ${i.message}`
          );
          expect.fail(`Invalid package "${slug}" (${locale}):\n${issues.join("\n")}`);
        }
      });
    }
  }
});

describe("Destination data validation", () => {
  destinations.forEach((dest) => {
    it(`${dest.title} has valid data`, () => {
      const result = DestinationSchema.safeParse(dest);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid destination "${dest.title}":\n${issues.join("\n")}`);
      }
    });
  });
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
