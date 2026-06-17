import { GALLERY, DESTINATIONS } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

export const sumbawaPackages: TourPackage[] = [
  {
    slug: "open-trip-whale-shark-sumbawa",
    title: "松巴哇岛鲸鲨拼团游",
    region: "sumbawa",

    collectionSlug: "open-trip",
    collectionTitle: "拼团游",

    category: "松巴哇岛拼团游",
    duration: "2天1夜",
    featured: true,

    images: [GALLERY.whaleshark, DESTINATIONS.sumbawa],

    summary:
      "前往萨勒湾的拼团游，体验与鲸鲨同游的难忘经历。",

    highlights: [
      "鲸鲨",
      "萨勒湾",
      "拼团游",
      "日出体验",
    ],

    itinerary: [
      "第1天 - 参与者抵达。",
      "第1天 - 前往萨勒湾。",
      "第2天 - 鲸鲨体验。",
      "第2天 - 返回。",
    ],

    includes: ["当地交通", "乘船游览", "当地导游"],

    excludes: ["前往松巴哇岛的交通费用", "个人消费"],
  },
];