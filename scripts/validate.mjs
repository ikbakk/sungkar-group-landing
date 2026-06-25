import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import yaml from "yaml";

process.removeAllListeners("deprecation");

const BLOG_DIR = "./src/content/blog";
const GUIDES_DIR = "./src/content/guides";

const REQUIRED_BLOG = [
  "title",
  "description",
  "publishDate",
  "tags",
  "readingTime",
];
const REQUIRED_GUIDES = [
  "title",
  "description",
  "region",
  "readingTime",
  "keyTakeaways",
  "bestFor",
  "relatedDestinations",
  "relatedPackages",
  "publishDate",
];
const VALID_REGIONS = ["lombok", "sumbawa", "labuan-bajo", "general"];
const TITLE_MIN = 10;
const TITLE_MAX = 70;
const DESCRIPTION_MIN = 50;
const DESCRIPTION_MAX = 160;

function findMdxFiles(dir) {
  const files = [];
  if (!existsSync(dir)) return files;

  function walk(path) {
    for (const entry of readdirSync(path)) {
      const full = join(path, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
      } else if (extname(full) === ".mdx" || extname(full) === ".md") {
        files.push(full);
      }
    }
  }

  walk(dir);
  return files;
}

function parseFrontmatter(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return { frontmatter: {}, error: "No frontmatter found" };
  }
  try {
    return { frontmatter: yaml.parse(match[1]), error: null };
  } catch (e) {
    return { frontmatter: {}, error: `YAML parse error: ${e.message}` };
  }
}

let errors = 0;
let warnings = 0;

function report(type, file, msg) {
  console.log(`${type}: ${file}: ${msg}`);
  if (type === "ERROR") errors++;
  else warnings++;
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function validateRequiredFields(frontmatter, fields, shortPath) {
  for (const field of fields) {
    if (frontmatter[field] === undefined || frontmatter[field] === null) {
      report("ERROR", shortPath, `Missing required field: ${field}`);
    }
  }
}

function validateSeoFields(frontmatter, shortPath) {
  const { title, description } = frontmatter;

  if (!isNonEmptyString(title)) {
    report("ERROR", shortPath, "title must be a non-empty string");
  } else {
    const normalizedTitle = normalizeText(title);
    if (normalizedTitle.length < TITLE_MIN) {
      report(
        "WARN",
        shortPath,
        `title is very short (${normalizedTitle.length} chars). Aim for ${TITLE_MIN}-${TITLE_MAX}`,
      );
    }
    if (normalizedTitle.length > TITLE_MAX) {
      report(
        "WARN",
        shortPath,
        `title is long (${normalizedTitle.length} chars). Aim for ${TITLE_MIN}-${TITLE_MAX}`,
      );
    }
  }

  if (!isNonEmptyString(description)) {
    report("ERROR", shortPath, "description must be a non-empty string");
  } else {
    const normalizedDescription = normalizeText(description);
    if (normalizedDescription.length < DESCRIPTION_MIN) {
      report(
        "WARN",
        shortPath,
        `description is short (${normalizedDescription.length} chars). Aim for ${DESCRIPTION_MIN}-${DESCRIPTION_MAX}`,
      );
    }
    if (normalizedDescription.length > DESCRIPTION_MAX) {
      report(
        "WARN",
        shortPath,
        `description is long (${normalizedDescription.length} chars). Aim for ${DESCRIPTION_MIN}-${DESCRIPTION_MAX}`,
      );
    }
    if (
      isNonEmptyString(title) &&
      normalizeText(title).toLowerCase() === normalizedDescription.toLowerCase()
    ) {
      report("WARN", shortPath, "title and description are identical");
    }
  }
}

function validateDate(fieldName, value, shortPath) {
  if (value && Number.isNaN(new Date(value).getTime())) {
    report("ERROR", shortPath, `Invalid date in ${fieldName}: ${value}`);
  }
}

function validateStringArray(fieldName, value, shortPath, { min = 0 } = {}) {
  if (!Array.isArray(value)) {
    report("ERROR", shortPath, `${fieldName} must be an array`);
    return;
  }

  if (value.length < min) {
    report("ERROR", shortPath, `${fieldName} must contain at least ${min} item(s)`);
  }

  for (const [index, item] of value.entries()) {
    if (!isNonEmptyString(item)) {
      report(
        "ERROR",
        shortPath,
        `${fieldName}[${index}] must be a non-empty string`,
      );
    }
  }
}

function validateReadingTime(value, shortPath) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    report("ERROR", shortPath, "readingTime must be a number");
    return;
  }

  if (value <= 0) {
    report("ERROR", shortPath, "readingTime must be greater than 0");
  }
}

for (const file of findMdxFiles(BLOG_DIR)) {
  const { frontmatter, error } = parseFrontmatter(file);
  if (error) {
    report("ERROR", file, error);
    continue;
  }
  const shortPath = file.replace(BLOG_DIR, "blog");

  validateRequiredFields(frontmatter, REQUIRED_BLOG, shortPath);
  validateSeoFields(frontmatter, shortPath);
  validateDate("publishDate", frontmatter.publishDate, shortPath);

  if (frontmatter.tags !== undefined) {
    validateStringArray("tags", frontmatter.tags, shortPath, { min: 1 });
  }

  if (frontmatter.readingTime !== undefined) {
    validateReadingTime(frontmatter.readingTime, shortPath);
  }

  if (
    frontmatter.author !== undefined &&
    frontmatter.author !== null &&
    !isNonEmptyString(frontmatter.author)
  ) {
    report("ERROR", shortPath, "author must be a non-empty string when set");
  }

  for (const optionalArrayField of ["relatedDestinations", "relatedPackages"]) {
    if (frontmatter[optionalArrayField] !== undefined) {
      validateStringArray(optionalArrayField, frontmatter[optionalArrayField], shortPath);
    }
  }
}

for (const file of findMdxFiles(GUIDES_DIR)) {
  const { frontmatter, error } = parseFrontmatter(file);
  if (error) {
    report("ERROR", file, error);
    continue;
  }
  const shortPath = file.replace(GUIDES_DIR, "guides");

  validateRequiredFields(frontmatter, REQUIRED_GUIDES, shortPath);
  validateSeoFields(frontmatter, shortPath);
  validateDate("publishDate", frontmatter.publishDate, shortPath);

  if (frontmatter.region && !VALID_REGIONS.includes(frontmatter.region)) {
    report(
      "ERROR",
      shortPath,
      `Invalid region: "${frontmatter.region}". Must be one of: ${VALID_REGIONS.join(", ")}`,
    );
  }

  for (const arrField of [
    "keyTakeaways",
    "bestFor",
    "relatedDestinations",
    "relatedPackages",
  ]) {
    if (frontmatter[arrField] !== undefined) {
      validateStringArray(arrField, frontmatter[arrField], shortPath, { min: 1 });
    }
  }

  if (frontmatter.readingTime !== undefined) {
    validateReadingTime(frontmatter.readingTime, shortPath);
  }

  if (
    frontmatter.featuredImage !== undefined &&
    frontmatter.featuredImage !== null &&
    !isNonEmptyString(frontmatter.featuredImage)
  ) {
    report(
      "ERROR",
      shortPath,
      "featuredImage must be a non-empty string when set",
    );
  }
}

console.log(`\nSummary: ${errors} errors, ${warnings} warnings`);
process.exit(errors > 0 ? 1 : 0);
