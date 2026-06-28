// Direct JSON loader — mirrors the behavior of the generated
// tour-packages.generated.ts module without requiring generation.

import fs from "node:fs";
import path from "node:path";

const PACKAGES_DIR = path.join(process.cwd(), "data", "packages");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

function readJson(filePath: string) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function normalizePackagePriceList(priceList: Record<string, Record<string, number>>) {
  const keyMap: Record<string, string> = { fullDay: "1D" };
  return Object.fromEntries(
    Object.entries(priceList).map(([k, v]) => [keyMap[k] || k, v]),
  );
}

function normalizePackageLocale(pkg: any, localeKey: string) {
  const locale = { ...pkg.locales[localeKey], localeKey };
  const ordered: Record<string, unknown> = {};
  ordered.slug = pkg.slug;
  ordered.locale = localeKey;
  ordered.title = locale.title;
  ordered.region = pkg.region;
  if (pkg.featured) ordered.featured = true;
  ordered.collectionSlug = pkg.collectionSlug;
  ordered.collectionTitle = locale.collectionTitle;
  ordered.category = locale.category;
  if (locale.durationOptions) {
    ordered.duration = locale.durationOptions.join(", ");
    const keys = Object.keys(locale.itinerary);
    ordered.durationLabels = Object.fromEntries(
      keys.map((key, i) => [key, locale.durationOptions[i]]),
    );
  } else {
    ordered.duration = locale.duration;
  }
  ordered.images = pkg.images;
  ordered.summary = locale.summary;
  ordered.highlights = locale.highlights;
  if (
    locale.itinerary &&
    typeof locale.itinerary === "object" &&
    !Array.isArray(locale.itinerary)
  ) {
    const flat: string[] = [];
    for (const [day, activities] of Object.entries(locale.itinerary)) {
      for (const activity of activities as string[]) flat.push(`${day} - ${activity}`);
    }
    ordered.itinerary = flat;
  } else {
    ordered.itinerary = locale.itinerary;
  }
  ordered.includes = locale.includes;
  ordered.excludes = locale.excludes;
  if (pkg.boatName) ordered.boatName = pkg.boatName;
  if (pkg.boatType) ordered.boatType = pkg.boatType;
  if (pkg.boatCapacity) ordered.boatCapacity = pkg.boatCapacity;
  if (locale.boatSpecs) ordered.boatSpecs = locale.boatSpecs;
  else if (pkg.boatSpecs) ordered.boatSpecs = pkg.boatSpecs;
  if (locale.cabins) ordered.cabins = locale.cabins;
  else if (pkg.cabins) ordered.cabins = pkg.cabins;
  if (pkg.priceList) {
    ordered.priceList = normalizePackagePriceList(pkg.priceList);
    if (locale.priceListLabels) ordered.priceListLabels = locale.priceListLabels;
  }
  if (locale.additionalServices)
    ordered.additionalServices = locale.additionalServices;
  if (locale.dontForgetToBring)
    ordered.dontForgetToBring = locale.dontForgetToBring;
  if (locale.termsAndConditions)
    ordered.termsAndConditions = locale.termsAndConditions;
  return ordered;
}

export function getTourPackagesData() {
  const entries: ReturnType<typeof normalizePackageLocale>[] = [];
  const dirs = fs.readdirSync(PACKAGES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory());

  for (const dirent of dirs) {
    const slug = dirent.name;
    const mainPath = path.join(PACKAGES_DIR, slug, "main.json");
    const localesPath = path.join(PACKAGES_DIR, slug, "locales.json");
    if (!fs.existsSync(mainPath) || !fs.existsSync(localesPath)) continue;

    const pkg = {
      ...readJson(mainPath),
      slug,
      locales: readJson(localesPath),
    };

    for (const locale of LOCALES) {
      if (!pkg.locales[locale]) continue;
      entries.push(normalizePackageLocale(pkg, locale));
    }
  }
  return entries;
}

function loadTypedCollection(type: string) {
  const dir = path.join(process.cwd(), "data", type);
  if (!fs.existsSync(dir)) return [];

  const items: Record<string, unknown>[] = [];
  for (const dirent of fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory())) {
    const slug = dirent.name;
    const mainPath = path.join(dir, slug, "main.json");
    const localesPath = path.join(dir, slug, "locales.json");
    if (!fs.existsSync(mainPath) || !fs.existsSync(localesPath)) continue;

    const main = readJson(mainPath);
    const locales = readJson(localesPath);

    for (const locale of LOCALES) {
      const localeData = locales[locale];
      if (!localeData) continue;

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

export function getAccommodationsData() {
  return loadTypedCollection("accommodations");
}

export function getCarRentalData() {
  return loadTypedCollection("car-rental");
}

export function getDestinationsData() {
  return loadTypedCollection("destinations");
}
