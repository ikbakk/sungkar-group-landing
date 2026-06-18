import type { ImageSource } from "@/lib/images";

export type Region = "lombok" | "sumbawa" | "labuan-bajo";
export type TourPackage = {
  slug: string;
  title: string;

  region: Region;

  featured?: boolean;

  collectionSlug: string;
  collectionTitle: string;

  category: string;
  duration: string;

  images: ImageSource[];

  summary: string;

  highlights: string[];
  itinerary: string[];

  includes: string[];
  excludes: string[];
};
