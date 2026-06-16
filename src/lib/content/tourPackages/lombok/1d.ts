import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "../types";

import { COLLECTIONS } from "../collections";
import { createPackage } from "../utils";

export const oneDay: TourPackage[] = [
  createPackage(COLLECTIONS.ONE_DAY, {
    title: "Paket Wisata Air Terjun Sendang Gile & Tiu Kelep",
    region: "lombok",
    featured: true,
    category: "Paket Wisata Lombok",
    duration: "1 Hari",
    images: [HERO.lombok, DESTINATIONS.rinjani],

    summary:
      "Paket wisata Air Terjun Sendang Gile dan Tiu Kelep yang mengajak Anda menjelajahi keindahan alam Lombok Utara di kaki Gunung Rinjani. Nikmati suasana Hutan Wisata Baun Pusuk, wisata budaya Desa Senaru, Masjid Kuno Bayan Beleq, serta kesegaran dua air terjun paling populer di Lombok dalam satu perjalanan yang nyaman dan berkesan.",

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
    title: "Paket Wisata Pantai Kuta Lombok & Desa Suku Sasak",
    region: "lombok",
    featured: true,
    category: "Paket Wisata Lombok",
    duration: "1 Hari",
    images: [HERO.lombok, GALLERY.kutaBeach, GALLERY.kutaBeach2, GALLERY.tourCultural],

    summary:
      "Paket wisata Pantai Kuta Lombok yang menggabungkan keindahan pantai pasir putih dengan wisata budaya Suku Sasak. Jelajahi Desa Banyumulek, Desa Sukarara, Desa Sade, Pantai Kuta Lombok, dan Pantai Tanjung Aan dalam satu hari penuh bersama layanan private tour yang nyaman.",

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
