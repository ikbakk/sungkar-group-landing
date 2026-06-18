export const aboutContent = {
  hero: {
    eyebrow: "关于我们",
    title: "通过舒适且有意义的旅程认识龙目岛",
    description:
      "Sungkar Group Indonesia 是一家本地旅行社，以专业服务、精心规划的行程和更地道的体验，帮助旅行者探索龙目岛。",
  },

  story: {
    title: "源自对龙目岛的热爱",
    paragraphs: [
      "Sungkar Group Indonesia 诞生于一个信念：最好的旅行体验不仅仅是游览许多地方，而是舒适且有意义地享受旅途的每一刻。",

      "作为一家总部位于龙目岛的本地旅行社，我们深知每位旅行者都有不同的需求和度假方式。因此，我们专注于个性化服务、精心规划的行程，以及根据每位客人的旅行目标量身定制的体验。",

      "从家庭出游、情侣度假、社团团建，到企业活动，我们协助打造井井有条的旅程，让客人无需操心旅行细节，即可尽情享受龙目岛。",
    ],
  },

  vision: {
    title: "愿景",
    description:
      "成为一家值得信赖的旅游公司，提供优质旅行体验，向世界各地的旅行者展示龙目岛的美丽。",
  },

  mission: {
    title: "使命",
    items: [
      "提供安全、舒适且专业的旅行服务。",
      "为每位客户创造难忘且有价值的旅行体验。",
      "以积极方式介绍龙目岛的文化、自然与当地智慧。",
      "支持区域旅游业的可持续发展。",
      "通过始终如一且可靠的服务建立长期关系。",
    ],
  },

  services: [
    {
      title: "龙目岛旅游套餐",
      description:
        "旨在帮助旅行者更舒适、有序地游览龙目岛最佳目的地的旅游项目。",
    },
    {
      title: "私人定制游",
      description: "可根据您的兴趣、团队规模和出行时间表量身定制的专属行程。",
    },
    {
      title: "拼团游",
      description: "为大家庭、社团、学校、组织及各类团队提供的旅行解决方案。",
    },
    {
      title: "企业团建",
      description: "以专业管理支持户外拓展、聚会、激励旅游及商务差旅。",
    },
    {
      title: "旅游交通",
      description: "提供舒适的交通服务，支持您在龙目岛期间的出行需求。",
    },
    {
      title: "定制行程",
      description: "协助根据每位旅行者的需求和偏好设计旅游项目。",
    },
  ],

  strengths: [
    {
      title: "经验丰富的本地团队",
      description: "深谙龙目岛，从热门目的地到鲜为旅行者知晓的隐秘地点。",
    },
    {
      title: "行程规划周全",
      description: "每条行程的设计都旨在让旅途舒适、高效且不赶路。",
    },
    {
      title: "灵活多变",
      description: "旅游项目可根据每位客人的需求、时长和出行偏好进行调整。",
    },
    {
      title: "响应及时",
      description: "从咨询环节直到行程结束，全程提供协助。",
    },
  ],

  values: [
    {
      title: "待客之道",
      description: "以热情、友好和细致的态度服务每一位客人。",
    },
    {
      title: "诚信",
      description: "在每项服务中坚守诚实、透明和负责。",
    },
    {
      title: "专业",
      description: "以高标准服务为准则，专注于客户满意度。",
    },
    {
      title: "可靠",
      description: "提供一致、准时且值得信赖的服务。",
    },
    {
      title: "本地自豪感",
      description: "通过优质且负责任的旅行体验推广龙目岛。",
    },
  ],

  destinations: [
    "Gili Trawangan",
    "Gili Air",
    "Gili Meno",
    "Pantai Pink",
    "Bukit Merese",
    "Tanjung Aan",
    "Desa Adat Sade",
    "Sembalun",
    "Sendang Gile",
    "Tiu Kelep",
  ],

  commitment: {
    title: "我们的承诺",
    description:
      "我们相信，最好的旅程源于真诚的服务、周全的规划和对每个细节的关注。因此，每个旅游项目的设计都旨在让客人舒适、安全、无忧地享受龙目岛。",
  },

  cta: {
    title: "准备好与我们一起探索龙目岛了吗？",
    description: "与我们的团队讨论您的旅行需求，寻找最适合您龙目岛体验的行程。",
    primaryButton: {
      label: "联系我们",
      href: "/kontak",
    },
  },
} as const;

export type AboutContent = typeof aboutContent;
