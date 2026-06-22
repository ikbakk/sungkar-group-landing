import type { ImageSource } from "@/lib/images";

export type Region =
  | "lombok"
  | "sumbawa"
  | "labuan-bajo"
  | "sailing-labuan-bajo"
  | "lombok-to-bajo"
  | "lombok-bajo";

export type BoatSpec = {
  label: string;
  value: string;
};

export type Cabin = {
  name: string;
  description?: string;
  prices: Record<string, string>;
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

  durationLabels?: Record<string, string>;
  priceList?: Record<string, Record<string, number>>;
  additionalServices?: string[];
  dontForgetToBring?: string[];
  boatName?: string;
  boatType?: string;
  boatCapacity?: number;
  boatSpecs?: BoatSpec[];
  cabins?: Cabin[];
  termsAndConditions?: string[];
};
