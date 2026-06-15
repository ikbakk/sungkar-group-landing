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
    label: "Home",
    href: "/",
    variant: "link",
  },

  {
    label: "Tour Packages",
    variant: "mega",

    groups: [
      {
        title: "Lombok",
        href: "/paket-wisata/lombok",

        collections: createPackageCollections("lombok"),
      },

      {
        title: "Sumbawa",
        href: "/paket-wisata/sumbawa",

        collections: createPackageCollections("sumbawa"),
      },

      {
        title: "Labuan Bajo",
        href: "/paket-wisata/labuan-bajo",

        collections: createPackageCollections("labuan-bajo"),
      },
    ],
  },

  {
    label: "Accommodations",
    href: "/akomodasi",
    variant: "mega",

    groups: [
      {
        title: "Lombok",

        items: [
          {
            label: "Hotels in Lombok",
            href: "/akomodasi/lombok",
          },
        ],
      },

      {
        title: "Labuan Bajo",

        items: [
          {
            label: "Hotels in Labuan Bajo",
            href: "/akomodasi/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "Car Rental",
    href: "/sewa-mobil",
    variant: "mega",

    groups: [
      {
        title: "Lombok",

        items: [
          {
            label: "Available Vehicles",
            href: "/sewa-mobil/lombok",
          },
        ],
      },

      {
        title: "Labuan Bajo",

        items: [
          {
            label: "Available Vehicles",
            href: "/sewa-mobil/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "About Us",
    href: "/tentang-kami",
    variant: "link",
  },

  {
    label: "Travel Guides",
    href: "/panduan-wisata",
    variant: "link",
  },

  {
    label: "Reviews",
    href: "/ulasan",
    variant: "link",
  },

  {
    label: "Contact",
    href: "/kontak",
    variant: "link",
  },
];
