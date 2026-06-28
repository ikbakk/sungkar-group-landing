import type { UIStrings } from "../types";

const strings = {
  header: {
    chatWhatsapp: "WhatsApp\u804A\u5929",
    menu: "\u83DC\u5355",
    exploreDestinations: "\u63A2\u7D22\u76EE\u7684\u5730",
    language: "\u8BED\u8A00",
    destinationsSubtitle:
      "\u9F99\u6728\u5C9B \u2022 \u677E\u5DF4\u74E6 \u2022 \u62C9\u5E03\u5B89\u5DF4\u7126",
  },
  nav: {
    availablePackages: "\u53EF\u7528\u65C5\u6E38\u5957\u9910",
    checkAvailability: "\u67E5\u770B\u53EF\u7528\u6027",
    chatWhatsapp: "WhatsApp\u804A\u5929",
  },
  footer: {
    brandName: "Sungkar Group",
    description:
      "\u5F53\u5730\u65C5\u6E38\u8FD0\u8425\u5546\uFF0C\u670D\u52A1\u4E8E\u9F99\u6728\u5C9B\u3001\u68EE\u5DF4\u74E6\u548C\u62C9\u5E03\u5B89\u5DF4\u7126\u3002",
    navigation: "\u5BFC\u822A",
    destinations: "\u76EE\u7684\u5730",
    company: "\u516C\u53F8",
    copyright:
      "\u00A9 {year} Sungkar Group\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002",
    privacy: "\u9690\u79C1\u653F\u7B56",
    terms: "\u6761\u6B3E\u548C\u6761\u4EF6",
    instagram: "Instagram",
    youtube: "YouTube",
    facebook: "Facebook",
    tiktok: "TikTok",
    licensedTourOperator: "\u6301\u7248\u65C5\u6E38\u8FD0\u8425\u5546",
    ratingOnGoogle: "Google \u8BC4\u5206 {rating}",
    secureBooking: "\u5B89\u5168\u9884\u8BA2",
    support247: "24/7 \u5BA2\u670D",
    subscribeForTips: "\u8BA2\u9605\u65C5\u884C\u63D0\u793A",
    yourEmail: "\u60A8\u7684\u90AE\u7BB1",
    subscribe: "\u8BA2\u9605",
  },
  breadcrumb: {
    home: "\u9996\u9875",
    about: "\u5173\u4E8E\u6211\u4EEC",
    contact: "\u8054\u7CFB\u6211\u4EEC",
    faq: "\u5E38\u89C1\u95EE\u9898",
    reviews: "\u5BA2\u6237\u8BC4\u4EF7",
    destinations: "\u76EE\u7684\u5730",
    tourPackages: "\u65C5\u6E38\u5957\u9910",
    carRental: "\u6C7D\u8F66\u79DF\u8D41",
    accommodations: "\u4F4F\u5BBF",
    travelGuides: "\u65C5\u6E38\u6307\u5357",
    blog: "Blog",
  },
  common: {
    explore: "\u63A2\u7D22",
    readMore: "\u9605\u8BFB\u66F4\u591A",
    learnMore: "\u4E86\u89E3\u66F4\u591A",
    contactUs: "\u8054\u7CFB\u6211\u4EEC",
    bookNow: "\u7ACB\u5373\u9884\u8BA2",
    submit: "\u63D0\u4EA4",
    send: "\u53D1\u9001",
    back: "\u8FD4\u56DE",
    seeMore: "\u67E5\u770B\u66F4\u591A",
    viewAll: "\u67E5\u770B\u5168\u90E8",
    backToTop: "\u2191\u8FD4\u56DE\u9876\u90E8",
    viewDetail: "\u67E5\u770B\u8BE6\u60C5",
    moreCount: "+{n}\u66F4\u591A",
    contactForPrice: "\u8054\u7CFB\u83B7\u53D6\u4EF7\u683C",
    people: "\u4EBA",
    perPax: "\u6BCF\u4F4D",
    imageAltSunrise: "\u65E5\u51FA\u65F6\u7684\u9F99\u6728\u5C9B",
    imageAltSunset:
      "\u65E5\u843D\u65F6\u7684\u9F99\u6728\u5C9B\u6D77\u6EE9\u7F8E\u666F",
    imageAltDestinations: "\u9F99\u6728\u5C9B\u76EE\u7684\u5730",
    pageNotFound: "\u9875\u9762\u672A\u627E\u5230",
    pageNotFoundDesc:
      "\u60A8\u5BFB\u627E\u7684\u9875\u9762\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u3001\u5220\u9664\u6216\u4ECE\u672A\u5B58\u5728\u8FC7\u3002",
  },
  page: {
    about: "\u5173\u4E8E\u6211\u4EEC",
    contact: "\u8054\u7CFB\u6211\u4EEC",
    reviews: "\u5BA2\u6237\u8BC4\u4EF7",
    destinations: "\u76EE\u7684\u5730",
    tourPackages: "\u65C5\u6E38\u5957\u9910",
    carRental: "\u6C7D\u8F66\u79DF\u8D41",
    accommodations: "\u4F4F\u5BBF",
    travelGuides: "\u65C5\u6E38\u6307\u5357",
    blog: "Blog",
    faq: "\u5E38\u89C1\u95EE\u9898",
  },
  seo: {
    keywords:
      "\u9F99\u6728\u5C9B\u65C5\u6E38\u5957\u9910, \u9F99\u6728\u5C9B\u4E00\u65E5\u6E38, \u9F99\u6728\u5C9B\u62FC\u56E2\u6E38, \u68EE\u5DF4\u74E6\u65C5\u6E38, \u68EE\u5DF4\u74E6\u9CA8\u9C7C, \u62C9\u5E03\u5B89\u5DF4\u7126\u65C5\u6E38, \u79D1\u6469\u591A\u65C5\u6E38, \u9F99\u6728\u5C9B\u6C7D\u8F66\u79DF\u8D41, Sungkar Group",
    siteName: "Sungkar Group",
  },
  consent: {
    title: "Cookie \u8BBE\u7F6E",
    description:
      "\u6211\u4EEC\u4F7F\u7528 Cookie \u6765\u6D4B\u91CF\u6027\u80FD\u5E76\u6539\u5584\u60A8\u7684\u4F53\u9A8C\u3002\u8BF7\u5728\u4E0B\u65B9\u7BA1\u7406\u60A8\u7684\u504F\u597D\u3002",
    acceptAll: "\u63A5\u53D7\u5168\u90E8",
    rejectAll: "\u62D2\u7EDD\u5168\u90E8",
    customize: "\u81EA\u5B9A\u4E49",
    learnMore: "\u4E86\u89E3\u66F4\u591A",
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
