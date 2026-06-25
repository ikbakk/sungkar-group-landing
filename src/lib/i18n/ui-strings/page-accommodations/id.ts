import type { UIStrings } from "../types";

const strings = {
  akomodasi: {
    title: "Akomodasi",
    eyebrow: "Pilihan Akomodasi",
    accommodationChoice: "Akomodasi {region}",
    exploreAccommodation:
      "Jelajahi berbagai pilihan penginapan berkualitas di {region} yang disesuaikan dengan kebutuhan dan preferensi perjalanan Anda.",
    faqTitle: "Pertanyaan Seputar Akomodasi",
    features: "Fasilitas Unggulan",
    morePerks: "+{n} lainnya",
  },
} satisfies Pick<UIStrings, "akomodasi">;

export default strings;
