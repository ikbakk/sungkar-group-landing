import { getCollection, getEntry, render, type CollectionEntry } from "astro:content";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishDate: Date;
  tags: string[];
  readingTime: number;
  author?: string;
  featuredImage?: string;
  relatedDestinations?: string[];
  relatedPackages?: string[];
}

function entryToBlogMeta(entry: CollectionEntry<"blog">): BlogPostMeta {
  const slug = entry.id.split("/")[0];
  return {
    slug,
    title: entry.data.title,
    description: entry.data.description,
    publishDate: entry.data.publishDate,
    tags: entry.data.tags,
    readingTime: entry.data.readingTime,
    author: entry.data.author,
    featuredImage: entry.data.featuredImage,
    relatedDestinations: entry.data.relatedDestinations,
    relatedPackages: entry.data.relatedPackages,
  };
}

export async function getBlogPosts(locale: string): Promise<BlogPostMeta[]> {
  const entries = await getCollection("blog", (entry) =>
    entry.id.endsWith(`/${locale}`),
  );
  return entries.map(entryToBlogMeta);
}

export async function getBlogPost(locale: string, slug: string) {
  const entry = await getEntry("blog", `${slug}/${locale}`);
  if (!entry) return null;
  const { Content, headings } = await render(entry);
  return { Content, headings, ...entryToBlogMeta(entry) };
}
