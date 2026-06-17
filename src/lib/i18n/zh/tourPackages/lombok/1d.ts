import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const oneDay: TourPackage[] = [
  createPackage(COLLECTIONS.ONE_DAY, {
    title: "森当吉莱和蒂乌克勒普瀑布旅游套餐",
    region: "lombok",
    featured: true,
    category: "龙目岛旅游套餐",
    duration: "1天",
    images: [HERO.lombok, DESTINATIONS.rinjani],

    summary:
      "森当吉莱和蒂乌克勒普瀑布旅游套餐，带您探索林贾尼山脚下北龙目岛的自然美景。享受巴温普苏克旅游森林的氛围、塞纳鲁村的文化之旅、古老的巴扬贝莱克清真寺，以及龙目岛两个最受欢迎的瀑布。",

    highlights: [
      "蒂乌克勒普瀑布",
      "森当吉莱瀑布",
      "塞纳鲁传统村",
      "巴扬贝莱克古清真寺",
      "巴温普苏克旅游森林",
      "北龙目岛私人团",
    ],

    itinerary: [
      "第1天 - 酒店早餐后接载。",
      "第1天 - 参观巴温普苏克旅游森林，与友好的猕猴互动。",
      "第1天 - 历史之旅前往巴扬贝莱克清真寺，龙目岛最古老的伊斯兰历史地标。",
      "第1天 - 徒步前往林贾尼山国家公园的森当吉莱瀑布。",
      "第1天 - 继续前往蒂乌克勒普瀑布，欣赏北龙目岛的自然美景。",
      "第1天 - 在塞纳鲁地区附近当地餐厅午餐。",
      "第1天 - 参观塞纳鲁村，看传统房屋和萨萨克族的生活方式。",
      "第1天 - 购买龙目岛纪念品，如珍珠、龙目岛蜂蜜、咸蛋和手工艺品。",
      "第1天 - 享用龙目岛特色晚餐。",
      "第1天 - 返回酒店，行程结束。",
    ],

    includes: [
      "空调旅游交通",
      "专业司机",
      "午餐",
      "晚餐",
      "矿泉水",
      "油费和停车费",
      "酒店接送",
    ],

    excludes: [
      "景点门票",
      "当地徒步向导",
      "个人消费",
      "旅行保险",
      "司机和导游小费",
    ],
  }),

  createPackage(COLLECTIONS.ONE_DAY, {
    title: "库塔龙目岛海滩和萨萨克村旅游套餐",
    region: "lombok",
    featured: true,
    category: "龙目岛旅游套餐",
    duration: "1天",
    images: [HERO.lombok, GALLERY.kutaBeach, GALLERY.kutaBeach2, GALLERY.tourCultural],

    summary:
      "库塔龙目岛海滩旅游套餐，结合白沙滩美景和萨萨克文化之旅。在舒适私人团服务中，一天内探索巴纽穆莱克村、苏卡拉腊村、萨德村、库塔龙目岛海滩和丹戎安海滩。",

    highlights: [
      "库塔龙目岛海滩",
      "丹戎安海滩",
      "萨德传统村",
      "苏卡拉腊织布村",
      "巴纽穆莱克陶器村",
      "私人团",
    ],

    itinerary: [
      "第1天 - 酒店早餐后接载。",
      "第1天 - 参观巴纽穆莱克村，观看传统龙目岛陶器制作。",
      "第1天 - 文化之旅前往苏卡拉腊村，学习和体验传统萨萨克织布。",
      "第1天 - 参观萨德传统村，了解保留祖先传统的萨萨克社区。",
      "第1天 - 库塔龙目岛海滩区域午餐。",
      "第1天 - 欣赏库塔龙目岛海滩的美景，以其独特的胡椒状白沙闻名。",
      "第1天 - 在丹戎安海滩放松，欣赏龙目岛最美丽的海滩之一。",
      "第1天 - 购买龙目岛纪念品，如珍珠、龙目岛蜂蜜、咸蛋和手工艺品。",
      "第1天 - 享用龙目岛特色晚餐。",
      "第1天 - 返回酒店，行程结束。",
    ],

    includes: [
      "空调旅游交通",
      "专业司机",
      "午餐",
      "晚餐",
      "矿泉水",
      "油费和停车费",
      "酒店接送",
    ],

    excludes: [
      "景点门票",
      "个人消费",
      "旅行保险",
      "司机和导游小费",
      "额外海滩活动",
    ],
  }),
];