import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "fs";
import { join, relative } from "path";

const COMPONENTS_DIR = join(process.cwd(), "src", "components");

function collectFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath));
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".astro") || entry.name.endsWith(".tsx"))
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

const usesTranslation = (content: string) =>
  content.includes('from "@/lib/i18n"') ||
  content.includes('from "@/lib/i18n/ui-strings"');

const usesLoadContent = (content: string) => content.includes("loadContent(");

const usesAppInfra = (content: string) =>
  content.includes('from "@/lib/') || content.includes('from "@/components/');

const hasAnyPropsString = (content: string) =>
  /:\s*string\b/.test(content) ||
  /:\s*string\[\]/.test(content) ||
  /:\s*\{[^}]+\}/.test(content);

const usesSlot = (content: string) =>
  content.includes("<slot") || content.includes("<slot/>");

const isUiPrimitive = (relPath: string) =>
  relPath.startsWith("ui/") || relPath.startsWith("seo/");

const isStyleOnly = (relPath: string) =>
  relPath.endsWith("ArticleContentStyles.astro");

describe("component hardcoded strings", () => {
  const files = collectFiles(COMPONENTS_DIR);

  it.each(
    files.filter(
      (f) => !isUiPrimitive(relative(COMPONENTS_DIR, f)) && !isStyleOnly(relative(COMPONENTS_DIR, f)),
    ),
  )(
    "%s uses t() or receives text as props",
    (filePath) => {
      const content = readFileSync(filePath, "utf-8");
      const allowed =
        usesTranslation(content) ||
        usesLoadContent(content) ||
        usesSlot(content) ||
        usesAppInfra(content) ||
        hasAnyPropsString(content);
      if (!allowed) {
        expect(allowed).toBe(true);
      }
    },
  );

  const KNOWN_BAD_PATTERNS = [
    { pattern: "Kembali ke Atas", label: "backToTop hardcoded" },
    { pattern: "Selengkapnya", label: "learnMore hardcoded (services-5)" },
    {
      pattern: "Switch language",
      label: "locale switcher aria-label hardcoded",
    },
    {
      pattern: "Lombok • Sumbawa • Labuan Bajo",
      label: "destinations subtitle hardcoded",
    },
    { pattern: "Google Review", label: "google review label hardcoded" },
    { pattern: "Previous image", label: "gallery previous label hardcoded" },
    { pattern: "Next image", label: "gallery next label hardcoded" },
    { pattern: "Preview ", label: "gallery preview label hardcoded" },
    { pattern: "Ulasan Google", label: "google review Indonesian label leak" },
    { pattern: "Lokasi Kami", label: "contact map title leak" },
    {
      pattern: "Informasi Kontak",
      label: "contact info title leak",
    },
    {
      pattern: "Follow Us",
      label: "contact social heading leak",
    },
    {
      pattern: "/ orang",
      label: "package cabin price unit leak",
    },
    { pattern: 'alt="Sungkar Group"', label: "logo alt hardcoded in Header" },
  ];

  describe.each(KNOWN_BAD_PATTERNS)("regression: $label", ({ pattern }) => {
    const results: { file: string }[] = [];

    for (const filePath of files) {
      const content = readFileSync(filePath, "utf-8");
      if (content.includes(pattern)) {
        results.push({ file: relative(COMPONENTS_DIR, filePath) });
      }
    }

    it(`"${pattern}" not found in any component file`, () => {
      if (results.length > 0) {
        const fileList = results.map((r) => r.file).join(", ");
        expect.fail(`Found hardcoded string "${pattern}" in: ${fileList}`);
      }
    });
  });
});
