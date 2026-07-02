import { DESTINATIONS } from "@/assets/images";

export const destinationsPageContent = {
  hero: {
    eyebrow: "Destinations",
    title: "Lombok, Gili, Rinjani, and Sumbawa Travel Destinations",
    description:
      "Discover the best beaches, cultural villages, and mountain areas for your vacation in Lombok, Gili, Rinjani, and Sumbawa. From Kuta beach to Mount Rinjani, each destination offers a unique experience.",
  },
  groups: [
    {
      id: "lombok",
      label: "Lombok",
      title: "Lombok Travel Destinations",
      description:
        "White sand beaches, traditional Sasak villages, and hidden waterfalls. Kuta Lombok is a popular basecamp for easy access to south coast beaches and local culture.",
      destinationSlugs: [
        "kuta-lombok",
        "mandalika",
        "pantai-tanjung-aan",
        "bukit-merese",
        "desa-sukarara",
        "desa-sade",
        "senggigi",
        "tetebatu",
        "pink-beach-lombok",
        "tanjung-ringgit",
        "gili-pasir",
      ],
      intro:
        "Choose destinations in Lombok for a mix of beaches, culture, and flexible daily routes.",
    },
    {
      id: "gili",
      label: "Gili Islands",
      title: "Gili Islands: Trawangan, Air, Meno",
      description:
        "Three tropical islands with clear waters for snorkeling, diving, and island hopping. Gili Trawangan for nightlife, Gili Air for balance, Gili Meno for total peace.",
      destinationSlugs: [
        "gili-trawangan",
        "gili-air",
        "gili-meno",
        "gili-nanggu",
        "gili-sudak",
        "gili-kedis",
      ],
      intro:
        "Island routes perfect for snorkeling, island hopping, and a more relaxed vacation pace.",
    },
    {
      id: "pegunungan",
      label: "Mountains",
      title: "Mount Rinjani & Mountain Areas",
      description:
        "Rinjani trekking via Sembalun or Senaru, hot springs, and views of Segara Anak crater. Ideal for multi-day adventures and dramatic nature experiences.",
      destinationSlugs: ["sembalun", "rinjani", "senaru", "air-terjun-senaru"],
      intro:
        "Destinations with a highland atmosphere and access to more dramatic nature experiences.",
    },
    {
      id: "sumbawa",
      label: "Sumbawa",
      title: "Sumbawa Destinations",
      description:
        "The island east of Lombok with quieter natural attractions, whale sharks in Saleh Bay, world-class waves at Lakey Peak, and off-the-beaten-path adventures.",
      destinationSlugs: ["sumbawa"],
      intro: "Explore Sumbawa for wilder, less-traveled nature experiences.",
    },
  ],
  faq: [
    {
      question: "What is the best thing to do at these destinations?",
      answer:
        "At beaches like Kuta Mandalika and Gili Trawangan, main activities are snorkeling, island hopping, and relaxing. For mountain areas like Rinjani and Sembalun, trekking and camping are the choices. Each destination has recommended activities that can be combined into daily tour packages.",
    },
    {
      question: "Can these destinations be combined with other packages?",
      answer:
        "Yes. For example, you can combine Kuta Lombok beach tours with a visit to the Gili Islands, or Rinjani with Tetebatu waterfalls. This page showcases tour packages already designed for the most efficient destination combinations.",
    },
    {
      question: "Is daily transportation available for these destinations?",
      answer:
        "Yes. Daily driver and car rental services are available in Lombok, Sumbawa, and Labuan Bajo to make moving between destinations more comfortable. You can also book transfers from the airport or harbor to your hotel.",
    },
  ],
  relatedContent: [
    {
      title: "Tour Packages",
      href: "/paket-wisata",
      description:
        "Choose from various pre-planned tour packages for each destination",
    },
    {
      title: "Travel Guides",
      href: "/panduan-wisata",
      description:
        "Get tips and guides to maximize your experience at each destination",
    },
    {
      title: "Accommodations",
      href: "/akomodasi",
      description:
        "Find comfortable and quality lodging in your chosen destination area",
    },
  ],
  detail: {
    headline: "Destinations",
    activitiesTitle: "Things to do",
    relatedPackagesTitle: "Related packages",
    summaryTitle: "Summary",
    descriptionTitle: "About This Destination",
    highlightsTitle: "Main Highlights",
    bestTimeToVisitTitle: "Best Time to Visit",
    howToGetThereTitle: "How to Get There",
    localTipsTitle: "Local Tips",
    transportTitle: "Transportation",
    transportDescription:
      "Pickup points can be adjusted to the airport, harbor, or nearby hotel corridor.",
    transportNote:
      "Daily driver support is the most flexible option for days with multiple destinations.",
    emptyRelatedPackages:
      "No packages are linked to this destination yet. The team can help match the most suitable itinerary.",
    galleryTitle: "Gallery",
    emptyGallery: "Destination images will be added soon.",
    faqTitle: "Destination FAQ",
  },
  spotlightImage: DESTINATIONS.lombok,
} as const;
