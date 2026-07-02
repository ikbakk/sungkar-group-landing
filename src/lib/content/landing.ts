import type { ImageSource } from "@/lib/images";
import { HERO, GALLERY } from "@/assets/images";

import { businessInfo } from "@/lib/contact-data";
import { toMarqueeReviews, reviewStats } from "@/lib/content/reviews";
import type { TourPackage } from "./tourPackages/types";

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

export function toLandingTourCard(tour: TourPackage): LandingTourCard {
  return {
    image: tour.images[0],
    duration: tour.duration,
    region: tour.region,
    collectionSlug: tour.collectionSlug,
    slug: tour.slug,
    title: tour.title,
    description: tour.summary,
  };
}

export function toLandingDestinationCard(dest: {
  slug: string;
  title: string;
  image: import("@/lib/images").ImageSource;
  summary: string;
}): LandingDestinationCard {
  return {
    slug: dest.slug,
    title: dest.title,
    image: dest.image,
    description: dest.summary,
  };
}

export interface LandingTransportCard {
  title: string;
  description: string;
}

export const landingHero = {
  eyebrow: "Sungkar Group",
  title: "Perjalanan Nyaman ke Lombok, Sumbawa & Labuan Bajo",
  description:
    "Private tour, open trip, dan transportasi sesuai ritme perjalanan Anda di Lombok, Sumbawa, dan Labuan Bajo.",
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
      image: GALLERY.kutaBeach,
      alt: "Rencana perjalanan wisata yang tersusun dengan jelas",
      title: "Trip yang Tertata",
      description: "Detail perjalanan disiapkan sejak awal",
      contentSizeClass: "p-6",
    },
    {
      className: "card-2",
      style: "width: 240px; height: 280px; right: 20px; top: 80px;",
      image: GALLERY.kutaBeach2,
      alt: "Pantai tropis di Lombok",
      title: "Pantai & Pulau",
      contentSizeClass: "p-4",
    },
    {
      className: "card-3",
      style: "width: 220px; height: 260px; left: 40px; top: 120px;",
      image: HERO.lombok,
      alt: "Lanskap alam tropis untuk petualangan wisata",
      title: "Petualangan Alam",
      contentSizeClass: "p-4",
    },
    {
      className: "card-4",
      style: "width: 200px; height: 240px; right: -10px; top: 200px;",
      image: GALLERY.giliMeno,
      alt: "Aktivitas snorkeling di laut tropis",
      title: "Snorkeling & Laut",
      contentSizeClass: "p-3",
    },
  ] satisfies LandingHeroCard[],
};

export const landingFeaturedToursBase = {
  eyebrow: "Paket unggulan",
  title: "Paket paling populer untuk liburan tanpa ribet",
  description:
    "Mulai dari trip singkat sampai perjalanan beberapa hari, paket kami dirancang agar Anda tinggal memilih, berangkat, dan menikmati momen.",
  heroImage: GALLERY.tourSnorkeling,
};

export const landingDestinationsBase = {
  eyebrow: "Destinasi favorit",
  title: "Destinasi yang paling sering masuk itinerary",
  description:
    "Kami membantu Anda memilih rute terbaik di Lombok dan Sumbawa, sekaligus menyiapkan trip lanjutan ke Labuan Bajo bila Anda ingin perjalanan yang lebih besar.",
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
  testimonials: toMarqueeReviews(),
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

export interface LandingReelItem {
  url: string;
}

export const landingReels = {
  eyebrow: "Instagram Reels",

  title: "Lihat momen asyik dari perjalanan kami",

  description:
    "Tangkap momen perjalanan autentik, sorotan destinasi, dan vibe yang bisa Anda rasakan dalam perjalanan bersama Sungkar Group.",

  ctaLabel: "Ikuti di Instagram",

  ctaHref:
    businessInfo.socialLinks.instagram ??
    "https://www.instagram.com/tour_lombok/",

  reels: [
    { url: "https://www.instagram.com/reel/DZUQ_-9zibN/" },
    { url: "https://www.instagram.com/reel/DWxxbfbEw4j/" },
    { url: "https://www.instagram.com/reel/DB7V1JxMpiu/" },
    { url: "https://www.instagram.com/reel/DSccM5jEmEG/" },
  ],
} as const;

export const landingBackgroundImage = HERO.main;
