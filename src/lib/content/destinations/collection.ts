import { getCollection } from "astro:content";
import type { Destination } from "./types";
import { resolveImage, resolveImages } from "./images";

type EntryData = {
  title: string;
  region: string;
  image: string;
  gallery: string[];
  summary: string;
  thingsToDo: string[];
  packages: string[];
};

export async function getDestinations(locale = "id"): Promise<Destination[]> {
  const entries = await getCollection("destinations");
  const results: Destination[] = [];

  for (const entry of entries) {
    const data = entry.data as EntryData;
    const entryLocale =
      entry.id
        .split("/")
        .pop()
        ?.replace(/\.(md|mdx)$/, "") || "id";
    if (entryLocale !== locale) continue;

    results.push({
      slug: entry.id.split("/")[0],
      title: data.title,
      region: data.region,
      image: resolveImage(data.image),
      gallery: resolveImages(data.gallery),
      summary: data.summary,
      thingsToDo: data.thingsToDo,
      packages: data.packages,
    });
  }

  return results;
}
