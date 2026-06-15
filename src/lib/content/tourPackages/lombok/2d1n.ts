import HeroLombok from "@/assets/images/hero-lombok.webp";
import KutaBeach from "@/assets/images/kuta-beach.webp";
import KutaBeach2 from "@/assets/images/kuta-beach-2.webp";
import TourCultural from "@/assets/images/tour-cultural.webp";
import DestinationLombok from "@/assets/images/destination-lombok.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.webp";

import type { TourPackage } from "../types";

import { COLLECTIONS } from "../collections";
import { createPackage } from "../utils";

export const twoDays: TourPackage[] = [
  createPackage(COLLECTIONS.TWO_DAYS_ONE_NIGHT, {
    title: "Paket Wisata Pantai Kuta Lombok & Wisata Kota",
    region: "lombok",
    category: "Paket Wisata Lombok",
    duration: "2 Hari 1 Malam",
    images: [HeroLombok, KutaBeach, KutaBeach2, TourCultural],

    summary:
      "Paket wisata Lombok 2 hari 1 malam yang menggabungkan keindahan Pantai Kuta Mandalika, Pantai Tanjung Aan, wisata budaya Suku Sasak, serta wisata sejarah dan religi di Kota Mataram. Cocok bagi wisatawan yang ingin menikmati pantai, budaya, kuliner, dan ikon wisata Lombok dalam waktu singkat.",

    highlights: [
      "Pantai Kuta Mandalika",
      "Pantai Tanjung Aan",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Desa Gerabah Banyumulek",
      "Taman Lingsar",
      "Taman Narmada",
      "Wisata Kota Mataram",
    ],

    itinerary: [
      "Hari 1 - Penjemputan di Bandara Internasional Lombok.",
      "Hari 1 - Menikmati panorama Pantai Kuta Mandalika dengan pasir putih khas yang menyerupai butiran merica.",
      "Hari 1 - Makan siang di kawasan Pantai Kuta Lombok.",
      "Hari 1 - Mengunjungi Pantai Tanjung Aan dan menikmati suasana pantai yang tenang serta pemandangan laut yang memukau.",
      "Hari 1 - Mengunjungi Desa Sukarara untuk melihat proses pembuatan kain tenun tradisional khas Lombok.",
      "Hari 1 - Mengunjungi Desa Adat Sade dan mengenal budaya serta kehidupan masyarakat Suku Sasak.",
      "Hari 1 - Mengunjungi Desa Banyumulek yang terkenal sebagai sentra kerajinan gerabah tradisional Lombok.",
      "Hari 1 - Check-in hotel dan waktu istirahat.",
      "Hari 1 - Menikmati makan malam khas Lombok.",

      "Hari 2 - Sarapan pagi di hotel.",
      "Hari 2 - Mengunjungi Taman Lingsar, kompleks bersejarah yang menjadi simbol kerukunan umat Hindu dan Islam Wetu Telu di Lombok.",
      "Hari 2 - Mengunjungi Taman Narmada, taman peninggalan Kerajaan Mataram yang terkenal dengan sumber mata air alaminya.",
      "Hari 2 - Menikmati makan siang khas Lombok dengan menu sate bulayak.",
      "Hari 2 - Berbelanja oleh-oleh khas Lombok seperti mutiara, madu Lombok, telur asin, dan kerajinan lokal.",
      "Hari 2 - Transfer menuju Bandara Internasional Lombok.",
      "Hari 2 - Tour selesai.",
    ],

    includes: [
      "Hotel 1 malam sesuai pilihan",
      "Transportasi wisata ber-AC",
      "Driver profesional",
      "Sarapan pagi di hotel",
      "Makan siang sesuai program",
      "Makan malam sesuai program",
      "Air mineral",
      "BBM dan biaya parkir",
      "Penjemputan bandara",
      "Pengantaran ke bandara",
    ],

    excludes: [
      "Tiket pesawat",
      "Tiket masuk objek wisata",
      "Pengeluaran pribadi",
      "Asuransi perjalanan",
      "Tip driver dan guide",
    ],
  }),

  createPackage(COLLECTIONS.TWO_DAYS_ONE_NIGHT, {
    title: "Paket Wisata Pantai Pink & Tanjung Ringgit 2 Hari 1 Malam",
    region: "lombok",
    category: "Paket Wisata Lombok",
    duration: "2 Hari 1 Malam",
    images: [HeroLombok, DestinationLombok, TourSnorkeling],

    summary:
      "Paket wisata 2 hari 1 malam ke Pantai Pink Lombok dan Tanjung Ringgit yang menghadirkan pengalaman island hopping, snorkeling, serta panorama tebing laut yang spektakuler. Jelajahi Pulau Pasir, Pantai Pink 2, Pantai Pink 3, Pantai Pink, dan Tanjung Ringgit, lalu nikmati malam yang nyaman di hotel pilihan Anda.",

    highlights: [
      "Pantai Pink Lombok",
      "Tanjung Ringgit",
      "Pulau Pasir",
      "Pantai Pink 2",
      "Pantai Pink 3",
      "Snorkeling",
      "Private Boat Trip",
      "Goa Jepang",
      "Menginap 1 Malam",
    ],

    itinerary: [
      "Hari 1 - Penjemputan di Bandara Lombok, hotel, atau lokasi yang telah ditentukan.",
      "Hari 1 - Perjalanan menuju Pelabuhan Telong Elong atau Tanjung Luar.",
      "Hari 1 - Menyeberang menggunakan perahu tradisional menuju Pulau Pasir.",
      "Hari 1 - Menikmati keindahan Pulau Pasir yang hanya muncul saat air laut surut.",
      "Hari 1 - Mengunjungi Pantai Pink 3 dan menikmati panorama pantai yang masih alami.",
      "Hari 1 - Mengunjungi Pantai Pink 2 untuk berfoto dan menikmati suasana pantai eksotis Lombok Timur.",
      "Hari 1 - Makan siang di kawasan Pantai Pink.",
      "Hari 1 - Menikmati keindahan Pantai Pink dan aktivitas snorkeling.",
      "Hari 1 - Mengunjungi Goa Jepang peninggalan Perang Dunia II.",
      "Hari 1 - Perjalanan menuju Tanjung Ringgit dan menikmati panorama tebing serta laut lepas.",
      "Hari 1 - Mengunjungi bunker dan meriam peninggalan Jepang di kawasan Tanjung Ringgit.",
      "Hari 1 - Check-in hotel dan waktu istirahat.",
      "Hari 1 - Makan malam khas Lombok.",

      "Hari 2 - Sarapan pagi di hotel.",
      "Hari 2 - Waktu bebas untuk menikmati fasilitas hotel atau aktivitas pribadi.",
      "Hari 2 - Berbelanja oleh-oleh khas Lombok seperti mutiara, madu Lombok, dan kerajinan lokal.",
      "Hari 2 - Transfer menuju Bandara Internasional Lombok atau lokasi tujuan.",
      "Hari 2 - Tour selesai.",
    ],

    includes: [
      "Hotel 1 malam sesuai pilihan",
      "Transportasi wisata ber-AC",
      "Driver profesional",
      "Sarapan pagi 1x",
      "Makan siang 1x",
      "Makan malam 1x",
      "Perahu tradisional sesuai program",
      "Air mineral",
      "BBM dan parkir",
      "Penjemputan dan pengantaran",
    ],

    excludes: [
      "Tiket masuk objek wisata",
      "Peralatan snorkeling",
      "Tiket pesawat",
      "Pengeluaran pribadi",
      "Asuransi perjalanan",
      "Tip driver dan crew",
    ],
  }),
];
