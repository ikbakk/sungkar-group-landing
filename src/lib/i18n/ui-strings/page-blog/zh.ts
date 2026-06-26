import type { UIStrings } from "../types";

const strings = {
  blogSection: {
    share: "\u5206\u4EAB\u6B64\u6587\u7AE0",
    relatedPosts: "\u76F8\u5173\u6587\u7AE0",
    relatedPostsDesc: "\u9605\u8BFB\u66F4\u591A\u6587\u7AE0",
    copyLink: "\u590D\u5236\u94FE\u63A5",
    linkCopied: "\u94FE\u63A5\u5DF2\u590D\u5236!",
    emptyState: "\u6682\u65E0\u6587\u7AE0\u3002\u5373\u5C06\u4E0A\u7EBF!",
    description:
      "\u5173\u4E8E\u9F99\u6728\u5C9B\u3001\u68EE\u5DF4\u74E6\u548C\u62C9\u5E03\u5B89\u5DF4\u7126\u65C5\u6E38\u7684\u5C0F\u8D34\u58EB\u3001\u7075\u611F\u548C\u6700\u65B0\u4FE1\u606F\u3002",
  },
} satisfies Pick<UIStrings, "blogSection">;

export default strings;
