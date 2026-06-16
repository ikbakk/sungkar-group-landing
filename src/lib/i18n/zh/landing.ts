import type { ImageSource } from "@/lib/images";
import { HERO, GALLERY } from "@/assets/images";

import { businessInfo } from "@/lib/contact-data";
import { destinations } from "@/lib/content/destinations";
import { packages } from "@/lib/content/tourPackages";
import { toMarqueeReviews, reviewStats } from "@/lib/content/reviews";

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

function toLandingTourCard(tour: (typeof packages)[number]): LandingTourCard {
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

function toLandingDestinationCard(
  dest: (typeof destinations)[number],
): LandingDestinationCard {
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
  title: "Comfortable Travel to Lombok, Sumbawa & Labuan Bajo",
  description:
    "Private tour, open trip, and transportation at your own pace in Lombok, Sumbawa, and Labuan Bajo.",
  primaryAction: {
    label: "Consult Your Trip",
    href: "/kontak",
    variant: "default" as const,
  },
  secondaryAction: {
    label: "View Packages",
    href: "/paket-wisata",
    variant: "secondary" as const,
  },
  cards: [
    {
      className: "card-1",
      style: "width: 280px; height: 340px;",
      image: GALLERY.kutaBeach,
      alt: "Well-organized travel itinerary",
      title: "Well-Planned Trips",
      description: "Trip details prepared from the start",
      contentSizeClass: "p-6",
    },
    {
      className: "card-2",
      style: "width: 240px; height: 280px; right: 20px; top: 80px;",
      image: GALLERY.kutaBeach2,
      alt: "Tropical beach in Lombok",
      title: "Beaches & Islands",
      contentSizeClass: "p-4",
    },
    {
      className: "card-3",
      style: "width: 220px; height: 260px; left: 40px; top: 120px;",
      image: HERO.lombok,
      alt: "Tropical natural landscape for adventure travel",
      title: "Nature Adventure",
      contentSizeClass: "p-4",
    },
    {
      className: "card-4",
      style: "width: 200px; height: 240px; right: -10px; top: 200px;",
      image: GALLERY.giliMeno,
      alt: "Snorkeling activities in tropical waters",
      title: "Snorkeling & Sea",
      contentSizeClass: "p-3",
    },
  ] satisfies LandingHeroCard[],
};

export const landingFeaturedTours = {
  eyebrow: "Featured packages",
  title: "Most popular packages for a hassle-free vacation",
  description:
    "From short trips to multi-day journeys, our packages are designed so you can just pick, go, and enjoy the moment.",
  heroImage: GALLERY.tourSnorkeling,
  tours: packages.filter((tour) => tour.featured).map(toLandingTourCard),
};

export const landingDestinations = {
  eyebrow: "Favorite destinations",
  title: "Destinations that most frequently make the itinerary",
  description:
    "We help you choose the best routes in Lombok and Sumbawa, while also preparing onward trips to Labuan Bajo if you want a bigger adventure.",
  destinations: destinations.slice(0, 4).map(toLandingDestinationCard),
};

export const landingTransport = {
  eyebrow: "Transportation",
  title: "Comfortable transportation for a flexible journey",
  services: [
    {
      title: "Airport Transfer",
      description:
        "On-time pickup for morning, evening, or changing schedules.",
    },
    {
      title: "Private Daily Driver",
      description:
        "Perfect for guests who want the freedom to adjust destinations and stop durations.",
    },
    {
      title: "Lease Car Rental",
      description:
        "Full freedom to explore Lombok and Sumbawa with a rental car without a driver.",
    },
    {
      title: "Multi-City Travel Package",
      description:
        "Combined Lombok - Sumbawa - Labuan Bajo transportation in one cost-effective package.",
    },
  ] satisfies LandingTransportCard[],
};

export const landingTestimonials = {
  eyebrow: "Guest reviews",
  title: "Trusted for comfortable and well-organized travel",
  description:
    "From families, couples, to groups, the following reviews show memorable travel experiences with our local team.",
  testimonials: toMarqueeReviews(),
  stats: reviewStats,
};

export const landingVideo = {
  eyebrow: "Journey Stories",

  title: "See the trip atmosphere before you go",

  description:
    "Short videos help you imagine the routes, destinations, and service atmosphere we prepare for every journey.",

  ctaLabel: "Visit YouTube Channel",

  ctaHref:
    businessInfo.socialLinks.youtube ??
    "https://www.youtube.com/@sungkargroup1",

  embedUrl: "https://www.youtube.com/embed/HgicK9YpopU?si=m7IlfX-QXJVB0mVC",
} as const;

export const landingBackgroundImage = HERO.main;
