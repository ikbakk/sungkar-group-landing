import type { UIStrings } from "../types";

const strings = {
  sewaMobil: {
    title: "\u6C7D\u8F66\u79DF\u8D41",
    vehicleDetail: "\u8F66\u8F86\u8BE6\u60C5",
    specifications: "\u89C4\u683C",
    transmission: "\u53D8\u901F\u7BB1",
    passengers: "\u4E58\u5BA2",
    features: "\u4E3B\u8981\u7279\u70B9",
    suitableFor: "\u9002\u5408",
    viewDetailRent: "\u67E5\u770B\u8BE6\u60C5\u5E76\u79DF\u8D41",
    pricePerDay: "\u6BCF\u5929\u4EF7\u683C",
    vehicleFor: "{region}\u7684\u79DF\u8D41\u8F66\u8F86",
    rentalVehicles: "{region}\u7684\u8F66\u8F86\u9009\u9879",
    allVehicles:
      "{region}\u7684\u6240\u6709\u8F66\u8F86\u5747\u5DF2\u68C0\u67E5\u5E76\u9644\u6709\u7EFC\u5408\u4FDD\u9669\uFF0C\u786E\u4FDD\u60A8\u7684\u65C5\u884C\u5B89\u5168\u3002",
    faqTitle: "\u5173\u4E8E\u6C7D\u8F66\u79DF\u8D41\u7684\u95EE\u9898",
    faqTitleFor:
      "\u5173\u4E8E{region}\u6C7D\u8F66\u79DF\u8D41\u7684\u95EE\u9898",
  },
} satisfies Pick<UIStrings, "sewaMobil">;

export default strings;
