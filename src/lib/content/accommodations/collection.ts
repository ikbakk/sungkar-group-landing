import { getAccommodationsData } from "../generated/direct-json-loader";
import { safeParse } from "@/lib/errors/content-errors";
import { generatedAccommodationSchema } from "@/lib/content/generated/schemas";
import type { Accommodation } from "@/lib/content/shared/types";
import type { RegionKey } from "@/lib/constants/regions";
import { resolveImage } from "@/lib/content/tourPackages/images";

type GeneratedEntry = ReturnType<typeof getAccommodationsData>[number];

const accommodationsData = getAccommodationsData();

export async function getAccommodations(
  locale = "id",
): Promise<Accommodation[]> {
  return accommodationsData
    .filter((entry: GeneratedEntry) => entry.locale === locale)
    .map((entry: GeneratedEntry) => {
      const data = safeParse(
        generatedAccommodationSchema,
        entry,
        `accommodations:${entry.slug}:${entry.locale}`,
      );

      return {
        slug: data.slug,
        name: data.name,
        region: data.region as RegionKey,
        perks: data.perks,
        regionalHighlights: data.regionalHighlights,
        description: data.description,
        image: resolveImage(data.image),
      };
    });
}
