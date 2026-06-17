import { HERO, GALLERY, DESTINATIONS } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const twoDays: TourPackage[] = [
  createPackage(COLLECTIONS.TWO_DAYS_ONE_NIGHT, {
    title: "Kuta Lombok Beach & City Tour Package",
    region: "lombok",
    category: "Lombok Tour Packages",
    duration: "2 Days 1 Night",
    images: [HERO.heroLombok, GALLERY.kutaBeach, GALLERY.kutaBeach2, GALLERY.tourCultural],

    summary:
      "A 2-day 1-night Lombok tour package combining the beauty of Kuta Mandalika Beach, Tanjung Aan Beach, Sasak cultural tour, and historical and religious tours in Mataram City. Perfect for travelers who want to enjoy beaches, culture, cuisine, and Lombok's tourist icons in a short time.",

    highlights: [
      "Pantai Kuta Mandalika",
      "Pantai Tanjung Aan",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Desa Gerabah Banyumulek",
      "Taman Lingsar",
      "Taman Narmada",
      "Wisata Kota Mataram",
    ],

    itinerary: [
      "Day 1 - Pickup at Lombok International Airport.",
      "Day 1 - Enjoy the panorama of Kuta Mandalika Beach with its distinctive pepper-like white sand.",
      "Day 1 - Lunch at Kuta Lombok Beach area.",
      "Day 1 - Visit Tanjung Aan Beach and enjoy the calm beach atmosphere and stunning sea views.",
      "Day 1 - Visit Sukarara Village to see traditional Lombok weaving.",
      "Day 1 - Visit Sade Traditional Village and learn about Sasak culture and way of life.",
      "Day 1 - Visit Banyumulek Village, famous as the center of traditional Lombok pottery.",
      "Day 1 - Check-in at hotel and rest time.",
      "Day 1 - Enjoy Lombok specialty dinner.",

      "Day 2 - Breakfast at hotel.",
      "Day 2 - Visit Lingsar Temple, a historic complex symbolizing harmony between Hindus and Islam Wetu Telu in Lombok.",
      "Day 2 - Visit Narmada Park, a heritage park from the Mataram Kingdom famous for its natural spring.",
      "Day 2 - Enjoy Lombok specialty lunch with sate bulayak.",
      "Day 2 - Shop for Lombok souvenirs such as pearls, Lombok honey, salted eggs, and local crafts.",
      "Day 2 - Transfer to Lombok International Airport.",
      "Day 2 - Tour ends.",
    ],

    includes: [
      "1 night hotel as per choice",
      "Air-conditioned tour transportation",
      "Professional driver",
      "Breakfast at hotel",
      "Lunch as per program",
      "Dinner as per program",
      "Mineral water",
      "Fuel and parking fees",
      "Airport pickup",
      "Airport drop-off",
    ],

    excludes: [
      "Flight tickets",
      "Entrance tickets to tourist attractions",
      "Personal expenses",
      "Travel insurance",
      "Driver and guide tip",
    ],
  }),

  createPackage(COLLECTIONS.TWO_DAYS_ONE_NIGHT, {
    title: "Pink Beach & Tanjung Ringgit 2 Days 1 Night Package",
    region: "lombok",
    category: "Lombok Tour Packages",
    duration: "2 Days 1 Night",
    images: [HERO.heroLombok, DESTINATIONS.lombok, GALLERY.tourSnorkeling],

    summary:
      "A 2-day 1-night tour package to Pink Beach Lombok and Tanjung Ringgit featuring island hopping, snorkeling, and spectacular cliffside sea panoramas. Explore Pulau Pasir, Pink Beach 2, Pink Beach 3, Pink Beach, and Tanjung Ringgit, then enjoy a comfortable night at your chosen hotel.",

    highlights: [
      "Pantai Pink Lombok",
      "Tanjung Ringgit",
      "Pulau Pasir",
      "Pantai Pink 2",
      "Pantai Pink 3",
      "Snorkeling",
      "Private Boat Trip",
      "Goa Jepang",
      "Menginap 1 Malam",
    ],

    itinerary: [
      "Day 1 - Pickup at Lombok Airport, hotel, or agreed location.",
      "Day 1 - Journey to Telong Elong or Tanjung Luar Harbor.",
      "Day 1 - Cross by traditional boat to Pulau Pasir.",
      "Day 1 - Enjoy the beauty of Pulau Pasir, which only appears during low tide.",
      "Day 1 - Visit Pink Beach 3 and enjoy the pristine beach panorama.",
      "Day 1 - Visit Pink Beach 2 for photos and enjoying the exotic atmosphere of East Lombok.",
      "Day 1 - Lunch at Pink Beach area.",
      "Day 1 - Enjoy the beauty of Pink Beach and snorkeling activities.",
      "Day 1 - Visit Japanese Cave from World War II.",
      "Day 1 - Journey to Tanjung Ringgit and enjoy the cliff and open sea panorama.",
      "Day 1 - Visit bunkers and cannons from the Japanese era at Tanjung Ringgit area.",
      "Day 1 - Check-in at hotel and rest time.",
      "Day 1 - Lombok specialty dinner.",

      "Day 2 - Breakfast at hotel.",
      "Day 2 - Free time to enjoy hotel facilities or personal activities.",
      "Day 2 - Shop for Lombok souvenirs such as pearls, Lombok honey, and local crafts.",
      "Day 2 - Transfer to Lombok International Airport or destination.",
      "Day 2 - Tour ends.",
    ],

    includes: [
      "1 night hotel as per choice",
      "Air-conditioned tour transportation",
      "Professional driver",
      "1x breakfast",
      "1x lunch",
      "1x dinner",
      "Traditional boat as per program",
      "Mineral water",
      "Fuel and parking",
      "Pickup and drop-off",
    ],

    excludes: [
      "Entrance tickets to tourist attractions",
      "Snorkeling equipment",
      "Flight tickets",
      "Personal expenses",
      "Travel insurance",
      "Driver and crew tip",
    ],
  }),
];