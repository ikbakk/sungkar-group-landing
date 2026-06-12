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

  image: ImageMetadata;

  summary: string;

  highlights: string[];
  itinerary: string[];

  includes: string[];
  excludes: string[];
};
