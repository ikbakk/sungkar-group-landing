import { tourPackagesData } from "@/generated/content/tour-packages.generated";
import { safeParse } from "@/lib/errors/content-errors";
import { generatedTourPackageSchema } from "@/lib/content/generated/schemas";
import type { TourPackage, Cabin, Region } from "./types";
import { resolveImages } from "./images";

export async function getPackages(locale = "id"): Promise<TourPackage[]> {
  return tourPackagesData
    .filter((entry) => entry.locale === locale)
    .map((entry): TourPackage => {
      const data = safeParse(
        generatedTourPackageSchema,
        entry,
        `tour-packages:${entry.slug}:${entry.locale}`,
      );

      return {
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
            prices: c.prices ?? {},
            images: resolveImages(c.images),
          }),
        ),
        durationLabels: data.durationLabels,
        priceList: data.priceList,
        priceListLabels: data.priceListLabels,
        additionalServices: data.additionalServices,
        dontForgetToBring: data.dontForgetToBring,
        termsAndConditions: data.termsAndConditions,
      };
    });
}
