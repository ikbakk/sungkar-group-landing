import { GALLERY, HERO } from "@/assets/images";
import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const motoGP = [
  createPackage(COLLECTIONS.OPEN_TRIP, {
    title: "拼团游 MotoGP 曼达利卡 2026 4天3夜",
    region: "lombok",
    category: "龙目岛拼团游",
    duration: "4天3夜",
    images: [
      HERO.lombok,
      GALLERY.kutaBeach,
      GALLERY.tourCultural,
      GALLERY.tourSnorkeling,
    ],

    summary:
      "2026年曼达利卡MotoGP拼团游，结合在 Pertamina 曼达利卡国际赛道观看MotoGP比赛、萨萨克族文化之旅、吉利三岛浮潜、龙目岛特色美食和城市观光。套餐包含MotoGP高级看台门票、住宿、交通和导游服务。",

    highlights: [
      "MotoGP高级看台门票",
      "MotoGP 曼达利卡 2026",
      "吉利三岛浮潜",
      "吉利特拉旺安",
      "萨德传统村",
      "苏卡拉腊织布村",
      "曼达利卡国际赛道",
      "龙目岛拼团游",
    ],

    itinerary: [
      "第1天 - 龙目岛国际机场接机。",
      "第1天 - 参观萨德传统村，了解萨萨克族文化。",
      "第1天 - 参观苏卡拉腊织布村，观看传统龙目岛织布工艺。",
      "第1天 - 在当地餐厅享用午餐。",
      "第1天 - 入住马塔兰市酒店。",
      "第1天 - 享用龙目岛特色晚餐，品尝沙爹伦比加。",
      "第1天 - 返回酒店休息。",

      "第2天 - 早餐，准备浮潜之旅。",
      "第2天 - 前往直落科德克港。",
      "第2天 - 吉利三岛浮潜之旅。",
      "第2天 - 在吉利特拉旺安享用午餐。",
      "第2天 - 自由活动，享受吉利特拉旺安氛围。",
      "第2天 - 可选骑自行车或乘坐马车（自费）。",
      "第2天 - 在龙目岛 Exotic 餐厅享用晚餐。",
      "第2天 - 返回酒店。",

      "第3天 - 在酒店享用早餐。",
      "第3天 - 前往 Pertamina 曼达利卡国际赛道。",
      "第3天 - 观看 MotoGP 曼达利卡 2026 决赛。",
      "第3天 - 享受比赛日氛围和赛道区域活动。",
      "第3天 - 享用龙目岛海鲜晚餐。",
      "第3天 - 返回酒店。",

      "第4天 - 早餐后退房。",
      "第4天 - 购买龙目岛特产纪念品。",
      "第4天 - 前往龙目岛国际机场。",
      "第4天 - 行程结束。",
    ],

    includes: [
      "MotoGP高级看台门票（B、C、J、K区）",
      "酒店3晚（1间房2人）",
      "行程期间交通",
      "司机和导游",
      "酒店早餐",
      "午餐2次",
      "晚餐3次",
      "小吃盒1份",
      "矿泉水",
      "机场接送",
    ],

    excludes: [
      "往返机票",
      "航空公司超重行李费",
      "吉利特拉旺安自行车租赁",
      "吉利特拉旺安马车",
      "个人消费",
      "导游和司机小费",
    ],
  }),
];