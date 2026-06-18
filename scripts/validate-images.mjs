#!/usr/bin/env node

/**
 * Image validation script
 * Verifies that all images referenced in the barrel file exist on disk
 */

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

async function main() {
  console.log('🔍 Validating image references...\n');

  try {
    const imageFiles = await glob('src/assets/images/**/*.{webp,jpeg,jpg,png}', {
      cwd: repoRoot,
      ignore: ['**/node_modules/**']
    });

    console.log(`Found ${imageFiles.length} image files on disk`);

    // Read the barrel file and extract import paths
    const barrelPath = path.join(repoRoot, 'src/assets/images/index.ts');
    const barrelContent = await fs.readFile(barrelPath, 'utf-8');
    const importMatches = barrelContent.matchAll(/from\s+["']\.\/([^"']+)["']/g);

    const referencedFiles = [];
    for (const match of importMatches) {
      let refPath = match[1];
      // Handle extensionless imports — try common extensions
      if (!path.extname(refPath)) {
        for (const ext of ['.webp', '.jpeg', '.jpg', '.png']) {
          const candidate = `src/assets/images/${refPath}${ext}`;
          if (imageFiles.includes(candidate)) {
            refPath = refPath + ext;
            break;
          }
        }
      }
      referencedFiles.push(`src/assets/images/${refPath}`);
    }

    console.log(`Found ${referencedFiles.length} image references in barrel file`);

    const errors = [];
    for (const ref of referencedFiles) {
      if (!imageFiles.includes(ref)) {
        // Try with common extensions
        const exists = imageFiles.some(f => f.startsWith(ref.replace(/\.[^.]+$/, '')));
        if (!exists) {
          errors.push(`Missing image: ${ref}`);
        }
      }
    }

    if (errors.length > 0) {
      console.error('❌ Image validation failed:');
      errors.forEach(err => console.error(`  - ${err}`));
      process.exit(1);
    } else {
      console.log('✅ All referenced images exist');
      process.exit(0);
    }
  } catch (err) {
    console.error('❌ Image validation error:', err.message);
    process.exit(1);
  }
}

main();
