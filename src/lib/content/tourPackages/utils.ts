import type { PackageCollection, TourPackage } from "./types";

export function withCollection(collection: PackageCollection) {
  return {
    collectionSlug: collection.slug,
    collectionTitle: collection.title,
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function createPackage(
  collection: PackageCollection,
  data: Omit<
    TourPackage,
    "slug" | "collectionSlug" | "collectionTitle" | "featured"
  > & {
    title: string;
    featured?: boolean;
  },
): TourPackage {
  return {
    featured: false,

    ...data,

    slug: slugify(data.title),

    collectionSlug: collection.slug,
    collectionTitle: collection.title,
  };
}
