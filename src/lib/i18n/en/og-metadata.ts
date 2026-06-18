import type { ImageSource } from "@/lib/images";
import { HERO, GALLERY, DESTINATIONS } from "@/assets/images";

export interface OGMetadata {
  title: string;
  description: string;
  image: ImageSource;
  imageAlt: string;
  type?: "website" | "article" | "profile";
}

export const pageOGMetadata: Record<string, OGMetadata> = {
  "/": {
    title: "Sungkar Group - Tour and Travel",
    description:
      "Local Lombok-based tour operator for private tours, destinations, transportation, reviews, and travel guides.",
    image: HERO.heroLombok,
    imageAlt: "Lombok beach view at sunset",
  },
  "/tentang-kami": {
    title: "About Us | Sungkar Group - Tour and Travel",
    description:
      "Learn more about Sungkar Group, our local team, and our sustainable travel approach.",
    image: GALLERY.tourCultural,
    imageAlt: "Local cultural experience with the Sungkar Group team",
  },
  "/paket-wisata": {
    title: "Tour Packages | Sungkar Group - Tour and Travel",
    description:
      "Explore complete Lombok tour packages from 3-day tours to local cultural experiences.",
    image: HERO.heroLombok,
    imageAlt: "Lombok tour packages with the best local service",
  },
  "/destinasi": {
    title: "Destinations | Sungkar Group - Tour and Travel",
    description:
      "Discover the best destinations in Lombok, Gili Islands, and Rinjani mountains for your adventure.",
    image: DESTINATIONS.lombok,
    imageAlt: "Best travel destinations in Lombok",
  },
  "/ulasan": {
    title: "Reviews | Sungkar Group - Tour and Travel",
    description:
      "Read reviews from travelers who have experienced tours with Sungkar Group.",
    image: HERO.heroLombok,
    imageAlt: "Positive reviews from Sungkar Group visitors",
  },
  "/panduan-wisata": {
    title: "Travel Guides | Sungkar Group - Tour and Travel",
    description:
      "Complete guides for planning your trip to Lombok, from weather to local transportation.",
    image: DESTINATIONS.rinjani,
    imageAlt: "Complete travel guide for Lombok",
  },
  "/kontak": {
    title: "Contact | Sungkar Group - Tour and Travel",
    description:
      "Contact Sungkar Group via WhatsApp, email, or online form to check availability.",
    image: HERO.heroLombok,
    imageAlt: "Contact Sungkar Group for a free consultation",
  },
  "/faq": {
    title: "FAQ | Sungkar Group - Tour and Travel",
    description:
      "Complete answers to common questions about tour packages and Sungkar Group services.",
    image: HERO.heroLombok,
    imageAlt: "Frequently asked questions about Lombok tours",
  },
  "/akomodasi": {
    title: "Accommodations | Sungkar Group - Tour and Travel",
    description:
      "Best accommodation recommendations in Lombok at affordable prices with complete facilities.",
    image: DESTINATIONS.lombok,
    imageAlt: "Accommodation recommendations in Lombok",
  },
  "/sewa-mobil": {
    title: "Car Rental | Sungkar Group - Tour and Travel",
    description:
      "Rent local vehicles with experienced drivers for a comfortable and flexible journey.",
    image: HERO.heroLombok,
    imageAlt: "Car rental service with professional drivers",
  },
};

export function getPageOGMetadata(pathname: string): OGMetadata {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  return pageOGMetadata[normalizedPath] || pageOGMetadata["/"];
}

export function getPackageOGMetadata(
  title: string,
  description: string,
  image: ImageSource,
  imageAlt: string,
): OGMetadata {
  return {
    title: `${title} | Sungkar Group - Tour and Travel`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}

export function getDestinationOGMetadata(
  title: string,
  description: string,
  image: ImageSource,
  imageAlt: string,
): OGMetadata {
  return {
    title: `${title} | Sungkar Group - Tour and Travel`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}
