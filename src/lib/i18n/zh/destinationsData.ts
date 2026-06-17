import type { ImageSource } from "@/lib/images";
import { DESTINATIONS, GALLERY, HERO } from "@/assets/images";

export type Destination = {
  slug: string;
  title: string;
  region: string;
  image: ImageSource;
  gallery: ImageSource[];
  summary: string;
  thingsToDo: string[];
  packages: string[];
};

export const destinations: Destination[] = [
  {
    slug: "kuta-lombok",
    title: "Kuta Lombok",
    region: "龙目岛南部",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.kutaBeach, GALLERY.kutaBeach2, HERO.lombok],
    summary:
      "广阔的海岸线，可前往多个海滩景点，享受轻松的度假节奏。",
    thingsToDo: ["探索海滩", "日落观赏点", "当地咖啡厅"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "Tetebatu",
    region: "龙目岛东部",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.tourCultural, HERO.lombok, GALLERY.kutaBeach],
    summary:
      "一个更安静的山区村庄，绿意盎然，节奏悠闲。",
    thingsToDo: ["村庄漫步", "梯田观光", "瀑布停留"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "Sembalun",
    region: "山区走廊",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, HERO.lombok, GALLERY.tourSnorkeling],
    summary:
      "山区走廊，通常作为林贾尼体验的起点。",
    thingsToDo: [
      "高地景观",
      "日出之旅",
      "当地农场停留",
    ],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "rinjani",
    title: "Rinjani",
    region: "山区",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourSnorkeling, GALLERY.kutaBeach],
    summary:
      "壮丽的山峰、高山空气和日出体验，吸引众多游客前来。",
    thingsToDo: [
      "观景台",
      "徒步支持",
      "日出路线",
    ],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "senaru",
    title: "Senaru",
    region: "林贾尼入口",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourCultural, GALLERY.kutaBeach2],
    summary:
      "靠近瀑布、徒步路线的大门，拥有独特的高山氛围。",
    thingsToDo: ["瀑布", "徒步支持", "高地住宿"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "Gili Trawangan",
    region: "吉利群岛",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.tourSnorkeling],
    summary:
      "最便利的岛屿，适合岛屿探索、浮潜和海滩度假。",
    thingsToDo: ["浮潜", "岛屿探索", "海滩时光"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "Gili Air",
    region: "吉利群岛",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach],
    summary:
      "更安静的吉利版本，有充足的空间供悠闲散步和短途浮潜。",
    thingsToDo: ["放松海滩时光", "浮潜", "日落停留"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "Gili Meno",
    region: "吉利群岛",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach2],
    summary:
      "最安静的岛屿，适合寻求私密和简约氛围的旅行者。",
    thingsToDo: ["安静海滩", "浮潜", "放松节奏"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "Sumbawa",
    region: "外岛",
    image: DESTINATIONS.sumbawa,
    gallery: [DESTINATIONS.sumbawa, GALLERY.whaleshark, GALLERY.tourSnorkeling],
    summary:
      "更安静的目的地选择，拥有开阔的自然风貌和壮丽的海岸线。",
    thingsToDo: ["安静海滩", "旅行路线", "景观停留"],
    packages: ["3d2n-lombok-signature"],
  },
];