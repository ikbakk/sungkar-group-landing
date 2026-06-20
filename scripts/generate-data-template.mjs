#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import { select, input, confirm, number } from "@inquirer/prompts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DATA_DIR = resolve(ROOT, "scripts", "data");
const CONTENT_DIR = resolve(ROOT, "src", "content");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

// ── Source of truth parsers ──────────────────────────────────────────

function parseRegions() {
  const src = readFileSync(resolve(ROOT, "src/lib/constants/regions.ts"), "utf-8");
  const match = src.match(/REGIONS\s*=\s*\{([^}]+)\}/s);
  if (!match) return ["lombok", "labuan-bajo", "sumbawa"];
  const values = [...match[1].matchAll(/"([^"]+)"\s+as\s+const/g)].map((m) => m[1]);
  return values.length > 0 ? values : ["lombok", "labuan-bajo", "sumbawa"];
}

function parseTransmissions() {
  const src = readFileSync(resolve(ROOT, "src/lib/constants/vehicles.ts"), "utf-8");
  const match = src.match(/TRANSMISSION_TYPES\s*=\s*\{([^}]+)\}/s);
  if (!match) return ["Manual", "Automatic"];
  const values = [...match[1].matchAll(/"([^"]+)"\s+as\s+const/g)].map((m) => m[1]);
  return values.length > 0 ? values : ["Manual", "Automatic"];
}

function getExistingCollectionSlugs() {
  const dir = resolve(DATA_DIR, "packages");
  if (!existsSync(dir)) return [];
  const slugs = new Set();
  for (const d of readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory())) {
    try {
      const main = JSON.parse(readFileSync(resolve(dir, d.name, "main.json"), "utf-8"));
      if (main.collectionSlug) slugs.add(main.collectionSlug);
    } catch {}
  }
  return [...slugs].sort();
}

function slugify(text) {
  return text.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

// ── Locale helpers ───────────────────────────────────────────────────

function getRegionCategory(region) {
  const map = { lombok: "Paket Wisata Lombok", "labuan-bajo": "Paket Wisata Labuan Bajo", sumbawa: "Paket Wisata Sumbawa" };
  return map[region] || "Paket Wisata";
}

function getRegionCategoryEn(region) {
  const map = { lombok: "Lombok Tour Packages", "labuan-bajo": "Labuan Bajo Tour Packages", sumbawa: "Sumbawa Tour Packages" };
  return map[region] || "Tour Packages";
}

function getRegionCategoryAr(region) {
  const map = { lombok: "باكيجات سياحة لومبوك", "labuan-bajo": "باكيجات سياحة لابوان باجو", sumbawa: "باكيجات سياحة سومبawa" };
  return map[region] || "باكيجات سياحة";
}

function getRegionCategoryMs(region) {
  const map = { lombok: "Pakej Pelancongan Lombok", "labuan-bajo": "Pakej Pelancongan Labuan Bajo", sumbawa: "Pakej Pelancongan Sumbawa" };
  return map[region] || "Pakej Pelancongan";
}

function getRegionCategoryZh(region) {
  const map = { lombok: "龙目岛旅游套餐", "labuan-bajo": "拉布安巴焦旅游套餐", sumbawa: "松巴哇旅游套餐" };
  return map[region] || "旅游套餐";
}

function getCollectionTitle(locale, slug) {
  const map = {
    "1-hari": { id: "Paket 1 Hari", en: "1 Day Package", ar: "باقة يوم واحد", ms: "Pakej 1 Hari", zh: "一日游套餐" },
    "2-hari-1-malam": { id: "Paket 2 Hari 1 Malam", en: "2 Days 1 Night Package", ar: "باقة يومين وليلة", ms: "Pakej 2 Hari 1 Malam", zh: "两天一晚套餐" },
    "3-hari-2-malam": { id: "Paket 3 Hari 2 Malam", en: "3 Days 2 Nights Package", ar: "باقة 3 أيام وليلتين", ms: "Pakej 3 Hari 2 Malam", zh: "三天两晚套餐" },
    "4-hari-3-malam": { id: "Paket 4 Hari 3 Malam", en: "4 Days 3 Nights Package", ar: "باقة 4 أيام و 3 ليال", ms: "Pakej 4 Hari 3 Malam", zh: "四天三晚套餐" },
    "open-trip": { id: "Open Trip", en: "Open Trip", ar: "رحلة مفتوحة", ms: "Open Trip", zh: "拼团游" },
    "sailing-open-trip": { id: "Sailing Open Trip", en: "Sailing Open Trip", ar: "رحلة إبحار مفتوحة", ms: "Sailing Open Trip", zh: "帆船拼团游" },
    "sailing-private-trip": { id: "Sailing Private Trip", en: "Sailing Private Trip", ar: "رحلة إبحار خاصة", ms: "Sailing Private Trip", zh: "帆船私人游" },
  };
  return map[slug]?.[locale] || map["3-hari-2-malam"]?.[locale] || slug;
}

function getDuration(locale, slug) {
  const map = {
    "1-hari": { id: "1 Hari", en: "1 Day", ar: "يوم واحد", ms: "1 Hari", zh: "1天" },
    "2-hari-1-malam": { id: "2 Hari 1 Malam", en: "2 Days 1 Night", ar: "يومين وليلة", ms: "2 Hari 1 Malam", zh: "2天1晚" },
    "3-hari-2-malam": { id: "3 Hari 2 Malam", en: "3 Days 2 Nights", ar: "3 أيام وليلتين", ms: "3 Hari 2 Malam", zh: "3天2晚" },
    "4-hari-3-malam": { id: "4 Hari 3 Malam", en: "4 Days 3 Nights", ar: "4 أيام و 3 ليال", ms: "4 Hari 3 Malam", zh: "4天3晚" },
    "open-trip": { id: "Open Trip", en: "Open Trip", ar: "رحلة مفتوحة", ms: "Open Trip", zh: "拼团游" },
    "sailing-open-trip": { id: "3 Hari 2 Malam", en: "3 Days 2 Nights", ar: "3 أيام وليلتين", ms: "3 Hari 2 Malam", zh: "3天2晚" },
    "sailing-private-trip": { id: "4 Hari 3 Malam", en: "4 Days 3 Nights", ar: "4 أيام و 3 ليال", ms: "4 Hari 3 Malam", zh: "4天3晚" },
  };
  return map[slug]?.[locale] || map["3-hari-2-malam"]?.[locale] || "3 Hari 2 Malam";
}

function getRegionCategoryCustom(locale, region) {
  if (locale === "id") return getRegionCategory(region);
  if (locale === "en") return getRegionCategoryEn(region);
  if (locale === "ar") return getRegionCategoryAr(region);
  if (locale === "ms") return getRegionCategoryMs(region);
  if (locale === "zh") return getRegionCategoryZh(region);
  return getRegionCategory(region);
}

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// ── Template builders ────────────────────────────────────────────────

function buildLocaleFields(type, locale, { title, region, collectionSlug }) {
  const isId = locale === "id";
  const isEn = locale === "en";
  const isAr = locale === "ar";
  const isMs = locale === "ms";

  switch (type) {
    case "package": {
      const colTitle = getCollectionTitle(locale, collectionSlug || "3-hari-2-malam");
      const cat = getRegionCategoryCustom(locale, region);
      const dur = getDuration(locale, collectionSlug || "3-hari-2-malam");
      return {
        title: isId ? title : isEn ? title : isAr ? "عنوان الرحلة" : isMs ? "Tajuk Pakej" : "套餐标题",
        collectionTitle: colTitle,
        category: cat,
        duration: dur,
        summary: isId ? "Jelaskan paket wisata ini..." : isEn ? "Describe this tour package..." : isAr ? "وصف الرحلة السياحية..." : isMs ? "Terangkan pakej pelancongan ini..." : "描述此旅游套餐...",
        highlights: isId ? ["Destinasi 1", "Destinasi 2", "Aktivitas 1"] : isEn ? ["Destination 1", "Destination 2", "Activity 1"] : isAr ? ["الوجهة 1", "الوجهة 2", "النشاط 1"] : isMs ? ["Destinasi 1", "Destinasi 2", "Aktiviti 1"] : ["目的地1", "目的地2", "活动1"],
        itinerary: isId ? ["Hari 1 - Kegiatan hari pertama"] : isEn ? ["Day 1 - First day activity"] : isAr ? ["اليوم 1 - نشاط اليوم الأول"] : isMs ? ["Hari 1 - Aktiviti hari pertama"] : ["第1天 - 第一天活动"],
        includes: isId ? ["Fasilitas 1", "Fasilitas 2"] : isEn ? ["Include 1", "Include 2"] : isAr ? ["يشمل 1", "يشمل 2"] : isMs ? ["Termasuk 1", "Termasuk 2"] : ["包含1", "包含2"],
        excludes: isId ? ["Tidak termasuk 1"] : isEn ? ["Exclude 1"] : isAr ? ["لا يشمل 1"] : isMs ? ["Tidak termasuk 1"] : ["不包含1"],
      };
    }
    case "accommodation":
      return {
        name: isId ? title : isEn ? title : isAr ? "اسم الإقامة" : isMs ? "Nama Penginapan" : "住宿名称",
        perks: isId ? ["Fasilitas 1", "Fasilitas 2", "Fasilitas 3"] : isEn ? ["Perk 1", "Perk 2", "Perk 3"] : isAr ? ["ميزة 1", "ميزة 2", "ميزة 3"] : isMs ? ["Kemudahan 1", "Kemudahan 2", "Kemudahan 3"] : ["设施1", "设施2", "设施3"],
        regionalHighlights: isId ? ["Keunggulan lokasi 1"] : isEn ? ["Location highlight 1"] : isAr ? ["ميزة الموقع 1"] : isMs ? ["Keistimewaan lokasi 1"] : ["地点亮点1"],
        description: isId ? "Deskripsi akomodasi..." : isEn ? "Accommodation description..." : isAr ? "وصف الإقامة..." : isMs ? "Penerangan penginapan..." : "住宿描述...",
      };
    case "vehicle":
      return {
        name: isId ? title : isEn ? title : isAr ? "اسم المركبة" : isMs ? "Nama Kenderaan" : "车辆名称",
        features: isId ? ["Fitur 1", "Fitur 2"] : isEn ? ["Feature 1", "Feature 2"] : isAr ? ["ميزة 1", "ميزة 2"] : isMs ? ["Ciri 1", "Ciri 2"] : ["特点1", "特点2"],
        bestFor: isId ? ["Keperluan 1", "Keperluan 2"] : isEn ? ["Best for 1", "Best for 2"] : isAr ? ["مناسب لـ 1", "مناسب لـ 2"] : isMs ? ["Sesuai untuk 1", "Sesuai untuk 2"] : ["适合1", "适合2"],
        description: isId ? "Deskripsi kendaraan..." : isEn ? "Vehicle description..." : isAr ? "وصف المركبة..." : isMs ? "Penerangan kenderaan..." : "车辆描述...",
      };
    case "destination":
      return {
        title: isId ? title : isEn ? title : isAr ? "اسم الوجهة" : isMs ? "Nama Destinasi" : "目的地名称",
        region: isId ? (region === "lombok" ? "Lombok" : region === "labuan-bajo" ? "Labuan Bajo" : "Sumbawa") : isEn ? (region === "lombok" ? "Lombok" : region === "labuan-bajo" ? "Labuan Bajo" : "Sumbawa") : isAr ? (region === "lombok" ? "لومبوك" : region === "labuan-bajo" ? "لابوان باجو" : "سومبawa") : isMs ? (region === "lombok" ? "Lombok" : region === "labuan-bajo" ? "Labuan Bajo" : "Sumbawa") : (region === "lombok" ? "龙目岛" : region === "labuan-bajo" ? "拉布安巴焦" : "松巴哇"),
        summary: isId ? "Deskripsi destinasi..." : isEn ? "Destination description..." : isAr ? "وصف الوجهة..." : isMs ? "Penerangan destinasi..." : "目的地描述...",
        thingsToDo: isId ? ["Aktivitas 1", "Aktivitas 2"] : isEn ? ["Activity 1", "Activity 2"] : isAr ? ["نشاط 1", "نشاط 2"] : isMs ? ["Aktiviti 1", "Aktiviti 2"] : ["活动1", "活动2"],
        packages: [],
      };
    default:
      return {};
  }
}

// ── File writers ─────────────────────────────────────────────────────

async function generatePackage(slug, { title, region }) {

  const featured = await confirm({ message: "Featured package?", default: false });

  const existingSlugs = getExistingCollectionSlugs();
  const colChoices = existingSlugs.map((s) => ({ name: s, value: s }));
  colChoices.push({ name: "Custom...", value: "__custom__" });

  const colPick = await select({
    message: "Collection slug:",
    choices: colChoices,
  });
  const collectionSlug = colPick === "__custom__" ? await input({ message: "Enter collection slug:", default: "3-hari-2-malam" }) : colPick;

  const hasBoat = await confirm({ message: "Include boat / cabin info?", default: false });

  const dir = resolve(DATA_DIR, "packages", slug);
  if (existsSync(dir)) {
    const ok = await confirm({ message: `Directory ${slug}/ already exists. Overwrite?`, default: false });
    if (!ok) { console.log("  Cancelled."); return; }
  }
  mkdirSync(dir, { recursive: true });

  const main = { slug, region };
  if (featured) main.featured = true;
  main.collectionSlug = collectionSlug;
  main.images = ["hero/hero-lombok.webp", "destinations/lombok.webp"];

  if (hasBoat) {
    main.boatName = await input({ message: "Boat name:", default: "Nama Kapal" });
    main.boatType = await input({ message: "Boat type:", default: "Phinisi" });
    main.boatCapacity = await number({ message: "Boat capacity (persons):", default: 12 });
    main.boatSpecs = [
      { label: "Panjang Kapal", value: "30m" },
      { label: "Jumlah Kabin", value: "5 Kamar" },
      { label: "Mesin", value: "2x 300HP" },
      { label: "Crew", value: "6 Orang" },
    ];
    main.cabins = [
      { name: "Cabin Standard", description: "Kabin standar dengan AC", price: "Rp 3.500.000/orang", images: ["gallery/g-snorkel-3.webp"] },
    ];
  }

  const locales = {};
  const localeOpts = { title, region, collectionSlug };
  for (const loc of LOCALES) {
    locales[loc] = buildLocaleFields("package", loc, localeOpts);
  }

  writeFileSync(resolve(dir, "main.json"), JSON.stringify(main, null, 2) + "\n");
  writeFileSync(resolve(dir, "locales.json"), JSON.stringify(locales, null, 2) + "\n");
  return dir;
}

async function generateAccommodation(slug, { title, region }) {

  const dir = resolve(DATA_DIR, "accommodations", slug);
  if (existsSync(dir)) {
    const ok = await confirm({ message: `Directory ${slug}/ already exists. Overwrite?`, default: false });
    if (!ok) { console.log("  Cancelled."); return; }
  }
  mkdirSync(dir, { recursive: true });

  const main = { slug, region, image: "hero/hero-lombok.webp" };
  const locales = {};
  const localeOpts = { title, region };
  for (const loc of LOCALES) {
    locales[loc] = buildLocaleFields("accommodation", loc, localeOpts);
  }

  writeFileSync(resolve(dir, "main.json"), JSON.stringify(main, null, 2) + "\n");
  writeFileSync(resolve(dir, "locales.json"), JSON.stringify(locales, null, 2) + "\n");
  return dir;
}

async function generateVehicle(slug, { title, region }) {

  const transmissions = parseTransmissions();
  const transmission = await select({
    message: "Transmission:",
    choices: transmissions.map((t) => ({ name: t, value: t })),
  });
  const seats = await number({ message: "Seats:", default: 7 });
  const pricePerDay = await input({ message: "Price per day (e.g. Rp 650.000):", default: "Rp 650.000" });

  const dir = resolve(DATA_DIR, "car-rental", slug);
  if (existsSync(dir)) {
    const ok = await confirm({ message: `Directory ${slug}/ already exists. Overwrite?`, default: false });
    if (!ok) { console.log("  Cancelled."); return; }
  }
  mkdirSync(dir, { recursive: true });

  const main = {
    slug, region, pricePerDay, seats, transmission,
    imageTop: "hero/hero-lombok.webp",
    imageBottom: "hero/hero-lombok.webp",
  };
  const locales = {};
  const localeOpts = { title, region };
  for (const loc of LOCALES) {
    locales[loc] = buildLocaleFields("vehicle", loc, localeOpts);
  }

  writeFileSync(resolve(dir, "main.json"), JSON.stringify(main, null, 2) + "\n");
  writeFileSync(resolve(dir, "locales.json"), JSON.stringify(locales, null, 2) + "\n");
  return dir;
}

async function generateDestination(slug, { title, region }) {

  const dir = resolve(DATA_DIR, "destinations", slug);
  if (existsSync(dir)) {
    const ok = await confirm({ message: `Directory ${slug}/ already exists. Overwrite?`, default: false });
    if (!ok) { console.log("  Cancelled."); return; }
  }
  mkdirSync(dir, { recursive: true });

  const main = { slug, image: "hero/hero-lombok.webp", gallery: ["gallery/kuta-beach.webp"] };
  const locales = {};
  const localeOpts = { title, region };
  for (const loc of LOCALES) {
    locales[loc] = buildLocaleFields("destination", loc, localeOpts);
  }

  writeFileSync(resolve(dir, "main.json"), JSON.stringify(main, null, 2) + "\n");
  writeFileSync(resolve(dir, "locales.json"), JSON.stringify(locales, null, 2) + "\n");
  return dir;
}

async function generateBlog(slug, title) {

  const description = await input({ message: "Description:", default: "Deskripsi blog post..." });
  const readingTime = await number({ message: "Reading time (minutes):", default: 5 });

  const locales = await select({
    message: "Generate for which locales?",
    choices: [
      { name: "All 5 (id, en, ar, ms, zh)", value: "all" },
      { name: "ID only", value: "id" },
      { name: "ID + EN", value: "id-en" },
    ],
  });

  const selectedLocales = locales === "all" ? LOCALES : locales === "id-en" ? ["id", "en"] : ["id"];

  for (const loc of selectedLocales) {
    const dir = resolve(CONTENT_DIR, "blog", slug);
    mkdirSync(dir, { recursive: true });

    const locTitle = loc === "id" ? title : loc === "en" ? title : loc === "ar" ? "عنوان المقال" : loc === "ms" ? "Tajuk Blog" : "博客标题";
    const locDesc = loc === "id" ? description : loc === "en" ? description : loc === "ar" ? "وصف المقال..." : loc === "ms" ? "Penerangan blog..." : "博客描述...";

    const fm = {
      title: locTitle,
      description: locDesc,
      publishDate: todayStr(),
      tags: ["tag-1", "tag-2"],
      readingTime,
      author: "Tim Sungkar Group",
    };

    const yaml = toYaml(fm);
    const mdx = `---\n${yaml}---\n\nTulis konten ${loc === "id" ? "blog" : loc === "en" ? "blog" : loc === "ar" ? "المقال" : loc === "ms" ? "blog" : "博客"} disini...\n`;

    writeFileSync(resolve(dir, `${loc}.mdx`), mdx);
    console.log(`  Created: src/content/blog/${slug}/${loc}.mdx`);
  }
  return resolve(CONTENT_DIR, "blog", slug);
}

async function generateGuide(slug, title) {

  const regions = parseRegions();
  const region = await select({ message: "Region:", choices: regions.map((r) => ({ name: r, value: r })) });
  const description = await input({ message: "Description:", default: "Deskripsi panduan..." });
  const readingTime = await number({ message: "Reading time (minutes):", default: 8 });

  const locales = await select({
    message: "Generate for which locales?",
    choices: [
      { name: "All 5 (id, en, ar, ms, zh)", value: "all" },
      { name: "ID only", value: "id" },
      { name: "ID + EN", value: "id-en" },
    ],
  });

  const selectedLocales = locales === "all" ? LOCALES : locales === "id-en" ? ["id", "en"] : ["id"];

  for (const loc of selectedLocales) {
    const dir = resolve(CONTENT_DIR, "guides", slug);
    mkdirSync(dir, { recursive: true });

    const locTitle = loc === "id" ? title : loc === "en" ? title : loc === "ar" ? "عنوان الدليل" : loc === "ms" ? "Tajuk Panduan" : "指南标题";
    const locDesc = loc === "id" ? description : loc === "en" ? description : loc === "ar" ? "وصف الدليل..." : loc === "ms" ? "Penerangan panduan..." : "指南描述...";

    const fm = {
      title: locTitle,
      description: locDesc,
      region,
      readingTime,
      keyTakeaways: ["Kesimpulan penting 1", "Kesimpulan penting 2"],
      bestFor: ["Cocok untuk 1", "Cocok untuk 2"],
      relatedDestinations: [],
      relatedPackages: [],
      publishDate: todayStr(),
    };

    const yaml = toYaml(fm);
    const mdx = `---\n${yaml}---\n\nTulis konten ${loc === "id" ? "panduan" : loc === "en" ? "guide" : loc === "ar" ? "الدليل" : loc === "ms" ? "panduan" : "指南"} disini...\n`;

    writeFileSync(resolve(dir, `${loc}.mdx`), mdx);
    console.log(`  Created: src/content/guides/${slug}/${loc}.mdx`);
  }
  return resolve(CONTENT_DIR, "guides", slug);
}

// ── YAML helper (simple, no dependencies) ───────────────────────────────

function toYaml(obj, indent = 0) {
  const pad = "  ".repeat(indent);
  let out = "";
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];
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
      out += `${pad}${key}:\n${toYaml(value, indent + 1)}`;
    } else {
      out += `${pad}${key}: ${JSON.stringify(value)}\n`;
    }
  }
  return out;
}

// ── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log(`┌─────────────────────────────────────────────┐`);
  console.log(`│  Sungkar Group — Content Template Generator  │`);
  console.log(`└─────────────────────────────────────────────┘\n`);

  const type = await select({
    message: "Content type:",
    choices: [
      { name: "Package (Tour Package)", value: "package", description: "scripts/data/packages/{slug}/" },
      { name: "Accommodation", value: "accommodation", description: "scripts/data/accommodations/{slug}/" },
      { name: "Vehicle (Car Rental)", value: "vehicle", description: "scripts/data/car-rental/{slug}/" },
      { name: "Destination", value: "destination", description: "scripts/data/destinations/{slug}/" },
      { name: "Blog Post", value: "blog", description: "src/content/blog/{slug}/{locale}.mdx" },
      { name: "Travel Guide", value: "guide", description: "src/content/guides/{slug}/{locale}.mdx" },
    ],
  });

  const title = await input({
    message: "Title:",
    validate: (v) => v.trim() ? true : "Title is required",
  });
  const slug = slugify(title);

  let dir;

  if (type === "blog") {
    dir = await generateBlog(slug, title);
  } else if (type === "guide") {
    dir = await generateGuide(slug, title);
  } else {
    const regions = parseRegions();
    const region = await select({
      message: "Region:",
      choices: regions.map((r) => ({ name: r, value: r })),
    });

    switch (type) {
      case "package":
        dir = await generatePackage(slug, { title, region });
        break;
      case "accommodation":
        dir = await generateAccommodation(slug, { title, region });
        break;
      case "vehicle":
        dir = await generateVehicle(slug, { title, region });
        break;
      case "destination":
        dir = await generateDestination(slug, { title, region });
        break;
    }
  }

  if (!dir) return;

  const relPath = dir.replace(ROOT + "/", "");
  console.log(`\n  ✅ Template created at ${relPath}/\n`);

  // Auto-run the appropriate generator for JSON-based types
  if (type === "package") {
    console.log("  Running tour MDX generator...\n");
    execSync("node scripts/generate-tour-mdx.mjs", { cwd: ROOT, stdio: "inherit" });
  } else if (["accommodation", "vehicle", "destination"].includes(type)) {
    console.log("  Running content MDX generator...\n");
    execSync("node scripts/generate-content-mdx.mjs", { cwd: ROOT, stdio: "inherit" });
  } else {
    console.log("  Edit the MDX files and add content.");
    console.log("  Verify:    npm test\n");
    return;
  }

  console.log("\n  Verify:    npm test\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
