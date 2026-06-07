import type { ImageMetadata } from "astro";

import Hero from "@/assets/images/hero.webp";
import HeroLombok from "@/assets/images/hero-lombok.png";
import Hero1 from "@/assets/images/hero1.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.png";

import DestinationLombok from "@/assets/images/destination-lombok.png";
import DestinationRinjani from "@/assets/images/destination-rinjani.png";
import DestinationGili from "@/assets/images/destination-gili.png";
import DestinationSumbawa from "@/assets/images/destination-sumbawa.png";

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
    variant: "outline" as const,
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
      image: DestinationGili,
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
  tours: [
    {
      slug: "3d2n-lombok-signature",
      title: "Paket Lombok 3H2M",
      description:
        "Rangkaian pantai, matahari terbit, dan pengalaman lokal yang disusun untuk perjalanan pertama ke Lombok.",
    },
    {
      slug: "snorkeling-gili-escape",
      title: "Tur Snorkeling dan Gili",
      description:
        "Jelajah pulau singkat dengan fokus pada air jernih, perpindahan efisien, dan waktu santai di pulau.",
    },
    {
      slug: "village-culture-experience",
      title: "Pengalaman Desa dan Budaya",
      description:
        "Menjelajahi desa tradisional, tenun, dan ritme lokal dengan pendekatan yang lebih dekat dan tenang.",
    },
  ] satisfies LandingTourCard[],
};

export const landingDestinations = {
  eyebrow: "Destinasi utama",
  title: "Destinasi dengan komposisi visual yang lebih seimbang",
  description:
    "Bagian ini sengaja ditata dengan variasi kartu dan arah teks supaya tidak terasa terlalu berat ke kiri.",
  destinations: [
    {
      slug: "kuta-lombok",
      title: "Lombok",
      image: DestinationLombok,
      description:
        "Pantai selatan, desa pesisir, dan rute santai untuk perjalanan multi-hari.",
    },
    {
      slug: "rinjani",
      title: "Rinjani",
      image: DestinationRinjani,
      description:
        "Pegunungan, kabut pagi, dan panorama yang sering jadi alasan orang datang.",
    },
    {
      slug: "gili-trawangan",
      title: "Kepulauan Gili",
      image: DestinationGili,
      description:
        "Snorkeling, jelajah pulau, dan suasana pulau yang mudah dinikmati.",
    },
    {
      slug: "sumbawa",
      title: "Sumbawa",
      image: DestinationSumbawa,
      description:
        "Rute yang lebih sepi dengan karakter alam terbuka dan garis pantai yang kuat.",
    },
  ] satisfies LandingDestinationCard[],
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
    "Ribuan wisatawan telah merasakan pengalaman yang tak terlupakan bersama Sungkar Group. Dengarkan cerita mereka.",
  testimonials: [
    {
      name: "Sarah Wijaya",
      title: "Keluarga dari Jakarta",
      content:
        "Perjalanan ke Lombok bersama Sungkar Group adalah pengalaman terbaik kami. Semua sudah diatur dengan sempurna, driver ramah, dan itinerary yang santai membuat liburan jadi benar-benar rileks.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      title: "Traveler Solo",
      content:
        "Tidak perlu repot urus transportasi dan rute. Sungkar Group handle semuanya dengan profesional. Saya bisa fokus menikmati keindahan Lombok dan berinteraksi dengan penduduk lokal.",
      rating: 5,
    },
    {
      name: "Ratna Dewi",
      title: "Grup Teman dari Bandung",
      content:
        "Dokumentasi berjalan lancar, spot-spot yang dikunjungi bagus, dan guide yang informatif. Harga sesuai dengan kualitas layanan yang diberikan. Pasti akan balik lagi!",
      rating: 5,
    },
  ] satisfies LandingTestimonial[],
};

export const landingVideo = {
  eyebrow: "Video YouTube",
  title: "Ruang untuk video perjalanan dan cuplikan destinasi",
  description:
    "Di bagian ini Anda bisa menempelkan embed video dari channel YouTube Sungkar Group. Area ini disiapkan supaya halaman depan tetap punya ruang visual tambahan tanpa menambah CTA berlebihan.",
  ctaLabel: "Lihat kanal YouTube",
  ctaHref: "https://www.youtube.com/",
  panelEyebrow: "Tempat embed video YouTube",
  panelTitle: "Video sorotan perjalanan Lombok",
  panelDescription:
    "Ganti blok ini dengan embed video resmi dari channel YouTube Sungkar Group ketika URL channel tersedia.",
};

export const landingBackgroundImage = Hero;
