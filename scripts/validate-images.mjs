#!/usr/bin/env node

/**
 * Image validation script
 * Validates all image references in the codebase
 */

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

const __dirname = new URL('.', import.meta.url).pathname;

// Image directories to validate
const IMAGE_DIRS = [
  'src/assets/images/**/*.{webp,jpeg,jpg,png}',
  'src/**/*.{ts,tsx,astro}',
];

// Valid image extensions
const VALID_EXTENSIONS = ['.webp', '.jpeg', '.jpg', '.png'];

/**
 * Check if a file exists
 */
async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Extract image paths from source files
 */
async function extractImagePaths() {
  const imagePaths = new Set();
  
  // Find all source files
  const files = await glob(IMAGE_DIRS, { 
    ignore: ['**/node_modules/**', '**/dist/**'] 
  });
  
  for (const file of files) {
    try {
      const content = await fs.readFile(file, 'utf-8');
      
      // Extract image references (simplified pattern matching)
      const imageMatches = content.matchAll(/\[?[A-Z_]+\.(?:[a-zA-Z0-9_]+|{[^}]+})/g);
      for (const match of imageMatches) {
        const imageRef = match[0];
        imagePaths.add(imageRef);
      }
    } catch (err) {
      console.warn(`Could not read file: ${file}`);
    }
  }
  
  return Array.from(imagePaths);
}

/**
 * Validate image paths
 */
async function validateImagePaths(imageRefs) {
  const errors = [];
  const validImageFiles = await glob('src/assets/images/**/*.{webp,jpeg,jpg,png}', {
    ignore: ['**/node_modules/**']
  });
  
  const validImageNames = new Set(
    validImageFiles.map(file => {
      const basename = path.basename(file, path.extname(file));
      return basename.replace(/^_/, ''); // Remove leading underscore
    })
  );
  
  for (const ref of imageRefs) {
    const imageName = ref.split('.')[1];
    if (imageName && !validImageNames.has(imageName)) {
      errors.push(`Invalid image reference: ${ref}`);
    }
  }
  
  return errors;
}

/**
 * Main validation function
 */
async function main() {
  console.log('🔍 Validating image references...\n');
  
  try {
    const imageRefs = await extractImagePaths();
    console.log(`Found ${imageRefs.length} image references`);
    
    const errors = await validateImagePaths(imageRefs);
    
    if (errors.length > 0) {
      console.error('❌ Image validation failed:');
      errors.forEach(err => console.error(`  - ${err}`));
      process.exit(1);
    } else {
      console.log('✅ All image references are valid');
      process.exit(0);
    }
  } catch (err) {
    console.error('❌ Image validation error:', err.message);
    process.exit(1);
  }
}

main();
