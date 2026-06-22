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
  region: "lombok" | "sumbawa" | "labuan-bajo" | "sailing-labuan-bajo" | "lombok-to-bajo",
): CollectionResult => {
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

  // Sort collections alphabetically by title
  collections.sort((a, b) => a.title.localeCompare(b.title));

  return { collections, items };
};

export function createNavigation(packages: TourPackage[]): NavItem[] {
  return [
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

          ...createPackageCollections(packages, "lombok"),
        },

        {
          title: "Sumbawa",
          href: "/paket-wisata/sumbawa",

          ...createPackageCollections(packages, "sumbawa"),
        },

        {
          title: "Sailing Labuan Bajo",
          href: "/paket-wisata/sailing-labuan-bajo",

          ...createPackageCollections(packages, "sailing-labuan-bajo"),
        },

        {
          title: "Labuan Bajo",
          href: "/paket-wisata/labuan-bajo",

          ...createPackageCollections(packages, "labuan-bajo"),
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
      label: "Blog",
      href: "/blog",
      variant: "link",
    },

    {
      label: "Info",
      variant: "dropdown",
      items: [
        { label: "About Us", href: "/tentang-kami" },
        { label: "Travel Guides", href: "/panduan-wisata" },
        { label: "Destinations", href: "/destinasi" },
        { label: "Reviews", href: "/ulasan" },
        { label: "Contact", href: "/kontak" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ];
}
