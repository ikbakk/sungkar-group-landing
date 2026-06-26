import type { UIStrings } from "../types";

const strings = {
  sewaMobil: {
    title: "Sewa Mobil",
    vehicleDetail: "Detail Kendaraan",
    specifications: "Spesifikasi",
    transmission: "Transmisi",
    passengers: "Penumpang",
    features: "Fitur Unggulan",
    suitableFor: "Cocok Untuk",
    viewDetailRent: "Lihat Detail & Sewa",
    pricePerDay: "Harga per hari",
    vehicleFor: "Kendaraan Rental di {region}",
    rentalVehicles: "Pilihan Kendaraan {region}",
    allVehicles:
      "Semua kendaraan di {region} telah diperiksa kondisinya dan dilengkapi dengan asuransi komprehensif untuk keamanan perjalanan Anda.",
    faqTitle: "Pertanyaan Seputar Sewa Mobil",
    faqTitleFor: "Pertanyaan Seputar Sewa Mobil {region}",
  },
} satisfies Pick<UIStrings, "sewaMobil">;

export default strings;
