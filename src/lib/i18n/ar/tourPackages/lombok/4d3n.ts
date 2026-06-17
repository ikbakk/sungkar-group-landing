import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const fourDays: TourPackage[] = [
  createPackage(COLLECTIONS.FOUR_DAYS_THREE_NIGHTS, {
    title: "Lombok 4 Days 3 Nights Gili Trawangan & Gili Nanggu",
    region: "lombok",
    featured: true,
    category: "باكيجات سياحة لومبوك",
    duration: "4 أيام و3 ليال",
    images: [HERO.lombok, DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.tourSnorkeling],

    summary:
      "A 4-day 3-night Lombok tour package combining Sasak cultural tours, the beauty of Kuta Mandalika Beach, Bukit Merese, Gili Nanggu, Gili Sudak, Gili Kedis, and Gili Trawangan. Suitable for couples, families, and groups who want to enjoy a complete Lombok experience with private tours, island hopping, and Lombok's signature cuisine.",

    highlights: [
      "Gili Trawangan",
      "Gili Nanggu",
      "Gili Sudak",
      "Gili Kedis",
      "Pantai Kuta Mandalika",
      "Bukit Merese",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Private Island Hopping",
      "Kuliner Khas Lombok",
    ],

    itinerary: [
      "اليوم 1 - الاستقبال في مطار لومبوك الدولي.",
      "اليوم 1 - زيارة قرية سوكارارا للنسيج ومشاهدة عملية صناعة نسيج السونغكيت التقليدي في لومبوك.",
      "اليوم 1 - زيارة قرية سادي التقليدية للتعرف على حياة وثقافة شعب ساساك.",
      "اليوم 1 - الغداء في منطقة كوتا مانداليكا.",
      "اليوم 1 - الاستمتاع بجمال شاطئ كوتا مانداليكا.",
      "اليوم 1 - زيارة شاطئ تانجونغ آن برمال لومبوك البيضاء.",
      "اليوم 1 - الاستمتاع بمنظر غروب الشمس من بوكيت ميريسي.",
      "اليوم 1 - عشاء أيام تاليوانغ لومبوك التقليدي.",
      "اليوم 1 - تسجيل الدخول في الفندق ووقت حر.",

      "اليوم 2 - الإفطار dalam الفندق.",
      "اليوم 2 - التوجه إلى ميناء تاوون لبدء جولة الجزر.",
      "اليوم 2 - الاستمتاع بجمال جيلي نانغو وأنشطة الغطس.",
      "اليوم 2 - غداء من المأكولات البحرية على الشاطئ.",
      "اليوم 2 - زيارة جيلي تانغكونغ.",
      "اليوم 2 - زيارة جيلي سوداك.",
      "اليوم 2 - زيارة جيلي كيديس المعروفة كجزيرة رومانسية في لومبوك.",
      "اليوم 2 - العودة إلى ميناء تاوون.",
      "اليوم 2 - عشاء في مطعم مع موسيقى حية.",
      "اليوم 2 - العودة إلى الفندق ووقت حر.",

      "اليوم 3 - الإفطار dalam الفندق.",
      "اليوم 3 - التوجه إلى ميناء تيلوك نارا.",
      "اليوم 3 - العبور إلى جيلي تراوانجان بالقارب السريع الخاص.",
      "اليوم 3 - الاستمتاع بأجواء جيلي تراوانجان ووقت حر.",
      "اليوم 3 - اختياري: الغطس، ركوب الدراجات، أو التجول بالتشيدومو (تكلفة شخصية).",
      "اليوم 3 - الغداء في مطعم على شاطئ جيلي تراوانجان.",
      "اليوم 3 - العودة إلى جزيرة لومبوك في المساء.",
      "اليوم 3 - زيارة معرض لؤلؤ لومبوك التقليدي.",
      "اليوم 3 - Berbelanja oleh-oleh khas Lombok.",
      "اليوم 3 - عشاء في مطعم مع موسيقى حية.",
      "اليوم 3 - العودة إلى الفندق.",

      "اليوم 4 - الإفطار dalam الفندق.",
      "اليوم 4 - City tour Kota Mataram dan sekitarnya.",
      "اليوم 4 - وقت حر قبل المغادرة.",
      "اليوم 4 - Transfer menuju Bandara Internasional Lombok.",
      "اليوم 4 - انتهاء الرحلة.",
    ],

    includes: [
      "Hotel 3 malam sesuai pilihan",
      "Transportasi wisata selama program",
      "Driver merangkap guide untuk 2–6 peserta",
      "Guide berlisensi HPI untuk grup besar",
      "الإفطار في الفندق",
      "الغداء حسب البرنامج",
      "العشاء حسب البرنامج",
      "Private speedboat PP Gili Trawangan",
      "Tiket masuk objek wisata",
      "Donasi wisata",
      "Air mineral selama tour",
      "Dokumentasi perjalanan (tentatif)",
      "الاستقبال والتوصيل من وإلى المطار",
    ],

    excludes: [
      "Tiket pesawat",
      "Sewa sepeda di Gili Trawangan",
      "Cidomo di Gili Trawangan",
      "الغطس في جيلي تراوانجان",
      "Pengeluaran pribadi",
      "Laundry hotel",
      "Tip guide dan crew",
      "وجبات خارج البرنامج",
    ],
  }),
];
