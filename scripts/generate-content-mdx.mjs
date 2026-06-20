#!/usr/bin/env node
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from "node:fs";
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

function generateMdx(contentType, contentDir, entry, locale) {
  const localeData = entry.locales[locale];
  if (!localeData) return;

  const slug = entry.slug;
  const dirPath = join(contentDir, slug);
  mkdirSync(dirPath, { recursive: true });

  let frontmatter;
  switch (contentType) {
    case "accommodations":
      frontmatter = {
        slug,
        name: localeData.name,
        region: entry.region,
        perks: localeData.perks,
        regionalHighlights: localeData.regionalHighlights,
        description: localeData.description,
        image: entry.image,
      };
      break;
    case "car-rental":
      frontmatter = {
        slug,
        name: localeData.name,
        region: entry.region,
        pricePerDay: entry.pricePerDay,
        seats: entry.seats,
        transmission: entry.transmission,
        features: localeData.features,
        bestFor: localeData.bestFor,
        description: localeData.description,
        imageTop: entry.imageTop,
        imageBottom: entry.imageBottom,
      };
      break;
    case "destinations":
      frontmatter = {
        title: localeData.title,
        region: localeData.region,
        image: entry.image,
        gallery: entry.gallery,
        summary: localeData.summary,
        thingsToDo: localeData.thingsToDo,
        packages: localeData.packages,
      };
      break;
    default:
      console.warn(`  Unknown content type: ${contentType}`);
      return;
  }

  const yaml = toFrontmatterYaml(frontmatter);
  const mdx = `---\n${yaml}---\n`;

  const filePath = join(dirPath, `${locale}.mdx`);
  writeFileSync(filePath, mdx, "utf-8");
  console.log(`  Created: ${filePath.replace(process.cwd(), ".")}`);
}

const CONTENT_TYPES = ["accommodations", "car-rental", "destinations"];

function main() {
  if (!existsSync(DATA_DIR)) {
    console.error("No data directory found at", DATA_DIR);
    process.exit(1);
  }

  let total = 0;

  for (const type of CONTENT_TYPES) {
    const typeDir = join(DATA_DIR, type);
    if (!existsSync(typeDir)) {
      console.log(`\nSkipping ${type}/ (not found)`);
      continue;
    }

    const itemDirs = readdirSync(typeDir, { withFileTypes: true }).filter((d) =>
      d.isDirectory(),
    );

    if (itemDirs.length === 0) {
      console.log(`\nNo entries found in ${type}/`);
      continue;
    }

    console.log(`\nProcessing: ${type}/`);

    for (const dir of itemDirs) {
      const slug = dir.name;
      const mainPath = join(typeDir, slug, "main.json");
      const localesPath = join(typeDir, slug, "locales.json");

      if (!existsSync(mainPath) || !existsSync(localesPath)) {
        console.warn(`  Skipping ${slug}: missing main.json or locales.json`);
        continue;
      }

      const main = JSON.parse(readFileSync(mainPath, "utf-8"));
      const locales = JSON.parse(readFileSync(localesPath, "utf-8"));
      const entry = { ...main, locales };

      const contentDir = join(CONTENT_DIR, type);
      mkdirSync(contentDir, { recursive: true });

      for (const locale of LOCALES) {
        generateMdx(type, contentDir, entry, locale);
        total++;
      }
    }
  }

  console.log(`\nDone! Generated ${total} files.`);
}

main();
