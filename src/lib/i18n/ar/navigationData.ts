import { packages } from "@/lib/content/tourPackages/index";

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

  variant: "link" | "mega";

  groups?: NavGroup[];
};

const createPackageCollections = (
  region: "lombok" | "sumbawa" | "labuan-bajo",
): NavCollection[] => {
  const regionPackages = packages.filter((pkg) => pkg.region === region);

  const grouped = Object.values(
    regionPackages.reduce(
      (acc, pkg) => {
        if (!acc[pkg.collectionSlug]) {
          acc[pkg.collectionSlug] = {
            title: pkg.collectionTitle,

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
    ),
  );

  return grouped;
};

export const navigation: NavItem[] = [
  {
    label: "الرئيسية",
    href: "/",
    variant: "link",
  },

  {
    label: "برامج سياحية",
    variant: "mega",

    groups: [
      {
        title: "لومبوك",
        href: "/paket-wisata/lombok",

        collections: createPackageCollections("lombok"),
      },

      {
        title: "سومباوا",
        href: "/paket-wisata/sumbawa",

        collections: createPackageCollections("sumbawa"),
      },

      {
        title: "لابوان باجو",
        href: "/paket-wisata/labuan-bajo",

        collections: createPackageCollections("labuan-bajo"),
      },
    ],
  },

  {
    label: "الإقامة",
    href: "/akomodasi",
    variant: "mega",

    groups: [
      {
        title: "لومبوك",

        items: [
          {
            label: "فنادق في لومبوك",
            href: "/akomodasi/lombok",
          },
        ],
      },

      {
        title: "لابوان باجو",

        items: [
          {
            label: "فنادق في لابوان باجو",
            href: "/akomodasi/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "تأجير السيارات",
    href: "/sewa-mobil",
    variant: "mega",

    groups: [
      {
        title: "لومبوك",

        items: [
          {
            label: "المركبات المتاحة",
            href: "/sewa-mobil/lombok",
          },
        ],
      },

      {
        title: "لابوان باجو",

        items: [
          {
            label: "المركبات المتاحة",
            href: "/sewa-mobil/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "من نحن",
    href: "/tentang-kami",
    variant: "link",
  },

  {
    label: "أدلة السفر",
    href: "/panduan-wisata",
    variant: "link",
  },

  {
    label: "التقييمات",
    href: "/ulasan",
    variant: "link",
  },

  {
    label: "اتصل بنا",
    href: "/kontak",
    variant: "link",
  },
];