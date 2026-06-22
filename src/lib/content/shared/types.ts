import type { ImageSource } from "@/lib/images";

// ─── Regions ──────────────────────────────────────────────────────────
import type { RegionKey } from "@/lib/constants/regions";

// ─── Navigation ────────────────────────────────────────────────────────
export type NavCollection = {
  title: string;
  href?: string;
  items: { label: string; href: string }[];
};
export type NavGroup = {
  title: string;
  href?: string;
  collections?: NavCollection[];
  items?: { label: string; href: string }[];
};
export type NavItem = {
  label: string;
  href?: string;
  variant: "link" | "mega" | "dropdown";
  groups?: NavGroup[];
  items?: { label: string; href: string }[];
};

// ─── Tour Packages ─────────────────────────────────────────────────────
import type { CollectionSlug } from "@/lib/constants/tourPackages";

export type TourPackage = {
  slug: string;
  title: string;
  region: RegionKey;
  featured?: boolean;
  collectionSlug: CollectionSlug;
  collectionTitle: string;
  category: string;
  duration: string;
  images: ImageSource[];
  summary: string;
  highlights: string[];
  itinerary: string[];
  includes: string[];
  excludes: string[];
};

// ─── Destinations ──────────────────────────────────────────────────────
export type Destination = {
  slug: string;
  title: string;
  region: string;
  image: ImageSource;
  gallery: ImageSource[];
  summary: string;
  thingsToDo: string[];
  packages: string[];
};

// ─── Accommodations ────────────────────────────────────────────────────
export type Accommodation = {
  slug: string;
  name: string;
  region: RegionKey;
  perks: string[];
  regionalHighlights: string[];
  description: string;
  image: ImageSource;
};

// ─── Vehicle / Car Rental ─────────────────────────────────────────────
import type { VehicleSlug, TransmissionType } from "@/lib/constants/vehicles";

export type Vehicle = {
  slug: string;
  name: string;
  region: RegionKey;
  pricePerDay: string;
  seats: number;
  transmission: TransmissionType;
  features: string[];
  bestFor: string[];
  description: string;
  imageTop: ImageSource;
  imageBottom: ImageSource;
  vehicleType?: VehicleSlug;
};

// ─── Guides ────────────────────────────────────────────────────────────
export type Guide = {
  slug: string;
  title: string;
  description: string;
  region: RegionKey | "general";
  content: string;
  keyTakeaways: string[];
  bestFor: string[];
  relatedDestinations: string[];
  relatedPackages: string[];
  publishDate: string;
  readingTime: number;
};

// ─── Reviews ───────────────────────────────────────────────────────────
export type Review = {
  author: string;
  source: "Google";
  rating: number;
  date: string;
  text: string;
  initials: string;
};
export type MarqueeReview = {
  quote: string;
  initials: string;
  name: string;
  role: string;
  rating: number;
};

// ─── Landing Page ──────────────────────────────────────────────────────
export interface LandingAction {
  label: string;
  href: string;
  variant: "default" | "outline";
}
export interface LandingHeroCard {
  className: string;
  style: string;
  image?: ImageSource;
  alt?: string;
  title: string;
  description?: string;
  emoji?: string;
  contentSizeClass: string;
  width?: number;
  height?: number;
}
export interface LandingTourCard {
  image: ImageSource;
  duration: string;
  slug: string;
  title: string;
  description: string;
  region: string;
  collectionSlug: string;
}
export interface LandingDestinationCard {
  slug: string;
  title: string;
  description: string;
  image: ImageSource;
}
export interface LandingTransportCard {
  title: string;
  description: string;
}

// ─── Contact ───────────────────────────────────────────────────────────
export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
}
export interface BusinessInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  coordinates: { latitude: number; longitude: number };
  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
}
export interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "number" | "textarea" | "select";
  required?: boolean;
  options?: string[];
}
export type FormContext = "sewa-mobil" | "paket-wisata";

// ─── JSON-LD Schema ────────────────────────────────────────────────────
export type SchemaType =
  | "Organization"
  | "LocalBusiness"
  | "BreadcrumbList"
  | "FAQPage"
  | "TouristAttraction"
  | "Product"
  | "HowTo"
  | "ContactPage";
export interface BreadcrumbItem {
  name: string;
  url: string;
}
export interface FAQItem {
  question: string;
  answer: string;
}

// ─── OG Metadata ───────────────────────────────────────────────────────
export interface OGMetadata {
  title: string;
  description: string;
  image: ImageSource;
  imageAlt: string;
  type?: "website" | "article" | "profile";
}

// ─── Zod Schemas for Runtime Validation ────────────────────────────────
import { z } from "zod";

const regionSchema = z.enum([
  "lombok",
  "sumbawa",
  "labuan-bajo",
  "sailing-labuan-bajo",
  "lombok-to-bajo",
  "lombok-bajo",
]);

export const TourPackageSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  region: regionSchema,
  featured: z.boolean().optional(),
  collectionSlug: z.string().min(1),
  collectionTitle: z.string().min(1),
  category: z.string().min(1),
  duration: z.string().min(1),
  images: z.array(z.object({ src: z.string() }).or(z.string())).min(1),
  summary: z.string().min(1),
  highlights: z.array(z.string()),
  itinerary: z.array(z.string()).min(1),
  includes: z.array(z.string()),
  excludes: z.array(z.string()),
});

export const DestinationSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  region: z.string().min(1),
  image: z.object({ src: z.string() }).or(z.string()),
  gallery: z.array(z.object({ src: z.string() }).or(z.string())),
  summary: z.string().min(1),
  thingsToDo: z.array(z.string()),
  packages: z.array(z.string()),
});

export const AccommodationSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  region: regionSchema,
  perks: z.array(z.string()),
  regionalHighlights: z.array(z.string()),
  description: z.string().min(1),
  image: z.object({ src: z.string() }).or(z.string()),
});

export const VehicleSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  region: regionSchema,
  pricePerDay: z.string().min(1),
  seats: z.number().int().positive(),
  transmission: z.enum(["Manual", "Automatic"]),
  features: z.array(z.string()),
  bestFor: z.array(z.string()),
  description: z.string().min(1),
  imageTop: z.object({ src: z.string() }).or(z.string()),
  imageBottom: z.object({ src: z.string() }).or(z.string()),
});
