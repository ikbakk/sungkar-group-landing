import type { UIStrings } from "../types";

const strings = {
  guides: {
    general: "General Guide",
    guideFor: "{region} Guide",
    readingTime: "min read",
    keyTakeaways: "Key Takeaways",
    keyTakeawaysDesc: "Important things you need to know from this guide",
    relatedDestinations: "Related Destinations",
    relatedDestinationsDesc: "Recommended places based on this guide",
    relatedPackages: "Related Tour Packages",
    relatedPackagesDesc: "Tour packages that match this guide",
    otherGuides: "Other Guides",
    destinationRelated: "Related Destinations",
    packageRelated: "Related Tour Packages",
    regionLombok: "Travel tips and guides for your holiday in Lombok.",
    regionSumbawa: "Travel information for adventures in Sumbawa.",
    regionLabuanBajo:
      "Everything you need to know before visiting Labuan Bajo.",
    regionGeneral: "General guide for your trip.",
    stepName: "Step {n}",
    guidesIndexDesc:
      "Complete guide to planning your trip to Lombok, Sumbawa, and Labuan Bajo.",
  },
} satisfies Pick<UIStrings, "guides">;

export default strings;
