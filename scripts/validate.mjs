import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const yaml = require("yaml");

// Suppress deprecation warning
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

for (const file of findMdxFiles(BLOG_DIR)) {
  const { frontmatter, error } = parseFrontmatter(file);
  if (error) {
    report("ERROR", file, error);
    continue;
  }
  const shortPath = file.replace(BLOG_DIR, "blog");

  for (const field of REQUIRED_BLOG) {
    if (frontmatter[field] === undefined || frontmatter[field] === null) {
      report("ERROR", shortPath, `Missing required field: ${field}`);
    }
  }

  if (
    frontmatter.publishDate &&
    isNaN(new Date(frontmatter.publishDate).getTime())
  ) {
    report(
      "ERROR",
      shortPath,
      `Invalid date in publishDate: ${frontmatter.publishDate}`,
    );
  }

  if (frontmatter.tags && !Array.isArray(frontmatter.tags)) {
    report("ERROR", shortPath, `tags must be an array`);
  }

  if (
    frontmatter.readingTime !== undefined &&
    typeof frontmatter.readingTime !== "number"
  ) {
    report("ERROR", shortPath, `readingTime must be a number`);
  }
}

for (const file of findMdxFiles(GUIDES_DIR)) {
  const { frontmatter, error } = parseFrontmatter(file);
  if (error) {
    report("ERROR", file, error);
    continue;
  }
  const shortPath = file.replace(GUIDES_DIR, "guides");

  for (const field of REQUIRED_GUIDES) {
    if (frontmatter[field] === undefined || frontmatter[field] === null) {
      report("ERROR", shortPath, `Missing required field: ${field}`);
    }
  }

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
    if (
      frontmatter[arrField] !== undefined &&
      !Array.isArray(frontmatter[arrField])
    ) {
      report("ERROR", shortPath, `${arrField} must be an array`);
    }
  }

  if (
    frontmatter.readingTime !== undefined &&
    typeof frontmatter.readingTime !== "number"
  ) {
    report("ERROR", shortPath, `readingTime must be a number`);
  }
}

console.log(`\nSummary: ${errors} errors, ${warnings} warnings`);
process.exit(errors > 0 ? 1 : 0);
