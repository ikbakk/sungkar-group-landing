import type { UIStrings } from "../types";

const strings = {
  reviews: {
    seeOnGoogleMaps: "\u5728Google\u5730\u56FE\u4E0A\u67E5\u770B",
    seeAllReviews: "\u67E5\u770BGoogle\u4E0A\u7684\u6240\u6709\u8BC4\u4EF7",
    galleryTitle: "\u65C5\u884C\u8005\u4F53\u9A8C\u753B\u5ECA",
    totalOnGoogle: "\u5728Google\u4E0A\u6709{n}\u6761\u8BC4\u4EF7",
    googleReview: "Google\u8BC4\u8BBA",
    ratingOutOfFive: "{rating}/5\u661F",
    galleryPhotoCaptions: [
      "\u5BB6\u5EAD\u65C5\u884C\u65F6\u5149",
      "\u6D77\u6EE9\u548C\u5C9B\u5C7F\u63A2\u7D22",
      "\u5F53\u5730\u5BFC\u6E38\u534F\u52A9",
      "\u56E2\u4F53\u548C\u793E\u533A\u65C5\u884C",
    ],
  },
  gallery: {
    title: "\u7535\u5B50\u76F8\u518C",
    photos: "\u65C5\u884C\u7167\u7247",
    previousImage: "\u4E0A\u4E00\u5F20\u56FE\u7247",
    nextImage: "\u4E0B\u4E00\u5F20\u56FE\u7247",
  },
  cta: {
    book: "\u7ACB\u5373\u9884\u8BA2",
    startJourney:
      "\u51C6\u5907\u597D\u5F00\u59CB\u60A8\u7684\u65C5\u7A0B\u4E86\u5417\uFF1F",
    startPlanning: "\u5F00\u59CB\u89C4\u5212\u60A8\u7684\u65C5\u884C",
    consultTrip: "\u54A8\u8BE2\u65C5\u7A0B",
    seePackages: "\u67E5\u770B\u5957\u9910",
  },
} satisfies Pick<UIStrings, "reviews" | "gallery" | "cta">;

export default strings;
