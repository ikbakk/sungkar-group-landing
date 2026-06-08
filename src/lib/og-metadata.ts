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
