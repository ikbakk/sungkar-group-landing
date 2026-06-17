import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const yaml = require("yaml");

const CONTENT_DIRS = ["./src/content/blog", "./src/content/guides"];
const ASSETS_DIR = "./src/assets";

function findMdxFiles(dirs) {
  const files = [];
  for (const dir of dirs) {
    if (!existsSync(dir)) continue;
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
  }
  return files;
}

function parseFrontmatter(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  try {
    return yaml.parse(match[1]);
  } catch {
    return null;
  }
}

function resolveImagePath(imagePath) {
  if (!imagePath) return null;
  const clean = imagePath.replace(/^(\.\/)?src\//, "");

  for (const prefix of ["", "../", "../../"]) {
    const candidate = join(ASSETS_DIR, prefix, clean);
    if (existsSync(candidate)) return candidate;

    const withExtension = (ext) => {
      const p = candidate + ext;
      return existsSync(p) ? p : null;
    };

    const png = withExtension(".png");
    if (png) return png;
    const webp = withExtension(".webp");
    if (webp) return webp;
    const jpg = withExtension(".jpg");
    if (jpg) return jpg;
    const jpeg = withExtension(".jpeg");
    if (jpeg) return jpeg;
  }

  return null;
}

const IMAGE_FIELDS = ["featuredImage", "image"];

let missing = 0;

for (const file of findMdxFiles(CONTENT_DIRS)) {
  const fm = parseFrontmatter(file);
  if (!fm) continue;

  for (const field of IMAGE_FIELDS) {
    const val = fm[field];
    if (!val) continue;

    const resolved = resolveImagePath(val);
    if (!resolved) {
      console.log(`MISSING: ${file}: ${field} = "${val}" — file not found in assets`);
      missing++;
    }
  }
}

if (missing === 0) {
  console.log("All referenced images exist. ✓");
}
console.log(`\nSummary: ${missing} missing image(s)`);
process.exit(missing > 0 ? 1 : 0);
