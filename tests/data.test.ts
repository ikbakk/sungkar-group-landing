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

const destinationsDir = join(import.meta.dirname, "..", "src", "content", "destinations");
const destinationDirs = readdirSync(destinationsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const TOUR_PACKAGES_DIR = "src/content/tourPackages";
const ACCOMMODATIONS_DIR = "src/content/accommodations";
const VEHICLES_DIR = "src/content/car-rental";

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

describe("Accommodation MDX frontmatter validation", () => {
  const accDirs = readdirSync(ACCOMMODATIONS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  for (const dir of accDirs) {
    const slug = dir.name;
    const dirPath = join(ACCOMMODATIONS_DIR, slug);
    const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      const locale = file.replace(/\.mdx$/, "");

      it(`${slug} (${locale}) has valid data`, () => {
        const frontmatter = parseMdxFrontmatter(join(dirPath, file));
        const result = AccommodationSchema.safeParse(frontmatter);
        if (!result.success) {
          const issues = result.error.issues.map(
            (i) => `  ${i.path.join(".")}: ${i.message}`
          );
          expect.fail(`Invalid accommodation "${slug}" (${locale}):\n${issues.join("\n")}`);
        }
      });
    }
  }
});

describe("Vehicle MDX frontmatter validation", () => {
  const vehicleDirs = readdirSync(VEHICLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  for (const dir of vehicleDirs) {
    const slug = dir.name;
    const dirPath = join(VEHICLES_DIR, slug);
    const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      const locale = file.replace(/\.mdx$/, "");

      it(`${slug} (${locale}) has valid data`, () => {
        const frontmatter = parseMdxFrontmatter(join(dirPath, file));
        const result = VehicleSchema.safeParse(frontmatter);
        if (!result.success) {
          const issues = result.error.issues.map(
            (i) => `  ${i.path.join(".")}: ${i.message}`
          );
          expect.fail(`Invalid vehicle "${slug}" (${locale}):\n${issues.join("\n")}`);
        }
      });
    }
  }
});
