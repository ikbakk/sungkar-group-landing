/**
 * Centralized SEO configuration and metadata
 * Standardized across all pages and components
 */

export const SITE = {
  name: "Sungkar Group",
  title: "Sungkar Group - Wisata Lombok & Labuan Bajo Terpercaya",
  description:
    "Paket wisata Lombok, Sumbawa, dan Labuan Bajo dengan pelayanan terbaik. Open Trip MotoGP, Komodo, dan paket wisata pribadi dengan harga terjangkau.",
  url: "https://sungkar-group.com",
  locale: "id_ID",
  defaultLocale: "id",
  keywords: [
    "wisata lombok",
    "tour lombok",
    "labuan bajo",
    "open trip",
    "moto gp",
    "komodo",
    "paket wisata",
    "sungkar group",
    "travel lombok",
    "wisata pulau",
  ],

  // Social media
  social: {
    facebook: "https://facebook.com/sungkargroup",
    instagram: "https://instagram.com/sungkargroup",
    tiktok: "https://tiktok.com/@sungkargroup",
    whatsapp: "https://wa.me/628123456789",
    email: "info@sungkar-group.com",
    phone: "+62 812-3456-7890",
  },
};

export const SEO = {
  // Default meta tags
  defaultMeta: {
    title: SITE.title,
    description: SITE.description,
    keywords: SITE.keywords.join(", "),
    author: SITE.name,
    viewport: "width=device-width, initial-scale=1.0",
    charset: "UTF-8",
    robots: "index, follow",
    "theme-color": "#1e40af",
  },

  // OpenGraph / Social Media
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@sungkargroup",
    title: SITE.title,
    description: SITE.description,
    image: `${SITE.url}/og-image.jpg`,
  },

  // JSON-LD Schema
  schema: {
    organization: {
      name: SITE.name,
      description: SITE.description,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      contactPoint: {
        telephone: SITE.social.phone,
        contactType: "customer service",
        email: SITE.social.email,
      },
      address: {
        streetAddress: "Jl. Raya Senggigi",
        addressLocality: "Mataram",
        addressRegion: "NTB",
        postalCode: "83355",
        addressCountry: "ID",
      },
    },
  },
};

/**
 * Get SEO metadata for a specific page
 */
export function getPageMetadata(
  options: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: "website" | "article" | "product" | "tourist_attraction";
  } = {},
) {
  const {
    title = SITE.title,
    description = SITE.description,
    keywords = SITE.keywords,
    image = `${SITE.url}/og-image.jpg`,
    url = SITE.url,
    type = "website",
  } = options;

  return {
    title: `${title} | ${SITE.name}`,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      type,
      locale: SITE.locale,
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image,
    },
  };
}

/**
 * Get SEO metadata for tour packages
 */
export function getTourPackageMetadata(
  packageTitle: string,
  region: string,
  duration: string,
  image: string,
) {
  const title = `${packageTitle} - ${duration} di ${region} | ${SITE.name}`;
  const description = `Nikmati paket wisata ${packageTitle} selama ${duration} di ${region}. Termasuk akomodasi, transportasi, dan aktivitas menarik. Dijamin puas dengan pelayanan profesional.`;

  return getPageMetadata({
    title,
    description,
    keywords: [
      `paket wisata ${region}`,
      `wisata ${region}`,
      `tour ${region}`,
      packageTitle.toLowerCase(),
      duration.toLowerCase(),
    ],
    image,
    type: "product",
  });
}

/**
 * Get SEO metadata for destinations
 */
export function getDestinationMetadata(
  destinationName: string,
  region: string,
  image: string,
) {
  const title = `${destinationName} - Wisata Populer di ${region} | ${SITE.name}`;
  const description = `Temukan keindahan ${destinationName} di ${region}. Panduan lengkap aktivitas, akomodasi, dan tips berwisata di ${destinationName}.`;

  return getPageMetadata({
    title,
    description,
    keywords: [
      `wisata ${destinationName}`,
      `destinasi ${region}`,
      `tempat wisata ${destinationName}`,
      region.toLowerCase(),
    ],
    image,
    type: "tourist_attraction",
  });
}

/**
 * Get SEO metadata for vehicles
 */
export function getVehicleMetadata(
  vehicleName: string,
  region: string,
  price: string,
  image: string,
) {
  const title = `Sewa ${vehicleName} di ${region} - ${price}/hari | ${SITE.name}`;
  const description = `Sewa mobil ${vehicleName} di ${region} dengan harga terjangkau. Kapasitas ${price}, fasilitas lengkap, dan sopir profesional. Hubungi sekarang!`;

  return getPageMetadata({
    title,
    description,
    keywords: [
      `sewa mobil ${vehicleName}`,
      `sewa mobil ${region}`,
      `harga sewa mobil ${price}`,
      vehicleName.toLowerCase(),
      region.toLowerCase(),
    ],
    image,
    type: "product",
  });
}

export default SITE;
