import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import yaml from "yaml";
import { DestinationSchema } from "@/lib/content/shared/types";

const contentDir = join(
  import.meta.dirname,
  "..",
  "..",
  "src",
  "content",
  "destinations",
);
const destinationDirs = readdirSync(contentDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

function parseMdxFrontmatter(filePath: string) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`No frontmatter in ${filePath}`);
  return yaml.parse(match[1]);
}

describe("Destination Data Validation", () => {
  describe("All Destinations", () => {
    it.each(destinationDirs)("%s should have valid MDX files", (slug) => {
      const dirPath = join(contentDir, slug);
      const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));
      expect(files.length).toBeGreaterThan(0);

      for (const file of files) {
        const data = parseMdxFrontmatter(join(dirPath, file));
        const entry = { slug, ...data };
        const result = DestinationSchema.safeParse(entry);
        if (!result.success) {
          const issues = result.error.issues.map(
            (i) => `  ${i.path.join(".")}: ${i.message}`,
          );
          expect.fail(
            `Invalid destination "${slug}/${file}":\n${issues.join("\n")}`,
          );
        }

        expect(entry.gallery.length).toBeGreaterThan(0);
        expect(entry.thingsToDo.length).toBeGreaterThan(0);
        expect(entry.packages).toBeDefined();
      }
    });
  });

  describe("Required Fields", () => {
    it("should have non-empty required fields across all locales", () => {
      for (const slug of destinationDirs) {
        const dirPath = join(contentDir, slug);
        const files = readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

        for (const file of files) {
          const data = parseMdxFrontmatter(join(dirPath, file));
          expect(data.title).toBeTruthy();
          expect(data.region).toBeTruthy();
          expect(data.summary).toBeTruthy();
          expect(data.image).toBeTruthy();
        }
      }
    });
  });
});
