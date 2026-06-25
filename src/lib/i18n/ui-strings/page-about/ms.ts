import type { UIStrings } from "../types";

const strings = {
  about: {
    vision: "Visi",
    mission: "Misi",
    ourValues: "Nilai-Nilai Kami",
    whyChooseUs: "Mengapa pelancong memilih Sungkar Group",
    ourJourney: "Perjalanan Kami",
    whatWeDo: "Apa yang Kami Lakukan",
  },
} satisfies Pick<UIStrings, "about">;

export default strings;
