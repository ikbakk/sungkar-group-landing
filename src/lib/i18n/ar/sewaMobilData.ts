import type { ImageSource } from "@/lib/images";

export type Vehicle = {
  slug: string;
  name: string;
  region: "lombok" | "sumbawa" | "labuan-bajo";
  pricePerDay: string;
  seats: number;
  transmission: "Manual" | "Automatic";
  features: string[];
  bestFor: string[];
  description: string;
  imageTop: ImageSource;
  imageBottom: ImageSource;
};

import { HERO } from "@/assets/images";

export const vehicles: Vehicle[] = [
  {
    slug: "toyota-avanza-lombok",
    name: "Toyota Avanza",
    region: "lombok",
    pricePerDay: "Rp 650.000",
    seats: 7,
    transmission: "Manual",
    features: [
      "سائق محترف",
      "الوقود مشمول",
      "مياه معدنية",
      "استخدام 12 ساعة",
    ],
    bestFor: [
      "سياحة عائلية",
      "جولة مدينة لومبوك",
      "سفر يومي",
    ],
    description:
      "استأجر تويوتا أڤانزا في لومبوك مع سائق محترف. مناسب للجولات العائلية، رحلات العمل، جولات المدينة، ونقل المطار بسعة تصل إلى 7 ركاب.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "toyota-innova-reborn-lombok",
    name: "Toyota Innova Reborn",
    region: "lombok",
    pricePerDay: "Rp 800.000",
    seats: 7,
    transmission: "Manual",
    features: [
      "سائق محترف",
      "الوقود مشمول",
      "مياه معدنية",
      "مقصورة واسعة",
    ],
    bestFor: [
      "عائلة كبيرة",
      "رحلات عمل",
      "سياحة فاخرة",
    ],
    description:
      "استأجر تويوتا إنوفا ريبورن في لومبوك مع مقصورة واسعة ومريحة. مثالي للرحلات العائلية، المجموعات الصغيرة، والجولات الفاخرة في جزيرة لومبوك.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "toyota-innova-zenix-lombok",
    name: "Toyota Innova Zenix",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "سائق محترف",
      "الوقود مشمول",
      "مياه معدنية",
      "مقصورة فاخرة",
    ],
    bestFor: [
      "سفر كبار الشخصيات",
      "رحلة شركات",
      "جولة عائلية فاخرة",
    ],
    description:
      "استأجر تويوتا إنوفا زينيكس في لومبوك مع راحة فاخرة، مقصورة حديثة، وأداء عالٍ للسفر الترفيهي والعملية.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "toyota-fortuner-gr-lombok",
    name: "Toyota Fortuner GR",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "سيارة دفع رباعي فاخرة",
      "سائق محترف",
      "الوقود مشمول",
      "مياه معدنية",
    ],
    bestFor: [
      "جولة كبار الشخصيات",
      "سفر تنفيذي",
      "عطلة فاخرة",
    ],
    description:
      "استأجر تويوتا فورتشنر GR في لومبوك بمظهر فاخر وراحة متميزة. مناسب للضيوف المميزين، رحلات العمل، والجولات الحصرية.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "mitsubishi-pajero-lombok",
    name: "Mitsubishi Pajero Sport",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "سيارة دفع رباعي فاخرة",
      "سائق محترف",
      "الوقود مشمول",
      "مياه معدنية",
    ],
    bestFor: [
      "سفر فاخر",
      "ضيف مميز",
      "زيارة شركات",
    ],
    description:
      "استأجر ميتسوبيشي باجيرو سبورت في لومبوك لرحلة مريحة وأنيقة. خيار مثالي للضيوف المميزين والجولات الفاخرة.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "toyota-alphard-lombok",
    name: "Toyota Alphard",
    region: "lombok",
    pricePerDay: "Rp 3.500.000",
    seats: 6,
    transmission: "Automatic",
    features: [
      "MPV فاخرة",
      "مقاعد كابتن",
      "سائق محترف",
      "تجربة فاخرة",
    ],
    bestFor: [
      "سفر كبار الشخصيات",
      "حفل زفاف",
      "نقل تنفيذي",
    ],
    description:
      "استأجر تويوتا ألفارد في لومبوك بمرافق متميزة ومقصورة فاخرة. الخيار الأفضل للضيوف المميزين، المسؤولين، واحتياجات النقل الحصرية.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "toyota-hiace-commuter-lombok",
    name: "Toyota Hiace Commuter",
    region: "lombok",
    pricePerDay: "Rp 1.000.000",
    seats: 14,
    transmission: "Manual",
    features: [
      "مقصورة واسعة",
      "مكيف هواء",
      "سائق محترف",
      "الوقود مشمول",
    ],
    bestFor: [
      "تجمع عائلي",
      "جولة جماعية",
      "رحلة شركات",
    ],
    description:
      "استأجر تويوتا هيايس كوميوتر في لومبوك للجولات الجماعية، تجمعات الشركات، والسفر الجماعي بسعة تصل إلى 14 راكباً.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "toyota-hiace-premio-lombok",
    name: "Toyota Hiace Premio",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 12,
    transmission: "Manual",
    features: [
      "مقصورة فاخرة",
      "مقاعد قابلة للإمالة",
      "سائق محترف",
      "الوقود مشمول",
    ],
    bestFor: [
      "جولة جماعية فاخرة",
      "فعالية شركات",
      "عطلة عائلية",
    ],
    description:
      "استأجر تويوتا هيايس بريميو في لومبوك بتصميم داخلي أكثر راحة وحداثة. مناسب للرحلات الجماعية التي تعطي الأولوية للراحة.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "medium-bus-lombok",
    name: "Medium Bus",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 30,
    transmission: "Manual",
    features: [
      "سعة كبيرة",
      "مكيف هواء",
      "سائق محترف",
      "حقيبة واسعة",
    ],
    bestFor: [
      "جولة دراسية",
      "تجمع شركات",
      "مجموعة كبيرة",
    ],
    description:
      "استأجر حافلة متوسطة في لومبوك للجولات الجماعية، الجولات الدراسية، تجمعات الشركات، والأنشطة الجماعية بسعة تصل إلى 30 راكباً.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },

  {
    slug: "big-bus-lombok",
    name: "Big Bus Pariwisata",
    region: "lombok",
    pricePerDay: "Rp 2.200.000",
    seats: 45,
    transmission: "Manual",
    features: [
      "مكيف هواء",
      "مقاعد قابلة للإمالة",
      "حقيبة كبيرة",
      "سائق محترف",
    ],
    bestFor: [
      "مجموعة سياحية",
      "فعالية كبيرة",
      "سفر سياحي",
    ],
    description:
      "استأجر حافلة سياحية كبيرة في لومبوك لاحتياجات المجموعات الكبيرة، الجولات الدراسية، تجمعات الشركات، والسفر بين الوجهات في جزيرة لومبوك.",
    imageTop: HERO.heroLombok,
    imageBottom: HERO.heroLombok,
  },
];