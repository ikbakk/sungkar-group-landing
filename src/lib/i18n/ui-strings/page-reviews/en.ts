import type { UIStrings } from "../types";

const strings = {
  reviews: {
    seeOnGoogleMaps: "See on Google Maps",
    seeAllReviews: "See all reviews on Google",
    galleryTitle: "Traveler Experience Gallery",
    totalOnGoogle: "{n} reviews on Google",
    googleReview: "Google Review",
    ratingOutOfFive: "{rating} out of 5 stars",
    galleryPhotoCaptions: [
      "Family travel moments",
      "Beach and island exploration",
      "Local guide assistance",
      "Group and community trips",
    ],
  },
  gallery: {
    title: "Gallery",
    photos: "Journey Photos",
    previousImage: "Previous image",
    nextImage: "Next image",
  },
  cta: {
    book: "Book Now",
    startJourney: "Ready to Start Your Journey?",
    startPlanning: "Start Planning Your Trip",
    consultTrip: "Consult Your Trip",
    seePackages: "View Packages",
  },
} satisfies Pick<UIStrings, "reviews" | "gallery" | "cta">;

export default strings;
