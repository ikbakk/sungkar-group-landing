import type { ImageMetadata } from "astro";

import { businessInfo } from "@/lib/contact-data";
import { destinations } from "@/lib/content/destinationsData";
import { packages } from "@/lib/content/tourPackages";
import { reviewStats, reviews } from "@/lib/content/reviewPage";
import Hero from "@/assets/images/hero.webp";
import HeroLombok from "@/assets/images/hero-lombok.webp";
import KutaBeach from "@/assets/images/kuta-beach.webp";
import KutaBeach2 from "@/assets/images/kuta-beach-2.webp";
import GiliMeno from "@/assets/images/gili-meno.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.webp";

export interface LandingAction {
  label: string;
  href: string;
  variant: "default" | "outline";
}

export interface LandingHeroCard {
  className: string;
  style: string;
  image?: ImageMetadata;
  alt?: string;
  title: string;
  description?: string;
  emoji?: string;
  contentSizeClass: string;
  width?: number;
  height?: number;
}

export interface LandingTourCard {
  image: ImageMetadata;
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
  image: ImageMetadata;
}

export interface LandingTransportCard {
  title: string;
  description: string;
}

export interface LandingTestimonial {
  name: string;
  title: string;
  content: string;
  rating: number;
}

export const landingHero = {
  eyebrow: "Sungkar Group",
  title: "Perjalanan Nyaman ke Lombok, Sumbawa & Labuan Bajo",
  description:
    "Sungkar Group merancang private tour, open trip, dan transportasi yang sesuai ritme perjalanan Anda. Dari pantai Lombok, petualangan Sumbawa, sampai pesona laut Labuan Bajo.",
  primaryAction: {
    label: "Konsultasi Trip",
    href: "/kontak",
    variant: "default" as const,
  },
  secondaryAction: {
    label: "Lihat Paket",
    href: "/paket-wisata",
    variant: "secondary" as const,
  },
  cards: [
    {
      className: "card-1",
      style: "width: 280px; height: 340px;",
      image: KutaBeach,
      alt: "Rencana perjalanan wisata yang tersusun dengan jelas",
      title: "Trip yang Tertata",
      description: "Detail perjalanan disiapkan sejak awal",
      contentSizeClass: "p-6",
    },
    {
      className: "card-2",
      style: "width: 240px; height: 280px; right: 20px; top: 80px;",
      image: KutaBeach2,
      alt: "Pantai tropis di Lombok",
      title: "Pantai & Pulau",
      contentSizeClass: "p-4",
    },
    {
      className: "card-3",
      style: "width: 220px; height: 260px; left: 40px; top: 120px;",
      image: HeroLombok,
      alt: "Lanskap alam tropis untuk petualangan wisata",
      title: "Petualangan Alam",
      contentSizeClass: "p-4",
    },
    {
      className: "card-4",
      style: "width: 200px; height: 240px; right: -10px; top: 200px;",
      image: GiliMeno,
      alt: "Aktivitas snorkeling di laut tropis",
      title: "Snorkeling & Laut",
      contentSizeClass: "p-3",
    },
  ] satisfies LandingHeroCard[],
};

export const landingFeaturedTours = {
  eyebrow: "Paket unggulan",
  title: "Paket paling populer untuk liburan tanpa ribet",
  description:
    "Mulai dari trip singkat sampai perjalanan beberapa hari, paket kami dirancang agar Anda tinggal memilih, berangkat, dan menikmati momen.",
  heroImage: TourSnorkeling,
  tours: packages
    .filter((tour) => tour.featured)
    .map(
      (tour): LandingTourCard => ({
        image: tour.images[0],
        duration: tour.duration,
        region: tour.region,
        collectionSlug: tour.collectionSlug,
        slug: tour.slug,
        title: tour.title,
        description: tour.summary,
      }),
    ),
};

export const landingDestinations = {
  eyebrow: "Destinasi favorit",
  title: "Destinasi yang paling sering masuk itinerary",
  description:
    "Kami membantu Anda memilih rute terbaik di Lombok dan Sumbawa, sekaligus menyiapkan trip lanjutan ke Labuan Bajo bila Anda ingin perjalanan yang lebih besar.",
  destinations: destinations.slice(0, 4).map(
    (destination): LandingDestinationCard => ({
      slug: destination.slug,
      title: destination.title,
      image: destination.image,
      description: destination.summary,
    }),
  ),
};

export const landingTransport = {
  eyebrow: "Transportasi",
  title: "Transportasi nyaman untuk perjalanan yang tetap fleksibel",
  services: [
    {
      title: "Antar-jemput bandara",
      description:
        "Penjemputan tepat waktu untuk kedatangan pagi, malam, atau jadwal yang berubah.",
    },
    {
      title: "Driver harian pribadi",
      description:
        "Cocok untuk tamu yang ingin bebas menyesuaikan destinasi dan durasi singgah.",
    },
    {
      title: "Sewa mobil lepas kunci",
      description:
        "Kebebasan penuh menjelajahi Lombok dan Sumbawa dengan mobil sewaan tanpa driver.",
    },
    {
      title: "Paket perjalanan multi-kota",
      description:
        "Kombinasi transportasi Lombok - Sumbawa - Labuan Bajo dalam satu paket hemat.",
    },
  ] satisfies LandingTransportCard[],
};

export const landingTestimonials = {
  eyebrow: "Ulasan tamu",
  title: "Dipercaya untuk perjalanan yang nyaman dan terorganisir",
  description:
    "Dari keluarga, pasangan, hingga rombongan, ulasan berikut menunjukkan pengalaman perjalanan yang berkesan bersama tim lokal kami.",
  testimonials: reviews.slice(0, 3).map(
    (review): LandingTestimonial => ({
      name: review.author,
      title: review.source,
      content: review.text,
      rating: review.rating,
    }),
  ),
  stats: reviewStats,
};

export const landingVideo = {
  eyebrow: "Cerita Perjalanan",

  title: "Lihat suasana trip sebelum Anda berangkat",

  description:
    "Video singkat membantu Anda membayangkan rute, destinasi, dan suasana layanan yang kami siapkan di setiap perjalanan.",

  ctaLabel: "Kunjungi Channel YouTube",

  ctaHref:
    businessInfo.socialLinks.youtube ??
    "https://www.youtube.com/@sungkargroup1",

  embedUrl: "https://www.youtube.com/embed/HgicK9YpopU?si=m7IlfX-QXJVB0mVC",
} as const;

export const landingBackgroundImage = Hero;
