import { destinationsData } from "@/generated/content/destinations.generated";
import { safeParse } from "@/lib/errors/content-errors";
import { generatedDestinationSchema } from "@/lib/content/generated/schemas";
import type { Destination } from "./types";
import { resolveImage, resolveImages } from "./images";

export async function getDestinations(locale = "id"): Promise<Destination[]> {
  return destinationsData
    .filter((entry) => entry.locale === locale)
    .map((entry) => {
      const data = safeParse(
        generatedDestinationSchema,
        entry,
        `destinations:${entry.slug}:${entry.locale}`,
      );

      return {
        slug: data.slug,
        title: data.title,
        region: data.region,
        image: resolveImage(data.image),
        gallery: resolveImages(data.gallery),
        summary: data.summary,
        thingsToDo: data.thingsToDo,
        packages: data.packages,
      };
    });
}
