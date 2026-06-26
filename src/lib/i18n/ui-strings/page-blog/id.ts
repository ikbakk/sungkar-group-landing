import type { UIStrings } from "../types";

const strings = {
  blogSection: {
    share: "Bagikan artikel ini",
    relatedPosts: "Artikel Terkait",
    relatedPostsDesc: "Baca artikel lainnya dari kami",
    copyLink: "Salin tautan",
    linkCopied: "Tautan disalin!",
    emptyState: "Belum ada artikel. Segera hadir!",
    description:
      "Tips, inspirasi, dan informasi terbaru seputar wisata Lombok, Sumbawa, dan Labuan Bajo.",
  },
} satisfies Pick<UIStrings, "blogSection">;

export default strings;
