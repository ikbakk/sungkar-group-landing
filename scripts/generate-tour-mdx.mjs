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

const PRICE_LIST_LABELS = {
  landHotelTier: {
    id: {
      withoutHotel: "Tanpa Hotel",
      hotel2: "Hotel Bintang 2",
      hotel3: "Hotel Bintang 3",
      hotel4: "Hotel Bintang 4",
      hotel5: "Hotel Bintang 5",
    },
    en: {
      withoutHotel: "Without Hotel",
      hotel2: "2-Star Hotel",
      hotel3: "3-Star Hotel",
      hotel4: "4-Star Hotel",
      hotel5: "5-Star Hotel",
    },
    ms: {
      withoutHotel: "Tanpa Hotel",
      hotel2: "Hotel 2 Bintang",
      hotel3: "Hotel 3 Bintang",
      hotel4: "Hotel 4 Bintang",
      hotel5: "Hotel 5 Bintang",
    },
    ar: {
      withoutHotel: "بدون فندق",
      hotel2: "فندق نجمتين",
      hotel3: "فندق 3 نجوم",
      hotel4: "فندق 4 نجوم",
      hotel5: "فندق 5 نجوم",
    },
    zh: {
      withoutHotel: "不含酒店",
      hotel2: "二星酒店",
      hotel3: "三星酒店",
      hotel4: "四星酒店",
      hotel5: "五星酒店",
    },
  },
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

// Per-locale description-fragment dictionaries. Keys are lowercase Indonesian
// fragments; replacements are applied longest-first and case-insensitively to
// handle mixed-case source data. The deck-level fragment is excluded from the
// badge display in the component, so it is not translated here.
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

// Per-locale price-unit suffixes (e.g. "/orang" -> "/person").
const PRICE_UNIT = {
  en: { "/orang": "/person", "/kabin": "/cabin" },
  ar: { "/orang": "/شخص", "/kabin": "/كابينة" },
  ms: { "/orang": "/orang", "/kabin": "/kabin" },
  zh: { "/orang": "/人", "/kabin": "/间" },
};

function applyParts(text, parts) {
  if (!text) return text;
  // Sort keys longest-first so multi-word fragments win over single words.
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

function localizeCabins(cabins, locale) {
  if (locale === "id") return cabins;
  const nameMap = CABIN_EN;
  const partsMap = CABIN_PARTS[locale] || CABIN_PARTS.en;
  const unitMap = PRICE_UNIT[locale] || PRICE_UNIT.en;
  return cabins.map((c) => ({
    ...c,
    name: Object.entries(nameMap).reduce(
      (n, [id, en]) => n.replace(id, en),
      c.name,
    ),
    description: applyParts(c.description, partsMap),
    prices: c.prices
      ? Object.fromEntries(
          Object.entries(c.prices).map(([k, v]) => {
            let s = v;
            for (const [from, to] of Object.entries(unitMap)) {
              s = s.split(from).join(to);
            }
            return [k, s];
          }),
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
    // Map priceList keys to canonical display keys (fullDay -> 1D)
    const keyMap = { fullDay: "1D" };
    ordered.priceList = Object.fromEntries(
      Object.entries(pkg.priceList).map(([k, v]) => [keyMap[k] || k, v]),
    );
    const priceListLabels = PRICE_LIST_LABELS[pkg.priceListType]?.[locKey];
    if (priceListLabels) ordered.priceListLabels = priceListLabels;
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
