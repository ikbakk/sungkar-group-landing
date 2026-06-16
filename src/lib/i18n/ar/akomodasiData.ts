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
    name: "فنادق لومبوك الشاطئية",
    region: "lombok",
    perks: [
      "شاطئ خاص",
      "رياضات مائية",
      "مسبح لا متناهي",
      "سبا وعافية",
    ],
    regionalHighlights: [
      "وصول مباشر إلى شاطئ كوتا مانداليكا",
      "قريب من بوكيت ميريزي للغروب",
      "أنشطة الغطس في أقرب منطقة",
    ],
    description:
      "فنادق شاطئية بإطلالات بحرية غريبة ووصول حصري إلى أفضل وجهات الشاطئ في لومبوك.",
    image: HERO.lombok,
  },
  {
    slug: "lombok-mountain-retreat",
    name: "منتجع لومبوك الجبلي",
    region: "lombok",
    perks: [
      "إطلالة جبلية",
      "دليل تخييم",
      "من المزرعة للمائدة",
      "تقليدي",
    ],
    regionalHighlights: [
      "موقع في تيتاباتو مع إطلالة الجبال",
      "قريب من مدرجات الأرز",
      "شلال جوكونغ الأقرب",
    ],
    description:
      "أماكن إقامة جبلية تقدم تجربة لومبوك أصيلة مع الحياة المحلية والمحيط الطبيعي.",
    image: HERO.lombok,
  },
  {
    slug: "lombok-gili-gateway",
    name: "بوابة لومبوك لجزر جيلي",
    region: "lomok",
    perks: [
      "وصول لجزر جيلي",
      "رحلات بالقارب",
      "مركز غوص",
      "جولات الجزر",
    ],
    regionalHighlights: [
      "ميناء سريع إلى غيلي تراوانغان",
      "برامج قفز الجزر متاحة",
      "موقع غوص أقرب مع شعاب جميلة",
    ],
    description:
      "إقامة استراتيجية للوصول السهل إلى جزر جيلي مع برامج قفز الجزر والأنشطة البحرية.",
    image: HERO.lombok,
  },

  {
    slug: "labuan-bajo-komodo-base",
    name: "قاعدة كومودو في لابوان باجو",
    region: "labuan-bajo",
    perks: [
      "وصول لكومودو",
      "دليل تخييم",
      "خدمات الحديقة",
      "جولات تصوير",
    ],
    regionalHighlights: [
      "بوابة دخول حديقة كومودو الوطنية",
      "إحاطة الرانجر ومعدات السلامة",
      "تتبع تنين كومودو في جزيرة كومودو",
    ],
    description:
      "قاعدة رئيسية لمغامرات كومودو مع وصول كامل للحديقة الوطنية وأدلة ذوي خبرة.",
    image: HERO.lombok,
  },
  {
    slug: "labuan-bajo-liveaboard-hub",
    name: "مركز الإبحار المباشر في لابوان باجو",
    region: "labuan-bajo",
    perks: [
      "قوارب الإبحار المباشر",
      "معدات الغوص",
      "رحلات إبحار",
      "خدمات الطاقم",
    ],
    regionalHighlights: [
      "أكمل أسطول قوارب",
      "برامج إبحار متعددة الأيام متاحة",
      "غوص مانتا بوينت في قمته",
    ],
    description:
      "مركز إبحار لابوان باجو مع أفضل مجموعة قوارب الإبحار المباشر لمغامرة كومودو لا تُنسى.",
    image: HERO.lombok,
  },
  {
    slug: "labuan-bajo-beach-resort",
    name: "منتجع شاطئ لابوان باجو",
    region: "labuan-bajo",
    perks: ["شاطئ خاص", "مسبح لا متناهي", "طعام فاخر", "سبا فاخر"],
    regionalHighlights: [
      "شاطئ لابوان باجو الغريب",
      "منظر الغروب في الخليج الجميل",
      "وصول رحلة يومية إلى الشاطئ الوردي",
    ],
    description:
      "منتجع شاطئي فاخر لإقامة مريحة مع وصول سهل لجميع وجهات جولات كومودو.",
    image: HERO.lombok,
  },
];