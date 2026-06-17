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

  variant: "link" | "mega" | "dropdown";

  groups?: NavGroup[];
  items?: { label: string; href: string }[];
};

type CollectionResult = {
  collections: NavCollection[];
  items: { label: string; href: string }[];
};

const createPackageCollections = (region: "lombok" | "sumbawa" | "labuan-bajo"): CollectionResult => {
  const regionPackages = packages.filter((pkg) => pkg.region === region);

  const grouped = regionPackages.reduce(
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

  return { collections, items };
};

export const navigation: NavItem[] = [
  {
    label: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
    href: "/",
    variant: "link",
  },

  {
    label: "\u0628\u0631\u0627\u0645\u062c \u0633\u064a\u0627\u062d\u064a\u0629",
    variant: "mega",

    groups: [
      {
        title: "\u0644\u0648\u0645\u0628\u0648\u0643",
        href: "/paket-wisata/lombok",

        ...createPackageCollections("lombok"),
      },

      {
        title: "\u0633\u0648\u0645\u0628\u0627\u0648\u0627",
        href: "/paket-wisata/sumbawa",

        ...createPackageCollections("sumbawa"),
      },

      {
        title: "\u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062c\u0648",
        href: "/paket-wisata/labuan-bajo",

        ...createPackageCollections("labuan-bajo"),
      },
    ],
  },

  {
    label: "\u0627\u0644\u0625\u0642\u0627\u0645\u0629",
    href: "/akomodasi",
    variant: "mega",

    groups: [
      {
        title: "\u0644\u0648\u0645\u0628\u0648\u0643",

        items: [
          {
            label: "\u0641\u0646\u0627\u062f\u0642 \u0641\u064a \u0644\u0648\u0645\u0628\u0648\u0643",
            href: "/akomodasi/lombok",
          },
        ],
      },

      {
        title: "\u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062c\u0648",

        items: [
          {
            label: "\u0641\u0646\u0627\u062f\u0642 \u0641\u064a \u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062c\u0648",
            href: "/akomodasi/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "\u062a\u0623\u062c\u064a\u0631 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a",
    href: "/sewa-mobil",
    variant: "mega",

    groups: [
      {
        title: "\u0644\u0648\u0645\u0628\u0648\u0643",

        items: [
          {
            label: "\u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629",
            href: "/sewa-mobil/lombok",
          },
        ],
      },

      {
        title: "\u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062c\u0648",

        items: [
          {
            label: "\u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629",
            href: "/sewa-mobil/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "\u0627\u0644\u0645\u062f\u0648\u0646\u0629",
    href: "/blog",
    variant: "link",
  },

  {
    label: "\u0645\u0639\u0644\u0648\u0645\u0627\u062a",
    variant: "dropdown",
    items: [
      { label: "\u0645\u0646 \u0646\u062d\u0646", href: "/tentang-kami" },
      { label: "\u0623\u062f\u0644\u0629 \u0627\u0644\u0633\u0641\u0631", href: "/panduan-wisata" },
      { label: "\u0627\u0644\u0648\u062c\u0647\u0627\u062a", href: "/destinasi" },
      { label: "\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a", href: "/ulasan" },
      { label: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627", href: "/kontak" },
      { label: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", href: "/faq" },
    ],
  },
];
