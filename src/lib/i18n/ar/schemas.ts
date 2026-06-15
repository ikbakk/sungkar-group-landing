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

export function generateOrganizationSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sungkar Group",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "مشغل سياحي محلي مقره لومبوك للجولات الخاصة، الوجهات، النقل، التقييمات، وأدلة السفر.",
    sameAs: [
      "https://www.facebook.com/sungkargroup",
      "https://www.instagram.com/sungkargroup",
      "https://www.tiktok.com/sungkargroup",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-370-XXX-XXXX",
      contactType: "Customer Service",
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kuta, Lombok",
      addressLocality: "Lombok",
      postalCode: "83612",
      addressCountry: "ID",
    },
  };
}

export function generateLocalBusinessSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sungkar Group",
    image: `${siteUrl}/logo.png`,
    description:
      "مشغل سياحي لومبوك مع جولات خاصة، نقل، وخدمات أدلة سفر محلية.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kuta, Lombok",
      addressLocality: "Lombok",
      postalCode: "83612",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-8.7667",
      longitude: "116.3500",
    },
    url: siteUrl,
    telephone: "+62-370-XXX-XXXX",
    priceRange: "$$",
    servesCuisine: "Local Indonesian",
  };
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  siteUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

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

export function generateTouristAttractionSchema(
  title: string,
  description: string,
  image: string,
  siteUrl: string,
  slug: string,
  region?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: title,
    description: description,
    image: image,
    url: `${siteUrl}/destinasi/${slug}`,
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

export function generateProductSchema(
  name: string,
  description: string,
  price: string,
  image: string,
  url: string,
  duration?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",

    name,
    description,
    image,

    url,

    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "156",
    },

    ...(duration && { duration }),
  };
}

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

export function generateArticleSchema(
  title: string,
  description: string,
  image: string,
  siteUrl: string,
  slug: string,
  datePublished: string,
  dateModified?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: description,
    image: image,
    url: `${siteUrl}/${slug}`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "Sungkar Group",
    },
    publisher: {
      "@type": "Organization",
      name: "Sungkar Group",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}

export function generateWebsiteSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "Sungkar Group",
    description:
      "مشغل سياحي محلي مقره لومبوك للجولات الخاصة، الوجهات، النقل، التقييمات، وأدلة السفر.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateContactPageSchema(
  siteUrl: string,
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
    name: businessInfo.name,
    url: `${siteUrl}/kontak`,
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
  | typeof generateHowToSchema
  | typeof generateArticleSchema
  | typeof generateWebsiteSchema
  | typeof generateContactPageSchema
>;