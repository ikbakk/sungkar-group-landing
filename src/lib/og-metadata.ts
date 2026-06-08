/**
 * OpenGraph Metadata Configuration
 *
 * This module provides a centralized, data-driven approach to managing OpenGraph (OG) meta tags
 * and Twitter Card data across the Sungkar Group website.
 *
 * Usage Guide:
 * ============
 *
 * 1. AUTOMATIC OG TAGS (Static Pages):
 *    Pages like home (/), /kontak, /paket-wisata automatically get OG tags from pageOGMetadata.
 *    No additional configuration needed - the MainLayout handles it automatically.
 *
 *    Example in kontak.astro:
 *    <MainLayout title="Kontak" description="...">
 *      <!-- OG tags are automatically generated from pageOGMetadata["/kontak"] -->
 *    </MainLayout>
 *
 * 2. CUSTOM OG TAGS (Individual Pages):
 *    To override OG data for a specific page, pass custom props to MainLayout:
 *
 *    ---
 *    import type { ImageMetadata } from "astro";
 *    import CustomImage from "@/assets/images/custom.png";
 *
 *    const title = "My Custom Page";
 *    const description = "Custom description for sharing";
 *    const image = CustomImage as ImageMetadata;
 *    const imageAlt = "Description of image";
 *    ---
 *
 *    <MainLayout
 *      title={title}
 *      description={description}
 *      image={image}
 *      imageAlt={imageAlt}
 *    >
 *      <!-- Content -->
 *    </MainLayout>
 *
 * 3. DYNAMIC OG TAGS (Packages/Destinations):
 *    For dynamic detail pages, use helper functions:
 *
 *    ---
 *    import { getPackageOGMetadata } from "@/lib/og-metadata";
 *    import { packages } from "@/lib/site-data";
 *
 *    const pkg = packages[0];
 *    const ogMeta = getPackageOGMetadata(
 *      pkg.title,
 *      pkg.summary,
 *      pkg.image,
 *      `Paket: ${pkg.title}`
 *    );
 *    ---
 *
 *    <MainLayout
 *      title={pkg.title}
 *      description={pkg.summary}
 *      image={ogMeta.image}
 *      imageAlt={ogMeta.imageAlt}
 *    >
 *      <!-- Content -->
 *    </MainLayout>
 *
 * 4. IMAGE BEST PRACTICES:
 *    - Use ImageMetadata type from astro for all images
 *    - Images are automatically converted to WebP (80% quality)
 *    - OG image standard: 1200x630px (aspect ratio 1.91:1)
 *    - Twitter card: 16:9 or 1:1 aspect ratios work best
 *    - Keep file size < 2MB for social media compliance
 *
 * 5. TO ADD A NEW STATIC PAGE:
 *    1. Import the image at the top
 *    2. Add entry to pageOGMetadata object with path as key
 *    3. That's it! MainLayout will handle the rest
 *
 * Generated Meta Tags:
 * ====================
 * - og:title, og:description, og:image (with width/height)
 * - twitter:card, twitter:title, twitter:description, twitter:image
 * - Standard: title, description, canonical URL
 * - Plus: theme-color, apple-mobile-web-app settings
 */

import type { ImageMetadata } from "astro";
import HeroLombok from "@/assets/images/hero-lombok.png";
import TourSnorkeling from "@/assets/images/tour-snorkeling.png";
import TourCultural from "@/assets/images/tour-cultural.png";
import DestinationGili from "@/assets/images/destination-gili.png";
import DestinationLombok from "@/assets/images/destination-lombok.png";
import DestinationRinjani from "@/assets/images/destination-rinjani.png";

export interface OGMetadata {
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  type?: "website" | "article" | "profile";
}

/**
 * OG metadata configuration for all pages
 * Each page has a corresponding OG image and metadata
 * Key = page path, Value = OG metadata object
 */
export const pageOGMetadata: Record<string, OGMetadata> = {
  "/": {
    title: "Sungkar Group",
    description:
      "Operator wisata Lombok berbasis lokal untuk tur pribadi, destinasi, transportasi, ulasan, dan panduan wisata.",
    image: HeroLombok,
    imageAlt: "Pemandangan pantai Lombok dengan matahari terbenam",
  },
  "/tentang-kami": {
    title: "Tentang Kami | Sungkar Group",
    description:
      "Pelajari lebih lanjut tentang Sungkar Group, tim lokal kami, dan pendekatan wisata yang berkelanjutan.",
    image: TourCultural,
    imageAlt: "Pengalaman budaya lokal bersama tim Sungkar Group",
  },
  "/paket-wisata": {
    title: "Paket Wisata | Sungkar Group",
    description:
      "Jelajahi paket wisata lengkap Lombok mulai dari tur 3 hari hingga pengalaman budaya lokal.",
    image: HeroLombok,
    imageAlt: "Paket wisata Lombok dengan pelayanan lokal terbaik",
  },
  "/destinasi": {
    title: "Destinasi | Sungkar Group",
    description:
      "Temukan destinasi terbaik di Lombok, Gili Islands, dan pegunungan Rinjani untuk petualangan Anda.",
    image: DestinationLombok,
    imageAlt: "Destinasi wisata terbaik di Lombok",
  },
  "/ulasan": {
    title: "Ulasan | Sungkar Group",
    description:
      "Baca ulasan dari wisatawan yang telah mengalami tur bersama Sungkar Group.",
    image: HeroLombok,
    imageAlt: "Ulasan positif dari pengunjung Sungkar Group",
  },
  "/panduan-wisata": {
    title: "Panduan Wisata | Sungkar Group",
    description:
      "Panduan lengkap untuk merencanakan liburan ke Lombok, dari cuaca hingga transportasi lokal.",
    image: DestinationRinjani,
    imageAlt: "Panduan wisata lengkap untuk Lombok",
  },
  "/kontak": {
    title: "Kontak | Sungkar Group",
    description:
      "Hubungi Sungkar Group melalui WhatsApp, email, atau formulir online untuk cek ketersediaan.",
    image: HeroLombok,
    imageAlt: "Hubungi Sungkar Group untuk konsultasi gratis",
  },
  "/faq": {
    title: "FAQ | Sungkar Group",
    description:
      "Jawaban lengkap untuk pertanyaan umum tentang paket wisata dan layanan Sungkar Group.",
    image: HeroLombok,
    imageAlt: "Pertanyaan yang sering diajukan tentang wisata Lombok",
  },
  "/akomodasi": {
    title: "Akomodasi | Sungkar Group",
    description:
      "Rekomendasi akomodasi terbaik di Lombok dengan harga terjangkau dan fasilitas lengkap.",
    image: DestinationLombok,
    imageAlt: "Rekomendasi akomodasi di Lombok",
  },
  "/sewa-mobil": {
    title: "Sewa Mobil | Sungkar Group",
    description:
      "Sewa kendaraan lokal dengan driver berpengalaman untuk perjalanan yang nyaman dan fleksibel.",
    image: HeroLombok,
    imageAlt: "Layanan sewa mobil dengan driver profesional",
  },
};

/**
 * Get OG metadata for a specific page path
 * Falls back to home page metadata if path not found
 */
export function getPageOGMetadata(pathname: string): OGMetadata {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  return (
    pageOGMetadata[normalizedPath] || pageOGMetadata["/"]
  );
}

/**
 * Dynamic OG metadata for paket-wisata details
 */
export function getPackageOGMetadata(
  title: string,
  description: string,
  image: ImageMetadata,
  imageAlt: string
): OGMetadata {
  return {
    title: `${title} | Sungkar Group`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}

/**
 * Dynamic OG metadata for destination details
 */
export function getDestinationOGMetadata(
  title: string,
  description: string,
  image: ImageMetadata,
  imageAlt: string
): OGMetadata {
  return {
    title: `${title} | Sungkar Group`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}
