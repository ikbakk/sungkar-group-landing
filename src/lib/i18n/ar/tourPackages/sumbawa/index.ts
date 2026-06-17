import { GALLERY, DESTINATIONS } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

export const sumbawaPackages: TourPackage[] = [
  {
    slug: "open-trip-whale-shark-sumbawa",
    title: "رحلة مفتوحة للحوت القرش سومباوا",
    region: "sumbawa",

    collectionSlug: "open-trip",
    collectionTitle: "رحلة مفتوحة",

    category: "رحلة مفتوحة سومباوا",
    duration: "يومان وليلة",
    featured: true,

    images: [GALLERY.whaleshark, DESTINATIONS.sumbawa],

    summary:
      "رحلة مفتوحة إلى خليج صالح لتجربة لا تُنسى للسباحة مع الحوت القرش.",

    highlights: [
      "الحوت القرش",
      "خليج صالح",
      "رحلة مفتوحة",
      "تجربة شروق الشمس",
    ],

    itinerary: [
      "اليوم 1 - وصول المشاركين.",
      "اليوم 1 - التوجه إلى خليج صالح.",
      "اليوم 2 - تجربة الحوت القرش.",
      "اليوم 2 - العودة.",
    ],

    includes: ["مواصلات محلية", "رحلة قارب", "مرشد محلي"],

    excludes: ["تذاكر إلى سومباوا", "المصروفات الشخصية"],
  },
];