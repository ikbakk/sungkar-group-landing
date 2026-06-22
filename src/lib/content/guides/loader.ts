import {
  getCollection,
  getEntry,
  render,
  type CollectionEntry,
} from "astro:content";

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  region: "lombok" | "sumbawa" | "labuan-bajo" | "sailing-labuan-bajo" | "lombok-to-bajo" | "general";
  readingTime: number;
  bestFor: string[];
  keyTakeaways: string[];
  relatedDestinations: string[];
  relatedPackages: string[];
  publishDate: string;
  featuredImage?: string;
}

function entryToGuideMeta(entry: CollectionEntry<"guides">): GuideMeta {
  const slug = entry.id.split("/")[0];
  return {
    slug,
    title: entry.data.title,
    description: entry.data.description,
    region: entry.data.region,
    readingTime: entry.data.readingTime,
    bestFor: entry.data.bestFor,
    keyTakeaways: entry.data.keyTakeaways,
    relatedDestinations: entry.data.relatedDestinations,
    relatedPackages: entry.data.relatedPackages,
    publishDate: entry.data.publishDate,
    featuredImage: entry.data.featuredImage,
  };
}

export async function getGuides(locale: string): Promise<GuideMeta[]> {
  const entries = await getCollection("guides", (entry) =>
    entry.id.endsWith(`/${locale}`),
  );
  return entries.map(entryToGuideMeta);
}

export async function getGuide(locale: string, slug: string) {
  const entry = await getEntry("guides", `${slug}/${locale}`);
  if (!entry) return null;
  const { Content, headings } = await render(entry);
  return { Content, headings, ...entryToGuideMeta(entry) };
}
