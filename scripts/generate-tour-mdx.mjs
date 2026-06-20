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

const COL_TITLE_EN = {
  "Paket 1 Hari": "1 Day Package",
  "Paket 2 Hari 1 Malam": "2 Days 1 Night Package",
  "Paket 3 Hari 2 Malam": "3 Days 2 Nights Package",
  "Paket 4 Hari 3 Malam": "4 Days 3 Nights Package",
};

const COL_TITLE_MS = {
  "Paket 1 Hari": "Pakej 1 Hari",
  "Paket 2 Hari 1 Malam": "Pakej 2 Hari 1 Malam",
  "Paket 3 Hari 2 Malam": "Pakej 3 Hari 2 Malam",
  "Paket 4 Hari 3 Malam": "Pakej 4 Hari 3 Malam",
};

const COL_TITLE_AR = {
  "Paket 1 Hari": "باقة يوم واحد",
  "Paket 2 Hari 1 Malam": "باقة يومين وليلة",
  "Paket 3 Hari 2 Malam": "باقة 3 أيام وليلتين",
  "Paket 4 Hari 3 Malam": "باقة 4 أيام و 3 ليال",
};

const COL_TITLE_ZH = {
  "Paket 1 Hari": "一日游套餐",
  "Paket 2 Hari 1 Malam": "两天一晚套餐",
  "Paket 3 Hari 2 Malam": "三天两晚套餐",
  "Paket 4 Hari 3 Malam": "四天三晚套餐",
};

const COL_TITLE_MAP = {
  en: COL_TITLE_EN,
  ms: COL_TITLE_MS,
  ar: COL_TITLE_AR,
  zh: COL_TITLE_ZH,
};

const BOAT_SPECS_EN = {
  "Panjang Kapal": "Boat Length",
  "Jumlah Kabin": "Cabins",
  Mesin: "Engine",
  Crew: "Crew",
  Dibangun: "Built",
};

const BOAT_VALUES_EN = {
  "6 Orang": "6 Persons",
  "5 Kamar": "5 Cabins",
  "8 Orang": "8 Persons",
  "4 Kamar": "4 Cabins",
};

function localizeBoatSpecs(specs, locale) {
  if (locale === "id") return specs;
  return specs.map((s) => ({
    label: BOAT_SPECS_EN[s.label] || s.label,
    value: BOAT_VALUES_EN[s.value] || s.value,
  }));
}

const CABIN_EN = {
  "Kelas Bawah": "Lower Deck",
  "Kelas Tengah": "Middle Deck",
  "Kelas Utama": "Main Deck",
  "Kelas Suite": "Suite Class",
  "Suite Keluarga": "Family Suite",
  "Kabin ekonomi": "Economy cabin",
  "Kabin standar": "Standard cabin",
  "Kabin VIP": "VIP cabin",
};

function localizeCabins(cabins, locale) {
  if (locale === "id") return cabins;
  return cabins.map((c) => ({
    ...c,
    name: Object.entries(CABIN_EN).reduce(
      (n, [id, en]) => n.replace(id, en),
      c.name,
    ),
    description: Object.entries(CABIN_EN).reduce(
      (d, [id, en]) => d.replace(id, en),
      c.description,
    ),
    price: c.price.replace("/orang", "/person").replace("/kabin", "/cabin"),
  }));
}

function yml(locale, pkg) {
  const locKey = locale.localeKey;
  const ordered = {};
  ordered.title = locale.title;
  ordered.region = pkg.region;
  if (pkg.featured) ordered.featured = true;
  ordered.collectionSlug = pkg.collectionSlug;
  ordered.collectionTitle =
    COL_TITLE_MAP[locKey]?.[locale.collectionTitle] || locale.collectionTitle;
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
  if (pkg.boatSpecs)
    ordered.boatSpecs = localizeBoatSpecs(pkg.boatSpecs, locKey);
  if (pkg.cabins) ordered.cabins = localizeCabins(pkg.cabins, locKey);
  if (locale.termsAndConditions)
    ordered.termsAndConditions = locale.termsAndConditions;
  const y = yaml.stringify(ordered, { lineWidth: 0, quotingType: '"' });
  return "---\n" + y + "\n---\n";
}

function writeMdx(pkg, localeKey) {
  const loc = localeKey === "id" ? "id" : localeKey;
  const dir = join(ROOT, pkg.slug);
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${loc}.mdx`);
  // Skip if already exists and matches slug of already-created package 5
  if (existsSync(path)) {
    console.log(`  SKIP ${pkg.slug}/${loc}.mdx (exists)`);
    return;
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
