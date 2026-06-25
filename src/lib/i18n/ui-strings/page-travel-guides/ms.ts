import type { UIStrings } from "../types";

const strings = {
  guides: {
    general: "Panduan Umum",
    guideFor: "Panduan {region}",
    readingTime: "minit bacaan",
    keyTakeaways: "Poin-Poin Utama",
    keyTakeawaysDesc:
      "Perkara penting yang perlu anda ketahui dari panduan ini",
    relatedDestinations: "Destinasi Berkaitan",
    relatedDestinationsDesc: "Tempat yang disyorkan berdasarkan panduan ini",
    relatedPackages: "Pakej Pelancongan Berkaitan",
    relatedPackagesDesc: "Pakej pelancongan yang sesuai dengan panduan ini",
    otherGuides: "Panduan Lain",
    destinationRelated: "Destinasi Berkaitan",
    packageRelated: "Pakej Pelancongan Berkaitan",
    regionLombok:
      "Tips dan panduan pelancongan untuk percutian anda di Lombok.",
    regionSumbawa: "Informasi pelancongan untuk pengembaraan di Sumbawa.",
    regionLabuanBajo: "Semua yang perlu anda tahu sebelum ke Labuan Bajo.",
    regionGeneral: "Panduan umum untuk perjalanan anda.",
    stepName: "Langkah {n}",
    guidesIndexDesc:
      "Panduan lengkap untuk merancang perjalanan anda ke Lombok, Sumbawa, dan Labuan Bajo.",
  },
} satisfies Pick<UIStrings, "guides">;

export default strings;
