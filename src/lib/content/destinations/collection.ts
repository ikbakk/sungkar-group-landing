import { getDestinationsData } from "../generated/direct-json-loader";
import { safeParse } from "@/lib/errors/content-errors";
import { generatedDestinationSchema } from "@/lib/content/generated/schemas";
import type { Destination } from "./types";
import { resolveImage, resolveImages } from "./images";

type GeneratedEntry = ReturnType<typeof getDestinationsData>[number];

const destinationsData = getDestinationsData();

export async function getDestinations(locale = "id"): Promise<Destination[]> {
  return destinationsData
    .filter((entry: GeneratedEntry) => entry.locale === locale)
    .map((entry: GeneratedEntry) => {
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
