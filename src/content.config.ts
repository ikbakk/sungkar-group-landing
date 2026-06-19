import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    author: z.string().optional(),
    featuredImage: z.string().optional(),
    relatedDestinations: z.array(z.string()).optional(),
    relatedPackages: z.array(z.string()).optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    region: z.enum(["lombok", "sumbawa", "labuan-bajo", "general"]),
    readingTime: z.number(),
    keyTakeaways: z.array(z.string()),
    bestFor: z.array(z.string()),
    relatedDestinations: z.array(z.string()),
    relatedPackages: z.array(z.string()),
    publishDate: z.string(),
    featuredImage: z.string().optional(),
  }),
});

const tourPackages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/tourPackages",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    region: z.enum(["lombok", "sumbawa", "labuan-bajo"]),
    featured: z.boolean().optional(),
    collectionSlug: z.string(),
    collectionTitle: z.string(),
    category: z.string(),
    duration: z.string(),
    images: z.array(z.string()),
    summary: z.string(),
    highlights: z.array(z.string()),
    itinerary: z.array(z.string()),
    includes: z.array(z.string()),
    excludes: z.array(z.string()),
  }),
});

const accommodations = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/accommodations",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    name: z.string(),
    region: z.enum(["lombok", "sumbawa", "labuan-bajo"]),
    perks: z.array(z.string()),
    regionalHighlights: z.array(z.string()),
    description: z.string(),
    image: z.string(),
  }),
});

const carRental = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/car-rental",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    name: z.string(),
    region: z.enum(["lombok", "sumbawa", "labuan-bajo"]),
    pricePerDay: z.string(),
    seats: z.number(),
    transmission: z.enum(["Manual", "Automatic"]),
    features: z.array(z.string()),
    bestFor: z.array(z.string()),
    description: z.string(),
    imageTop: z.string(),
    imageBottom: z.string(),
  }),
});

const destinations = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/destinations",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    region: z.string(),
    image: z.string(),
    gallery: z.array(z.string()),
    summary: z.string(),
    thingsToDo: z.array(z.string()),
    packages: z.array(z.string()),
  }),
});

export const collections = {
  blog,
  guides,
  tourPackages,
  accommodations,
  carRental,
  destinations,
};
