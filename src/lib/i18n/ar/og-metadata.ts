import type { ImageSource } from "@/lib/images";
import HeroLombok from "@/assets/images/hero-lombok.webp";
import TourCultural from "@/assets/images/tour-cultural.webp";
import DestinationLombok from "@/assets/images/destination-lombok.webp";
import DestinationRinjani from "@/assets/images/destination-rinjani.webp";

export interface OGMetadata {
  title: string;
  description: string;
  image: ImageSource;
  imageAlt: string;
  type?: "website" | "article" | "profile";
}

export const pageOGMetadata: Record<string, OGMetadata> = {
  "/": {
    title: "مجموعة سونغكار - السياحة والسفر",
    description:
      "مشغل سياحي محلي مقره لومبوك للجولات الخاصة، الوجهات، النقل، التقييمات، وأدلة السفر.",
    image: HeroLombok,
    imageAlt: "منظر شاطئ لومبوك عند الغروب",
  },
  "/tentang-kami": {
    title: "من نحن | مجموعة سونغكار - السياحة والسفر",
    description:
      "تعرف أكثر على مجموعة سونغكار، فريقنا المحلي، ونهجنا للسياحة المستدامة.",
    image: TourCultural,
    imageAlt:
      "تجربة ثقافية محلية مع فريق مجموعة سونغكار",
  },
  "/paket-wisata": {
    title: "برامج سياحية | مجموعة سونغكار - السياحة والسفر",
    description:
      "استكشف برامج سياحة لومبوك الكاملة من جولات 3 أيام إلى تجارب ثقافية محلية.",
    image: HeroLombok,
    imageAlt: "برامج سياحة لومبوك مع أفضل خدمة محلية",
  },
  "/destinasi": {
    title: "الوجهات | مجموعة سونغكار - السياحة والسفر",
    description:
      "اكتشف أفضل الوجهات في لومبوك، جزر جيلي، وجبال رينجاني لمغامرتك.",
    image: DestinationLombok,
    imageAlt: "أفضل وجهات السفر في لومبوك",
  },
  "/ulasan": {
    title: "التقييمات | مجموعة سونغكار - السياحة والسفر",
    description:
      "اقرأ تقييمات المسافرين الذين خاضوا تجربة الجولات مع مجموعة سونغكار.",
    image: HeroLombok,
    imageAlt: "تقييمات إيجابية من زوار مجموعة سونغكار",
  },
  "/panduan-wisata": {
    title: "أدلة السفر | مجموعة سونغكار - السياحة والسفر",
    description:
      "أدلة كاملة لتخطيط رحلتك إلى لومبوك، من الطقس إلى النقل المحلي.",
    image: DestinationRinjani,
    imageAlt: "دليل سفر كامل للومبوك",
  },
  "/kontak": {
    title: "اتصل بنا | مجموعة سونغكار - السياحة والسفر",
    description:
      "تواصل مع مجموعة سونغكار عبر واتساب، البريد الإلكتروني، أو النموذج الإلكتروني للتحقق من التوافر.",
    image: HeroLombok,
    imageAlt: "تواصل مع مجموعة سونغكار لاستشارة مجانية",
  },
  "/faq": {
    title: "الأسئلة الشائعة | مجموعة سونغكار - السياحة والسفر",
    description:
      "إجابات كاملة للأسئلة الشائعة حول برامج السياحة وخدمات مجموعة سونغكار.",
    image: HeroLombok,
    imageAlt: "الأسئلة المتكررة حول جولات لومبوك",
  },
  "/akomodasi": {
    title: "الإقامة | مجموعة سونغكار - السياحة والسفر",
    description:
      "أفضل توصيات الإقامة في لومبوك بأسعار معقولة مع مرافق كاملة.",
    image: DestinationLombok,
    imageAlt: "توصيات الإقامة في لومبوك",
  },
  "/sewa-mobil": {
    title: "تأجير السيارات | مجموعة سونغكار - السياحة والسفر",
    description:
      "استأجر مركبات محلية مع سائقين ذوي خبرة لرحلة مريحة ومرنة.",
    image: HeroLombok,
    imageAlt: "خدمة تأجير سيارات مع سائقين محترفين",
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
    title: `${title} | مجموعة سونغكار - السياحة والسفر`,
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
    title: `${title} | مجموعة سونغكار - السياحة والسفر`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}