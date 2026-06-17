import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

export const labuanBajoPackages: TourPackage[] = [
  {
    slug: "paket-1-hari-full-labuan-bajo",
    title: "رحلة يوم كامل لابوان باجو",
    region: "labuan-bajo",

    collectionSlug: "1-hari",
    collectionTitle: "Paket 1 Hari",

    category: "باكيجات سياحة لابوان باجو",
    duration: "يوم واحد",
    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary:
      "رحلة يوم واحد بالقارب السريع إلى الوجهات الرئيسية في منتزه كومودو الوطني.",

    highlights: ["جزيرة بادار", "الشاطئ الوردي", "جزيرة كومودو", "مانتا بوينت"],

    itinerary: [
      "اليوم 1 - جزيرة بادار.",
      "اليوم 1 - الشاطئ الوردي.",
      "اليوم 1 - جزيرة كومودو.",
      "اليوم 1 - مانتا بوينت.",
    ],

    includes: ["قارب سريع", "مرشد محلي", "معدات الغطس"],

    excludes: ["تذكرة دخول منتزه كومودو الوطني", "المصروفات الشخصية"],
  },

  {
    slug: "overnight-komodo-adventure",
    title: "مغامرة كومودو ليلة واحدة",
    region: "labuan-bajo",

    collectionSlug: "paket-2-hari-1-malam",
    collectionTitle: "Paket 2 Hari 1 Malam",

    category: "باكيجات سياحة لابوان باجو",
    duration: "يومان وليلة",
    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "رحلة إقامة قصيرة على متن القارب مع المبيت.",

    highlights: ["إقامة على القارب", "جزيرة بادار", "الشاطئ الوردي"],

    itinerary: [
      "اليوم 1 - جزيرة كيلور.",
      "اليوم 1 - جزيرة كالونغ.",
      "اليوم 2 - جزيرة بادار.",
      "اليوم 2 - جزيرة كومودو.",
    ],

    includes: ["مقصورة على القارب", "وجبات", "مرشد"],

    excludes: ["تذكرة دخول كومودو", "المصروفات الشخصية"],
  },

  {
    slug: "sailing-komodo-3d2n",
    title: "إبحار كومودو 3 أيام وليلتان",
    region: "labuan-bajo",

    collectionSlug: "paket-3-hari-2-malam",
    collectionTitle: "Paket 3 Hari 2 Malam",

    category: "باكيجات سياحة لابوان باجو",
    duration: "3 أيام وليلتان",
    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "برنامج الإبحار الأكثر شعبية في منطقة كومودو.",

    highlights: ["جزيرة بادار", "الشاطئ الوردي", "جزيرة كومودو", "مانتا بوينت"],

    itinerary: [
      "اليوم 1 - جزيرة كيلور.",
      "اليوم 2 - جزيرة بادار.",
      "اليوم 2 - جزيرة كومودو.",
      "اليوم 3 - جزيرة كاناوا.",
    ],

    includes: ["مقصورة على القارب", "وجبات", "مرشد"],

    excludes: ["تذكرة دخول كومودو", "المصروفات الشخصية"],
  },
];