import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import yaml from "yaml";
import { TourPackageSchema } from "@/lib/content/shared/types";

const TOUR_PACKAGES_DIR = "src/content/tourPackages";

function parseMdxFrontmatter(filePath: string) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`No frontmatter in ${filePath}`);
  return yaml.parse(match[1]);
}

describe("Tour Package MDX Data Validation", () => {
  const packageDirs = readdirSync(TOUR_PACKAGES_DIR, {
    withFileTypes: true,
  }).filter((d) => d.isDirectory());

  it(`should have tour packages`, () => {
    expect(packageDirs.length).toBeGreaterThan(0);
  });

  describe("Per-package schema validation", () => {
    for (const dir of packageDirs) {
      const slug = dir.name;
      const dirPath = join(TOUR_PACKAGES_DIR, slug);
      const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

      for (const file of files) {
        const locale = file.replace(/\.mdx$/, "");

        it(`${slug} (${locale}) has valid frontmatter`, () => {
          const frontmatter = parseMdxFrontmatter(join(dirPath, file));
          const pkg = {
            ...frontmatter,
            slug,
            featured: frontmatter.featured ?? false,
          };
          const result = TourPackageSchema.safeParse(pkg);
          if (!result.success) {
            const issues = result.error.issues.map(
              (i) => `  ${i.path.join(".")}: ${i.message}`,
            );
            expect.fail(`Invalid package "${slug}":\n${issues.join("\n")}`);
          }
        });
      }
    }
  });

  describe("Collection slug consistency", () => {
    const allLocalized = packageDirs.flatMap((dir) => {
      const dirPath = join(TOUR_PACKAGES_DIR, dir.name);
      return readdirSync(dirPath)
        .filter((f) => f.endsWith(".mdx"))
        .map((file) => ({
          slug: dir.name,
          locale: file.replace(/\.mdx$/, ""),
          fm: parseMdxFrontmatter(join(dirPath, file)),
        }));
    });

    // Group by (collectionSlug + locale) to check consistency within same locale
    const byCollectionAndLocale = allLocalized.reduce(
      (acc, p) => {
        const key = `${p.fm.collectionSlug}__${p.locale}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(p);
        return acc;
      },
      {} as Record<string, typeof allLocalized>,
    );

    for (const [key, packages] of Object.entries(byCollectionAndLocale)) {
      const [collectionSlug, locale] = key.split("__");
      it(`collection "${collectionSlug}" has consistent titles for "${locale}"`, () => {
        const titles = [...new Set(packages.map((p) => p.fm.collectionTitle))];
        expect(titles.length).toBe(1);
      });
    }
  });
});
