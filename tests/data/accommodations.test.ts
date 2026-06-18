import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import yaml from "yaml";
import { AccommodationSchema } from "@/lib/content/shared/types";

const ACCOMMODATIONS_DIR = "src/content/accommodations";

function parseMdxFrontmatter(filePath: string) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`No frontmatter in ${filePath}`);
  return yaml.parse(match[1]);
}

describe("Accommodation MDX Data Validation", () => {
  const accDirs = readdirSync(ACCOMMODATIONS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  it("should have accommodations", () => {
    expect(accDirs.length).toBeGreaterThan(0);
  });

  describe("Per-item schema validation", () => {
    for (const dir of accDirs) {
      const slug = dir.name;
      const dirPath = join(ACCOMMODATIONS_DIR, slug);
      const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

      for (const file of files) {
        const locale = file.replace(/\.mdx$/, "");

        it(`${slug} (${locale}) has valid frontmatter`, () => {
          const frontmatter = parseMdxFrontmatter(join(dirPath, file));
          const result = AccommodationSchema.safeParse(frontmatter);
          if (!result.success) {
            const issues = result.error.issues.map(
              (i) => `  ${i.path.join(".")}: ${i.message}`
            );
            expect.fail(`Invalid accommodation "${slug}":\n${issues.join("\n")}`);
          }
        });
      }
    }
  });

  describe("Region consistency", () => {
    const allItems = accDirs.flatMap((dir) => {
      const dirPath = join(ACCOMMODATIONS_DIR, dir.name);
      return readdirSync(dirPath)
        .filter((f) => f.endsWith(".mdx"))
        .map((file) => ({
          slug: dir.name,
          locale: file.replace(/\.mdx$/, ""),
          fm: parseMdxFrontmatter(join(dirPath, file)),
        }));
    });

    it("each item has a consistent region across locales", () => {
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
