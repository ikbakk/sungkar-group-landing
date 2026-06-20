export type { Review, MarqueeReview } from "@/lib/content/reviews/reviews-data";
export { reviews, reviewStats, toMarqueeReviews } from "@/lib/content/reviews/reviews-data";

export const reviewsPageContent = {
  hero: {
    eyebrow: "客户评价",
    title: "客户对Sungkar Group的评价",
    description:
      "来自亲身体验过我们服务旅行者的真实评价。每一个故事都反映了真实体验——未经编辑，原汁原味。",
  },

  insights: {
    title: "旅行者最常提及的内容",

    items: [
      {
        title: "快速沟通",
        description: "许多客人赞赏我们在旅行前后都能快速回复。",
      },

      {
        title: "友好的导游",
        description: "善于沟通且熟悉目的地的旅行伙伴是最常被提及的亮点之一。",
      },

      {
        title: "灵活的行程",
        description: "行程可根据天气状况、客人偏好和团队需求进行调整。",
      },

      {
        title: "地道体验",
        description: "旅行者喜欢热门目的地与更地道的地方推荐的组合。",
      },

      {
        title: "舒适的交通",
        description: "车辆的清洁度和旅途中的舒适度常常是评价中的积极点。",
      },

      {
        title: "服务组织有序",
        description: "从接送到旅程结束，客人感觉整个过程顺利进行，目标明确。",
      },
    ],
  },

  gallery: {
    title: "与旅行者同行的精彩瞬间",
    description: "一些旅行记录，捕捉了Sungkar Group的服务氛围和旅行体验。",
  },

  cta: {
    title: "准备计划您的旅行？",
    description:
      "与我们的团队讨论您的旅行需求，找到适合您旅行风格、持续时间和团队规模的行程。",
    primaryButton: {
      label: "联系我们",
      href: "/kontak",
    },
  },
} as const;
