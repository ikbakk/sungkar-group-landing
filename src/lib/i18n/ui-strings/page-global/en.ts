import type { UIStrings } from "../types";

const strings = {
  header: {
    chatWhatsapp: "Chat on WhatsApp",
    menu: "Menu",
    exploreDestinations: "Explore Destinations",
    language: "Language",
    destinationsSubtitle: "Lombok • Sumbawa • Labuan Bajo",
  },
  nav: {
    availablePackages: "Tour Packages Available",
    checkAvailability: "Check Availability",
    chatWhatsapp: "Chat on WhatsApp",
  },
  footer: {
    brandName: "Sungkar Group",
    description: "Local tour operator for Lombok, Sumbawa, and Labuan Bajo.",
    navigation: "Navigation",
    destinations: "Destinations",
    company: "Company",
    copyright: "\u00A9 {year} Sungkar Group. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    instagram: "Instagram",
    youtube: "YouTube",
    facebook: "Facebook",
    tiktok: "TikTok",
    licensedTourOperator: "Licensed Tour Operator",
    ratingOnGoogle: "4.9 Rating on Google",
    secureBooking: "Secure Booking",
    support247: "24/7 Support",
    subscribeForTips: "Subscribe for travel tips",
    yourEmail: "Your email",
    subscribe: "Subscribe",
  },
  breadcrumb: {
    home: "Home",
    about: "About Us",
    contact: "Contact",
    faq: "FAQ",
    reviews: "Reviews",
    destinations: "Destinations",
    tourPackages: "Tour Packages",
    carRental: "Car Rental",
    accommodations: "Accommodations",
    travelGuides: "Travel Guides",
    blog: "Blog",
  },
  common: {
    readMore: "Read More",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    bookNow: "Book Now",
    submit: "Submit",
    send: "Send",
    back: "Back",
    seeMore: "See More",
    viewAll: "View All",
    backToTop: "\u2191 Back to Top",
    viewDetail: "View Details",
    explore: "Explore",
    moreCount: "+{n} more",
    contactForPrice: "Contact for price",
    people: "people",
    perPax: "pax",
    imageAltSunrise: "Lombok at sunrise",
    imageAltSunset: "Lombok beach with sunset view",
    imageAltDestinations: "Lombok Destinations",
    pageNotFound: "Page Not Found",
    pageNotFoundDesc:
      "The page you are looking for may have been moved, deleted, or never existed.",
  },
  page: {
    about: "About Us",
    contact: "Contact",
    reviews: "Reviews",
    destinations: "Destinations",
    tourPackages: "Tour Packages",
    carRental: "Car Rental",
    accommodations: "Accommodations",
    travelGuides: "Travel Guides",
    blog: "Blog",
    faq: "FAQ",
  },
  seo: {
    keywords:
      "lombok tour packages, lombok tour, open trip lombok, sumbawa tours, whale shark sumbawa, labuan bajo tours, komodo tour, car rental lombok, sungkar group",
    siteName: "Sungkar Group",
  },
  consent: {
    title: "Cookie Settings",
    description:
      "We use cookies to measure performance and improve your experience. Manage your preferences below.",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    customize: "Customize",
    learnMore: "Learn More",
  },
} satisfies Pick<
  UIStrings,
  | "header"
  | "nav"
  | "footer"
  | "breadcrumb"
  | "common"
  | "page"
  | "seo"
  | "consent"
>;

export default strings;
