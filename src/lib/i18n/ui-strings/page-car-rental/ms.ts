import type { UIStrings } from "../types";

const strings = {
  sewaMobil: {
    title: "Sewa Kereta",
    vehicleDetail: "Butiran Kenderaan",
    specifications: "Spesifikasi",
    transmission: "Transmisi",
    passengers: "Penumpang",
    features: "Ciri Utama",
    suitableFor: "Sesuai Untuk",
    viewDetailRent: "Lihat Butiran & Sewa",
    pricePerDay: "Harga sehari",
    vehicleFor: "Kenderaan Sewa di {region}",
    rentalVehicles: "Pilihan Kenderaan {region}",
    allVehicles:
      "Semua kenderaan di {region} telah diperiksa dan disertakan dengan insurans komprehensif untuk keselamatan perjalanan anda.",
    faqTitle: "Soalan Tentang Sewa Kereta",
    faqTitleFor: "Soalan Tentang Sewa Kereta di {region}",
  },
} satisfies Pick<UIStrings, "sewaMobil">;

export default strings;
