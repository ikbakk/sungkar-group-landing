#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "scripts", "data");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

const localeString = z.string().trim().min(1);
const localeArray = z.array(localeString);
const itinerarySchema = z.union([
  z.array(localeString).min(1),
  z.record(z.string().min(1), z.array(localeString).min(1)),
]);

const packageMainSchema = z.object({
  region: localeString,
  collectionSlug: localeString,
  images: z.array(localeString).min(1),
  featured: z.boolean().optional(),
  boatName: localeString.optional(),
  boatType: localeString.optional(),
  boatCapacity: z.number().optional(),
  boatSpecs: z
    .array(z.object({ label: localeString, value: localeString }))
    .optional(),
  cabins: z.array(z.record(z.string(), z.unknown())).optional(),
  priceList: z.record(z.string(), z.record(z.string(), z.number())).optional(),
  priceListType: localeString.optional(),
});

const packageLocaleSchema = z
  .object({
    title: localeString,
    collectionTitle: localeString,
    category: localeString,
    duration: localeString.optional(),
    durationOptions: localeArray.optional(),
    summary: localeString,
    highlights: localeArray.min(1),
    itinerary: itinerarySchema,
    includes: localeArray,
    excludes: localeArray,
    additionalServices: localeArray.optional(),
    dontForgetToBring: localeArray.optional(),
    termsAndConditions: localeArray.optional(),
    boatSpecs: z.array(z.object({ label: localeString, value: localeString })).optional(),
    cabins: z.array(z.record(z.string(), z.unknown())).optional(),
    priceListLabels: z.record(z.string(), localeString).optional(),
  })
  .superRefine((value, ctx) => {
    if (!value.duration && !value.durationOptions) {
      ctx.addIssue({
        code: "custom",
        path: ["duration"],
        message: "Either duration or durationOptions is required",
      });
    }
  });

const accommodationMainSchema = z.object({
  region: localeString,
  image: localeString,
});
const accommodationLocaleSchema = z.object({
  name: localeString,
  perks: localeArray,
  regionalHighlights: localeArray,
  description: localeString,
});

const carRentalMainSchema = z.object({
  region: localeString,
  pricePerDay: localeString,
  seats: z.number().int().positive(),
  transmission: z.enum(["Manual", "Automatic"]),
  imageTop: localeString,
  imageBottom: localeString,
});
const carRentalLocaleSchema = z.object({
  name: localeString,
  features: localeArray,
  bestFor: localeArray,
  description: localeString,
});

const destinationMainSchema = z.object({
  image: localeString,
  gallery: localeArray,
});
const destinationLocaleSchema = z.object({
  title: localeString,
  region: localeString,
  summary: localeString,
  thingsToDo: localeArray,
  packages: localeArray,
});

const COLLECTIONS = [
  {
    type: "packages",
    mainSchema: packageMainSchema,
    localeSchema: packageLocaleSchema,
  },
  {
    type: "accommodations",
    mainSchema: accommodationMainSchema,
    localeSchema: accommodationLocaleSchema,
  },
  {
    type: "car-rental",
    mainSchema: carRentalMainSchema,
    localeSchema: carRentalLocaleSchema,
  },
  {
    type: "destinations",
    mainSchema: destinationMainSchema,
    localeSchema: destinationLocaleSchema,
  },
];

let errors = 0;

function fail(message) {
  console.error(`ERROR: ${message}`);
  errors += 1;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function formatIssues(prefix, issues) {
  for (const issue of issues) {
    const pathLabel = issue.path.length > 0 ? issue.path.join(".") : "root";
    fail(`${prefix}: ${pathLabel}: ${issue.message}`);
  }
}

for (const { type, mainSchema, localeSchema } of COLLECTIONS) {
  const typeDir = path.join(DATA_DIR, type);
  if (!fs.existsSync(typeDir)) continue;

  for (const entry of fs.readdirSync(typeDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const slugDir = path.join(typeDir, slug);
    const mainPath = path.join(slugDir, "main.json");
    const localesPath = path.join(slugDir, "locales.json");

    if (!fs.existsSync(mainPath)) {
      fail(`${type}/${slug}: missing main.json`);
      continue;
    }
    if (!fs.existsSync(localesPath)) {
      fail(`${type}/${slug}: missing locales.json`);
      continue;
    }

    let main;
    let locales;
    try {
      main = readJson(mainPath);
    } catch (error) {
      fail(`${type}/${slug}: failed to parse main.json: ${error.message}`);
      continue;
    }
    try {
      locales = readJson(localesPath);
    } catch (error) {
      fail(`${type}/${slug}: failed to parse locales.json: ${error.message}`);
      continue;
    }

    const mainResult = mainSchema.safeParse(main);
    if (!mainResult.success) {
      formatIssues(`${type}/${slug}/main.json`, mainResult.error.issues);
    }

    for (const locale of LOCALES) {
      if (!(locale in locales)) {
        fail(`${type}/${slug}/locales.json: missing locale block '${locale}'`);
        continue;
      }
      const localeResult = localeSchema.safeParse(locales[locale]);
      if (!localeResult.success) {
        formatIssues(
          `${type}/${slug}/locales.json#${locale}`,
          localeResult.error.issues,
        );
      }
    }
  }
}

if (errors > 0) {
  console.error(
    `\nStructured content validation failed with ${errors} error(s).`,
  );
  process.exit(1);
}

console.log("Structured content validation passed.");
