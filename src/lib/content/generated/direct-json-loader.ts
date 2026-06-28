// Direct content loader — reads generated MDX frontmatter so production builds
// do not require the gitignored data/ source directory.

import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

function readFrontmatter(filePath: string) {
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);

  if (!match) return {};

  return yaml.parse(match[1]) ?? {};
}

function loadMdxCollection(type: string) {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];

  const entries: Record<string, unknown>[] = [];
  const dirs = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory());

  for (const dirent of dirs) {
    const slug = dirent.name;

    for (const locale of LOCALES) {
      const filePath = path.join(dir, slug, `${locale}.mdx`);
      if (!fs.existsSync(filePath)) continue;

      entries.push({
        slug,
        locale,
        ...readFrontmatter(filePath),
      });
    }
  }

  return entries;
}

export function getTourPackagesData() {
  return loadMdxCollection("tourPackages");
}

export function getAccommodationsData() {
  return loadMdxCollection("accommodations");
}

export function getCarRentalData() {
  return loadMdxCollection("car-rental");
}

export function getDestinationsData() {
  return loadMdxCollection("destinations");
}
