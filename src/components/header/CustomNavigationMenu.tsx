import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type NavItem = {
  label: string;
  href?: string;
  variant: "link" | "dropdown" | "mega";

  children?: NavItem[];

  groups?: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
};

const navigation: NavItem[] = [
  {
    label: "Beranda",
    href: "/",
    variant: "link",
  },

  {
    label: "Paket Wisata",
    variant: "dropdown",
    children: [
      {
        label: "Paket Lombok 3H2M",
        href: "/paket-wisata/3d2n-lombok-signature",
        variant: "link",
      },
      {
        label: "Tur Snorkeling dan Gili",
        href: "/paket-wisata/snorkeling-gili-escape",
        variant: "link",
      },
      {
        label: "Village & Culture Experience",
        href: "/paket-wisata/village-culture-experience",
        variant: "link",
      },
      {
        label: "Paket 2 Hari",
        href: "/paket-wisata/2-hari",
        variant: "link",
      },
      {
        label: "Paket 3 Hari",
        href: "/paket-wisata/3-hari",
        variant: "link",
      },
      {
        label: "Paket 4 Hari",
        href: "/paket-wisata/4-hari",
        variant: "link",
      },
      {
        label: "Snorkeling",
        href: "/aktivitas/snorkeling",
        variant: "link",
      },
      {
        label: "Hiking",
        href: "/aktivitas/hiking",
        variant: "link",
      },
      {
        label: "Budaya",
        href: "/aktivitas/budaya",
        variant: "link",
      },
    ],
  },

  {
    label: "Destinasi",
    variant: "mega",
    groups: [
      {
        title: "Lombok",
        items: [
          {
            label: "Kuta Lombok",
            href: "/destinasi/kuta-lombok",
          },
          {
            label: "Tetebatu",
            href: "/destinasi/tetebatu",
          },
          {
            label: "Sembalun",
            href: "/destinasi/sembalun",
          },
        ],
      },
      {
        title: "Kepulauan Gili",
        items: [
          {
            label: "Gili Trawangan",
            href: "/destinasi/gili-trawangan",
          },
          {
            label: "Gili Air",
            href: "/destinasi/gili-air",
          },
          {
            label: "Gili Meno",
            href: "/destinasi/gili-meno",
          },
        ],
      },
      {
        title: "Rinjani",
        items: [
          {
            label: "Senaru",
            href: "/destinasi/senaru",
          },
          {
            label: "Sembalun Trail",
            href: "/destinasi/sembalun-trail",
          },
        ],
      },
    ],
  },

  {
    label: "Tentang Kami",
    href: "/tentang-kami",
    variant: "link",
  },

  {
    label: "Panduan Wisata",
    href: "panduan-wisata",
    variant: "link",
  },

  {
    label: "Ulasan",
    href: "/ulasan",
    variant: "link",
  },

  {
    label: "Kontak",
    href: "/kontak",
    variant: "link",
  },
];

export default function CustomNavigationMenu() {
  const triggerClass =
    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground";

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="items-center gap-1">
        {navigation.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.variant === "link" && (
              <NavigationMenuLink
                href={item.href!}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </NavigationMenuLink>
            )}

            {item.variant === "dropdown" && (
              <>
                <NavigationMenuTrigger className={triggerClass}>
                  {item.label}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="w-72 p-2">
                    <ul className="space-y-1">
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                          >
                            {child.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </>
            )}

            {item.variant === "mega" && (
              <>
                <NavigationMenuTrigger className={triggerClass}>
                  {item.label}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div
                    className="grid gap-4 p-4"
                    style={{
                      gridTemplateColumns: `repeat(${
                        item.groups?.length ?? 1
                      }, minmax(220px, 1fr))`,
                    }}
                  >
                    {item.groups?.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-xl border border-border bg-background p-4"
                      >
                        <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
                          {group.title}
                        </div>

                        <ul className="space-y-1">
                          {group.items.map((subItem) => (
                            <li key={subItem.href}>
                              <NavigationMenuLink
                                href={subItem.href}
                                className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
                              >
                                {subItem.label}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
