import {
  mkdirSync,
  writeFileSync,
  existsSync,
  readFileSync,
  readdirSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "yaml";

import { toPackageFrontmatter } from "./lib/tour-package-normalizer.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "data");
const PACKAGES_DIR = join(DATA_DIR, "packages");
const ROOT = join(__dirname, "..", "src/content/tourPackages");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

// Read tour packages from packages/*/ directory tree
const packageDirs = readdirSync(PACKAGES_DIR, { withFileTypes: true }).filter(
  (d) => d.isDirectory(),
);

let PKGS = [];
for (const dir of packageDirs) {
  const slug = dir.name;
  const mainPath = join(PACKAGES_DIR, slug, "main.json");
  const localesPath = join(PACKAGES_DIR, slug, "locales.json");
  if (!existsSync(mainPath) || !existsSync(localesPath)) {
    console.warn(`  Skipping ${slug}: missing main.json or locales.json`);
    continue;
  }
  const main = JSON.parse(readFileSync(mainPath, "utf-8"));
  const locales = JSON.parse(readFileSync(localesPath, "utf-8"));
  PKGS.push({ ...main, locales });
}

function yml(locale, pkg) {
  const ordered = toPackageFrontmatter(pkg, locale.localeKey);
  const y = yaml.stringify(ordered, { lineWidth: 0, quotingType: '"' });
  return "---\n" + y + "\n---\n";
}

function writeMdx(pkg, localeKey) {
  const loc = localeKey === "id" ? "id" : localeKey;
  const dir = join(ROOT, pkg.slug);
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${loc}.mdx`);
  if (!pkg.locales[localeKey]) {
    throw new Error(
      `Missing locale '${localeKey}' in scripts/data/packages/${pkg.slug}/locales.json`,
    );
  }
  const localeData = { ...pkg.locales[localeKey], localeKey };
  writeFileSync(path, yml(localeData, pkg));
  console.log(`  OK ${pkg.slug}/${loc}.mdx`);
}

// Generate
let count = 0;
for (const pkg of PKGS) {
  for (const locale of LOCALES) {
    writeMdx(pkg, locale);
    count++;
  }
}
console.log(`\nDone. Generated ${count} files.`);
