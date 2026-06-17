import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const oneDay: TourPackage[] = [
  createPackage(COLLECTIONS.ONE_DAY, {
    title: "Sendang Gile & Tiu Kelep Waterfall Tour Package",
    region: "lombok",
    featured: true,
    category: "Lombok Tour Packages",
    duration: "1 Day",
    images: [HERO.lombok, DESTINATIONS.rinjani],

    summary:
      "Sendang Gile and Tiu Kelep Waterfall tour package that takes you to explore the natural beauty of North Lombok at the foot of Mount Rinjani. Enjoy the atmosphere of Baun Pusuk Tourist Forest, the cultural tour of Senaru Village, the ancient Bayan Beleq Mosque, and the freshness of Lombok's two most popular waterfalls in one comfortable and memorable journey.",

    highlights: [
      "Air Terjun Tiu Kelep",
      "Air Terjun Sendang Gile",
      "Desa Adat Senaru",
      "Masjid Kuno Bayan Beleq",
      "Hutan Wisata Baun Pusuk",
      "Private Tour Lombok Utara",
    ],

    itinerary: [
      "Day 1 - Pickup at hotel after breakfast.",
      "Day 1 - Visit Baun Pusuk Tourist Forest to see and interact with friendly monkeys.",
      "Day 1 - Historical tour to Bayan Beleq Mosque, the oldest mosque and one of Lombok's Islamic heritage icons.",
      "Day 1 - Trekking to Sendang Gile Waterfall in the Mount Rinjani National Park area.",
      "Day 1 - Continue to Tiu Kelep Waterfall and enjoy the natural beauty of North Lombok.",
      "Day 1 - Lunch at a local restaurant around Senaru area.",
      "Day 1 - Visit Senaru Village to see traditional houses and the preserved Sasak way of life.",
      "Day 1 - Shop for Lombok souvenirs such as pearls, Lombok honey, salted eggs, and local crafts.",
      "Day 1 - Enjoy Lombok specialty dinner.",
      "Day 1 - Return to hotel and tour ends.",
    ],

    includes: [
      "Air-conditioned tour transportation",
      "Professional driver",
      "Lunch",
      "Dinner",
      "Mineral water",
      "Fuel and parking fees",
      "Hotel pickup and drop-off",
    ],

    excludes: [
      "Entrance tickets to tourist attractions",
      "Local trekking guide",
      "Personal expenses",
      "Travel insurance",
      "Driver and guide tip",
    ],
  }),

  createPackage(COLLECTIONS.ONE_DAY, {
    title: "Kuta Lombok Beach & Sasak Village Tour Package",
    region: "lombok",
    featured: true,
    category: "Lombok Tour Packages",
    duration: "1 Day",
    images: [HERO.lombok, GALLERY.kutaBeach, GALLERY.kutaBeach2, GALLERY.tourCultural],

    summary:
      "Kuta Lombok beach tour package combining white sand beach beauty with Sasak cultural tour. Explore Banyumulek Village, Sukarara Village, Sade Village, Kuta Lombok Beach, and Tanjung Aan Beach in one full day with comfortable private tour service.",

    highlights: [
      "Pantai Kuta Lombok",
      "Pantai Tanjung Aan",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Desa Gerabah Banyumulek",
      "Private Tour",
    ],

    itinerary: [
      "Day 1 - Pickup at hotel after breakfast.",
      "Day 1 - Visit Banyumulek Village to see traditional Lombok pottery making.",
      "Day 1 - Cultural tour to Sukarara Village to learn and try traditional Sasak weaving.",
      "Day 1 - Visit Sade Traditional Village to see the Sasak community preserving ancestral traditions.",
      "Day 1 - Lunch at Kuta Lombok Beach area.",
      "Day 1 - Enjoy the beauty of Kuta Lombok Beach, famous for its unique pepper-like white sand.",
      "Day 1 - Relax and enjoy the panorama of Tanjung Aan Beach, one of Lombok's most beautiful beaches.",
      "Day 1 - Shop for Lombok souvenirs such as pearls, Lombok honey, salted eggs, and local crafts.",
      "Day 1 - Enjoy Lombok specialty dinner.",
      "Day 1 - Return to hotel and tour ends.",
    ],

    includes: [
      "Air-conditioned tour transportation",
      "Professional driver",
      "Lunch",
      "Dinner",
      "Mineral water",
      "Fuel and parking fees",
      "Hotel pickup and drop-off",
    ],

    excludes: [
      "Entrance tickets to tourist attractions",
      "Personal expenses",
      "Travel insurance",
      "Driver and guide tip",
      "Additional beach activities",
    ],
  }),
];