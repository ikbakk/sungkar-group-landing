import { GALLERY, HERO } from "@/assets/images";
import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const motoGP = [
  createPackage(COLLECTIONS.OPEN_TRIP, {
    title: "Open Trip MotoGP Mandalika 2026 4 Days 3 Nights",
    region: "lombok",
    category: "Open Trip Lombok",
    duration: "4 Days 3 Nights",
    images: [
      HERO.heroLombok,
      GALLERY.kutaBeach,
      GALLERY.tourCultural,
      GALLERY.tourSnorkeling,
    ],

    summary:
      "Open Trip MotoGP Mandalika 2026 combines the experience of watching MotoGP racing at the Pertamina Mandalika International Circuit with Sasak cultural tours, snorkeling at the 3 Gili Islands, Lombok's signature cuisine, and a city tour. The package includes Premium Grandstand MotoGP tickets, accommodation, transportation, and a travel companion.",

    highlights: [
      "Tiket MotoGP Premium Grandstand",
      "MotoGP Mandalika 2026",
      "Snorkeling 3 Gili",
      "Gili Trawangan",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Mandalika International Circuit",
      "Open Trip Lombok",
    ],

    itinerary: [
      "Day 1 - Pickup at Lombok International Airport.",
      "Day 1 - Visit Sade Traditional Village and learn about Sasak culture.",
      "Day 1 - Visit Sukarara Weaving Village to see traditional Lombok weaving.",
      "Day 1 - Lunch at a local restaurant.",
      "Day 1 - Check-in at hotel in Mataram City.",
      "Day 1 - Enjoy Lombok specialty dinner with Sate Rembiga.",
      "Day 1 - Return to hotel and rest.",

      "Day 2 - Breakfast and preparation for snorkeling trip.",
      "Day 2 - Journey to Teluk Kodek Harbor.",
      "Day 2 - Snorkeling trip in the 3 Gili area.",
      "Day 2 - Lunch at Gili Trawangan.",
      "Day 2 - Free time to enjoy Gili Trawangan atmosphere.",
      "Day 2 - Optional cycling or cidomo ride (personal expense).",
      "Day 2 - Dinner at Lombok Exotic.",
      "Day 2 - Return to hotel.",

      "Day 3 - Breakfast at hotel.",
      "Day 3 - Transfer to Pertamina Mandalika International Circuit.",
      "Day 3 - Watch the MotoGP Mandalika 2026 Final Race.",
      "Day 3 - Enjoy race day atmosphere and circuit area activities.",
      "Day 3 - Lombok seafood dinner.",
      "Day 3 - Return to hotel.",

      "Day 4 - Breakfast and check-out.",
      "Day 4 - Shop for Lombok souvenirs.",
      "Day 4 - Transfer to Lombok International Airport.",
      "Day 4 - Tour ends.",
    ],

    includes: [
      "MotoGP Premium Grandstand Ticket Zone B, C, J, or K",
      "Hotel 3 nights (1 room for 2 participants)",
      "Transportation during program",
      "Driver and tour guide",
      "Breakfast at hotel",
      "Lunch 2x",
      "Dinner 3x",
      "Snack box 1x",
      "Mineral water",
      "Airport pickup and drop-off",
    ],

    excludes: [
      "Round-trip flight tickets",
      "Airline excess baggage",
      "Bicycle rental at Gili Trawangan",
      "Cidomo at Gili Trawangan",
      "Personal expenses",
      "Guide and driver tip",
    ],
  }),
];