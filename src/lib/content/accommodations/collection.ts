import { getCollection } from "astro:content";
import type { Accommodation } from "@/lib/content/shared/types";

type EntryData = {
  name: string;
  region: "lombok" | "sumbawa" | "labuan-bajo";
  perks: string[];
  regionalHighlights: string[];
  description: string;
  image: string;
};

export async function getAccommodations(
  locale = "id",
): Promise<Accommodation[]> {
  const entries = await getCollection("accommodations");

  const results: Accommodation[] = [];

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
      name: data.name,
      region: data.region,
      perks: data.perks,
      regionalHighlights: data.regionalHighlights,
      description: data.description,
      image: data.image,
    });
  }

  return results;
}
