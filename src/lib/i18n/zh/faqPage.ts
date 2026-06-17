export const faqPageContent = {
  hero: {
    eyebrow: "常见问题",
    title: "常见问题解答",
    description:
      "此页面是常见问题的中心枢纽。有关套餐、目的地的详细信息，请打开相应页面的常见问题。",
  },
  introCard: {
    badge: "常规常见问题",
    title: "入门问题摘要",
    description:
      "如果您是第一次联系团队，请从这份常规常见问题开始。之后，打开最相关的页面以获取更有针对性的套餐和目的地信息。",
  },
  relatedCards: [
    {
      badge: "旅游套餐",
      title: "旅游套餐常见问题",
      description:
        "关于行程时长、车辆和行程调整的问题，请查看旅游套餐页面。",
      buttonLabel: "查看旅游套餐",
      buttonHref: "/paket-wisata",
    },
    {
      badge: "目的地",
      title: "目的地常见问题",
      description:
        "关于每个目的地可参与活动的问题，请查看各目的地页面。",
      buttonLabel: "查看目的地",
      buttonHref: "/destinasi",
    },
    {
      badge: "关于我们",
      title: "关于我们常见问题",
      description:
        "如果您想了解我们的服务、协调方式和预订流程，请打开关于我们页面。",
      buttonLabel: "查看关于我们",
      buttonHref: "/tentang-kami",
    },
  ],
} as const;