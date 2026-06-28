#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { normalizePackageLocale } from "../lib/tour-package-normalizer.mjs";

const ROOT = process.cwd();
const PACKAGES_DIR = path.join(ROOT, "scripts", "data", "packages");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

const packages = fs
  .readdirSync(PACKAGES_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const slug = entry.name;
    return {
      ...JSON.parse(
        fs.readFileSync(path.join(PACKAGES_DIR, slug, "main.json"), "utf8"),
      ),
      slug,
      locales: JSON.parse(
        fs.readFileSync(path.join(PACKAGES_DIR, slug, "locales.json"), "utf8"),
      ),
    };
  });

const normalized = [];
for (const pkg of packages) {
  for (const locale of LOCALES) {
    normalized.push(normalizePackageLocale(pkg, locale));
  }
}

const counts = Object.fromEntries(
  LOCALES.map((locale) => [
    locale,
    normalized.filter((item) => item.locale === locale).length,
  ]),
);

console.log(
  JSON.stringify(
    {
      packageCount: packages.length,
      normalizedCount: normalized.length,
      localeCounts: counts,
      sampleKeys: Object.keys(normalized[0] || {}),
    },
    null,
    2,
  ),
);
