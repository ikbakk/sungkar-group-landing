import type { ImageSource } from "@/lib/images";

export type Accommodation = {
  slug: string;
  name: string;
  region: "lombok" | "sumbawa" | "labuan-bajo";
  perks: string[];
  regionalHighlights: string[];
  description: string;
  image: ImageSource;
};

import { HERO } from "@/assets/images";

export const accommodations: Accommodation[] = [
  {
    slug: "lombok-beachfront",
    name: "Lombok Beachfront Hotels",
    region: "lombok",
    perks: [
      "私人海滩",
      "水上运动",
      "无边泳池",
      "水疗与养生",
    ],
    regionalHighlights: [
      "可直达库塔曼达利卡海滩",
      "靠近梅雷塞山欣赏日落",
      "附近浮潜活动",
    ],
    description:
      "海滨酒店，享有迷人海景，可独家进入龙目岛最佳海滩目的地。",
    image: HERO.heroLombok,
  },
  {
    slug: "lombok-mountain-retreat",
    name: "Lombok Mountain Retreat",
    region: "lombok",
    perks: [
      "山景",
      "徒步向导",
      "从农场到餐桌",
      "传统体验",
    ],
    regionalHighlights: [
      "位于特特巴图，坐拥山景",
      "靠近梯田",
      "附近朱昆瀑布",
    ],
    description:
      "山区住宿，提供地道的龙目岛体验，融入当地生活和自然环境。",
    image: HERO.heroLombok,
  },
  {
    slug: "lombok-gili-gateway",
    name: "Lombok Gili Gateway",
    region: "lombok",
    perks: [
      "吉利群岛通道",
      "乘船游览",
      "潜水中心",
      "岛屿之旅",
    ],
    regionalHighlights: [
      "快速码头前往吉利特拉旺安",
      "提供跳岛游套餐",
      "附近潜水点，珊瑚礁美丽",
    ],
    description:
      "战略位置的住宿，方便前往吉利群岛，提供跳岛游套餐和海上活动。",
    image: HERO.heroLombok,
  },

  {
    slug: "labuan-bajo-komodo-base",
    name: "Labuan Bajo Komodo Base",
    region: "labuan-bajo",
    perks: [
      "科莫多通道",
      "徒步向导",
      "公园服务",
      "摄影之旅",
    ],
    regionalHighlights: [
      "科莫多国家公园入口",
      "护林员简报和安全装备",
      "科莫多巨蜥追踪",
    ],
    description:
      "科莫多探险的主要大本营，可全面进入国家公园，配备经验丰富的导游。",
    image: HERO.heroLombok,
  },
  {
    slug: "labuan-bajo-liveaboard-hub",
    name: "Labuan Bajo Liveaboard Hub",
    region: "labuan-bajo",
    perks: [
      "船宿",
      "潜水装备",
      "帆船之旅",
      "船员服务",
    ],
    regionalHighlights: [
      "最齐全的船队",
      "提供多日帆船套餐",
      "曼塔角潜水巅峰体验",
    ],
    description:
      "纳闽巴霍帆船中心，拥有最优质的船宿选择，开启难忘的科莫多探险之旅。",
    image: HERO.heroLombok,
  },
  {
    slug: "labuan-bajo-beach-resort",
    name: "Labuan Bajo Beach Resort",
    region: "labuan-bajo",
    perks: [
      "私人海滩",
      "无边泳池",
      "精致餐饮",
      "豪华水疗",
    ],
    regionalHighlights: [
      "纳闽巴霍迷人海滩",
      "海湾美丽日落景观",
      "可日游粉色海滩",
    ],
    description:
      "豪华海滨度假村，提供舒适住宿，方便前往科莫多所有旅游目的地。",
    image: HERO.heroLombok,
  },
];