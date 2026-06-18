import { mkdirSync, writeFileSync, existsSync, readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const ROOT = join(__dirname, "..", "src/content/tourPackages");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

// Read all JSON data files
const files = readdirSync(DATA_DIR).filter(f => f.endsWith(".json"));

let PKGS = [];
for (const f of files) {
  const data = JSON.parse(readFileSync(join(DATA_DIR, f), "utf-8"));
  PKGS = PKGS.concat(data);
}

function yml(locale, pkg) {
  const ordered = {};
  ordered.title = locale.title;
  ordered.region = pkg.region;
  if (pkg.featured) ordered.featured = true;
  ordered.collectionSlug = pkg.collectionSlug;
  ordered.collectionTitle = locale.collectionTitle;
  ordered.category = locale.category;
  ordered.duration = locale.duration;
  ordered.images = pkg.images;
  ordered.summary = locale.summary;
  ordered.highlights = locale.highlights;
  ordered.itinerary = locale.itinerary;
  ordered.includes = locale.includes;
  ordered.excludes = locale.excludes;
  const y = yaml.stringify(ordered, { lineWidth: 0, quotingType: '"' });
  return "---\n" + y + "\n---\n";
}

function writeMdx(pkg, locale) {
  const loc = locale === "id" ? "id" : locale;
  const dir = join(ROOT, pkg.slug);
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${loc}.mdx`);
  // Skip if already exists and matches slug of already-created package 5
  if (existsSync(path)) {
    console.log(`  SKIP ${pkg.slug}/${loc}.mdx (exists)`);
    return;
  }
  writeFileSync(path, yml(pkg.locales[locale], pkg));
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
