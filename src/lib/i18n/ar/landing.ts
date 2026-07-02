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
  eyebrow: "مجموعة سونغكار",
  title: "سفر مريح إلى لومبوك، سومباوا، ولابوان باجو",
  description:
    "جولات خاصة، رحلات مفتوحة، ونقل وفق سرعتك الخاصة في لومبوك، سومباوا، ولابوان باجو.",
  primaryAction: {
    label: "استشر رحلتك",
    href: "/kontak",
    variant: "default" as const,
  },
  secondaryAction: {
    label: "عرض البرامج",
    href: "/paket-wisata",
    variant: "secondary" as const,
  },
  cards: [
    {
      className: "card-1",
      style: "width: 280px; height: 340px;",
      image: GALLERY.kutaBeach,
      alt: "برنامج سفر منظم بشكل جيد",
      title: "رحلات مدروسة جيداً",
      description: "تفاصيل الرحلة معدة من البداية",
      contentSizeClass: "p-6",
    },
    {
      className: "card-2",
      style: "width: 240px; height: 280px; right: 20px; top: 80px;",
      image: GALLERY.kutaBeach2,
      alt: "شاطئ استوائي في لومبوك",
      title: "شواطئ وجزر",
      contentSizeClass: "p-4",
    },
    {
      className: "card-3",
      style: "width: 220px; height: 260px; left: 40px; top: 120px;",
      image: HERO.heroLombok,
      alt: "منظر طبيعي استوائي للسفر المغامر",
      title: "مغامرة الطبيعة",
      contentSizeClass: "p-4",
    },
    {
      className: "card-4",
      style: "width: 200px; height: 240px; right: -10px; top: 200px;",
      image: GALLERY.giliMeno,
      alt: "أنشطة الغطس في المياه الاستوائية",
      title: "الغطس والبحر",
      contentSizeClass: "p-3",
    },
  ] satisfies LandingHeroCard[],
};

export const landingFeaturedToursBase = {
  eyebrow: "برامج مميزة",
  title: "أكثر البرامج شعبية لعطلة خالية من المتاعب",
  description:
    "من الرحلات القصيرة إلى الرحلات متعددة الأيام، برامجنا مصممة بحيث يمكنك فقط الاختيار، والذهاب، والاستمتاع باللحظة.",
  heroImage: GALLERY.tourSnorkeling,
};

export const landingDestinationsBase = {
  eyebrow: "الوجهات المفضلة",
  title: "الوجهات التي تظهر غالباً في البرامج",
  description:
    "نساعدك في اختيار أفضل المسارات في لومبوك وسومباوا، بينما نجهز أيضاً رحلات متجهة إلى لابوان باجو إذا كنت تريد مغامرة أكبر.",
};

export const landingTransport = {
  eyebrow: "النقل",
  title: "نقل مريح لرحلة مرنة",
  services: [
    {
      title: "نقل المطار",
      description:
        "استقبال في الوقت المحدد للجداول الصباحية، المسائية، أو المتغيرة.",
    },
    {
      title: "سائق يومي خاص",
      description: "مثالي للضيوف الذين يريدون حرية تعديل الوجهات ومدة التوقف.",
    },
    {
      title: "تأجير سيارة",
      description:
        "حرية كاملة لاستكشاف لومبوك وسومباوا بسيارة مستأجرة دون سائق.",
    },
    {
      title: "برنامج سفر متعدد المدن",
      description:
        "نقل مشترك بين لومبوك - سومباوا - لابوان باجو في برنامج واحد فعال من حيث التكلفة.",
    },
  ] satisfies LandingTransportCard[],
};

export const landingTestimonials = {
  eyebrow: "آراء الضيوف",
  title: "موثوق بها لسفر مريح ومنظم بشكل جيد",
  description:
    "من العائلات، والأزواج، إلى المجموعات، المراجعات التالية تظهر تجارب سفر لا تُنسى مع فريقنا المحلي.",
  testimonials: toMarqueeReviews(),
  stats: reviewStats,
};

export const landingVideo = {
  eyebrow: "قصص الرحلات",

  title: "شاهد أجواء الرحلة قبل أن تذهب",

  description:
    "مقاطع فيديو قصيرة تساعدك على تخيل المسارات، والوجهات، وأجواء الخدمة التي نعدها لكل رحلة.",

  ctaLabel: "زيارة قناة يوتيوب",

  ctaHref:
    businessInfo.socialLinks.youtube ??
    "https://www.youtube.com/@sungkargroup1",

  embedUrl: "https://www.youtube.com/embed/HgicK9YpopU?si=m7IlfX-QXJVB0mVC",
} as const;

export const landingReels = {
  eyebrow: "مقاطع إنستغرام",

  title: "شاهد لحظات حقيقية من رحلاتنا",

  description:
    "التقط لحظات سفر حقيقية، وأبرز الوجهات، والأجواء التي يمكنك توقعها في رحلتك مع مجموعة سونغكار.",

  ctaLabel: "تابعنا على إنستغرام",

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
