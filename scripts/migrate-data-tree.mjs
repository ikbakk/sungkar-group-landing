#!/usr/bin/env node
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  rmSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");

const EXCLUDED = new Set([
  "accommodations.json",
  "car-rental.json",
  "destinations.json",
]);

const TYPE_MAP = {
  "accommodations.json": "accommodations",
  "car-rental.json": "car-rental",
  "destinations.json": "destinations",
};

// Collect all flat JSON files
const files = readdirSync(DATA_DIR).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const filePath = join(DATA_DIR, file);
  const raw = readFileSync(filePath, "utf-8");
  const entries = JSON.parse(raw);

  // Determine content type
  let typeDir;
  if (EXCLUDED.has(file)) {
    typeDir = TYPE_MAP[file];
  } else {
    typeDir = "packages";
  }

  for (const entry of entries) {
    const slug = entry.slug;
    if (!slug) {
      console.warn(`  Skipping entry with no slug in ${file}`);
      continue;
    }

    const dir = join(DATA_DIR, typeDir, slug);
    mkdirSync(dir, { recursive: true });

    // Extract locales, write as locales.json
    const { locales, ...shared } = entry;
    writeFileSync(
      join(dir, "main.json"),
      JSON.stringify(shared, null, 2) + "\n",
      "utf-8",
    );
    writeFileSync(
      join(dir, "locales.json"),
      JSON.stringify(locales, null, 2) + "\n",
      "utf-8",
    );

    console.log(`  ${typeDir}/${slug}/  OK`);
  }
}

// Delete old flat files
for (const file of files) {
  const filePath = join(DATA_DIR, file);
  rmSync(filePath);
  console.log(`  Deleted: ${file}`);
}

console.log("\nMigration complete.");
