#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  localizeBoatSpecs,
  localizeCabins,
  localizeCollectionTitle,
  getPriceListLabels,
} from "./lib/package-localization.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKAGES_DIR = path.join(__dirname, "..", "data", "packages");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function migratePackage(slug) {
  const dir = path.join(PACKAGES_DIR, slug);
  const mainPath = path.join(dir, "main.json");
  const localesPath = path.join(dir, "locales.json");

  if (!fs.existsSync(mainPath) || !fs.existsSync(localesPath)) {
    console.warn(`  SKIP ${slug}: missing main.json or locales.json`);
    return { changed: false };
  }

  const main = readJson(mainPath);
  const locales = readJson(localesPath);
  let changed = false;

  for (const localeKey of LOCALES) {
    if (!locales[localeKey]) continue;
    const locale = locales[localeKey];

    // Collection title
    if (locale.collectionTitle && localeKey !== "id") {
      const localized = localizeCollectionTitle(locale.collectionTitle, localeKey);
      if (localized !== locale.collectionTitle) {
        locale.collectionTitle = localized;
        changed = true;
      }
    }

    // Boat specs - pre-translate
    if (main.boatSpecs && main.boatSpecs.length > 0) {
      const localized = localizeBoatSpecs(main.boatSpecs, localeKey);
      // Only store if different from source (for id this is identity)
      if (JSON.stringify(localized) !== JSON.stringify(locale.boatSpecs)) {
        locale.boatSpecs = localized;
        changed = true;
      }
    }

    // Cabins - pre-translate
    if (main.cabins && main.cabins.length > 0) {
      const localized = localizeCabins(main.cabins, localeKey);
      if (JSON.stringify(localized) !== JSON.stringify(locale.cabins)) {
        locale.cabins = localized;
        changed = true;
      }
    }

    // Price list labels
    if (main.priceList && main.priceListType) {
      const labels = getPriceListLabels(main.priceListType, localeKey);
      if (labels) {
        if (JSON.stringify(labels) !== JSON.stringify(locale.priceListLabels)) {
          locale.priceListLabels = labels;
          changed = true;
        }
      }
    }
  }

  if (changed) {
    writeJson(localesPath, locales);
  }

  return { changed };
}

let total = 0;
let changed = 0;
const entries = fs.readdirSync(PACKAGES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory());

for (const entry of entries) {
  const result = migratePackage(entry.name);
  if (result.changed) changed++;
  total++;
}

console.log(`\nMigrated ${changed}/${total} packages`);
