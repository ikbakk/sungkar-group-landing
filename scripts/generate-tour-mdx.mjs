import {
  mkdirSync,
  writeFileSync,
  existsSync,
  readFileSync,
  readdirSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const PACKAGES_DIR = join(DATA_DIR, "packages");
const ROOT = join(__dirname, "..", "src/content/tourPackages");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

// Read tour packages from packages/*/ directory tree
const packageDirs = readdirSync(PACKAGES_DIR, { withFileTypes: true }).filter(
  (d) => d.isDirectory(),
);

let PKGS = [];
for (const dir of packageDirs) {
  const slug = dir.name;
  const mainPath = join(PACKAGES_DIR, slug, "main.json");
  const localesPath = join(PACKAGES_DIR, slug, "locales.json");
  if (!existsSync(mainPath) || !existsSync(localesPath)) {
    console.warn(`  Skipping ${slug}: missing main.json or locales.json`);
    continue;
  }
  const main = JSON.parse(readFileSync(mainPath, "utf-8"));
  const locales = JSON.parse(readFileSync(localesPath, "utf-8"));
  PKGS.push({ ...main, locales });
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

function localizeBoatSpecs(specs, locale) {
  if (locale === "id") return specs;
  const labelMap = BOAT_SPECS_LABELS[locale] || {};
  const valueMap = BOAT_VALUES_MAP[locale] || {};
  return specs.map((s) => ({
    label: labelMap[s.label] || s.label,
    value: valueMap[s.value] || s.value,
  }));
}

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

function localizeCabins(cabins, locale) {
  if (locale === "id") return cabins;
  return cabins.map((c) => ({
    ...c,
    name: Object.entries(CABIN_EN).reduce(
      (n, [id, en]) => n.replace(id, en),
      c.name,
    ),
    description: Object.entries(CABIN_EN).reduce(
      (d, [id, en]) => d.replace(id, en),
      c.description,
    ),
    prices: c.prices
      ? Object.fromEntries(
          Object.entries(c.prices).map(([k, v]) => [
            k,
            v.replace("/orang", "/person").replace("/kabin", "/cabin"),
          ]),
        )
      : undefined,
  }));
}

function yml(locale, pkg) {
  const locKey = locale.localeKey;
  const ordered = {};
  ordered.title = locale.title;
  ordered.region = pkg.region;
  if (pkg.featured) ordered.featured = true;
  ordered.collectionSlug = pkg.collectionSlug;
  ordered.collectionTitle =
    COL_TITLE_MAP[locKey]?.[locale.collectionTitle] || locale.collectionTitle;
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
      for (const activity of activities) {
        flat.push(`${day} - ${activity}`);
      }
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
    ordered.boatSpecs = localizeBoatSpecs(pkg.boatSpecs, locKey);
  if (pkg.cabins) ordered.cabins = localizeCabins(pkg.cabins, locKey);
  if (pkg.priceList) {
    // Map priceList keys to durationLabels keys (fullDay -> 1D)
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
  const y = yaml.stringify(ordered, { lineWidth: 0, quotingType: '"' });
  return "---\n" + y + "\n---\n";
}

function writeMdx(pkg, localeKey) {
  const loc = localeKey === "id" ? "id" : localeKey;
  const dir = join(ROOT, pkg.slug);
  mkdirSync(dir, { recursive: true });
  const path = join(dir, `${loc}.mdx`);
  // Skip if already exists and matches slug of already-created package 5
  if (existsSync(path)) {
    console.log(`  SKIP ${pkg.slug}/${loc}.mdx (exists)`);
    return;
  }
  const localeData = { ...pkg.locales[localeKey], localeKey };
  writeFileSync(path, yml(localeData, pkg));
  console.log(`  OK ${pkg.slug}/${loc}.mdx`);
}

// Generate
let count = 0;
for (const pkg of PKGS) {
  for (const locale of LOCALES) {
    writeMdx(pkg, locale);
    count++;
  }
}
console.log(`\nDone. Generated ${count} files.`);
