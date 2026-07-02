import type { ImageSource } from "@/lib/images";
import { HERO, GALLERY } from "@/assets/images";

import { businessInfo } from "@/lib/contact-data";
import { toMarqueeReviews, reviewStats } from "@/lib/content/reviews";
import type { TourPackage } from "@/lib/content/tourPackages/types";

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

export interface LandingTransportCard {
  title: string;
  description: string;
}

export const landingHero = {
  eyebrow: "Sungkar Group",
  title: "Pelancongan Selesa ke Lombok, Sumbawa & Labuan Bajo",
  description:
    "Pelancongan persendirian, open trip, dan pengangkutan mengikut kelajuan anda di Lombok, Sumbawa, dan Labuan Bajo.",
  primaryAction: {
    label: "Bincangkan Pelancongan Anda",
    href: "/kontak",
    variant: "default" as const,
  },
  secondaryAction: {
    label: "Lihat Pakej",
    href: "/paket-wisata",
    variant: "secondary" as const,
  },
  cards: [
    {
      className: "card-1",
      style: "width: 280px; height: 340px;",
      image: GALLERY.kutaBeach,
      alt: "Pelancong yang teratur dengan baik",
      title: "Pelancong Terancang dengan Baik",
      description: "Butiran pelanconging disediakan sejak permulaan",
      contentSizeClass: "p-6",
    },
    {
      className: "card-2",
      style: "width: 240px; height: 280px; right: 20px; top: 80px;",
      image: GALLERY.kutaBeach2,
      alt: "Pantai tropika di Lombok",
      title: "Pantai & Pulau",
      contentSizeClass: "p-4",
    },
    {
      className: "card-3",
      style: "width: 220px; height: 260px; left: 40px; top: 120px;",
      image: HERO.heroLombok,
      alt: "Landskap alam tropika untuk pelancongan petualangan",
      title: "Petualangan Alam",
      contentSizeClass: "p-4",
    },
    {
      className: "card-4",
      style: "width: 200px; height: 240px; right: -10px; top: 200px;",
      image: GALLERY.giliMeno,
      alt: "Aktiviti snorkeling di air tropika",
      title: "Snorkeling & Laut",
      contentSizeClass: "p-3",
    },
  ] satisfies LandingHeroCard[],
};

export const landingFeaturedToursBase = {
  eyebrow: "Pakej pilihan",
  title: "Pakej paling popular untuk liburan tanpa susah payah",
  description:
    "Dari pelancongan ringkas hingga perjalanan berbilang hari, pakej kami direka bentuk supaya anda hanya perlu pilih, pergi, dan menikmati saat itu.",
  heroImage: GALLERY.tourSnorkeling,
};

export const landingDestinationsBase = {
  eyebrow: "Destinasi kegemaran",
  title: "Destinasi yang paling kerap masuk dalam pelancong",
  description:
    "Kami membantu anda memilih laluan terbaik di Lombok dan Sumbawa, sedia menyiarkan pelancongan seterusnya ke Labuan Bajo jika anda mahu petualangan yang lebih besar.",
};

export const landingTransport = {
  eyebrow: "Pengangkutan",
  title: "Pengangkutan selesa untuk perjalanan yang fleksibel",
  services: [
    {
      title: "Penghantaran Lapangan Terbang",
      description:
        "Penjemputan tepat masa untuk jadual pagi, petang, atau yang berubah-ubah.",
    },
    {
      title: "Pemandu Harian Persendirian",
      description:
        "Sesuai untuk tetamu yang mahu kebebasan menyesuaikan destinasi dan tempoh berhenti.",
    },
    {
      title: "Sewa Kereta Lease",
      description:
        "Kebebasan penuh untuk menjelajahi Lombok dan Sumbawa dengan kereta sewa tanpa pemandu.",
    },
    {
      title: "Pakej Pelancongan Multi-Bandar",
      description:
        "Pengangkutan gabungan Lombok - Sumbawa - Labuan Bajo dalam satu pakej yang kos-berkesan.",
    },
  ] satisfies LandingTransportCard[],
};

export const landingTestimonials = {
  eyebrow: "Ulasan tetamu",
  title: "Dipercayai untuk pelancongan yang selesa dan teratur dengan baik",
  description:
    "Dari keluarga, pasangan, hingga kumpulan, ulasan berikut menunjukkan pengalaman pelancongan yang berkenan dengan pasukan tempatan kami.",
  testimonials: toMarqueeReviews(),
  stats: reviewStats,
};

export const landingVideo = {
  eyebrow: "Cerita Perjalanan",

  title: "Lihat suasana pelancongan sebelum anda pergi",

  description:
    "Video pendek membantu anda membayangkan laluan, destinasi, dan suasana perkhidmatan yang kami sediakan untuk setiap perjalanan.",

  ctaLabel: "Lawati Saluran YouTube",

  ctaHref:
    businessInfo.socialLinks.youtube ??
    "https://www.youtube.com/@sungkargroup1",

  embedUrl: "https://www.youtube.com/embed/HgicK9YpopU?si=m7IlfX-QXJVB0mVC",
} as const;

export const landingReels = {
  eyebrow: "Instagram Reels",

  title: "Lihat detik-detik sebenar dari perjalanan kami",

  description:
    "Tangkap detik perjalanan autentik, sorotan destinasi, dan suasana yang boleh anda jangkakan dalam perjalanan bersama Sungkar Group.",

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

export const landingBackgroundImage = HERO.hero;
