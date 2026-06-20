import { getCollection } from "astro:content";
import type { Vehicle } from "@/lib/content/shared/types";
import { resolveImage } from "@/lib/content/tourPackages/images";

type EntryData = {
  name: string;
  region: "lombok" | "sumbawa" | "labuan-bajo";
  pricePerDay: string;
  seats: number;
  transmission: "Manual" | "Automatic";
  features: string[];
  bestFor: string[];
  description: string;
  imageTop: string;
  imageBottom: string;
};

export async function getVehicles(locale = "id"): Promise<Vehicle[]> {
  const entries = await getCollection("carRental");

  const results: Vehicle[] = [];

  for (const entry of entries) {
    const data = entry.data as EntryData;
    const entryLocale = entry.id.split("/").pop() || "id";

    if (entryLocale !== locale) continue;

    results.push({
      slug: entry.id.split("/")[0],
      name: data.name,
      region: data.region,
      pricePerDay: data.pricePerDay,
      seats: data.seats,
      transmission: data.transmission,
      features: data.features,
      bestFor: data.bestFor,
      description: data.description,
      imageTop: resolveImage(data.imageTop),
      imageBottom: resolveImage(data.imageBottom),
    });
  }

  return results;
}
