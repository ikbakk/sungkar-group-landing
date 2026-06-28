import { z } from "zod";

export const generatedLocaleSchema = z.enum(["id", "en", "ar", "ms", "zh"]);
export const generatedRegionSchema = z.enum([
  "lombok",
  "sumbawa",
  "labuan-bajo",
  "sailing-labuan-bajo",
  "lombok-to-bajo",
  "lombok-bajo",
]);

const boatSpecSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

const cabinSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  capacity: z.union([z.string(), z.number()]).optional(),
  prices: z.record(z.string(), z.string()).optional(),
  images: z.array(z.string()).default([]),
});

export const generatedTourPackageSchema = z.object({
  slug: z.string().min(1),
  locale: generatedLocaleSchema,
  title: z.string().min(1),
  region: generatedRegionSchema,
  featured: z.boolean().optional(),
  collectionSlug: z.string().min(1),
  collectionTitle: z.string().min(1),
  category: z.string().min(1),
  duration: z.string().min(1),
  durationLabels: z.record(z.string(), z.string()).optional(),
  images: z.array(z.string()).min(1),
  summary: z.string().min(1),
  highlights: z.array(z.string()),
  itinerary: z.array(z.string()).min(1),
  includes: z.array(z.string()),
  excludes: z.array(z.string()),
  boatName: z.string().optional(),
  boatType: z.string().optional(),
  boatCapacity: z.number().optional(),
  boatSpecs: z.array(boatSpecSchema).optional(),
  cabins: z.array(cabinSchema).optional(),
  priceList: z.record(z.string(), z.record(z.string(), z.number())).optional(),
  priceListLabels: z.record(z.string(), z.string()).optional(),
  additionalServices: z.array(z.string()).optional(),
  dontForgetToBring: z.array(z.string()).optional(),
  termsAndConditions: z.array(z.string()).optional(),
});

export const generatedDestinationSchema = z.object({
  slug: z.string().min(1),
  locale: generatedLocaleSchema,
  title: z.string().min(1),
  region: z.string().min(1),
  image: z.string().min(1),
  gallery: z.array(z.string()),
  summary: z.string().min(1),
  thingsToDo: z.array(z.string()),
  packages: z.array(z.string()),
});

export const generatedAccommodationSchema = z.object({
  slug: z.string().min(1),
  locale: generatedLocaleSchema,
  name: z.string().min(1),
  region: generatedRegionSchema,
  perks: z.array(z.string()),
  regionalHighlights: z.array(z.string()),
  description: z.string().min(1),
  image: z.string().min(1),
});

export const generatedVehicleSchema = z.object({
  slug: z.string().min(1),
  locale: generatedLocaleSchema,
  name: z.string().min(1),
  region: generatedRegionSchema,
  pricePerDay: z.string().min(1),
  seats: z.number().int().positive(),
  transmission: z.enum(["Manual", "Automatic"]),
  features: z.array(z.string()),
  bestFor: z.array(z.string()),
  description: z.string().min(1),
  imageTop: z.string().min(1),
  imageBottom: z.string().min(1),
});
