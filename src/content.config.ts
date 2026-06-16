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
  }),
});

export const collections = { blog, guides };
