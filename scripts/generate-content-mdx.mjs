import { mkdirSync, writeFileSync, readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const ROOT = join(__dirname, "..", "src/content");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

const TYPE_CONFIG = {
  accommodations: {
    dir: "accommodations",
    rootFields: ["slug", "region", "image"],
    localeFields: ["name", "perks", "regionalHighlights", "description"],
  },
  carRental: {
    dir: "car-rental",
    rootFields: ["slug", "region", "pricePerDay", "seats", "transmission", "imageTop", "imageBottom"],
    localeFields: ["name", "features", "bestFor", "description"],
  },
};

const files = readdirSync(DATA_DIR).filter(f => f.endsWith(".json"));

let total = 0;
for (const filename of files) {
  const data = JSON.parse(readFileSync(join(DATA_DIR, filename), "utf-8"));

  for (const entry of data) {
    const type = entry._type;
    if (!type || !TYPE_CONFIG[type]) continue;

    const config = TYPE_CONFIG[type];
    const outDir = join(ROOT, config.dir);
    mkdirSync(outDir, { recursive: true });

    for (const locale of LOCALES) {
      const ordered = {};

      for (const key of config.localeFields) {
        ordered[key] = entry.locales[locale][key];
      }

      for (const key of config.rootFields) {
        if (entry[key] !== undefined) ordered[key] = entry[key];
      }

      const slugDir = join(outDir, entry.slug);
      mkdirSync(slugDir, { recursive: true });
      const path = join(slugDir, `${locale}.mdx`);
      const y = yaml.stringify(ordered, { lineWidth: 0, quotingType: '"' });
      writeFileSync(path, "---\n" + y + "\n---\n");
      total++;
    }
  }
}

console.log(`\nDone. Generated ${total} files.`);
