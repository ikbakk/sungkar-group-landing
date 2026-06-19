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

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const ROOT = join(__dirname, "..", "src/content/tourPackages");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

// Read all tour package JSON data files (exclude accommodation/car-rental/destination data)
const EXCLUDED = new Set([
  "accommodations.json",
  "car-rental.json",
  "destinations.json",
]);
const files = readdirSync(DATA_DIR).filter(
  (f) => f.endsWith(".json") && !EXCLUDED.has(f),
);

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
  if (pkg.boatName) ordered.boatName = pkg.boatName;
  if (pkg.boatType) ordered.boatType = pkg.boatType;
  if (pkg.boatCapacity) ordered.boatCapacity = pkg.boatCapacity;
  if (pkg.boatSpecs) ordered.boatSpecs = pkg.boatSpecs;
  if (pkg.cabins) ordered.cabins = pkg.cabins;
  if (locale.termsAndConditions)
    ordered.termsAndConditions = locale.termsAndConditions;
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
