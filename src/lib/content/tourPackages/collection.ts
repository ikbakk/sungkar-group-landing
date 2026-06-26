import { tourPackagesData } from "@/generated/content/tour-packages.generated";
import type { TourPackage, Cabin, Region } from "./types";
import { resolveImages } from "./images";

type EntryData = (typeof tourPackagesData)[number];

export async function getPackages(locale = "id"): Promise<TourPackage[]> {
  return tourPackagesData
    .filter((entry) => entry.locale === locale)
    .map(
      (data: EntryData): TourPackage => ({
        slug: data.slug,
        title: data.title,
        region: data.region as Region,
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
            capacity: c.capacity == null ? undefined : String(c.capacity),
            prices: c.prices as Record<string, string>,
            images: resolveImages(c.images),
          }),
        ),
        durationLabels: data.durationLabels,
        priceList: data.priceList as
          | Record<string, Record<string, number>>
          | undefined,
        additionalServices: data.additionalServices,
        dontForgetToBring: data.dontForgetToBring,
        termsAndConditions: data.termsAndConditions,
      }),
    );
}
