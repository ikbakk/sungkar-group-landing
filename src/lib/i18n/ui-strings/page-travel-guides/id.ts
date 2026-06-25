import type { UIStrings } from "../types";

const strings = {
  guides: {
    general: "Panduan Umum",
    guideFor: "Panduan {region}",
    readingTime: "menit membaca",
    keyTakeaways: "Poin-Poin Kunci",
    keyTakeawaysDesc: "Hal penting yang perlu Anda ketahui dari panduan ini",
    relatedDestinations: "Destinasi Terkait",
    relatedDestinationsDesc:
      "Tempat-tempat yang direkomendasikan berdasarkan panduan ini",
    relatedPackages: "Paket Wisata Terkait",
    relatedPackagesDesc: "Paket wisata yang sesuai dengan panduan ini",
    otherGuides: "Panduan Lainnya",
    destinationRelated: "Destinasi Terkait",
    packageRelated: "Paket Wisata Terkait",
    regionLombok: "Tips dan panduan wisata untuk liburan Anda di Lombok.",
    regionSumbawa: "Informasi wisata untuk petualangan di Sumbawa.",
    regionLabuanBajo: "Semua yang perlu Anda tahu sebelum ke Labuan Bajo.",
    regionGeneral: "Panduan umum untuk perjalanan Anda.",
    stepName: "Poin {n}",
    guidesIndexDesc:
      "Panduan lengkap untuk merencanakan perjalanan Anda ke Lombok, Sumbawa, dan Labuan Bajo.",
  },
} satisfies Pick<UIStrings, "guides">;

export default strings;
