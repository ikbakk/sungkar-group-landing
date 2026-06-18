export const aboutContent = {
  hero: {
    eyebrow: "About Us",
    title: "Introducing Lombok through comfortable and meaningful journeys",
    description:
      "Sungkar Group Indonesia is a local tour operator that helps travelers explore Lombok with professional service, well-planned itineraries, and a more authentic experience.",
  },

  story: {
    title: "Born from a Love for Lombok",
    paragraphs: [
      "Sungkar Group Indonesia was born from the belief that the best travel experience is not just about visiting many places, but about enjoying every journey comfortably and meaningfully.",

      "As a local tour operator based in Lombok, we understand that every traveler has different needs and ways of vacationing. Therefore, we focus on personalized service, well-planned itineraries, and experiences tailored to each guest's travel goals.",

      "From family trips, couple getaways, community groups, to corporate events, we help create well-organized journeys so guests can enjoy Lombok without worrying about handling travel details themselves.",
    ],
  },

  vision: {
    title: "Vision",
    description:
      "To become a trusted tourism company that delivers quality travel experiences while introducing the beauty of Lombok to travelers from around the world.",
  },

  mission: {
    title: "Mission",
    items: [
      "Provide safe, comfortable, and professional travel services.",
      "Create memorable and valuable travel experiences for every customer.",
      "Introduce Lombok's culture, nature, and local wisdom in a positive way.",
      "Support the sustainable growth of the regional tourism sector.",
      "Build long-term relationships through consistent and reliable service.",
    ],
  },

  services: [
    {
      title: "Lombok Tour Packages",
      description:
        "Tour programs designed to help travelers enjoy the best destinations in Lombok more comfortably and in an organized way.",
    },
    {
      title: "Private Trip",
      description:
        "Exclusive trips that can be customized according to your interests, group size, and travel schedule.",
    },
    {
      title: "Group Tour",
      description:
        "Travel solutions for extended families, communities, schools, organizations, and various types of groups.",
    },
    {
      title: "Corporate Gathering",
      description:
        "Supporting outing activities, gatherings, incentive trips, and corporate travel with professional management.",
    },
    {
      title: "Tour Transportation",
      description:
        "Providing comfortable transportation needs to support travel while in Lombok.",
    },
    {
      title: "Custom Itinerary",
      description:
        "Helping design travel programs according to each traveler's needs and preferences.",
    },
  ],

  strengths: [
    {
      title: "Experienced Local Team",
      description:
        "Deep understanding of Lombok, from popular destinations to various locations rarely known to travelers.",
    },
    {
      title: "Well-Planned Journeys",
      description:
        "Every itinerary is designed so that the trip feels comfortable, efficient, and not rushed.",
    },
    {
      title: "Flexible",
      description:
        "Travel programs can be adjusted to each guest's needs, duration, and travel preferences.",
    },
    {
      title: "Responsive",
      description:
        "Assistance is provided from the consultation process until the trip is completed.",
    },
  ],

  values: [
    {
      title: "Hospitality",
      description:
        "Serving every guest with a warm, friendly, and attentive attitude.",
    },
    {
      title: "Integrity",
      description:
        "Upholding honesty, transparency, and responsibility in every service.",
    },
    {
      title: "Professionalism",
      description:
        "Working with high service standards and a focus on customer satisfaction.",
    },
    {
      title: "Reliability",
      description: "Providing consistent, punctual, and trustworthy service.",
    },
    {
      title: "Local Pride",
      description:
        "Promoting Lombok through quality and responsible travel experiences.",
    },
  ],

  destinations: [
    "Gili Trawangan",
    "Gili Air",
    "Gili Meno",
    "Pantai Pink",
    "Bukit Merese",
    "Tanjung Aan",
    "Desa Adat Sade",
    "Sembalun",
    "Sendang Gile",
    "Tiu Kelep",
  ],

  commitment: {
    title: "Our Commitment",
    description:
      "We believe that the best journeys come from sincere service, thorough planning, and attention to every detail. Therefore, every tour program is designed so that guests can enjoy Lombok comfortably, safely, and without hassle.",
  },

  cta: {
    title: "Ready to Explore Lombok with Us?",
    description:
      "Discuss your travel needs with our team and find the most suitable itinerary for your Lombok experience.",
    primaryButton: {
      label: "Contact Us",
      href: "/kontak",
    },
  },
} as const;

export type AboutContent = typeof aboutContent;
