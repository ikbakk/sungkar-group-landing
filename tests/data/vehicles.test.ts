import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import yaml from "yaml";
import { VehicleSchema } from "@/lib/content/shared/types";

const VEHICLES_DIR = "src/content/car-rental";

function parseMdxFrontmatter(filePath: string) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`No frontmatter in ${filePath}`);
  return yaml.parse(match[1]);
}

describe("Vehicle MDX Data Validation", () => {
  const vehicleDirs = readdirSync(VEHICLES_DIR, { withFileTypes: true }).filter(
    (d) => d.isDirectory(),
  );

  it("should have vehicles", () => {
    expect(vehicleDirs.length).toBeGreaterThan(0);
  });

  describe("Per-vehicle schema validation", () => {
    for (const dir of vehicleDirs) {
      const slug = dir.name;
      const dirPath = join(VEHICLES_DIR, slug);
      const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

      for (const file of files) {
        const locale = file.replace(/\.mdx$/, "");

        it(`${slug} (${locale}) has valid frontmatter`, () => {
          const frontmatter = parseMdxFrontmatter(join(dirPath, file));
          const result = VehicleSchema.safeParse(frontmatter);
          if (!result.success) {
            const issues = result.error.issues.map(
              (i) => `  ${i.path.join(".")}: ${i.message}`,
            );
            expect.fail(`Invalid vehicle "${slug}":\n${issues.join("\n")}`);
          }
        });
      }
    }
  });

  describe("Specifications", () => {
    const idFiles = vehicleDirs.map((dir) => {
      const idPath = join(VEHICLES_DIR, dir.name, "id.mdx");
      return { slug: dir.name, fm: parseMdxFrontmatter(idPath) };
    });

    it("all vehicles have positive seat counts", () => {
      for (const { slug, fm } of idFiles) {
        expect(fm.seats).toBeGreaterThan(0);
      }
    });

    it("all vehicles have valid transmission types", () => {
      for (const { slug, fm } of idFiles) {
        expect(["Manual", "Automatic"]).toContain(fm.transmission);
      }
    });
  });

  describe("Region consistency", () => {
    const allItems = vehicleDirs.flatMap((dir) => {
      const dirPath = join(VEHICLES_DIR, dir.name);
      return readdirSync(dirPath)
        .filter((f) => f.endsWith(".mdx"))
        .map((file) => ({
          slug: dir.name,
          locale: file.replace(/\.mdx$/, ""),
          fm: parseMdxFrontmatter(join(dirPath, file)),
        }));
    });

    it("each vehicle has a consistent region across locales", () => {
      const bySlug = allItems.reduce(
        (acc, p) => {
          if (!acc[p.slug]) acc[p.slug] = [];
          acc[p.slug].push(p);
          return acc;
        },
        {} as Record<string, typeof allItems>,
      );

      for (const [slug, items] of Object.entries(bySlug)) {
        const regions = [...new Set(items.map((p) => p.fm.region))];
        expect(regions.length).toBe(1);
      }
    });
  });
});
