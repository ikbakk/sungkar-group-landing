import type { ImageSource } from "@/lib/images";
import { DESTINATIONS, GALLERY, HERO } from "@/assets/images";

export type Destination = {
  slug: string;
  title: string;
  region: string;
  image: ImageSource;
  gallery: ImageSource[];
  summary: string;
  thingsToDo: string[];
  packages: string[];
};

export const destinations: Destination[] = [
  {
    slug: "kuta-lombok",
    title: "كوتا لومبوك",
    region: "جنوب لومبوك",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.kutaBeach, GALLERY.kutaBeach2, HERO.lombok],
    summary:
      "ساحل واسع، وصول إلى العديد من محطات الشاطئ، ووتيرة عطلة مريحة.",
    thingsToDo: ["استكشاف الشاطئ", "مواقع الغروب", "مقاهي محلية"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "تيتابتو",
    region: "شرق لومبوك",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.tourCultural, HERO.lombok, GALLERY.kutaBeach],
    summary:
      "قرية جبلية أكثر هدوءاً مع مناظر خضراء ووتيرة زيارة بطيئة.",
    thingsToDo: ["جولة في القرية", "مدرجات الأرز", "محطات الشلالات"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "سيمبالون",
    region: "ممر الجبال",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, HERO.lombok, GALLERY.tourSnorkeling],
    summary:
      "ممر جبلي يستخدم عادة كنقطة انطلاق لتجربة رينجاني.",
    thingsToDo: [
      "مناظر المرتفعات",
      "رحلة الشروق",
      "محطات المزارع المحلية",
    ],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "rinjani",
    title: "رينجاني",
    region: "منطقة جبلية",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourSnorkeling, GALLERY.kutaBeach],
    summary:
      "قمة درامية، هواء جبلي، وتجارب شروق تجلب العديد من الضيوف إلى هنا.",
    thingsToDo: [
      "نقاط مراقبة خلابة",
      "دعم التخييم",
      "مسارات الشروق",
    ],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "senaru",
    title: "سينارو",
    region: "وصول رينجاني",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourCultural, GALLERY.kutaBeach2],
    summary:
      "بوابة قريبة من الشلالات، ممرات التخييم، وأجواء جبلية مميزة.",
    thingsToDo: ["الشلالات", "دعم التخييم", "إقامة في المرتفعات"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "غيلي تراوانغان",
    region: "جزر جيلي",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.tourSnorkeling],
    summary:
      "الجزيرة الأسهل لاستكشاف الجزر، الغطس، وإيقاع عطلة الشاطئ.",
    thingsToDo: ["الغطس", "استكشاف الجزر", "وقت الشاطئ"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "غيلي إير",
    region: "جزر جيلي",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach],
    summary:
      "نسخة أكثر هدوءاً من جيلي مع مساحة كبيرة للمشي الترفيهي والغطس القصير.",
    thingsToDo: ["وقت شاطئ مريح", "الغطس", "محطة الغروب"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "غيلي مينو",
    region: "جزر جيلي",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach2],
    summary:
      "أهدأ جزيرة للمسافرين الباحثين عن أجواء خاصة وبسيطة.",
    thingsToDo: ["شاطئ هادئ", "الغطس", "وتيرة مريحة"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "سومباوا",
    region: "جزيرة خارجية",
    image: DESTINATIONS.sumbawa,
    gallery: [DESTINATIONS.sumbawa, GALLERY.whaleshark, GALLERY.tourSnorkeling],
    summary:
      "خيار وجهة أكثر هدوءاً بطبيعة مفتوحة وسواحل قوية.",
    thingsToDo: ["شاطئ هادئ", "مسارات السفر", "محطات المناظر"],
    packages: ["3d2n-lombok-signature"],
  },
];