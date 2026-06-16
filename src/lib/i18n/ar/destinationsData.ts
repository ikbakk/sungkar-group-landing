import type { ImageSource } from "@/lib/images";

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

import DestinationLombok from "@/assets/images/destination-lombok.webp";
import DestinationRinjani from "@/assets/images/destination-rinjani.webp";
import DestinationGili from "@/assets/images/destination-gili.webp";
import DestinationSumbawa from "@/assets/images/destination-sumbawa.webp";
import KutaBeach from "@/assets/images/kuta-beach.webp";
import KutaBeach2 from "@/assets/images/kuta-beach-2.webp";
import GiliMeno from "@/assets/images/gili-meno.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.webp";
import TourCultural from "@/assets/images/tour-cultural.webp";
import HeroLombok from "@/assets/images/hero-lombok.webp";
import WhaleShark from "@/assets/images/whaleshark.webp";

export const destinations: Destination[] = [
  {
    slug: "kuta-lombok",
    title: "كوتا لومبوك",
    region: "جنوب لومبوك",
    image: DestinationLombok,
    gallery: [KutaBeach, KutaBeach2, HeroLombok],
    summary:
      "ساحل واسع، وصول إلى العديد من محطات الشاطئ، ووتيرة عطلة مريحة.",
    thingsToDo: ["استكشاف الشاطئ", "مواقع الغروب", "مقاهي محلية"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "تيتابتو",
    region: "شرق لومبوك",
    image: DestinationLombok,
    gallery: [TourCultural, HeroLombok, KutaBeach],
    summary:
      "قرية جبلية أكثر هدوءاً مع مناظر خضراء ووتيرة زيارة بطيئة.",
    thingsToDo: ["جولة في القرية", "مدرجات الأرز", "محطات الشلالات"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "سيمبالون",
    region: "ممر الجبال",
    image: DestinationRinjani,
    gallery: [DestinationRinjani, HeroLombok, TourSnorkeling],
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
    image: DestinationRinjani,
    gallery: [DestinationRinjani, TourSnorkeling, KutaBeach],
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
    image: DestinationRinjani,
    gallery: [DestinationRinjani, TourCultural, KutaBeach2],
    summary:
      "بوابة قريبة من الشلالات، ممرات التخييم، وأجواء جبلية مميزة.",
    thingsToDo: ["الشلالات", "دعم التخييم", "إقامة في المرتفعات"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "غيلي تراوانغان",
    region: "جزر جيلي",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, TourSnorkeling],
    summary:
      "الجزيرة الأسهل لاستكشاف الجزر، الغطس، وإيقاع عطلة الشاطئ.",
    thingsToDo: ["الغطس", "استكشاف الجزر", "وقت الشاطئ"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "غيلي إير",
    region: "جزر جيلي",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, KutaBeach],
    summary:
      "نسخة أكثر هدوءاً من جيلي مع مساحة كبيرة للمشي الترفيهي والغطس القصير.",
    thingsToDo: ["وقت شاطئ مريح", "الغطس", "محطة الغروب"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "غيلي مينو",
    region: "جزر جيلي",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, KutaBeach2],
    summary:
      "أهدأ جزيرة للمسافرين الباحثين عن أجواء خاصة وبسيطة.",
    thingsToDo: ["شاطئ هادئ", "الغطس", "وتيرة مريحة"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "سومباوا",
    region: "جزيرة خارجية",
    image: DestinationSumbawa,
    gallery: [DestinationSumbawa, WhaleShark, TourSnorkeling],
    summary:
      "خيار وجهة أكثر هدوءاً بطبيعة مفتوحة وسواحل قوية.",
    thingsToDo: ["شاطئ هادئ", "مسارات السفر", "محطات المناظر"],
    packages: ["3d2n-lombok-signature"],
  },
];