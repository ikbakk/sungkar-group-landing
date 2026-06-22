import type { TourPackage } from "@/lib/content/tourPackages/types";

export type NavCollection = {
  title: string;
  href?: string;

  items: {
    label: string;
    href: string;
  }[];
};

export type NavGroup = {
  title: string;
  href?: string;

  collections?: NavCollection[];

  items?: {
    label: string;
    href: string;
  }[];
};

export type NavItem = {
  label: string;
  href?: string;

  variant: "link" | "mega" | "dropdown";

  groups?: NavGroup[];
  items?: { label: string; href: string }[];
};

type CollectionResult = {
  collections: NavCollection[];
  items: { label: string; href: string }[];
};

const createPackageCollections = (
  packages: TourPackage[],
  region:
    | "lombok"
    | "sumbawa"
    | "labuan-bajo"
    | "sailing-labuan-bajo"
    | "lombok-to-bajo",
): CollectionResult => {
  const regionPackages = packages.filter((pkg) => pkg.region === region);

  const grouped = regionPackages.reduce(
    (acc, pkg) => {
      if (!acc[pkg.collectionSlug]) {
        const titleMap: Record<string, string> = {
          "1-hari": "1日套餐",
          "2-hari-1-malam": "2天1夜套餐",
          "3-hari-2-malam": "3天2夜套餐",
          "4-hari-3-malam": "4天3夜套餐",
          "5-hari-4-malam": "5天4夜套餐",
          "sailing-open-trip": "帆船拼团游",
          "sailing-private-trip": "帆船私人游",
        };
        acc[pkg.collectionSlug] = {
          title: titleMap[pkg.collectionSlug] ?? pkg.collectionTitle,
          href: `/paket-wisata/${region}/${pkg.collectionSlug}`,
          items: [],
        };
      }
      acc[pkg.collectionSlug].items.push({
        label: pkg.title,
        href: `/paket-wisata/${region}/${pkg.collectionSlug}/${pkg.slug}`,
      });
      return acc;
    },
    {} as Record<string, NavCollection>,
  );

  const collections: NavCollection[] = [];
  const items: { label: string; href: string }[] = [];

  for (const entry of Object.values(grouped)) {
    if (entry.items.length === 1) {
      items.push(entry.items[0]);
    } else {
      collections.push(entry);
    }
  }

  // Sort collections alphabetically by title
  collections.sort((a, b) => a.title.localeCompare(b.title));

  return { collections, items };
};

export function createNavigation(packages: TourPackage[]): NavItem[] {
  return [
    {
      label: "首页",
      href: "/",
      variant: "link",
    },

    {
      label: "旅游套餐",
      variant: "mega",

      groups: [
        {
          title: "Lombok",
          href: "/paket-wisata/lombok",

          ...createPackageCollections(packages, "lombok"),
        },

        {
          title: "Sumbawa",
          href: "/paket-wisata/sumbawa",

          ...createPackageCollections(packages, "sumbawa"),
        },

        {
          title: "拉布安巴霍航海",
          href: "/paket-wisata/sailing-labuan-bajo",

          ...createPackageCollections(packages, "sailing-labuan-bajo"),
        },

        {
          title: "拉布安巴霍",
          href: "/paket-wisata/labuan-bajo",

          ...createPackageCollections(packages, "labuan-bajo"),
        },
      ],
    },

    {
      label: "住宿",
      href: "/akomodasi",
      variant: "mega",

      groups: [
        {
          title: "Lombok",

          items: [
            {
              label: "龙目岛酒店",
              href: "/akomodasi/lombok",
            },
          ],
        },

        {
          title: "Labuan Bajo",

          items: [
            {
              label: "纳闽巴霍酒店",
              href: "/akomodasi/labuan-bajo",
            },
          ],
        },
      ],
    },

    {
      label: "汽车租赁",
      href: "/sewa-mobil",
      variant: "mega",

      groups: [
        {
          title: "Lombok",

          items: [
            {
              label: "可租车辆",
              href: "/sewa-mobil/lombok",
            },
          ],
        },

        {
          title: "Labuan Bajo",

          items: [
            {
              label: "可租车辆",
              href: "/sewa-mobil/labuan-bajo",
            },
          ],
        },
      ],
    },

    {
      label: "博客",
      href: "/blog",
      variant: "link",
    },

    {
      label: "信息",
      variant: "dropdown",
      items: [
        { label: "关于我们", href: "/tentang-kami" },
        { label: "旅游指南", href: "/panduan-wisata" },
        { label: "目的地", href: "/destinasi" },
        { label: "评价", href: "/ulasan" },
        { label: "联系我们", href: "/kontak" },
        { label: "常见问题", href: "/faq" },
      ],
    },
  ];
}
