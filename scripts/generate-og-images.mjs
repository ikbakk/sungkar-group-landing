#!/usr/bin/env node
import sharp from "sharp";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdirSync, existsSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "src", "assets", "images", "og");

const OG_IMAGES = [
  { file: "home", label: "Home", color: "#0f766e" },
  { file: "about", label: "Tentang Kami", color: "#1e40af" },
  { file: "packages", label: "Paket Wisata", color: "#b45309" },
  { file: "destinations", label: "Destinasi", color: "#7c3aed" },
  { file: "reviews", label: "Ulasan", color: "#be185d" },
  { file: "guides", label: "Panduan Wisata", color: "#0369a1" },
  { file: "contact", label: "Kontak", color: "#15803d" },
  { file: "faq", label: "FAQ", color: "#6d28d9" },
  { file: "accommodations", label: "Akomodasi", color: "#0d9488" },
  { file: "car-rental", label: "Sewa Mobil", color: "#ea580c" },
  { file: "privacy", label: "Kebijakan Privasi", color: "#4b5563" },
  { file: "terms", label: "Syarat & Ketentuan", color: "#4b5563" },
  { file: "blog", label: "Blog", color: "#0891b2" },
  { file: "package-detail", label: "Paket Wisata", color: "#d97706" },
  { file: "destination-detail", label: "Destinasi", color: "#6d28d9" },
  { file: "vehicle-detail", label: "Sewa Mobil", color: "#ea580c" },
];

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

async function generateOGImage({ file, label, color }) {
  label = escapeXml(label);
  const W = 1200;
  const H = 630;

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${color}" stop-opacity="1"/>
      <stop offset="100%" stop-color="${darken(color, 40)}" stop-opacity="1"/>
    </linearGradient>
    <linearGradient id="shine" x1="0" y1="0" x2="${W}" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
      <stop offset="50%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.15)"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#shine)"/>
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="rgba(255,255,255,0.15)"/>
  <text x="60" y="220" font-family="system-ui, sans-serif" font-size="40" font-weight="600" fill="rgba(255,255,255,0.7)">Sungkar Group</text>
  <text x="60" y="310" font-family="system-ui, sans-serif" font-size="${label.length > 12 ? 56 : 72}" font-weight="700" fill="white">${label}</text>
  <text x="60" y="${H - 60}" font-family="system-ui, sans-serif" font-size="22" fill="rgba(255,255,255,0.6)">sungkargroup.com</text>
</svg>`;

  const result = await sharp(Buffer.from(svg)).webp({ quality: 85 }).toFile(join(OUTPUT_DIR, `${file}.webp`));
  console.log(`  ${file}.webp ${result.width}x${result.height} ${result.size}B`);
  return result;
}

function darken(hex, amount) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0xff) - amount);
  const b = Math.max(0, (num & 0xff) - amount);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

console.log("Generating OG images...");
const results = await Promise.all(OG_IMAGES.map(generateOGImage));
console.log(`\nDone — ${results.length} images in ${OUTPUT_DIR}`);
