#!/usr/bin/env node

/**
 * Generate a static image map for package images.
 * Produces src/generated/package-images.ts with direct imports
 * that Vite can statically analyze (no tree-shaking).
 */

import fs from "node:fs";
import path from "node:path";

const packagesDir = path.join(process.cwd(), "src/assets/images/packages");
const outputDir = path.join(process.cwd(), "src/generated");
const outputFile = path.join(outputDir, "package-images.ts");

function walkImages(dir, relativePath = "") {
  const results = [];
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const relPath = relativePath ? `${relativePath}/${entry}` : entry;
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results.push(...walkImages(fullPath, relPath));
    } else if (/\.(webp|jpg|jpeg|png|gif)$/i.test(entry)) {
      results.push({ relPath, fullPath });
    }
  }

  return results;
}

// Collect all package images
const packages = fs
  .readdirSync(packagesDir)
  .filter((f) => fs.statSync(path.join(packagesDir, f)).isDirectory());

const allImages = [];

for (const pkg of packages) {
  const pkgDir = path.join(packagesDir, pkg);
  const images = walkImages(pkgDir);

  for (const img of images) {
    const assetPath = `packages/${pkg}/${img.relPath}`;
    allImages.push({ assetPath, fullPath: img.fullPath });
  }
}

// Generate the static map file
const imports = allImages.map((img, i) => {
  // Use a stable, unique identifier
  const varName = `img_${i}`;
  const relImport = path.relative(outputDir, img.fullPath);
  return `import ${varName} from "${relImport}";`;
});

const entries = allImages.map((img, i) => {
  const varName = `img_${i}`;
  return `  "${img.assetPath}": ${varName},`;
});

const fileContent = `// AUTO-GENERATED — do not edit manually.
// Run: node scripts/generate-package-image-map.mjs

import type { ImageSource } from "@/lib/images";

${imports.join("\n")}

export const packageImageMap: Record<string, ImageSource> = {
${entries.join("\n")}
};
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, fileContent, "utf8");

console.log(`Generated ${outputFile} with ${allImages.length} package images`);
