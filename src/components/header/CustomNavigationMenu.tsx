import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Ulasan", href: "/ulasan" },
  { label: "Panduan Wisata", href: "/panduan-wisata" },
  { label: "Kontak", href: "/kontak" },
];

const packageLinks = [
  {
    category: "Paket 3 Hari",
    title: "Paket Lombok 3H2M",
    href: "/paket-wisata/3d2n-lombok-signature",
  },
  {
    category: "Tur harian",
    title: "Tur Snorkeling dan Gili",
    href: "/paket-wisata/snorkeling-gili-escape",
  },
  {
    category: "Budaya",
    title: "Pengalaman Desa dan Budaya",
    href: "/paket-wisata/village-culture-experience",
  },
];

const destinationGroups = [
  {
    group: "Lombok",
    items: [
      { label: "Kuta Lombok", href: "/destinasi/kuta-lombok" },
      { label: "Tetebatu", href: "/destinasi/tetebatu" },
      { label: "Sembalun", href: "/destinasi/sembalun" },
    ],
  },
  {
    group: "Kepulauan Gili",
    items: [
      { label: "Gili Trawangan", href: "/destinasi/gili-trawangan" },
      { label: "Gili Air", href: "/destinasi/gili-air" },
      { label: "Gili Meno", href: "/destinasi/gili-meno" },
    ],
  },
  {
    group: "Pegunungan",
    items: [
      { label: "Rinjani", href: "/destinasi/rinjani" },
      { label: "Senaru", href: "/destinasi/senaru" },
    ],
  },
];

export default function CustomNavigationMenu() {
  return (
    <NavigationMenu className="hidden lg:flex ">
      <NavigationMenuList className="items-center gap-1">
        {quickLinks.map((link) => (
          <NavigationMenuItem key={link.label}>
            <NavigationMenuLink href={link.href}>
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger>Paket Wisata</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[44rem] gap-4 p-4 md:grid-cols-3">
              {packageLinks.map((tour) => (
                <a
                  key={tour.href}
                  href={tour.href}
                  className="group rounded-2xl border border-border bg-white p-4 transition-colors hover:bg-brand-50"
                >
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-700">
                    {tour.category}
                  </div>
                  <div className="mt-2 font-heading text-2xl leading-tight text-foreground">
                    {tour.title}
                  </div>
                </a>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinasi</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[52rem] gap-4 p-4 md:grid-cols-3">
              {destinationGroups.map((group) => (
                <div
                  key={group.group}
                  className="rounded-2xl border border-border bg-white p-4"
                >
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-brand-700">
                    {group.group}
                  </div>
                  <ul className="mt-3 grid gap-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink href={item.href}>
                          {item.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
