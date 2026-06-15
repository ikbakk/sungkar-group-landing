import HeroLombok from "@/assets/images/hero-lombok.webp";
import DestinationRinjani from "@/assets/images/destination-rinjani.webp";
import KutaBeach from "@/assets/images/kuta-beach.webp";
import KutaBeach2 from "@/assets/images/kuta-beach-2.webp";
import TourCultural from "@/assets/images/tour-cultural.webp";

import type { TourPackage } from "../../../content/tourPackages/types";

import { COLLECTIONS } from "../../../content/tourPackages/collections";
import { createPackage } from "../../../content/tourPackages/utils";

export const oneDay: TourPackage[] = [
  createPackage(COLLECTIONS.ONE_DAY, {
    title: "برنامج سياحة شلالاتاندانغ جيلي و تيو كيليب",
    region: "lombok",
    featured: true,
    category: "Lombok Tour Packages",
    duration: "1 Day",
    images: [HeroLombok, DestinationRinjani],

    summary:
      "برنامج سياحة شلالاتاندانغ جيلي و تيو كيليب يأخذك لاستكشاف الجمال الطبيعي لشمال لومبوك عند سفح جبل رينجاني. استمتع بأجواء غابة باون بوسوك السياحية، الجولة الثقافية في قرية سينارو، المسجد العتيق بايان بيليك، وانتعاش أشهر شلالين في لومبوك في رحلة مريحة ولا تُنسى.",

    highlights: [
      "Air Terjun Tiu Kelep",
      "Air Terjun Sendang Gile",
      "Desa Adat Senaru",
      "Masjid Kuno Bayan Beleq",
      "Hutan Wisata Baun Pusuk",
      "Private Tour Lombok Utara",
    ],

    itinerary: [
      "Hari 1 - Penjemputan di hotel setelah sarapan pagi.",
      "Hari 1 - Mengunjungi Hutan Wisata Baun Pusuk untuk melihat dan berinteraksi dengan kawanan kera jinak.",
      "Hari 1 - Wisata sejarah ke Masjid Bayan Beleq, masjid tertua yang menjadi salah satu ikon sejarah Islam di Lombok.",
      "Hari 1 - Trekking menuju Air Terjun Sendang Gile di kawasan Taman Nasional Gunung Rinjani.",
      "Hari 1 - Melanjutkan perjalanan ke Air Terjun Tiu Kelep dan menikmati keindahan alam Lombok Utara.",
      "Hari 1 - Makan siang di restoran lokal sekitar kawasan Senaru.",
      "Hari 1 - Mengunjungi Desa Senaru untuk melihat rumah adat dan kehidupan masyarakat Sasak yang masih lestari.",
      "Hari 1 - Berbelanja oleh-oleh khas Lombok seperti mutiara, madu Lombok, telur asin, dan kerajinan lokal.",
      "Hari 1 - Menikmati makan malam khas Lombok.",
      "Hari 1 - Kembali ke hotel dan acara selesai.",
    ],

    includes: [
      "Transportasi wisata ber-AC",
      "Driver profesional",
      "Makan siang",
      "Makan malam",
      "Air mineral",
      "BBM dan biaya parkir",
      "Penjemputan dan pengantaran hotel",
    ],

    excludes: [
      "Tiket masuk objek wisata",
      "Guide lokal trekking",
      "Keperluan pribadi",
      "Asuransi perjalanan",
      "Tip driver dan guide",
    ],
  }),

  createPackage(COLLECTIONS.ONE_DAY, {
    title: "برنامج سياحة شاطئ كوتا لومبوك وقرية ساساك",
    region: "lombok",
    featured: true,
    category: "Lombok Tour Packages",
    duration: "1 Day",
    images: [HeroLombok, KutaBeach, KutaBeach2, TourCultural],

    summary:
      "برنامج سياحة شاطئ كوتا لومبوك يجمع بين جمال الشاطئ الرملي الأبيض والجولة الثقافية للساساك. استكشف قرية بانيوموليك، قرية سوكارارا، قرية سادي، شاطئ كوتا لومبوك، وشاطئ تانجونغ آن في يوم كامل مع خدمة جولة خاصة مريحة.",

    highlights: [
      "Pantai Kuta Lombok",
      "Pantai Tanjung Aan",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Desa Gerabah Banyumulek",
      "Private Tour",
    ],

    itinerary: [
      "Hari 1 - Penjemputan di hotel setelah sarapan pagi.",
      "Hari 1 - Mengunjungi Desa Banyumulek dan melihat proses pembuatan gerabah tradisional khas Lombok.",
      "Hari 1 - Wisata budaya ke Desa Sukarara untuk mengenal dan mencoba proses menenun kain tradisional Sasak.",
      "Hari 1 - Mengunjungi Desa Adat Sade untuk melihat kehidupan masyarakat Suku Sasak yang masih mempertahankan tradisi leluhur.",
      "Hari 1 - Makan siang di kawasan Pantai Kuta Lombok.",
      "Hari 1 - Menikmati keindahan Pantai Kuta Lombok yang terkenal dengan pasir putih unik seperti butiran merica.",
      "Hari 1 - Bersantai dan menikmati panorama Pantai Tanjung Aan yang menjadi salah satu pantai terindah di Lombok.",
      "Hari 1 - Berbelanja oleh-oleh khas Lombok seperti mutiara, madu Lombok, telur asin, dan kerajinan lokal.",
      "Hari 1 - Menikmati makan malam khas Lombok.",
      "Hari 1 - Kembali ke hotel dan acara selesai.",
    ],

    includes: [
      "Transportasi wisata ber-AC",
      "Driver profesional",
      "Makan siang",
      "Makan malam",
      "Air mineral",
      "BBM dan biaya parkir",
      "Penjemputan dan pengantaran hotel",
    ],

    excludes: [
      "Tiket masuk objek wisata",
      "Pengeluaran pribadi",
      "Asuransi perjalanan",
      "Tip driver dan guide",
      "Aktivitas tambahan di pantai",
    ],
  }),
];