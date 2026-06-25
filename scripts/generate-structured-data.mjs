#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(__dirname, "data");
const OUT_DIR = path.join(ROOT, "src", "generated", "content");
const LOCALES = ["id", "en", "ar", "ms", "zh"];
const args = new Set(process.argv.slice(2));
const WATCH = args.has("--watch");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function stableStringify(value) {
  return JSON.stringify(value, null, 2);
}

function writeTsModule(filePath, exportName, data) {
  ensureDir(path.dirname(filePath));
  const content = `// AUTO-GENERATED FILE\n// DO NOT EDIT MANUALLY\n\nexport const ${exportName} = ${stableStringify(data)};\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

const COL_TITLE_EN = {
  "Paket 1 Hari": "1 Day Package",
  "Paket 2 Hari 1 Malam": "2 Days 1 Night Package",
  "Paket 3 Hari 2 Malam": "3 Days 2 Nights Package",
  "Paket 4 Hari 3 Malam": "4 Days 3 Nights Package",
};
const COL_TITLE_MS = {
  "Paket 1 Hari": "Pakej 1 Hari",
  "Paket 2 Hari 1 Malam": "Pakej 2 Hari 1 Malam",
  "Paket 3 Hari 2 Malam": "Pakej 3 Hari 2 Malam",
  "Paket 4 Hari 3 Malam": "Pakej 4 Hari 3 Malam",
};
const COL_TITLE_AR = {
  "Paket 1 Hari": "باقة يوم واحد",
  "Paket 2 Hari 1 Malam": "باقة يومين وليلة",
  "Paket 3 Hari 2 Malam": "باقة 3 أيام وليلتين",
  "Paket 4 Hari 3 Malam": "باقة 4 أيام و 3 ليال",
};
const COL_TITLE_ZH = {
  "Paket 1 Hari": "一日游套餐",
  "Paket 2 Hari 1 Malam": "两天一晚套餐",
  "Paket 3 Hari 2 Malam": "三天两晚套餐",
  "Paket 4 Hari 3 Malam": "四天三晚套餐",
};
const COL_TITLE_MAP = {
  en: COL_TITLE_EN,
  ms: COL_TITLE_MS,
  ar: COL_TITLE_AR,
  zh: COL_TITLE_ZH,
};
const BOAT_SPECS_LABELS = {
  en: {
    "Panjang Kapal": "Boat Length",
    "Jumlah Kabin": "Cabins",
    "Lebar Kapal": "Boat Width",
    "Kecepatan Jelajah": "Cruising Speed",
    "Kapasitas Bahan Bakar": "Fuel Capacity",
    "Kapasitas Air Tawar": "Fresh Water Capacity",
    Mesin: "Engine",
    Generator: "Generator",
    Navigasi: "Navigation",
    Radio: "Radio",
    "Peralatan Keselamatan": "Safety Equipment",
    Speedboat: "Speedboat",
    Kabin: "Cabins",
    Crew: "Crew",
    Dibangun: "Built",
  },
  ms: {
    "Panjang Kapal": "Panjang Kapal",
    "Jumlah Kabin": "Bilangan Kabin",
    "Lebar Kapal": "Lebar Kapal",
    "Kecepatan Jelajah": "Kelajuan Pelayaran",
    "Kapasitas Bahan Bakar": "Kapasiti Bahan Api",
    "Kapasitas Air Tawar": "Kapasiti Air Tawar",
    Mesin: "Enjin",
    Generator: "Generator",
    Navigasi: "Navigasi",
    Radio: "Radio",
    "Peralatan Keselamatan": "Peralatan Keselamatan",
    Speedboat: "Bot Laju",
    Kabin: "Kabin",
    Crew: "Krew",
    Dibangun: "Dibina",
  },
  ar: {
    "Panjang Kapal": "طول القارب",
    "Jumlah Kabin": "عدد المقصورات",
    "Lebar Kapal": "عرض القارب",
    "Kecepatan Jelajah": "سرعة الإبحار",
    "Kapasitas Bahan Bakar": "سعة الوقود",
    "Kapasitas Air Tawar": "سعة المياه العذبة",
    Mesin: "محرك",
    Generator: "مولد",
    Navigasi: "ملاحة",
    Radio: "راديو",
    "Peralatan Keselamatan": "معدات السلامة",
    Speedboat: "زورق سريع",
    Kabin: "مقصورات",
    Crew: "طاقم",
    Dibangun: "مبني",
  },
  zh: {
    "Panjang Kapal": "船长",
    "Jumlah Kabin": "客舱数量",
    "Lebar Kapal": "船宽",
    "Kecepatan Jelajah": "巡航速度",
    "Kapasitas Bahan Bakar": "燃料容量",
    "Kapasitas Air Tawar": "淡水容量",
    Mesin: "发动机",
    Generator: "发电机",
    Navigasi: "导航",
    Radio: "无线电",
    "Peralatan Keselamatan": "安全设备",
    Speedboat: "快艇",
    Kabin: "客舱",
    Crew: "船员",
    Dibangun: "建造年份",
  },
};
const BOAT_VALUES_MAP = {
  en: {
    "6 Orang": "6 Persons",
    "8 Orang": "8 Persons",
    "5 Kamar": "5 Cabins",
    "4 Kamar": "4 Cabins",
    "Rakit Penyelamat, Jaket Pelampung, Pelampung Cincin, Alat Pemadam Kebakaran, Kotak P3K":
      "Life Raft, Life Jackets, Ring Buoys, Fire Extinguisher, First Aid Kit",
    "6 Meter Fiberglass dengan Mesin Yamaha 15 HP":
      "6 Meter Fiberglass with Yamaha 15 HP Engine",
    "6 Kabin (AC, Kamar Mandi Pribadi)": "6 Cabins (AC, Private Bathroom)",
  },
  ms: {
    "6 Orang": "6 Orang",
    "8 Orang": "8 Orang",
    "5 Kamar": "5 Kabin",
    "4 Kamar": "4 Kabin",
    "Rakit Penyelamat, Jaket Pelampung, Pelampung Cincin, Alat Pemadam Kebakaran, Kotak P3K":
      "Rakit Penyelamat, Jaket Keselamatan, Pelampung Cincin, Alat Pemadam Kebakaran, Peti P3K",
    "6 Meter Fiberglass dengan Mesin Yamaha 15 HP":
      "6 Meter Fiberglass dengan Enjin Yamaha 15 HP",
    "6 Kabin (AC, Kamar Mandi Pribadi)": "6 Kabin (AC, Bilik Mandi Peribadi)",
  },
  ar: {
    "6 Orang": "6 أشخاص",
    "8 Orang": "8 أشخاص",
    "5 Kamar": "5 مقصورات",
    "4 Kamar": "4 مقصورات",
    "Rakit Penyelamat, Jaket Pelampung, Pelampung Cincin, Alat Pemadam Kebakaran, Kotak P3K":
      "طوف نجاة، سترات النجاة، عوامات دائرية، طفاية حريق، عدة إسعافات أولية",
    "6 Meter Fiberglass dengan Mesin Yamaha 15 HP":
      "6 أمتار من الألياف الزجاجية بمحرك ياماها 15 حصان",
    "6 Kabin (AC, Kamar Mandi Pribadi)": "6 مقصورات (تكييف، حمام خاص)",
  },
  zh: {
    "6 Orang": "6人",
    "8 Orang": "8人",
    "5 Kamar": "5间客舱",
    "4 Kamar": "4间客舱",
    "Rakit Penyelamat, Jaket Pelampung, Pelampung Cincin, Alat Pemadam Kebakaran, Kotak P3K":
      "救生筏、救生衣、救生圈、灭火器、急救箱",
    "6 Meter Fiberglass dengan Mesin Yamaha 15 HP":
      "6米玻璃纤维船体配雅马哈15马力发动机",
    "6 Kabin (AC, Kamar Mandi Pribadi)": "6间客舱（空调、私人浴室）",
  },
};
const CABIN_EN = {
  "Kelas Bawah": "Lower Deck",
  "Kelas Tengah": "Middle Deck",
  "Kelas Utama": "Main Deck",
  "Kelas Suite": "Suite Class",
  "Suite Keluarga": "Family Suite",
  "Kabin ekonomi": "Economy cabin",
  "Kabin standar": "Standard cabin",
  "Kabin VIP": "VIP cabin",
};
const CABIN_PARTS = {
  en: {
    "kamar mandi pribadi dengan jacuzzi": "private bathroom with jacuzzi",
    "kamar mandi pribadi dan balkon pribadi":
      "private bathroom and private balcony",
    "kamar mandi sesuai tipe kabin": "bathroom by cabin type",
    "kamar mandi bersama": "shared bathroom",
    "kamar mandi pribadi": "private bathroom",
    "balkon pribadi": "private balcony",
    "air panas": "hot water",
    kapasitas: "capacity",
    orang: "pax",
    dan: "and",
  },
  ar: {
    "kamar mandi pribadi dengan jacuzzi": "حمام خاص مع جاكوزي",
    "kamar mandi pribadi dan balkon pribadi": "حمام خاص وشرفة خاصة",
    "kamar mandi sesuai tipe kabin": "حمام حسب نوع الكابينة",
    "kamar mandi bersama": "حمام مشترك",
    "kamar mandi pribadi": "حمام خاص",
    "balkon pribadi": "شرفة خاصة",
    "air panas": "ماء ساخن",
    kapasitas: "سعة",
    orang: "أشخاص",
    dan: "و",
  },
  ms: {
    "kamar mandi pribadi dengan jacuzzi": "bilik mandi peribadi dengan jacuzzi",
    "kamar mandi pribadi dan balkon pribadi":
      "bilik mandi peribadi dan balkon peribadi",
    "kamar mandi sesuai tipe kabin": "bilik mandi mengikut jenis kabin",
    "kamar mandi bersama": "bilik mandi berkongsi",
    "kamar mandi pribadi": "bilik mandi peribadi",
    "balkon pribadi": "balkon peribadi",
    "air panas": "air panas",
    kapasitas: "kapasiti",
    orang: "orang",
    dan: "dan",
  },
  zh: {
    "kamar mandi pribadi dengan jacuzzi": "带按摩浴缸的私人浴室",
    "kamar mandi pribadi dan balkon pribadi": "私人浴室和私人阳台",
    "kamar mandi sesuai tipe kabin": "按舱型配备浴室",
    "kamar mandi bersama": "共用浴室",
    "kamar mandi pribadi": "私人浴室",
    "balkon pribadi": "私人阳台",
    "air panas": "热水",
    kapasitas: "容纳",
    orang: "人",
    dan: "和",
  },
};
const PRICE_UNIT = {
  en: { "/orang": "/person", "/kabin": "/cabin" },
  ar: { "/orang": "/شخص", "/kabin": "/كابينة" },
  ms: { "/orang": "/orang", "/kabin": "/kabin" },
  zh: { "/orang": "/人", "/kabin": "/间" },
};
function applyParts(text, parts) {
  if (!text) return text;
  const entries = Object.entries(parts).sort(
    (a, b) => b[0].length - a[0].length,
  );
  let result = text;
  for (const [from, to] of entries) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    result = result.replace(re, to);
  }
  return result;
}
function localizeBoatSpecs(specs, locale) {
  if (locale === "id") return specs;
  const labelMap = BOAT_SPECS_LABELS[locale] || {};
  const valueMap = BOAT_VALUES_MAP[locale] || {};
  return specs.map((s) => ({
    label: labelMap[s.label] || s.label,
    value: valueMap[s.value] || s.value,
  }));
}
function localizeCabins(cabins, locale) {
  if (locale === "id") return cabins;
  const partsMap = CABIN_PARTS[locale] || CABIN_PARTS.en;
  const unitMap = PRICE_UNIT[locale] || PRICE_UNIT.en;
  return cabins.map((c) => ({
    ...c,
    name: Object.entries(CABIN_EN).reduce(
      (n, [id, en]) => n.replace(id, en),
      c.name,
    ),
    description: applyParts(c.description, partsMap),
    prices: c.prices
      ? Object.fromEntries(
          Object.entries(c.prices).map(([k, v]) => {
            let s = v;
            for (const [from, to] of Object.entries(unitMap))
              s = s.split(from).join(to);
            return [k, s];
          }),
        )
      : undefined,
  }));
}
function normalizePackageLocale(pkg, localeKey) {
  const locale = { ...pkg.locales[localeKey], localeKey };
  const ordered = {};
  ordered.slug = pkg.slug;
  ordered.locale = localeKey;
  ordered.title = locale.title;
  ordered.region = pkg.region;
  if (pkg.featured) ordered.featured = true;
  ordered.collectionSlug = pkg.collectionSlug;
  ordered.collectionTitle =
    COL_TITLE_MAP[localeKey]?.[locale.collectionTitle] ||
    locale.collectionTitle;
  ordered.category = locale.category;
  if (locale.durationOptions) {
    ordered.duration = locale.durationOptions.join(", ");
    const keys = Object.keys(locale.itinerary);
    ordered.durationLabels = Object.fromEntries(
      keys.map((key, i) => [key, locale.durationOptions[i]]),
    );
  } else {
    ordered.duration = locale.duration;
  }
  ordered.images = pkg.images;
  ordered.summary = locale.summary;
  ordered.highlights = locale.highlights;
  if (
    locale.itinerary &&
    typeof locale.itinerary === "object" &&
    !Array.isArray(locale.itinerary)
  ) {
    const flat = [];
    for (const [day, activities] of Object.entries(locale.itinerary)) {
      for (const activity of activities) flat.push(`${day} - ${activity}`);
    }
    ordered.itinerary = flat;
  } else {
    ordered.itinerary = locale.itinerary;
  }
  ordered.includes = locale.includes;
  ordered.excludes = locale.excludes;
  if (pkg.boatName) ordered.boatName = pkg.boatName;
  if (pkg.boatType) ordered.boatType = pkg.boatType;
  if (pkg.boatCapacity) ordered.boatCapacity = pkg.boatCapacity;
  if (pkg.boatSpecs)
    ordered.boatSpecs = localizeBoatSpecs(pkg.boatSpecs, localeKey);
  if (pkg.cabins) ordered.cabins = localizeCabins(pkg.cabins, localeKey);
  if (pkg.priceList) {
    const keyMap = { fullDay: "1D" };
    ordered.priceList = Object.fromEntries(
      Object.entries(pkg.priceList).map(([k, v]) => [keyMap[k] || k, v]),
    );
  }
  if (locale.additionalServices)
    ordered.additionalServices = locale.additionalServices;
  if (locale.dontForgetToBring)
    ordered.dontForgetToBring = locale.dontForgetToBring;
  if (locale.termsAndConditions)
    ordered.termsAndConditions = locale.termsAndConditions;
  return ordered;
}
function readPackageSources() {
  const dir = path.join(DATA_DIR, "packages");
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((dirent) => {
      const slug = dirent.name;
      return {
        ...readJson(path.join(dir, slug, "main.json")),
        slug,
        locales: readJson(path.join(dir, slug, "locales.json")),
      };
    });
}
function normalizeTourPackages() {
  const items = [];
  for (const pkg of readPackageSources()) {
    for (const locale of LOCALES)
      items.push(normalizePackageLocale(pkg, locale));
  }
  return items;
}
function normalizeTypedCollection(type) {
  const dir = path.join(DATA_DIR, type);
  if (!fs.existsSync(dir)) return [];
  const items = [];
  for (const dirent of fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())) {
    const slug = dirent.name;
    const main = readJson(path.join(dir, slug, "main.json"));
    const locales = readJson(path.join(dir, slug, "locales.json"));
    for (const locale of LOCALES) {
      const localeData = locales[locale];
      if (!localeData) continue;
      if (type === "accommodations") {
        items.push({
          slug,
          locale,
          name: localeData.name,
          region: main.region,
          perks: localeData.perks,
          regionalHighlights: localeData.regionalHighlights,
          description: localeData.description,
          image: main.image,
        });
      } else if (type === "car-rental") {
        items.push({
          slug,
          locale,
          name: localeData.name,
          region: main.region,
          pricePerDay: main.pricePerDay,
          seats: main.seats,
          transmission: main.transmission,
          features: localeData.features,
          bestFor: localeData.bestFor,
          description: localeData.description,
          imageTop: main.imageTop,
          imageBottom: main.imageBottom,
        });
      } else if (type === "destinations") {
        items.push({
          slug,
          locale,
          title: localeData.title,
          region: localeData.region,
          image: main.image,
          gallery: main.gallery,
          summary: localeData.summary,
          thingsToDo: localeData.thingsToDo,
          packages: localeData.packages,
        });
      }
    }
  }
  return items;
}
function buildAll() {
  const outputs = [
    ["tour-packages.generated.ts", "tourPackagesData", normalizeTourPackages()],
    [
      "accommodations.generated.ts",
      "accommodationsData",
      normalizeTypedCollection("accommodations"),
    ],
    [
      "car-rental.generated.ts",
      "carRentalData",
      normalizeTypedCollection("car-rental"),
    ],
    [
      "destinations.generated.ts",
      "destinationsData",
      normalizeTypedCollection("destinations"),
    ],
  ];
  for (const [file, exportName, data] of outputs) {
    writeTsModule(path.join(OUT_DIR, file), exportName, data);
    console.log(`generated ${path.relative(ROOT, path.join(OUT_DIR, file))}`);
  }
}
function snapshotFiles(dir) {
  const state = new Map();
  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else state.set(full, fs.statSync(full).mtimeMs);
    }
  }
  walk(dir);
  return state;
}
function hasChanged(prev, next) {
  if (prev.size !== next.size) return true;
  for (const [file, mtime] of next) if (prev.get(file) !== mtime) return true;
  return false;
}
function watch() {
  let previous = snapshotFiles(DATA_DIR);
  console.log("watching scripts/data for changes...");
  setInterval(() => {
    const next = snapshotFiles(DATA_DIR);
    if (!hasChanged(previous, next)) return;
    previous = next;
    try {
      buildAll();
    } catch (error) {
      console.error(error);
    }
  }, 800);
}

buildAll();
if (WATCH) watch();
