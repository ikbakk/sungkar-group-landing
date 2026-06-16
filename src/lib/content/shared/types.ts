import type { ImageSource } from "@/lib/images";

// ─── Regions ──────────────────────────────────────────────────────────
export type RegionKey = "lombok" | "sumbawa" | "labuan-bajo";
export interface RegionInfo {
  label: string;
  className: string;
}

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
  variant: "link" | "mega";
  groups?: NavGroup[];
};

// ─── Tour Packages ─────────────────────────────────────────────────────
export type TourPackage = {
  slug: string;
  title: string;
  region: RegionKey;
  featured?: boolean;
  collectionSlug: string;
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
export type Vehicle = {
  slug: string;
  name: string;
  region: RegionKey;
  pricePerDay: string;
  seats: number;
  transmission: "Manual" | "Automatic";
  features: string[];
  bestFor: string[];
  description: string;
  imageTop: ImageSource;
  imageBottom: ImageSource;
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
