import type { UIStrings } from "../types";

const strings = {
  paketWisata: {
    title: "Tour Packages",
    eyebrow: "Tour Packages",
    packagesFor: "Tour Packages {region}",
    chooseCategory: "Choose a tour package category available in {region}.",
    howToBook: "How to Book",
    readyToStart: "Ready to Start Your Journey?",
    faqTitle: "Questions About Tour Packages",
    exploreServices: "Explore Our Services",
    duration: "Duration",
    category: "Category",
    location: "Location",
    statsLabel: "Statistics",
    viewPackageDetail: "View Package Details",
    startingFrom: "From",
    packagesAvailable: "{n} packages available",
    morePackages: "+{n} more packages",
    itineraryLabel: "Journey",
    itinerary: "Trip Itinerary",
    itineraryDesc:
      "Each day is designed to give you the best experience during your trip.",
    facilitiesLabel: "Facilities",
    includedExcluded: "What's Included & Excluded",
    includedExcludedDesc:
      "All listed facilities to help you prepare for your trip.",
    included: "Included",
    excluded: "Not Included",
    boatSpecs: "Boat Specifications",
    boatType: "Boat Type",
    boatCapacity: "Capacity",
    cabins: "Cabins",
    cabinPrice: "Cabin Price",
    packagePrice: "Package Price List",
    packagePriceDesc:
      "These prices apply to the private boat package, not per cabin.",
    participants: "Participants",
    additionalPax: "Additional per Pax",
    cabinMinPax: "Min. {n} pax",
    cabinAdditionalPax: "Additional pax",
    termsAndConditions: "Terms & Conditions",
    additionalServices: "Additional Services",
    dontForgetToBring: "Don't Forget to Bring",
  },
} satisfies Pick<UIStrings, "paketWisata">;

export default strings;
