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
      "专业司机",
      "含燃油",
      "矿泉水",
      "12小时使用",
    ],
    bestFor: [
      "家庭旅行",
      "龙目岛城市游",
      "一日游",
    ],
    description:
      "在龙目岛租用丰田Avanza，配备专业司机。适合家庭旅游、商务旅行、城市观光和机场接送，最多可容纳7名乘客。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "toyota-innova-reborn-lombok",
    name: "Toyota Innova Reborn",
    region: "lombok",
    pricePerDay: "Rp 800.000",
    seats: 7,
    transmission: "Manual",
    features: [
      "专业司机",
      "含燃油",
      "矿泉水",
      "宽敞车厢",
    ],
    bestFor: [
      "大家庭",
      "商务出行",
      "高端旅行",
    ],
    description:
      "在龙目岛租用丰田Innova Reborn，车厢宽敞舒适。适合家庭出游、小团体和龙目岛高端旅行。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "toyota-innova-zenix-lombok",
    name: "Toyota Innova Zenix",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "专业司机",
      "含燃油",
      "矿泉水",
      "高级内饰",
    ],
    bestFor: [
      "VIP出行",
      "企业差旅",
      "高级家庭游",
    ],
    description:
      "在龙目岛租用丰田Innova Zenix，享受高级舒适、现代内饰和卓越性能，适合休闲和商务出行。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "toyota-fortuner-gr-lombok",
    name: "Toyota Fortuner GR",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "高级SUV",
      "专业司机",
      "含燃油",
      "矿泉水",
    ],
    bestFor: [
      "VIP旅行",
      "行政出行",
      "高端度假",
    ],
    description:
      "在龙目岛租用丰田Fortuner GR，外观豪华，舒适高端。适合VIP客人、商务差旅和专属旅行。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "mitsubishi-pajero-lombok",
    name: "Mitsubishi Pajero Sport",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "高级SUV",
      "专业司机",
      "含燃油",
      "矿泉水",
    ],
    bestFor: [
      "豪华旅行",
      "VIP客人",
      "企业访问",
    ],
    description:
      "在龙目岛租用三菱帕杰罗运动版，享受舒适和优雅的旅程。VIP客人和高端旅行的理想选择。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "toyota-alphard-lombok",
    name: "Toyota Alphard",
    region: "lombok",
    pricePerDay: "Rp 3.500.000",
    seats: 6,
    transmission: "Automatic",
    features: [
      "豪华MPV",
      "独立座椅",
      "专业司机",
      "高级体验",
    ],
    bestFor: [
      "VIP出行",
      "婚礼",
      "行政接送",
    ],
    description:
      "在龙目岛租用丰田Alphard，配备高级设施和豪华车厢。VIP客人、官员和专属交通需求的最佳选择。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "toyota-hiace-commuter-lombok",
    name: "Toyota Hiace Commuter",
    region: "lombok",
    pricePerDay: "Rp 1.000.000",
    seats: 14,
    transmission: "Manual",
    features: [
      "宽敞车厢",
      "空调",
      "专业司机",
      "含燃油",
    ],
    bestFor: [
      "家庭聚会",
      "团体旅行",
      "企业出行",
    ],
    description:
      "在龙目岛租用丰田Hiace Commuter，适合旅游团、公司聚会和团体出行，最多可容纳14名乘客。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "toyota-hiace-premio-lombok",
    name: "Toyota Hiace Premio",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 12,
    transmission: "Manual",
    features: [
      "高级车厢",
      "可躺座椅",
      "专业司机",
      "含燃油",
    ],
    bestFor: [
      "高端团体游",
      "企业活动",
      "家庭度假",
    ],
    description:
      "在龙目岛租用丰田Hiace Premio，内饰更舒适现代。适合注重舒适度的团体出行。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "medium-bus-lombok",
    name: "中型巴士",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 30,
    transmission: "Manual",
    features: [
      "大容量",
      "空调",
      "专业司机",
      "宽敞行李厢",
    ],
    bestFor: [
      "研学旅行",
      "公司聚会",
      "大型团体",
    ],
    description:
      "在龙目岛租用中型巴士，适合旅游团、研学旅行、公司郊游和团体活动，最多可容纳30名乘客。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },

  {
    slug: "big-bus-lombok",
    name: "大型旅游巴士",
    region: "lombok",
    pricePerDay: "Rp 2.200.000",
    seats: 45,
    transmission: "Manual",
    features: [
      "空调",
      "可躺座椅",
      "大行李厢",
      "专业司机",
    ],
    bestFor: [
      "旅游团",
      "大型活动",
      "旅行出游",
    ],
    description:
      "在龙目岛租用大型旅游巴士，满足大型团体需求、研学旅行、公司聚会和龙目岛跨目的地旅行。",
    imageTop: HERO.lombok,
    imageBottom: HERO.lombok,
  },
];