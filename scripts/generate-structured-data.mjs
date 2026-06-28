#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { normalizePackageLocale } from "./lib/tour-package-normalizer.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(__dirname, "data");
const OUT_DIR = path.join(ROOT, "src", "generated", "content");
const LOCALES = ["id", "en", "ar", "ms", "zh"];
const args = new Set(process.argv.slice(2));
const WATCH = args.has("--watch");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function stableStringify(value) {
  return JSON.stringify(value, null, 2);
}

function writeTsModule(filePath, exportName, data) {
  ensureDir(path.dirname(filePath));
  const content = `// AUTO-GENERATED FILE\n// DO NOT EDIT MANUALLY\n\nexport const ${exportName} = ${stableStringify(data)};\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function readPackageSources() {
  const dir = path.join(DATA_DIR, "packages");
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((dirent) => {
      const slug = dirent.name;
      return {
        ...readJson(path.join(dir, slug, "main.json")),
        slug,
        locales: readJson(path.join(dir, slug, "locales.json")),
      };
    });
}
function normalizeTourPackages() {
  const items = [];
  for (const pkg of readPackageSources()) {
    for (const locale of LOCALES)
      items.push(normalizePackageLocale(pkg, locale));
  }
  return items;
}
function normalizeTypedCollection(type) {
  const dir = path.join(DATA_DIR, type);
  if (!fs.existsSync(dir)) return [];
  const items = [];
  for (const dirent of fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())) {
    const slug = dirent.name;
    const main = readJson(path.join(dir, slug, "main.json"));
    const locales = readJson(path.join(dir, slug, "locales.json"));
    for (const locale of LOCALES) {
      const localeData = locales[locale];
      if (!localeData) {
        throw new Error(
          `Missing locale '${locale}' in scripts/data/${type}/${slug}/locales.json`,
        );
      }
      if (type === "accommodations") {
        items.push({
          slug,
          locale,
          name: localeData.name,
          region: main.region,
          perks: localeData.perks,
          regionalHighlights: localeData.regionalHighlights,
          description: localeData.description,
          image: main.image,
        });
      } else if (type === "car-rental") {
        items.push({
          slug,
          locale,
          name: localeData.name,
          region: main.region,
          pricePerDay: main.pricePerDay,
          seats: main.seats,
          transmission: main.transmission,
          features: localeData.features,
          bestFor: localeData.bestFor,
          description: localeData.description,
          imageTop: main.imageTop,
          imageBottom: main.imageBottom,
        });
      } else if (type === "destinations") {
        items.push({
          slug,
          locale,
          title: localeData.title,
          region: localeData.region,
          image: main.image,
          gallery: main.gallery,
          summary: localeData.summary,
          thingsToDo: localeData.thingsToDo,
          packages: localeData.packages,
        });
      }
    }
  }
  return items;
}
function buildAll() {
  const outputs = [
    ["tour-packages.generated.ts", "tourPackagesData", normalizeTourPackages()],
    [
      "accommodations.generated.ts",
      "accommodationsData",
      normalizeTypedCollection("accommodations"),
    ],
    [
      "car-rental.generated.ts",
      "carRentalData",
      normalizeTypedCollection("car-rental"),
    ],
    [
      "destinations.generated.ts",
      "destinationsData",
      normalizeTypedCollection("destinations"),
    ],
  ];
  for (const [file, exportName, data] of outputs) {
    writeTsModule(path.join(OUT_DIR, file), exportName, data);
    console.log(`generated ${path.relative(ROOT, path.join(OUT_DIR, file))}`);
  }
}
function snapshotFiles(dir) {
  const state = new Map();
  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else state.set(full, fs.statSync(full).mtimeMs);
    }
  }
  walk(dir);
  return state;
}
function hasChanged(prev, next) {
  if (prev.size !== next.size) return true;
  for (const [file, mtime] of next) if (prev.get(file) !== mtime) return true;
  return false;
}
function watch() {
  let previous = snapshotFiles(DATA_DIR);
  console.log("watching scripts/data for changes...");
  setInterval(() => {
    const next = snapshotFiles(DATA_DIR);
    if (!hasChanged(previous, next)) return;
    previous = next;
    try {
      buildAll();
    } catch (error) {
      console.error(error);
    }
  }, 800);
}

buildAll();
if (WATCH) watch();
