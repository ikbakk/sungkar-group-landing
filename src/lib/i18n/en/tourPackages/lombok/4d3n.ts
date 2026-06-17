import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const fourDays: TourPackage[] = [
  createPackage(COLLECTIONS.FOUR_DAYS_THREE_NIGHTS, {
    title: "Lombok 4 Days 3 Nights Gili Trawangan & Gili Nanggu Package",
    region: "lombok",
    featured: true,
    category: "Lombok Tour Packages",
    duration: "4 Days 3 Nights",
    images: [HERO.lombok, DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.tourSnorkeling],

    summary:
      "A 4-day 3-night Lombok tour package combining Sasak cultural tours, the beauty of Kuta Mandalika Beach, Bukit Merese, Gili Nanggu, Gili Sudak, Gili Kedis, and Gili Trawangan. Perfect for couples, families, or groups wanting a complete Lombok experience with private tours, island hopping, and Lombok's signature cuisine.",

    highlights: [
      "Gili Trawangan",
      "Gili Nanggu",
      "Gili Sudak",
      "Gili Kedis",
      "Pantai Kuta Mandalika",
      "Bukit Merese",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Private Island Hopping",
      "Kuliner Khas Lombok",
    ],

    itinerary: [
      "Day 1 - Pickup at Lombok International Airport.",
      "Day 1 - Visit Sukarara Weaving Village to see traditional Lombok songket making.",
      "Day 1 - Visit Sade Traditional Village to learn about Sasak culture and way of life.",
      "Day 1 - Lunch at Kuta Mandalika area.",
      "Day 1 - Enjoy the beauty of Kuta Mandalika Beach.",
      "Day 1 - Visit Tanjung Aan Beach with its distinctive Lombok white sand.",
      "Day 1 - Enjoy the sunset panorama from Bukit Merese.",
      "Day 1 - Enjoy Lombok specialty Ayam Taliwang dinner.",
      "Day 1 - Check-in at hotel and free time.",

      "Day 2 - Breakfast at hotel.",
      "Day 2 - Proceed to Tawun Harbor to start island hopping.",
      "Day 2 - Enjoy the beauty of Gili Nanggu and snorkeling activities.",
      "Day 2 - Seafood lunch by the beach.",
      "Day 2 - Visit Gili Tangkong.",
      "Day 2 - Visit Gili Sudak.",
      "Day 2 - Visit Gili Kedis, known as Lombok's romantic island.",
      "Day 2 - Return to Tawun Harbor.",
      "Day 2 - Dinner at a restaurant with live music.",
      "Day 2 - Return to hotel and free time.",

      "Day 3 - Breakfast at hotel.",
      "Day 3 - Proceed to Teluk Nara Harbor.",
      "Day 3 - Cross to Gili Trawangan by private speedboat.",
      "Day 3 - Enjoy Gili Trawangan atmosphere and free time.",
      "Day 3 - Optional: snorkeling, cycling, or touring by cidomo (personal expense).",
      "Day 3 - Lunch at a beachfront restaurant on Gili Trawangan.",
      "Day 3 - Return to Lombok Island in the afternoon.",
      "Day 3 - Visit Lombok pearl gallery.",
      "Day 3 - Shop for Lombok souvenirs.",
      "Day 3 - Dinner at a restaurant with live music.",
      "Day 3 - Return to hotel.",

      "Day 4 - Breakfast at hotel.",
      "Day 4 - Mataram city tour and surroundings.",
      "Day 4 - Free time before departure.",
      "Day 4 - Transfer to Lombok International Airport.",
      "Day 4 - Tour ends.",
    ],

    includes: [
      "3 nights hotel as per choice",
      "Tour transportation during program",
      "Driver doubling as guide for 2–6 participants",
      "HPI licensed guide for large groups",
      "Breakfast at hotel",
      "Lunch as per program",
      "Dinner as per program",
      "Private speedboat round-trip to Gili Trawangan",
      "Entrance tickets to tourist attractions",
      "Tourism donation",
      "Mineral water during tour",
      "Travel documentation (tentative)",
      "Airport pickup and drop-off",
    ],

    excludes: [
      "Flight tickets",
      "Bicycle rental at Gili Trawangan",
      "Cidomo at Gili Trawangan",
      "Snorkeling at Gili Trawangan",
      "Personal expenses",
      "Hotel laundry",
      "Guide and crew tip",
      "Meals outside program",
    ],
  }),
];