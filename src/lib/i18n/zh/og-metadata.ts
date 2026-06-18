import type { ImageSource } from "@/lib/images";
import { HERO, GALLERY, DESTINATIONS } from "@/assets/images";

export interface OGMetadata {
  title: string;
  description: string;
  image: ImageSource;
  imageAlt: string;
  type?: "website" | "article" | "profile";
}

export const pageOGMetadata: Record<string, OGMetadata> = {
  "/": {
    title: "Sungkar Group - 旅游与旅行",
    description:
      "龙目岛本地旅行社，提供私人团、目的地游、交通、评价和旅行指南。",
    image: HERO.heroLombok,
    imageAlt: "龙目岛日落海滩景观",
  },
  "/tentang-kami": {
    title: "关于我们 | Sungkar Group - 旅游与旅行",
    description: "了解Sungkar Group、我们本地团队和可持续旅行方式。",
    image: GALLERY.tourCultural,
    imageAlt: "与Sungkar Group团队一起体验当地文化",
  },
  "/paket-wisata": {
    title: "旅游套餐 | Sungkar Group - 旅游与旅行",
    description: "探索完整的龙目岛旅游套餐，从3日游到当地文化体验。",
    image: HERO.heroLombok,
    imageAlt: "龙目岛旅游套餐，提供最佳本地服务",
  },
  "/destinasi": {
    title: "目的地 | Sungkar Group - 旅游与旅行",
    description:
      "发现龙目岛、吉利群岛和林贾尼山的最佳目的地，开启您的冒险之旅。",
    image: DESTINATIONS.lombok,
    imageAlt: "龙目岛最佳旅游目的地",
  },
  "/ulasan": {
    title: "客户评价 | Sungkar Group - 旅游与旅行",
    description: "阅读旅行者们对Sungkar Group服务的真实评价。",
    image: HERO.heroLombok,
    imageAlt: "Sungkar Group客户的积极评价",
  },
  "/panduan-wisata": {
    title: "旅行指南 | Sungkar Group - 旅游与旅行",
    description: "规划龙目岛之行的完整指南，从天气到当地交通。",
    image: DESTINATIONS.rinjani,
    imageAlt: "龙目岛完整旅行指南",
  },
  "/kontak": {
    title: "联系我们 | Sungkar Group - 旅游与旅行",
    description:
      "通过WhatsApp、电子邮件或在线表格联系Sungkar Group咨询可用性。",
    image: HERO.heroLombok,
    imageAlt: "联系Sungkar Group获取免费咨询",
  },
  "/faq": {
    title: "常见问题 | Sungkar Group - 旅游与旅行",
    description: "关于旅游套餐和Sungkar Group服务的常见问题完整解答。",
    image: HERO.heroLombok,
    imageAlt: "龙目岛旅游常见问题解答",
  },
  "/akomodasi": {
    title: "住宿推荐 | Sungkar Group - 旅游与旅行",
    description: "龙目岛最佳住宿推荐，价格实惠，设施齐全。",
    image: DESTINATIONS.lombok,
    imageAlt: "龙目岛住宿推荐",
  },
  "/sewa-mobil": {
    title: "租车服务 | Sungkar Group - 旅游与旅行",
    description: "租用本地车辆，配备经验丰富的司机，享受舒适灵活的旅程。",
    image: HERO.heroLombok,
    imageAlt: "专业司机租车服务",
  },
};

export function getPageOGMetadata(pathname: string): OGMetadata {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  return pageOGMetadata[normalizedPath] || pageOGMetadata["/"];
}

export function getPackageOGMetadata(
  title: string,
  description: string,
  image: ImageSource,
  imageAlt: string,
): OGMetadata {
  return {
    title: `${title} | Sungkar Group - 旅游与旅行`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}

export function getDestinationOGMetadata(
  title: string,
  description: string,
  image: ImageSource,
  imageAlt: string,
): OGMetadata {
  return {
    title: `${title} | Sungkar Group - 旅游与旅行`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}
