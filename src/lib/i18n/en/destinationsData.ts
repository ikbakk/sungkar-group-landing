import type { ImageSource } from "@/lib/images";

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

import DestinationLombok from "@/assets/images/destination-lombok.webp";
import DestinationRinjani from "@/assets/images/destination-rinjani.webp";
import DestinationGili from "@/assets/images/destination-gili.webp";
import DestinationSumbawa from "@/assets/images/destination-sumbawa.webp";
import KutaBeach from "@/assets/images/kuta-beach.webp";
import KutaBeach2 from "@/assets/images/kuta-beach-2.webp";
import GiliMeno from "@/assets/images/gili-meno.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.webp";
import TourCultural from "@/assets/images/tour-cultural.webp";
import HeroLombok from "@/assets/images/hero-lombok.webp";
import WhaleShark from "@/assets/images/whaleshark.webp";

export const destinations: Destination[] = [
  {
    slug: "kuta-lombok",
    title: "Kuta Lombok",
    region: "Selatan Lombok",
    image: DestinationLombok,
    gallery: [KutaBeach, KutaBeach2, HeroLombok],
    summary:
      "Expansive coastline, access to many beach stops, and a relaxing vacation pace.",
    thingsToDo: ["Beach exploration", "Sunset spots", "Local cafes"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "Tetebatu",
    region: "Timur Lombok",
    image: DestinationLombok,
    gallery: [TourCultural, HeroLombok, KutaBeach],
    summary:
      "A quieter mountain village with green landscapes and a slow visit pace.",
    thingsToDo: ["Village walk", "Rice terraces", "Waterfall stops"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "Sembalun",
    region: "Koridor pegunungan",
    image: DestinationRinjani,
    gallery: [DestinationRinjani, HeroLombok, TourSnorkeling],
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
    image: DestinationRinjani,
    gallery: [DestinationRinjani, TourSnorkeling, KutaBeach],
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
    image: DestinationRinjani,
    gallery: [DestinationRinjani, TourCultural, KutaBeach2],
    summary:
      "Gateway close to waterfalls, trekking trails, and a distinctive mountain atmosphere.",
    thingsToDo: ["Waterfalls", "Trek support", "Highland stay"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "Gili Trawangan",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, TourSnorkeling],
    summary:
      "The easiest island for island exploration, snorkeling, and beach vacation rhythm.",
    thingsToDo: ["Snorkeling", "Island exploration", "Beach time"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "Gili Air",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, KutaBeach],
    summary:
      "A quieter version of Gili with plenty of space for leisurely walks and short snorkeling.",
    thingsToDo: ["Relaxed beach time", "Snorkeling", "Sunset stop"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "Gili Meno",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, KutaBeach2],
    summary:
      "The quietest island for travelers seeking a private and simple atmosphere.",
    thingsToDo: ["Quiet beach", "Snorkeling", "Relaxed pace"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "Sumbawa",
    region: "Pulau luar",
    image: DestinationSumbawa,
    gallery: [DestinationSumbawa, WhaleShark, TourSnorkeling],
    summary:
      "A quieter destination option with open nature character and strong coastlines.",
    thingsToDo: ["Quiet beach", "Travel routes", "Landscape stops"],
    packages: ["3d2n-lombok-signature"],
  },
];
