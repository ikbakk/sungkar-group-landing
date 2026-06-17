import { GALLERY, HERO } from "@/assets/images";
import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const motoGP = [
  createPackage(COLLECTIONS.OPEN_TRIP, {
    title: "Open Trip MotoGP Mandalika 2026 4 Hari 3 Malam",
    region: "lombok",
    category: "Open Trip Lombok",
    duration: "4 Hari 3 Malam",
    images: [
      HERO.lombok,
      GALLERY.kutaBeach,
      GALLERY.tourCultural,
      GALLERY.tourSnorkeling,
    ],

    summary:
      "Open Trip MotoGP Mandalika 2026 menggabungkan pengalaman menonton perlumbaan MotoGP di Pertamina Mandalika International Circuit dengan lawatan budaya Suku Sasak, snorkeling 3 Gili, kuliner khas Lombok, dan lawatan bandar. Pakej sudah termasuk tiket MotoGP Premium Grandstand, penginapan, pengangkutan, dan pendamping perjalanan.",

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
      "Hari 1 - Penjemputan di Lapangan Terbang Antarabangsa Lombok.",
      "Hari 1 - Lawatan ke Desa Adat Sade dan mempelajari budaya Suku Sasak.",
      "Hari 1 - Lawatan ke Desa Tenun Sukarara dan melihat proses pembuatan kain tenun tradisional Lombok.",
      "Hari 1 - Makan tengah hari di restoran tempatan.",
      "Hari 1 - Daftar masuk hotel di Kota Mataram.",
      "Hari 1 - Menikmati makan malam khas Lombok dengan menu Sate Rembiga.",
      "Hari 1 - Kembali ke hotel dan berehat.",

      "Hari 2 - Sarapan pagi dan persiapan snorkeling trip.",
      "Hari 2 - Perjalanan ke Pelabuhan Teluk Kodek.",
      "Hari 2 - Snorkeling trip di kawasan 3 Gili.",
      "Hari 2 - Makan tengah hari di Gili Trawangan.",
      "Hari 2 - Masa bebas menikmati suasana Gili Trawangan.",
      "Hari 2 - Opsional berbasikal atau menggunakan cidomo (biaya peribadi).",
      "Hari 2 - Makan malam di Lombok Exotic.",
      "Hari 2 - Kembali ke hotel.",

      "Hari 3 - Sarapan pagi di hotel.",
      "Hari 3 - Pindah ke Pertamina Mandalika International Circuit.",
      "Hari 3 - Menonton Final Race MotoGP Mandalika 2026.",
      "Hari 3 - Menikmati suasana hari perlumbaan dan aktiviti di kawasan sirkuit.",
      "Hari 3 - Makan malam makanan laut khas Lombok.",
      "Hari 3 - Kembali ke hotel.",

      "Hari 4 - Sarapan pagi dan daftar keluar hotel.",
      "Hari 4 - Membeli belah cenderamata khas Lombok.",
      "Hari 4 - Pindah ke Lapangan Terbang Antarabangsa Lombok.",
      "Hari 4 - Lawatan selesai.",
    ],

    includes: [
      "Tiket MotoGP Premium Grandstand Zon B, C, J, atau K",
      "Hotel 3 malam (1 bilik untuk 2 peserta)",
      "Pengangkutan semasa program",
      "Pemandu dan pemandu pelancong",
      "Sarapan pagi di hotel",
      "Makan tengah hari 2x",
      "Makan malam 3x",
      "Kotak snek 1x",
      "Air mineral",
      "Penjemputan dan penghantaran lapangan terbang",
    ],

    excludes: [
      "Tiket penerbangan pergi balik",
      "Bagasi tambahan penerbangan",
      "Sewa basikal di Gili Trawangan",
      "Cidomo di Gili Trawangan",
      "Perbelanjaan peribadi",
      "Tip pemandu dan pemandu pelancong",
    ],
  }),
];