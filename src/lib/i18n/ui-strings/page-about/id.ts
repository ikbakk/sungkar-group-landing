import type { UIStrings } from "../types";

const strings = {
  about: {
    vision: "Visi",
    mission: "Misi",
    ourValues: "Nilai-Nilai Kami",
    whyChooseUs: "Mengapa wisatawan memilih Sungkar Group",
    ourJourney: "Perjalanan Kami",
    whatWeDo: "Apa yang kami kerjakan",
  },
} satisfies Pick<UIStrings, "about">;

export default strings;
