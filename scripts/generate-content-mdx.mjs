import { mkdirSync, writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const ROOT = join(__dirname, "..", "src/content");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

const CONTENT_MAP = {
  "accommodations.json": { type: "accommodations", rootFields: ["slug", "region", "image"], localeFields: ["name", "perks", "regionalHighlights", "description"] },
  "car-rental.json": { type: "car-rental", rootFields: ["slug", "region", "pricePerDay", "seats", "transmission", "imageTop", "imageBottom"], localeFields: ["name", "features", "bestFor", "description"] },
};

for (const [filename, config] of Object.entries(CONTENT_MAP)) {
  console.log(`\nProcessing ${filename}...`);
  const data = JSON.parse(readFileSync(join(DATA_DIR, filename), "utf-8"));
  const outDir = join(ROOT, config.type);
  let count = 0;

  for (const entry of data) {
    for (const locale of LOCALES) {
      const ordered = {};
      const loc = locale === "id" ? "id" : locale;

      // locale-specific fields first
      for (const key of config.localeFields) {
        ordered[key] = entry.locales[locale][key];
      }

      // root-level shared fields
      for (const key of config.rootFields) {
        if (entry[key] !== undefined) ordered[key] = entry[key];
      }

      const slugDir = join(outDir, entry.slug);
      mkdirSync(slugDir, { recursive: true });
      const path = join(slugDir, `${loc}.mdx`);
      const y = yaml.stringify(ordered, { lineWidth: 0, quotingType: '"' });
      writeFileSync(path, "---\n" + y + "\n---\n");
      count++;
      console.log(`  OK ${entry.slug}/${loc}.mdx`);
    }
  }
  console.log(`  → ${count} files written`);
}

console.log("\nDone.");
