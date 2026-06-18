#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const CONTENT_DIR = join(__dirname, "..", "src", "content");

const LOCALES = ["id", "en", "ar", "ms", "zh"];

function toFrontmatterYaml(obj, indent = 0) {
  const pad = "  ".repeat(indent);
  let out = "";
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) continue;
    if (Array.isArray(value)) {
      if (value.length === 0) {
        out += `${pad}${key}: []\n`;
      } else {
        out += `${pad}${key}:\n`;
        for (const item of value) {
          out += `${pad}  - ${JSON.stringify(item)}\n`;
        }
      }
    } else if (typeof value === "object") {
      out += `${pad}${key}:\n${toFrontmatterYaml(value, indent + 1)}`;
    } else if (typeof value === "string") {
      if (value.includes("\n")) {
        out += `${pad}${key}: |\n`;
        for (const line of value.split("\n")) {
          out += `${pad}  ${line}\n`;
        }
      } else {
        out += `${pad}${key}: ${JSON.stringify(value)}\n`;
      }
    } else {
      out += `${pad}${key}: ${value}\n`;
    }
  }
  return out;
}

function generateMdx(contentDir, entry, locale) {
  const localeData = entry.locales[locale];
  if (!localeData) return;

  const slug = entry.slug;
  const dirPath = join(contentDir, slug);
  mkdirSync(dirPath, { recursive: true });

  const frontmatter = {
    title: localeData.title,
    region: localeData.region,
    image: entry.image,
    gallery: entry.gallery,
    summary: localeData.summary,
    thingsToDo: localeData.thingsToDo,
    packages: localeData.packages,
  };

  const yaml = toFrontmatterYaml(frontmatter);
  const mdx = `---\n${yaml}---\n`;

  const filePath = join(dirPath, `${locale}.mdx`);
  writeFileSync(filePath, mdx, "utf-8");
  console.log(`  Created: ${filePath.replace(process.cwd(), ".")}`);
}

function main() {
  if (!existsSync(DATA_DIR)) {
    console.error("No data directory found at", DATA_DIR);
    process.exit(1);
  }

  const files = readdirSync(DATA_DIR).filter((f) => f.endsWith(".json"));

  if (files.length === 0) {
    console.log("No JSON data files found in", DATA_DIR);
    return;
  }

  for (const file of files) {
    const filePath = join(DATA_DIR, file);
    console.log(`\nProcessing: ${file}`);
    const raw = readFileSync(filePath, "utf-8");
    const entries = JSON.parse(raw);

    for (const entry of entries) {
      const type = entry._type;
      if (!type) {
        console.warn(`  Skipping entry "${entry.slug}": no _type field`);
        continue;
      }

      const contentDir = join(CONTENT_DIR, type);
      mkdirSync(contentDir, { recursive: true });

      for (const locale of LOCALES) {
        generateMdx(contentDir, entry, locale);
      }
    }
  }

  console.log("\nDone!");
}

main();
