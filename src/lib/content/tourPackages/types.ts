import type { ImageSource } from "@/lib/images";

export type Region = "lombok" | "sumbawa" | "labuan-bajo";

export type BoatSpec = {
  label: string;
  value: string;
};

export type Cabin = {
  name: string;
  description?: string;
  price: string;
  images: ImageSource[];
};

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

  boatName?: string;
  boatType?: string;
  boatCapacity?: number;
  boatSpecs?: BoatSpec[];
  cabins?: Cabin[];
  termsAndConditions?: string[];
};
