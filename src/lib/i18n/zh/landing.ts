import type { ImageSource } from "@/lib/images";
import { HERO, GALLERY } from "@/assets/images";

import { businessInfo } from "@/lib/contact-data";
import { toMarqueeReviews, reviewStats } from "@/lib/content/reviews";
import type { TourPackage } from "@/lib/content/tourPackages/types";

export interface LandingAction {
  label: string;
  href: string;
  variant: "default" | "outline";
}

export interface LandingHeroCard {
  className: string;
  style: string;
  image?: ImageSource;
  alt?: string;
  title: string;
  description?: string;
  emoji?: string;
  contentSizeClass: string;
  width?: number;
  height?: number;
}

export interface LandingTourCard {
  image: ImageSource;
  duration: string;
  slug: string;
  title: string;
  description: string;
  region: string;
  collectionSlug: string;
}

export interface LandingDestinationCard {
  slug: string;
  title: string;
  description: string;
  image: ImageSource;
}

export function toLandingTourCard(tour: TourPackage): LandingTourCard {
  return {
    image: tour.images[0],
    duration: tour.duration,
    region: tour.region,
    collectionSlug: tour.collectionSlug,
    slug: tour.slug,
    title: tour.title,
    description: tour.summary,
  };
}

export interface LandingTransportCard {
  title: string;
  description: string;
}

export const landingHero = {
  eyebrow: "Sungkar Group",
  title: "舒适旅程：龙目岛、松巴哇岛和纳闽巴霍",
  description:
    "在龙目岛、松巴哇岛和纳闽巴霍享受私人团、拼团游和交通服务，随心所欲。",
  primaryAction: {
    label: "咨询您的旅行",
    href: "/kontak",
    variant: "default" as const,
  },
  secondaryAction: {
    label: "查看套餐",
    href: "/paket-wisata",
    variant: "secondary" as const,
  },
  cards: [
    {
      className: "card-1",
      style: "width: 280px; height: 340px;",
      image: GALLERY.kutaBeach,
      alt: "精心组织的旅行行程",
      title: "精心规划的旅行",
      description: "从开始就做好行程细节准备",
      contentSizeClass: "p-6",
    },
    {
      className: "card-2",
      style: "width: 240px; height: 280px; right: 20px; top: 80px;",
      image: GALLERY.kutaBeach2,
      alt: "龙目岛热带海滩",
      title: "海滩与岛屿",
      contentSizeClass: "p-4",
    },
    {
      className: "card-3",
      style: "width: 220px; height: 260px; left: 40px; top: 120px;",
      image: HERO.heroLombok,
      alt: "适合探险旅行的热带自然风光",
      title: "自然探险",
      contentSizeClass: "p-4",
    },
    {
      className: "card-4",
      style: "width: 200px; height: 240px; right: -10px; top: 200px;",
      image: GALLERY.giliMeno,
      alt: "热带水域浮潜活动",
      title: "浮潜与海洋",
      contentSizeClass: "p-3",
    },
  ] satisfies LandingHeroCard[],
};

export const landingFeaturedToursBase = {
  eyebrow: "精选套餐",
  title: "最受欢迎的轻松度假套餐",
  description: "从短途旅行到多日行程，我们的套餐让您只需选择、出发、享受当下。",
  heroImage: GALLERY.tourSnorkeling,
};

export const landingDestinationsBase = {
  eyebrow: "热门目的地",
  title: "最常出现在行程中的目的地",
  description:
    "我们帮助您选择龙目岛和松巴哇岛的最佳路线，如果您想要更大的冒险，还可以准备前往纳闽巴霍的行程。",
};

export const landingTransport = {
  eyebrow: "交通服务",
  title: "舒适交通，灵活出行",
  services: [
    {
      title: "机场接送",
      description: "准时接送，适应早班、晚班或变化的行程安排。",
    },
    {
      title: "私人日租司机",
      description: "适合希望自由调整目的地和停留时间的客人。",
    },
    {
      title: "长期租车",
      description: "租车不带司机，完全自由探索龙目岛和松巴哇岛。",
    },
    {
      title: "多城市旅行套餐",
      description: "龙目岛 - 松巴哇岛 - 纳闽巴霍一站式交通，经济实惠。",
    },
  ] satisfies LandingTransportCard[],
};

export const landingTestimonials = {
  eyebrow: "客人评价",
  title: "值得信赖的舒适、有序旅行",
  description:
    "从家庭、情侣到团体，以下评价展示了与我们的当地团队一起留下的难忘旅行经历。",
  testimonials: toMarqueeReviews(),
  stats: reviewStats,
};

export const landingVideo = {
  eyebrow: "旅行故事",

  title: "出发前感受旅行氛围",

  description: "短视频帮助您想象我们为每次旅程准备的路线、目的地的服务氛围。",

  ctaLabel: "访问YouTube频道",

  ctaHref:
    businessInfo.socialLinks.youtube ??
    "https://www.youtube.com/@sungkargroup1",

  embedUrl: "https://www.youtube.com/embed/HgicK9YpopU?si=m7IlfX-QXJVB0mVC",
} as const;

export const landingReels = {
  eyebrow: "Instagram Reels",

  title: "观看我们旅程中的真实瞬间",

  description:
    "捕捉真实的旅行时刻、目的地亮点以及您与Sungkar Group一起旅行时可以期待的氛围。",

  ctaLabel: "在Instagram上关注",

  ctaHref:
    businessInfo.socialLinks.instagram ??
    "https://www.instagram.com/tour_lombok/",

  reels: [
    { url: "https://www.instagram.com/reel/DZUQ_-9zibN/" },
    { url: "https://www.instagram.com/reel/DWxxbfbEw4j/" },
    { url: "https://www.instagram.com/reel/DB7V1JxMpiu/" },
    { url: "https://www.instagram.com/reel/DSccM5jEmEG/" },
  ],
} as const;

export const landingBackgroundImage = HERO.hero;
