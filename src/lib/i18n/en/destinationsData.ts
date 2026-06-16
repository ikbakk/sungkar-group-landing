import type { ImageSource } from "@/lib/images";
import { DESTINATIONS, GALLERY, HERO } from "@/assets/images";

export type Destination = {
  slug: string;
  title: string;
  region: string;
  image: ImageSource;
  gallery: ImageSource[];
  summary: string;
  thingsToDo: string[];
  packages: string[];
};

export const destinations: Destination[] = [
  {
    slug: "kuta-lombok",
    title: "Kuta Lombok",
    region: "Selatan Lombok",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.kutaBeach, GALLERY.kutaBeach2, HERO.lombok],
    summary:
      "Expansive coastline, access to many beach stops, and a relaxing vacation pace.",
    thingsToDo: ["Beach exploration", "Sunset spots", "Local cafes"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "Tetebatu",
    region: "Timur Lombok",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.tourCultural, HERO.lombok, GALLERY.kutaBeach],
    summary:
      "A quieter mountain village with green landscapes and a slow visit pace.",
    thingsToDo: ["Village walk", "Rice terraces", "Waterfall stops"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "Sembalun",
    region: "Koridor pegunungan",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, HERO.lombok, GALLERY.tourSnorkeling],
    summary:
      "Mountain corridor commonly used as a starting point for the Rinjani experience.",
    thingsToDo: [
      "Highland views",
      "Sunrise journey",
      "Local farm stops",
    ],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "rinjani",
    title: "Rinjani",
    region: "Area pegunungan",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourSnorkeling, GALLERY.kutaBeach],
    summary:
      "Dramatic peak, mountain air, and sunrise experiences that bring many guests here.",
    thingsToDo: [
      "Scenic viewpoints",
      "Trekking support",
      "Sunrise routes",
    ],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "senaru",
    title: "Senaru",
    region: "Akses Rinjani",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourCultural, GALLERY.kutaBeach2],
    summary:
      "Gateway close to waterfalls, trekking trails, and a distinctive mountain atmosphere.",
    thingsToDo: ["Waterfalls", "Trek support", "Highland stay"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "Gili Trawangan",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.tourSnorkeling],
    summary:
      "The easiest island for island exploration, snorkeling, and beach vacation rhythm.",
    thingsToDo: ["Snorkeling", "Island exploration", "Beach time"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "Gili Air",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach],
    summary:
      "A quieter version of Gili with plenty of space for leisurely walks and short snorkeling.",
    thingsToDo: ["Relaxed beach time", "Snorkeling", "Sunset stop"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "Gili Meno",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach2],
    summary:
      "The quietest island for travelers seeking a private and simple atmosphere.",
    thingsToDo: ["Quiet beach", "Snorkeling", "Relaxed pace"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "Sumbawa",
    region: "Pulau luar",
    image: DESTINATIONS.sumbawa,
    gallery: [DESTINATIONS.sumbawa, GALLERY.whaleshark, GALLERY.tourSnorkeling],
    summary:
      "A quieter destination option with open nature character and strong coastlines.",
    thingsToDo: ["Quiet beach", "Travel routes", "Landscape stops"],
    packages: ["3d2n-lombok-signature"],
  },
];
