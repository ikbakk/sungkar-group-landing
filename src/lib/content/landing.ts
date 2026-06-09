import type { ImageMetadata } from "astro";

import { businessInfo } from "@/lib/contact-data";
import { destinations } from "@/lib/content/destinationsData";
import { packages } from "@/lib/content/tourPackages";
import { reviewStats, reviews } from "@/lib/content/reviewPage";
import Hero from "@/assets/images/hero.webp";
import HeroLombok from "@/assets/images/hero-lombok.png";
import Hero1 from "@/assets/images/hero1.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.png";

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
}

export interface LandingTourCard {
  slug: string;
  title: string;
  description: string;
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
  title: "Wisata Lombok yang disusun dari pengalaman lokal",
  description:
    "Sungkar Group membantu Anda menjelajahi Lombok, Gili, Rinjani, dan Sumbawa lewat tur pribadi, transportasi yang rapi, dan itinerary yang terasa tenang sejak penjemputan pertama.",
  primaryAction: {
    label: "Mulai Perjalanan Anda",
    href: "/kontak",
    variant: "default" as const,
  },
  secondaryAction: {
    label: "Jelajahi Paket",
    href: "/paket-wisata",
    variant: "secondary" as const,
  },
  cards: [
    {
      className: "card-1",
      style: "width: 280px; height: 340px;",
      image: Hero1,
      alt: "Destinasi wisata Lombok",
      title: "Destinasi Impian",
      description: "Jelajahi keindahan alam",
      contentSizeClass: "p-6",
    },
    {
      className: "card-2",
      style: "width: 240px; height: 280px; right: 20px; top: 80px;",
      image: HeroLombok,
      alt: "Pantai Lombok",
      title: "Pantai Eksotis",
      contentSizeClass: "p-4",
    },
    {
      className: "card-3",
      style: "width: 220px; height: 260px; left: 40px; top: 120px;",
      image: HeroLombok,
      alt: "Kepulauan Gili",
      title: "Kepulauan Gili",
      contentSizeClass: "p-4",
    },
    {
      className: "card-4",
      style: "width: 200px; height: 240px; right: -10px; top: 200px;",
      image: TourSnorkeling,
      alt: "Tur Snorkeling",
      title: "Snorkeling",
      contentSizeClass: "p-3",
    },
    {
      className: "card-5",
      style: "width: 180px; height: 220px; left: -20px; top: 240px;",
      emoji: "🏖️",
      title: "Pantai Santai",
      contentSizeClass: "p-3",
    },
  ] satisfies LandingHeroCard[],
};

export const landingFeaturedTours = {
  eyebrow: "Paket unggulan",
  title: "Pilihan paket yang paling sering dipilih",
  description:
    "Paket wisata dibuat jelas sejak awal agar wisatawan bisa memilih rute yang sesuai tanpa perlu menebak-nebak.",
  heroImage: TourSnorkeling,
  tours: packages
    .filter((tour) => tour.featured)
    .map((tour): LandingTourCard => ({
      slug: tour.slug,
      title: tour.title,
      description: tour.summary,
    })),
};

export const landingDestinations = {
  eyebrow: "Destinasi utama",
  title: "Destinasi dengan komposisi visual yang lebih seimbang",
  description:
    "Bagian ini sengaja ditata dengan variasi kartu dan arah teks supaya tidak terasa terlalu berat ke kiri.",
  destinations: destinations.slice(0, 4).map((destination): LandingDestinationCard => ({
    slug: destination.slug,
    title: destination.title,
    image: destination.image,
    description: destination.summary,
  })),
};

export const landingTransport = {
  eyebrow: "Transportasi",
  title: "Transportasi yang rapi untuk transfer dan perjalanan harian",
  services: [
    {
      title: "Antar-jemput bandara",
      description:
        "Cocok untuk kedatangan pagi atau malam dengan koordinasi yang sederhana.",
    },
    {
      title: "Driver harian",
      description:
        "Fleksibel untuk tamu yang ingin menyesuaikan urutan destinasi.",
    },
  ] satisfies LandingTransportCard[],
};

export const landingTestimonials = {
  eyebrow: "Ulasan & Testimoni",
  title: "Apa kata mereka tentang perjalanan bersama kami",
  description:
    "Ulasan ringkas ini diambil dari data ulasan yang sudah dipakai di halaman ulasan agar homepage tidak punya sumber data terpisah.",
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
  eyebrow: "Video YouTube",
  title: "Ruang untuk video perjalanan dan cuplikan destinasi",
  description:
    "Tautan video sekarang diarahkan ke kanal resmi yang dipakai di halaman kontak, supaya homepage dan kontak tetap konsisten.",
  ctaLabel: "Lihat kanal YouTube",
  ctaHref: businessInfo.socialLinks.youtube ?? "https://www.youtube.com/",
  panelEyebrow: "Tempat embed video YouTube",
  panelTitle: "Video sorotan perjalanan Lombok",
  panelDescription:
    "Ganti blok ini dengan embed video resmi dari channel YouTube Sungkar Group ketika URL embed sudah dipilih.",
};

export const landingBackgroundImage = Hero;
