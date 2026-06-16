import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const oneDay: TourPackage[] = [
  createPackage(COLLECTIONS.ONE_DAY, {
    title: "Sendang Gile & Tiu Kelep Waterfall Tour Package",
    region: "lombok",
    featured: true,
    category: "Lombok Tour Packages",
    duration: "1 Day",
    images: [HERO.lombok, DESTINATIONS.rinjani],

    summary:
      "Sendang Gile and Tiu Kelep Waterfall tour package that takes you to explore the natural beauty of North Lombok at the foot of Mount Rinjani. Enjoy the atmosphere of Baun Pusuk Tourist Forest, the cultural tour of Senaru Village, the ancient Bayan Beleq Mosque, and the freshness of Lombok's two most popular waterfalls in one comfortable and memorable journey.",

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
    title: "Kuta Lombok Beach & Sasak Village Tour Package",
    region: "lombok",
    featured: true,
    category: "Lombok Tour Packages",
    duration: "1 Day",
    images: [HERO.lombok, GALLERY.kutaBeach, GALLERY.kutaBeach2, GALLERY.tourCultural],

    summary:
      "Kuta Lombok beach tour package combining white sand beach beauty with Sasak cultural tour. Explore Banyumulek Village, Sukarara Village, Sade Village, Kuta Lombok Beach, and Tanjung Aan Beach in one full day with comfortable private tour service.",

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
