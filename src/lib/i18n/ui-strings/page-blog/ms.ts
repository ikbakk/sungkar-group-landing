import type { UIStrings } from "../types";

const strings = {
  blogSection: {
    share: "Kongsi artikel ini",
    relatedPosts: "Artikel Berkaitan",
    relatedPostsDesc: "Baca artikel lain daripada kami",
    copyLink: "Salin pautan",
    linkCopied: "Pautan disalin!",
    emptyState: "Belum ada artikel. Akan datang!",
    description:
      "Tips, inspirasi, dan maklumat terkini tentang pelancongan di Lombok, Sumbawa, dan Labuan Bajo.",
  },
} satisfies Pick<UIStrings, "blogSection">;

export default strings;
