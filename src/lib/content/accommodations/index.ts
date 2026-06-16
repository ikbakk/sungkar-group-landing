export const akomodasiPageContent = {
  hero: {
    eyebrow: "Rekomendasi Penginapan",
    title: "Hotel rekomendasi untuk perjalanan Anda",
    description:
      "Setiap paket wisata kami sudah termasuk penginapan terpilih yang menjamin kenyamanan dan kemudahan akses ke destinasi terbaik.",
  },
  regions: {
    lombok: {
      title: "Hotel di Lombok",
      description:
        "Hotel terbaik di Lombok — dari resort tepi pantai hingga penginapan di kaki Gunung Rinjani — untuk pengalaman menginap yang nyaman selama tour Anda.",
    },
    sumbawa: {
      title: "Hotel di Sumbawa",
      description:
        "Penginapan di Sumbawa untuk petualangan laut bersama whale shark, dengan akses langsung ke destinasi wisata bahari.",
    },
    "labuan-bajo": {
      title: "Hotel di Labuan Bajo",
      description:
        "Resort dan hotel di Labuan Bajo sebagai basecamp eksplorasi Komodo National Park dengan standar kenyamanan tinggi.",
    },
  },
  cta: {
    title: "Ingin rekomendasi hotel spesifik?",
    description:
      "Kami siap merekomendasikan penginapan yang paling sesuai dengan rencana perjalanan Anda.",
    buttonLabel: "Tanya Kami",
    buttonHref: "/kontak",
  },
} as const;

export { accommodations } from "./data";
export type { Accommodation } from "./data";
