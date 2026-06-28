#!/usr/bin/env node

/**
 * Generate barrel files for package images in src/assets/images/packages/
 * Run this script whenever new package images are added.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packagesDir = path.join(__dirname, "../src/assets/images/packages");

function walkDir(dir, relativePath = "") {
  const items = [];
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const relPath = relativePath ? `${relativePath}/${entry}` : entry;
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      items.push(...walkDir(fullPath, relPath));
    } else if (/\.(webp|jpg|jpeg|png|gif)$/i.test(entry)) {
      items.push({ relPath, fullPath });
    }
  }

  return items;
}

function pathToExportName(relativePath) {
  return relativePath
    .replace(/\//g, "_")
    .replace(/\./g, "_")
    .replace(/-/g, "_");
}

// Get all package directories
const packages = fs.readdirSync(packagesDir).filter((f) => {
  const fullPath = path.join(packagesDir, f);
  return fs.statSync(fullPath).isDirectory();
});

console.log(`Found ${packages.length} packages`);

// Generate barrel file for each package
for (const pkg of packages) {
  const pkgDir = path.join(packagesDir, pkg);
  const files = walkDir(pkgDir);

  if (files.length === 0) {
    console.log(`Skipping ${pkg}: no images found`);
    continue;
  }

  const barrelContent = files
    .map((f) => {
      const exportName = pathToExportName(f.relPath);
      return `export { default as ${exportName} } from "./${f.relPath}";`;
    })
    .join("\n");

  const barrelPath = path.join(pkgDir, "index.ts");
  fs.writeFileSync(barrelPath, barrelContent);
  console.log(`Created barrel for ${pkg}: ${files.length} images`);
}

// Generate main packages barrel file
const imports = packages
  .filter((pkg) => fs.existsSync(path.join(packagesDir, pkg, "index.ts")))
  .map((pkg) => {
    const exportName = pkg.replace(/-/g, "_");
    return `import * as ${exportName} from "./${pkg}";`;
  });

const exports = packages
  .filter((pkg) => fs.existsSync(path.join(packagesDir, pkg, "index.ts")))
  .map((pkg) => {
    const exportName = pkg.replace(/-/g, "_");
    return `export { ${exportName} };`;
  });

const mainBarrelContent = `// Auto-generated barrel file for package images
${imports.join("\n")}

${exports.join("\n")}
`;

fs.writeFileSync(path.join(packagesDir, "index.ts"), mainBarrelContent);
console.log(`\nCreated main packages barrel with ${imports.length} packages`);
