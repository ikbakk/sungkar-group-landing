export const faqPageContent = {
  hero: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    description:
      "This page is the central hub for common questions. For details on packages, destinations, and about us, open the FAQ on each respective page.",
  },
  introCard: {
    badge: "General FAQ",
    title: "Summary of questions to start the conversation",
    description:
      "If you are contacting the team for the first time, start with this general FAQ. After that, open the most relevant page for more targeted package and destination information.",
  },
  relatedCards: [
    {
      badge: "Tour packages",
      title: "Tour package FAQ",
      description:
        "Questions about duration, vehicles, and itinerary adjustments are covered on the tour packages page.",
      buttonLabel: "Open tour packages",
      buttonHref: "/paket-wisata",
    },
    {
      badge: "Destinations",
      title: "Destination FAQ",
      description:
        "Questions about what to do at each destination are available on each destination page.",
      buttonLabel: "Open destinations",
      buttonHref: "/destinasi",
    },
    {
      badge: "About us",
      title: "About us FAQ",
      description:
        "If you want to understand our services, coordination style, and booking process, open the about us page.",
      buttonLabel: "Open about us",
      buttonHref: "/tentang-kami",
    },
  ],
} as const;
