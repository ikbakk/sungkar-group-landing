import { accommodationsData } from "@/generated/content/accommodations.generated";
import type { Accommodation } from "@/lib/content/shared/types";
import type { RegionKey } from "@/lib/constants/regions";
import { resolveImage } from "@/lib/content/tourPackages/images";

type EntryData = (typeof accommodationsData)[number];

export async function getAccommodations(
  locale = "id",
): Promise<Accommodation[]> {
  return accommodationsData
    .filter((entry) => entry.locale === locale)
    .map((data: EntryData) => ({
      slug: data.slug,
      name: data.name,
      region: data.region as RegionKey,
      perks: data.perks,
      regionalHighlights: data.regionalHighlights,
      description: data.description,
      image: resolveImage(data.image),
    }));
}
