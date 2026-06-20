export type { Review, MarqueeReview } from "@/lib/content/reviews/reviews-data";
export {
  reviews,
  reviewStats,
  toMarqueeReviews,
} from "@/lib/content/reviews/reviews-data";

export const reviewsPageContent = {
  hero: {
    eyebrow: "Reviews",
    title: "What They Say About Sungkar Group?",
    description:
      "Real reviews from travelers who have experienced our service firsthand. Every story reflects a real experience — unedited, untranslated.",
  },

  insights: {
    title: "What Travelers Mention Most Often",

    items: [
      {
        title: "Fast Communication",
        description:
          "Many guests appreciate the quick responses both before and during the trip.",
      },

      {
        title: "Friendly Guide",
        description:
          "A communicative travel companion who knows the destinations is one of the most frequently mentioned highlights.",
      },

      {
        title: "Flexible Itinerary",
        description:
          "The trip can be adjusted according to weather conditions, guest preferences, and group needs.",
      },

      {
        title: "Local Experience",
        description:
          "Travelers enjoy the combination of popular destinations and more authentic local recommendations.",
      },

      {
        title: "Comfortable Transportation",
        description:
          "Vehicle cleanliness and comfort during the journey are often positive points in reviews.",
      },

      {
        title: "Well-Organized Service",
        description:
          "From pickup to the end of the trip, guests feel the process runs smoothly and purposefully.",
      },
    ],
  },

  gallery: {
    title: "Journey Moments with Travelers",
    description:
      "Some travel documentation that captures the atmosphere of service and travel experience with Sungkar Group.",
  },

  cta: {
    title: "Ready to Plan Your Trip?",
    description:
      "Discuss your travel needs with our team and find an itinerary that suits your travel style, duration, and group size.",
    primaryButton: {
      label: "Contact Us",
      href: "/kontak",
    },
  },
} as const;
