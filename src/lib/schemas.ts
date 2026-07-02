import { businessInfo } from "@/lib/contact-data";
import { reviewStats } from "@/lib/content/reviews";

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

export function schemaId(url: string, fragment: string) {
  const absoluteUrl = new URL(url);
  absoluteUrl.hash = fragment;
  return absoluteUrl.toString();
}

export function graphSchema(items: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items.map((item) => {
      if (item && typeof item === "object" && "@context" in item) {
        const { "@context": _context, ...rest } = item as Record<
          string,
          unknown
        >;
        return rest;
      }

      return item;
    }),
  };
}

const SCHEMA_LOGO_PATH = "/logo.webp";

function getSchemaLogoUrl(siteUrl: string) {
  return new URL(SCHEMA_LOGO_PATH, siteUrl).toString();
}

// Organization Schema
// NOTE: Image URLs (logo) should be absolute. If using a CDN, replace siteUrl with CDN_ORIGIN for image fields.
export function generateOrganizationSchema(siteUrl: string) {
  const logoUrl = getSchemaLogoUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": schemaId(siteUrl, "organization"),
    name: "Sungkar Group",
    url: siteUrl,
    logo: logoUrl,
    description:
      "Operator wisata Lombok berbasis lokal untuk tur pribadi, destinasi, transportasi, ulasan, dan panduan wisata.",
    sameAs: Object.values(businessInfo.socialLinks),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phone,
      contactType: "Customer Service",
      areaServed: "ID",
      availableLanguage: ["id", "en", "ar", "ms", "zh"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: "ID",
    },
  };
}

// LocalBusiness Schema
// NOTE: Image URLs (logo) should be absolute. If using a CDN, replace siteUrl with CDN_ORIGIN for image fields.
export function generateLocalBusinessSchema(siteUrl: string) {
  const logoUrl = getSchemaLogoUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": schemaId(siteUrl, "localbusiness"),
    name: "Sungkar Group",
    image: logoUrl,
    description:
      "Operator wisata Lombok dengan layanan tur pribadi, transportasi, dan panduan wisata lokal.",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      ...businessInfo.coordinates,
    },
    url: siteUrl,
    telephone: businessInfo.phone,
    priceRange: "$$",
    servesCuisine: "Local Indonesian",
  };
}

// Breadcrumb List Schema
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  siteUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": schemaId(`${siteUrl}${items.at(-1)?.url ?? "/"}`, "breadcrumb"),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

// FAQ Page Schema
export function generateFAQPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Tourist Attraction Schema
// NOTE: Image URL should be absolute. Callers must pass absolute URL (e.g., new URL(image.src, SITE_URL).toString())
// If using a CDN, replace siteUrl with CDN_ORIGIN for image fields.
export function generateTouristAttractionSchema(
  title: string,
  description: string,
  image: string,
  url: string,
  region?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": schemaId(url, "tourist-attraction"),
    name: title,
    description: description,
    image: image,
    url,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-8.7667",
      longitude: "116.3500",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: region || "Lombok",
      addressCountry: "ID",
    },
  };
}

// Product/Tour Package Schema
// NOTE: Image URL should be absolute. Callers must pass absolute URL (e.g., new URL(image.src, SITE_URL).toString())
// If using a CDN, replace siteUrl with CDN_ORIGIN for image fields.
export function generateProductSchema(
  name: string,
  description: string,
  price: string,
  image: string,
  url: string,
  duration?: string,
) {
  const isNumericPrice = /^\d+$/.test(price);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": schemaId(url, "product"),

    name,
    description,
    image,

    url,
    provider: {
      "@id": schemaId(new URL(url).origin, "organization"),
    },

    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "IDR",
        ...(isNumericPrice ? { price } : {}),
      },
      ...(isNumericPrice
        ? { price }
        : { price: "https://schema.org/ContactForPrice" }),
      availability: "https://schema.org/InStock",
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(reviewStats.rating),
      reviewCount: String(reviewStats.totalReviews),
    },

    ...(duration && { duration }),
  };
}

// Service Schema for tours and rentals
export function generateServiceSchema(
  name: string,
  description: string,
  price: string,
  image: string,
  url: string,
  serviceType: string,
  duration?: string,
) {
  const isNumericPrice = /^\d+$/.test(price);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": schemaId(url, "service"),

    name,
    description,
    image,
    url,
    serviceType,
    provider: {
      "@id": schemaId(new URL(url).origin, "organization"),
    },

    areaServed: {
      "@type": "Place",
      name: "Indonesia",
    },

    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "IDR",
        ...(isNumericPrice ? { price } : {}),
      },
      ...(isNumericPrice
        ? { price }
        : { price: "https://schema.org/ContactForPrice" }),
      availability: "https://schema.org/InStock",
    },

    ...(duration && { duration }),
  };
}

// HowTo Schema for Guides
export function generateHowToSchema(
  title: string,
  description: string,
  steps: Array<{ name: string; description: string; image?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description: description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.description,
      ...(step.image && { image: step.image }),
    })),
  };
}

// Article Schema for Blog Posts
// NOTE: Image URLs (logo, article image) should be absolute. If using a CDN, replace siteUrl with CDN_ORIGIN for image fields.
export function generateArticleSchema(
  title: string,
  description: string,
  image: string,
  url: string,
  siteUrl: string,
  datePublished: string,
  dateModified?: string,
) {
  const logoUrl = getSchemaLogoUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": schemaId(url, "article"),
    headline: title,
    description: description,
    image: image,
    url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@id": schemaId(siteUrl, "organization"),
      "@type": "Organization",
      name: businessInfo.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Sungkar Group",
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
  };
}

// WebSite Schema
export function generateWebsiteSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": schemaId(siteUrl, "website"),
    url: siteUrl,
    name: "Sungkar Group",
    description:
      "Operator wisata Lombok berbasis lokal untuk tur pribadi, destinasi, transportasi, ulasan, dan panduan wisata.",
    publisher: {
      "@id": schemaId(siteUrl, "organization"),
    },
  };
}

// Contact Page Schema with LocalBusiness and ContactPoint
export function generateContactPageSchema(
  url: string,
  businessInfo: {
    name: string;
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
    coordinates: {
      latitude: number;
      longitude: number;
    };
    socialLinks?: Record<string, string>;
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": schemaId(url, "contact-page"),
    name: businessInfo.name,
    url,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.latitude,
      longitude: businessInfo.coordinates.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessInfo.phone,
        contactType: "Customer Service",
        areaServed: "ID",
        availableLanguage: ["id", "en"],
      },
      {
        "@type": "ContactPoint",
        url: `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`,
        contactType: "Customer Service",
        areaServed: "ID",
        availableLanguage: ["id", "en"],
      },
    ],
    sameAs: Object.values(businessInfo.socialLinks || {}),
  };
}

export type SchemaObject = ReturnType<
  | typeof generateOrganizationSchema
  | typeof generateLocalBusinessSchema
  | typeof generateBreadcrumbSchema
  | typeof generateFAQPageSchema
  | typeof generateTouristAttractionSchema
  | typeof generateProductSchema
  | typeof generateServiceSchema
  | typeof generateHowToSchema
  | typeof generateArticleSchema
  | typeof generateWebsiteSchema
  | typeof generateContactPageSchema
  | typeof graphSchema
>;
