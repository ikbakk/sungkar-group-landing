import type { UIStrings } from "../types";

const strings = {
  guides: {
    general: "\u901A\u7528\u6307\u5357",
    guideFor: "{region}\u6307\u5357",
    readingTime: "\u5206\u949F\u9605\u8BFB",
    keyTakeaways: "\u5173\u952E\u8981\u70B9",
    keyTakeawaysDesc:
      "\u60A8\u9700\u8981\u4ECE\u672C\u6307\u5357\u4E2D\u4E86\u89E3\u7684\u91CD\u8981\u4E8B\u9879",
    relatedDestinations: "\u76F8\u5173\u76EE\u7684\u5730",
    relatedDestinationsDesc:
      "\u6839\u636E\u6B64\u6307\u5357\u63A8\u8350\u7684\u5730\u70B9",
    relatedPackages: "\u76F8\u5173\u65C5\u6E38\u5957\u9910",
    relatedPackagesDesc:
      "\u4E0E\u6B64\u6307\u5357\u5339\u914D\u7684\u65C5\u6E38\u5957\u9910",
    otherGuides: "\u5176\u4ED6\u6307\u5357",
    destinationRelated: "\u76F8\u5173\u76EE\u7684\u5730",
    packageRelated: "\u76F8\u5173\u65C5\u6E38\u5957\u9910",
    regionLombok:
      "\u9F99\u6728\u5C9B\u5047\u671F\u7684\u65C5\u884C\u5C0F\u8D34\u58EB\u548C\u6307\u5357\u3002",
    regionSumbawa:
      "\u677E\u5DF4\u74E6\u63A2\u9669\u7684\u65C5\u884C\u4FE1\u606F\u3002",
    regionLabuanBajo:
      "\u524D\u5F80\u62C9\u5E03\u5B89\u5DF4\u7126\u524D\u9700\u8981\u4E86\u89E3\u7684\u4E00\u5207\u3002",
    regionGeneral: "\u65C5\u884C\u901A\u7528\u6307\u5357\u3002",
    stepName: "\u6B65\u9AA4{n}",
    guidesIndexDesc:
      "\u89C4\u5212\u60A8\u7684\u9F99\u6728\u5C9B\u3001\u68EE\u5DF4\u74E6\u548C\u62C9\u5E03\u5B89\u5DF4\u7126\u4E4B\u65C5\u7684\u5B8C\u6574\u6307\u5357\u3002",
  },
} satisfies Pick<UIStrings, "guides">;

export default strings;
