#!/usr/bin/env node

/**
 * Usage: npm run add:region -- <kebab-case-region-name>
 *
 * Example: npm run add:region -- sailing-labuan-bajo
 *
 * Adds a new region to every file in the codebase that has
 * a hardcoded region enum/array. For index pages with tabs
 * and region-specific UI, it prints instructions for manual
 * changes at the end.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";

const newRegion = process.argv[2];
if (!newRegion) {
  console.error("Usage: npm run add:region -- <kebab-case-region-name>");
  console.error("Example: npm run add:region -- sailing-labuan-bajo");
  process.exit(1);
}

const camelKey = newRegion.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const label = newRegion
  .split("-")
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ");
const upperConst = newRegion.replace(/-/g, "_").toUpperCase();

const ORANGE_CLASS = "bg-amber-600 text-white border-amber-600";
const ORANGE_BG_CLASS = "bg-amber-100 text-amber-800";

console.log(`\n=== Adding region: ${newRegion} ===`);
console.log(`  Label:      ${label}`);
console.log(`  Camel key:  ${camelKey}`);
console.log(`  Constant:   ${upperConst}\n`);

const manual = [];

function patch(filePath, pattern, replacement) {
  if (!existsSync(filePath)) return false;
  let content = readFileSync(filePath, "utf-8");
  const before = content;
  content = content.replace(pattern, replacement);
  if (content === before) {
    manual.push(`  ${filePath} — pattern not found, check manually`);
    return false;
  }
  writeFileSync(filePath, content);
  console.log(`  ✓ ${filePath}`);
  return true;
}

function patchAll(filePath, pattern, replacement) {
  if (!existsSync(filePath)) return false;
  let content = readFileSync(filePath, "utf-8");
  const before = content;
  content = content.replace(pattern, replacement);
  if (content === before) {
    console.warn(`  ⚠ ${filePath} — no matches found (might be fine)`);
    return false;
  }
  writeFileSync(filePath, content);
  console.log(`  ✓ ${filePath}`);
  return true;
}

// ─── 1. Constants —──────────────────────────────────────────────────────
patch(
  "src/lib/constants/regions.ts",
  /(LABUAN_BAJO: "labuan-bajo" as const,)/,
  `  ${upperConst}: "${newRegion}" as const,\n  $1`,
);
patch(
  "src/lib/constants/regions.ts",
  /(\[REGIONS\.LABUAN_BAJO\]: \{)/,
  `[REGIONS.${upperConst}]: {\n    label: "${label}",\n    className: "${ORANGE_BG_CLASS}",\n  },\n  $1`,
);

// ─── 2. src/lib/regions.ts —──────────────────────────────────────────────
patch(
  "src/lib/regions.ts",
  /"lombok" \| "sumbawa" \| "labuan-bajo"/,
  `"lombok" | "sumbawa" | "labuan-bajo" | "${newRegion}"`,
);
patch(
  "src/lib/regions.ts",
  /\["lombok", "sumbawa", "labuan-bajo"\];/,
  `["lombok", "sumbawa", "labuan-bajo", "${newRegion}"];`,
);
patch(
  "src/lib/regions.ts",
  /("labuan-bajo": \{\s+label: "Labuan Bajo",\s+className: "[^"]+",\s+\},)/,
  `"${newRegion}": {\n    label: "${label}",\n    className: "${ORANGE_CLASS}",\n  },\n  $1`,
);
patch(
  "src/lib/regions.ts",
  /("labuan-bajo": "Labuan Bajo",)/,
  `"${newRegion}": "${label}",\n  $1`,
);
patch(
  "src/lib/regions.ts",
  /("labuan-bajo": "labuanBajo",)/,
  `"${newRegion}": "${camelKey}",\n  $1`,
);

// ─── 3. Locale region files —─────────────────────────────────────────────
const localeLabels = {
  en: label,
  ms: `Pelayaran ${label}`,
  ar: `الإبحار في ${label}`,
  zh: `${label}帆船`,
};

for (const locale of ["en", "ms", "ar", "zh"]) {
  const fp = `src/lib/i18n/${locale}/regions.ts`;
  if (!existsSync(fp)) continue;
  const localeLabel = localeLabels[locale] || label;

  patch(
    fp,
    /"lombok" \| "sumbawa" \| "labuan-bajo"/,
    `"lombok" | "sumbawa" | "labuan-bajo" | "${newRegion}"`,
  );
  patch(
    fp,
    /\["lombok", "sumbawa", "labuan-bajo"\];/,
    `["lombok", "sumbawa", "labuan-bajo", "${newRegion}"];`,
  );
  patch(
    fp,
    /("labuan-bajo": \{\s+label: "[^"]+",\s+className: "[^"]+",\s+\},)/,
    `"${newRegion}": {\n    label: "${localeLabel}",\n    className: "${ORANGE_BG_CLASS}",\n  },\n  $1`,
  );
  patch(
    fp,
    /("labuan-bajo": "[\w ]+",)/,
    `"${newRegion}": "${localeLabel}",\n  $1`,
  );
  patch(
    fp,
    /("labuan-bajo": "\w+",)$/m,
    `"${newRegion}": "${camelKey}",\n  $1`,
  );
}

// ─── 4. content.config.ts (4 enum declarations) —────────────────────────
{
  const fp = "src/content.config.ts";
  let c = readFileSync(fp, "utf-8");
  const before = c;
  c = c.replace(
    /z\.enum\(\["lombok", "sumbawa", "labuan-bajo"(, "general")?\]\)/g,
    (_m, general) => {
      const vals = [`"lombok"`, `"sumbawa"`, `"labuan-bajo"`, `"${newRegion}"`];
      if (general) vals.push(`"general"`);
      return `z.enum([${vals.join(", ")}])`;
    },
  );
  if (c !== before) {
    writeFileSync(fp, c);
    console.log(`  ✓ ${fp}`);
  } else {
    manual.push(`  ${fp} — z.enum patterns not found`);
  }
}

// ─── 5. Type / collection files —─────────────────────────────────────────
for (const fp of [
  "src/lib/content/tourPackages/types.ts",
  "src/lib/content/tourPackages/collection.ts",
  "src/lib/content/accommodations/collection.ts",
  "src/lib/content/car-rental/collection.ts",
  "src/lib/content/guides/loader.ts",
]) {
  patchAll(
    fp,
    /"lombok" \| "sumbawa" \| "labuan-bajo"/g,
    `"lombok" | "sumbawa" | "labuan-bajo" | "${newRegion}"`,
  );
}

// ─── 6. Page getStaticPaths arrays —─────────────────────────────────────
// Skip sewa/car-rental: they use the REGIONS constant dynamically
for (const fp of [
  "src/pages/paket-wisata/[region]/index.astro",
  "src/pages/[locale]/tour-packages/[region]/index.astro",
  "src/pages/akomodasi/[slug].astro",
  "src/pages/[locale]/accommodations/[slug].astro",
]) {
  if (!existsSync(fp)) continue;
  patch(
    fp,
    /\["lombok", "sumbawa", "labuan-bajo"\];/,
    `["lombok", "sumbawa", "labuan-bajo", "${newRegion}"];`,
  );
}

// ─── 7. Guide pages —─────────────────────────────────────────────────────
for (const fp of [
  "src/pages/panduan-wisata/index.astro",
  "src/pages/[locale]/travel-guides/index.astro",
]) {
  patch(
    fp,
    /\["lombok", "sumbawa", "labuan-bajo", "general"\]/,
    `["lombok", "sumbawa", "labuan-bajo", "${newRegion}", "general"]`,
  );
}

// ─── 8. Navigation data —─────────────────────────────────────────────────
for (const fp of [
  "src/lib/i18n/en/navigationData.ts",
  "src/lib/i18n/ms/navigationData.ts",
  "src/lib/i18n/ar/navigationData.ts",
  "src/lib/i18n/zh/navigationData.ts",
  "src/lib/content/navigationData.ts",
]) {
  if (!existsSync(fp)) continue;
  patchAll(
    fp,
    /"lombok" \| "sumbawa" \| "labuan-bajo"/g,
    `"lombok" | "sumbawa" | "labuan-bajo" | "${newRegion}"`,
  );
}

// ─── 9. i18n page data files —────────────────────────────────────────────
for (const fp of [
  "src/lib/i18n/en/packagePage.ts",
  "src/lib/i18n/id/packagePage.ts",
  "src/lib/i18n/ms/packagePage.ts",
  "src/lib/i18n/ar/packagePage.ts",
  "src/lib/i18n/zh/packagePage.ts",
  "src/lib/i18n/en/sewaPage.ts",
  "src/lib/i18n/id/sewaPage.ts",
  "src/lib/i18n/ms/sewaPage.ts",
  "src/lib/i18n/ar/sewaPage.ts",
  "src/lib/i18n/zh/sewaPage.ts",
  "src/lib/i18n/en/accommodationPage.ts",
  "src/lib/i18n/id/accommodationPage.ts",
  "src/lib/i18n/ms/accommodationPage.ts",
  "src/lib/i18n/ar/accommodationPage.ts",
  "src/lib/i18n/zh/accommodationPage.ts",
]) {
  if (!existsSync(fp)) continue;
  patch(
    fp,
    /("labuan-bajo": \{)/,
    `"${newRegion}": {\n    title: "${label}",\n    description: "",\n  },\n  $1`,
  );
}

// ─── Print summary —─────────────────────────────────────────────────────
console.log("\n=== Summary ===");
if (manual.length === 0) {
  console.log("✅ All automated changes applied.");
} else {
  console.log("✅ Automated changes applied.");
  console.log("\n⚠️  Manual changes needed:");
  for (const m of manual) console.log(m);
}

console.log(`
────────────────────────────────────────────
Manual steps required after this script:

1. Index pages (add tabs for the new region):
   - src/pages/paket-wisata/index.astro
   - src/pages/[locale]/tour-packages/index.astro
   - src/pages/akomodasi/index.astro
   - src/pages/[locale]/accommodations/index.astro
   - src/pages/sewa-mobil/index.astro
   - src/pages/[locale]/car-rental/index.astro

   For each: add a filter, a tab button, and a tab panel
   following the existing "labuan-bajo" pattern.

2. Navigation data files:
   - Add region filtering in createPackageCollections()
     calls inside src/lib/i18n/*/navigationData.ts

3. Fill in description text for the new region in:
   - src/lib/i18n/*/packagePage.ts
   - src/lib/i18n/*/sewaPage.ts (if applicable)
   - src/lib/i18n/*/accommodationPage.ts

4. Run: npm run build
`);
