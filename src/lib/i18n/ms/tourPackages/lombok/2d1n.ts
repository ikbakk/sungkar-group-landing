import { HERO, GALLERY, DESTINATIONS } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const twoDays: TourPackage[] = [
  createPackage(COLLECTIONS.TWO_DAYS_ONE_NIGHT, {
    title: "Kuta Lombok Beach & City Tour Package",
    region: "lombok",
    category: "Pakej Pelancongan Lombok",
    duration: "2 Hari 1 Malam",
    images: [HERO.lombok, GALLERY.kutaBeach, GALLERY.kutaBeach2, GALLERY.tourCultural],

    summary:
      "A 2-day 1-night Lombok tour package combining the beauty of Kuta Mandalika Beach, Tanjung Aan Beach, Sasak cultural tour, and historical and religious tours in Mataram City. Suitable for travelers who want to enjoy beaches, culture, cuisine, and Lombok's iconic attractions in a short time.",

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
      "Hotel 1 malam mengikut pilihan",
      "Pengangkutan pelancongan ber-AC",
      "Pemandu profesional",
      "Sarapan di hotel",
      "Makan tengah hari mengikut program",
      "Makan malam mengikut program",
      "Air mineral",
      "BBM dan yuran parkir",
      "Penjemputan lapangan terbang",
      "Penghantaran ke lapangan terbang",
    ],

    excludes: [
      "Tiket pesawat",
      "Tiket masuk tempat tarikan pelancong",
      "Perbelanjaan peribadi",
      "Insurans perjalanan",
      "Tip pemandu dan pemandu pelancong",
    ],
  }),

  createPackage(COLLECTIONS.TWO_DAYS_ONE_NIGHT, {
    title: "Pink Beach & Tanjung Ringgit 2 Days 1 Night Tour Package",
    region: "lombok",
    category: "Pakej Pelancongan Lombok",
    duration: "2 Hari 1 Malam",
    images: [HERO.lombok, DESTINATIONS.lombok, GALLERY.tourSnorkeling],

    summary:
      "A 2-day 1-night tour package to Pink Beach Lombok and Tanjung Ringgit featuring island hopping, snorkeling, and spectacular sea cliff panoramas. Explore Pasir Island, Pink Beach 2, Pink Beach 3, Pink Beach, and Tanjung Ringgit, then enjoy a comfortable night at your chosen hotel.",

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
      "Hotel 1 malam mengikut pilihan",
      "Pengangkutan pelancongan ber-AC",
      "Pemandu profesional",
      "Sarapan 1x",
      "Makan tengah hari 1x",
      "Makan malam 1x",
      "Perahu tradisional sesuai program",
      "Air mineral",
      "BBM dan parkir",
      "Penjemputan dan penghantaran",
    ],

    excludes: [
      "Tiket masuk tempat tarikan pelancong",
      "Peralatan snorkeling",
      "Tiket pesawat",
      "Perbelanjaan peribadi",
      "Insurans perjalanan",
      "Tip driver dan crew",
    ],
  }),
];
