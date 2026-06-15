import type { COLLECTIONS } from "./collections";

export type PackageCollection = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];

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

  images: ImageMetadata[];

  summary: string;

  highlights: string[];
  itinerary: string[];

  includes: string[];
  excludes: string[];
};
