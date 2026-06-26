import { destinationsData } from "@/generated/content/destinations.generated";
import type { Destination } from "./types";
import { resolveImage, resolveImages } from "./images";

type EntryData = (typeof destinationsData)[number];

export async function getDestinations(locale = "id"): Promise<Destination[]> {
  return destinationsData
    .filter((entry) => entry.locale === locale)
    .map((data: EntryData) => ({
      slug: data.slug,
      title: data.title,
      region: data.region,
      image: resolveImage(data.image),
      gallery: resolveImages(data.gallery),
      summary: data.summary,
      thingsToDo: data.thingsToDo,
      packages: data.packages,
    }));
}
