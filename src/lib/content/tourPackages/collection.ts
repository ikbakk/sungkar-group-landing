import { getCollection } from "astro:content";
import type { TourPackage, Cabin } from "./types";
import { resolveImages } from "./images";

type EntryData = {
  title: string;
  region: "lombok" | "sumbawa" | "labuan-bajo" | "sailing-labuan-bajo" | "lombok-to-bajo";
  featured?: boolean;
  collectionSlug: string;
  collectionTitle: string;
  category: string;
  duration: string;
  images: string[];
  summary: string;
  highlights: string[];
  itinerary: string[];
  includes: string[];
  excludes: string[];
  boatName?: string;
  boatType?: string;
  boatCapacity?: number;
  boatSpecs?: { label: string; value: string }[];
  cabins?: {
    name: string;
    description?: string;
    prices: Record<string, string>;
    images: string[];
  }[];
  durationLabels?: Record<string, string>;
  priceList?: Record<string, Record<string, number>>;
  additionalServices?: string[];
  dontForgetToBring?: string[];
  termsAndConditions?: string[];
};

export async function getPackages(locale = "id"): Promise<TourPackage[]> {
  const entries = await getCollection("tourPackages");

  const results: TourPackage[] = [];

  for (const entry of entries) {
    const data = entry.data as EntryData;
    const entryLocale = entry.id.split("/").pop() || "id";

    if (entryLocale !== locale) continue;

    const slug = entry.id.split("/")[0];

    results.push({
      slug,
      title: data.title,
      region: data.region,
      featured: data.featured ?? false,
      collectionSlug: data.collectionSlug,
      collectionTitle: data.collectionTitle,
      category: data.category,
      duration: data.duration,
      images: resolveImages(data.images),
      summary: data.summary,
      highlights: data.highlights,
      itinerary: data.itinerary,
      includes: data.includes,
      excludes: data.excludes,
      boatName: data.boatName,
      boatType: data.boatType,
      boatCapacity: data.boatCapacity,
      boatSpecs: data.boatSpecs,
      cabins: data.cabins?.map(
        (c): Cabin => ({
          ...c,
          images: resolveImages(c.images),
        }),
      ),
      durationLabels: data.durationLabels,
      priceList: data.priceList,
      additionalServices: data.additionalServices,
      dontForgetToBring: data.dontForgetToBring,
      termsAndConditions: data.termsAndConditions,
    });
  }

  return results;
}
