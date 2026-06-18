import { DESTINATIONS } from "@/assets/images";

export const destinationsPageContent = {
  hero: {
    eyebrow: "目的地",
    title: "龙目岛、吉利群岛、林贾尼山和松巴哇岛旅游目的地",
    description:
      "探索龙目岛、吉利群岛、林贾尼山和松巴哇岛最美的海滩、文化村落和山区。从库塔海滩到林贾尼山，每个目的地都提供独特的体验。",
  },
  groups: [
    {
      id: "lombok",
      label: "Lombok",
      title: "龙目岛旅游目的地",
      description:
        "白色沙滩、传统萨萨克村落和隐藏的瀑布。库塔龙目岛是前往南海岸海滩和体验当地文化的热门基地。",
      destinationSlugs: ["kuta-lombok", "tetebatu"],
      intro: "选择龙目岛的目的地，享受海滩、文化和灵活的日游路线的完美组合。",
    },
    {
      id: "gili",
      label: "Gili Islands",
      title: "吉利群岛：特拉旺安、艾尔、梅诺",
      description:
        "三个热带岛屿，拥有清澈的海水，适合浮潜、潜水和跳岛游。吉利特拉旺安享受夜生活，吉利艾尔体验平衡，吉利梅诺寻求完全宁静。",
      destinationSlugs: ["gili-trawangan", "gili-air", "gili-meno"],
      intro: "岛屿路线非常适合浮潜、跳岛游以及更轻松的度假节奏。",
    },
    {
      id: "pegunungan",
      label: "Mountains",
      title: "林贾尼山和山区",
      description:
        "通过森巴伦或塞纳鲁的林贾尼徒步路线、温泉以及塞加拉阿纳克火山口的壮丽景色。非常适合多日探险和壮观的自然体验。",
      destinationSlugs: ["sembalun", "rinjani", "senaru"],
      intro: "高原氛围的目的地，可享受更壮丽的自然体验。",
    },
  ],
  faq: [
    {
      question: "在这些目的地最值得做什么？",
      answer:
        "在库塔曼达利卡和吉利特拉旺安等海滩，主要活动是浮潜、跳岛游和放松。对于林贾尼和森巴伦等山区，徒步和露营是不错的选择。每个目的地都有推荐活动，可组合成日游套餐。",
    },
    {
      question: "这些目的地可以与其他套餐组合吗？",
      answer:
        "可以。例如，您可以将库塔龙目岛海滩之旅与吉利群岛结合起来，或者将林贾尼山与特特巴图瀑布组合。本页面展示了已经设计好的高效目的地组合套餐。",
    },
    {
      question: "这些目的地有日常交通服务吗？",
      answer:
        "有的。龙目岛、松巴哇岛和纳闽巴霍提供日常司机和租车服务，让您在目的地之间移动更加舒适。您也可以预订从机场或港口到酒店的接送服务。",
    },
  ],
  relatedContent: [
    {
      title: "旅游套餐",
      href: "/paket-wisata",
      description: "从各种预先规划的旅游套餐中为每个目的地选择",
    },
    {
      title: "旅游指南",
      href: "/panduan-wisata",
      description: "获取提示和指南，最大化您在每个目的地的体验",
    },
    {
      title: "住宿",
      href: "/akomodasi",
      description: "在您选择的目的地地区找到舒适优质的住宿",
    },
  ],
  detail: {
    headline: "目的地",
    activitiesTitle: "活动",
    relatedPackagesTitle: "相关套餐",
    summaryTitle: "简介",
    transportTitle: "交通",
    transportDescription: "接送点可调整至机场、港口或附近酒店区域。",
    transportNote: "对于有多目的地的行程，每日司机服务是最灵活的选择。",
    emptyRelatedPackages:
      "此目的地暂无关联套餐。我们的团队可帮助匹配最合适的行程。",
    galleryTitle: "图库",
    emptyGallery: "目的地图片即将添加。",
    faqTitle: "目的地常见问题",
  },
  spotlightImage: DESTINATIONS.lombok,
} as const;
