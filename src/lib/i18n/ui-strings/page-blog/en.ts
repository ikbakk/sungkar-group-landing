import type { UIStrings } from "../types";

const strings = {
  blogSection: {
    share: "Share this article",
    relatedPosts: "Related Articles",
    relatedPostsDesc: "Read more articles from us",
    copyLink: "Copy link",
    linkCopied: "Link copied!",
    emptyState: "No articles yet. Coming soon!",
    description:
      "Tips, inspiration, and latest information about tourism in Lombok, Sumbawa, and Labuan Bajo.",
  },
} satisfies Pick<UIStrings, "blogSection">;

export default strings;
