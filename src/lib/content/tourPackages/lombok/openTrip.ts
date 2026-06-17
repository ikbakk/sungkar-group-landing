import { GALLERY, HERO } from "@/assets/images";
import { COLLECTIONS } from "../collections";
import { createPackage } from "../utils";

export const motoGP = [
  createPackage(COLLECTIONS.OPEN_TRIP, {
    title: "Open Trip MotoGP Mandalika 2026 4 Hari 3 Malam",
    region: "lombok",
    category: "Open Trip Lombok",
    duration: "4 Hari 3 Malam",
    images: [
      HERO.heroLombok,
      GALLERY.kutaBeach,
      GALLERY.tourCultural,
      GALLERY.tourSnorkeling,
    ],

    summary:
      "Open Trip MotoGP Mandalika 2026 yang menggabungkan pengalaman menonton balapan MotoGP di Pertamina Mandalika International Circuit dengan wisata budaya Suku Sasak, snorkeling 3 Gili, kuliner khas Lombok, dan city tour. Paket sudah termasuk tiket MotoGP Premium Grandstand, akomodasi, transportasi, dan pendamping perjalanan.",

    highlights: [
      "Tiket MotoGP Premium Grandstand",
      "MotoGP Mandalika 2026",
      "Snorkeling 3 Gili",
      "Gili Trawangan",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Mandalika International Circuit",
      "Open Trip Lombok",
    ],

    itinerary: [
      "Hari 1 - Penjemputan di Bandara Internasional Lombok.",
      "Hari 1 - Mengunjungi Desa Adat Sade dan mengenal budaya Suku Sasak.",
      "Hari 1 - Mengunjungi Desa Tenun Sukarara dan melihat proses pembuatan kain tenun tradisional Lombok.",
      "Hari 1 - Makan siang di restoran lokal.",
      "Hari 1 - Check-in hotel di Kota Mataram.",
      "Hari 1 - Menikmati makan malam khas Lombok dengan menu Sate Rembiga.",
      "Hari 1 - Kembali ke hotel dan istirahat.",

      "Hari 2 - Sarapan pagi dan persiapan snorkeling trip.",
      "Hari 2 - Perjalanan menuju Pelabuhan Teluk Kodek.",
      "Hari 2 - Snorkeling trip di kawasan 3 Gili.",
      "Hari 2 - Makan siang di Gili Trawangan.",
      "Hari 2 - Waktu bebas menikmati suasana Gili Trawangan.",
      "Hari 2 - Opsional bersepeda atau menggunakan cidomo (biaya pribadi).",
      "Hari 2 - Makan malam di Lombok Exotic.",
      "Hari 2 - Kembali ke hotel.",

      "Hari 3 - Sarapan pagi di hotel.",
      "Hari 3 - Transfer menuju Pertamina Mandalika International Circuit.",
      "Hari 3 - Menonton Final Race MotoGP Mandalika 2026.",
      "Hari 3 - Menikmati suasana race day dan aktivitas di area sirkuit.",
      "Hari 3 - Makan malam seafood khas Lombok.",
      "Hari 3 - Kembali ke hotel.",

      "Hari 4 - Sarapan pagi dan check-out hotel.",
      "Hari 4 - Berbelanja oleh-oleh khas Lombok.",
      "Hari 4 - Transfer menuju Bandara Internasional Lombok.",
      "Hari 4 - Tour selesai.",
    ],

    includes: [
      "Tiket MotoGP Premium Grandstand Zona B, C, J, atau K",
      "Hotel 3 malam (1 kamar untuk 2 peserta)",
      "Transportasi selama program",
      "Driver dan tour guide",
      "Sarapan pagi di hotel",
      "Makan siang 2x",
      "Makan malam 3x",
      "Snack box 1x",
      "Mineral water",
      "Penjemputan dan pengantaran bandara",
    ],

    excludes: [
      "Tiket pesawat PP",
      "Bagasi tambahan maskapai",
      "Sewa sepeda di Gili Trawangan",
      "Cidomo di Gili Trawangan",
      "Pengeluaran pribadi",
      "Tip guide dan driver",
    ],
  }),
];
