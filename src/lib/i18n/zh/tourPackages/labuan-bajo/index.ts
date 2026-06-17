import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

export const labuanBajoPackages: TourPackage[] = [
  {
    slug: "paket-1-hari-full-labuan-bajo",
    title: "纳闽巴霍一日游",
    region: "labuan-bajo",

    collectionSlug: "1-hari",
    collectionTitle: "1日套餐",

    category: "纳闽巴霍旅游套餐",
    duration: "1天",
    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary:
      "快艇一日游，前往科莫多国家公园主要景点。",

    highlights: ["帕达尔岛", "粉色海滩", "科莫多岛", "蝠鲼角"],

    itinerary: [
      "第1天 - 帕达尔岛。",
      "第1天 - 粉色海滩。",
      "第1天 - 科莫多岛。",
      "第1天 - 蝠鲼角。",
    ],

    includes: ["快艇", "当地导游", "浮潜"],

    excludes: ["科莫多国家公园门票", "个人消费"],
  },

  {
    slug: "overnight-komodo-adventure",
    title: "科莫多过夜探险之旅",
    region: "labuan-bajo",

    collectionSlug: "paket-2-hari-1-malam",
    collectionTitle: "2天1夜套餐",

    category: "纳闽巴霍旅游套餐",
    duration: "2天1夜",
    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "短途船宿体验，在船上过夜。",

    highlights: ["船宿体验", "帕达尔岛", "粉色海滩"],

    itinerary: [
      "第1天 - 凯洛尔岛。",
      "第1天 - 卡隆岛。",
      "第2天 - 帕达尔岛。",
      "第2天 - 科莫多岛。",
    ],

    includes: ["船上舱位", "餐食", "导游"],

    excludes: ["科莫多门票", "个人消费"],
  },

  {
    slug: "sailing-komodo-3d2n",
    title: "科莫多帆船之旅3天2夜",
    region: "labuan-bajo",

    collectionSlug: "paket-3-hari-2-malam",
    collectionTitle: "3天2夜套餐",

    category: "纳闽巴霍旅游套餐",
    duration: "3天2夜",
    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "科莫多地区最受欢迎的帆船之旅。",

    highlights: ["帕达尔岛", "粉色海滩", "科莫多岛", "蝠鲼角"],

    itinerary: [
      "第1天 - 凯洛尔岛。",
      "第2天 - 帕达尔岛。",
      "第2天 - 科莫多岛。",
      "第3天 - 卡纳瓦岛。",
    ],

    includes: ["船上舱位", "餐食", "导游"],

    excludes: ["科莫多门票", "个人消费"],
  },
];