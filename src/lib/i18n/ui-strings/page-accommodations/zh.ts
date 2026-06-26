import type { UIStrings } from "../types";

const strings = {
  akomodasi: {
    title: "\u4F4F\u5BBF",
    eyebrow: "\u4F4F\u5BBF\u9009\u62E9",
    accommodationChoice: "{region}\u7684\u4F4F\u5BBF",
    exploreAccommodation:
      "\u63A2\u7D22{region}\u7684\u5404\u79CD\u4F18\u8D28\u4F4F\u5BBF\u9009\u62E9\uFF0C\u6EE1\u8DB3\u60A8\u7684\u65C5\u884C\u9700\u6C42\u548C\u504F\u597D\u3002",
    faqTitle: "\u5173\u4E8E\u4F4F\u5BBF\u7684\u95EE\u9898",
    features: "\u4E3B\u8981\u8BBE\u65BD",
    morePerks: "+{n}\u66F4\u591A",
  },
} satisfies Pick<UIStrings, "akomodasi">;

export default strings;
