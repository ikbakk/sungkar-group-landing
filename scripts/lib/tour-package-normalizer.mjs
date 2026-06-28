import { normalizePackagePriceList } from "./package-localization.mjs";

export function normalizePackageLocale(pkg, localeKey) {
  const locale = { ...pkg.locales[localeKey], localeKey };
  const ordered = {};
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
    const flat = [];
    for (const [day, activities] of Object.entries(locale.itinerary)) {
      for (const activity of activities) flat.push(`${day} - ${activity}`);
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

export function toPackageFrontmatter(pkg, localeKey) {
  const normalized = normalizePackageLocale(pkg, localeKey);
  const { slug, locale, ...frontmatter } = normalized;
  return frontmatter;
}
