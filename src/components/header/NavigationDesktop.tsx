import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import type { NavItem } from "@/lib/content/navigationData";

type Props = {
  items: NavItem[];
};

export default function NavigationDesktop({ items }: Props) {
  const triggerClass =
    "group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground";

  return (
    <NavigationMenu>
      <NavigationMenuList className="items-center gap-1">
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.variant === "link" && (
              <NavigationMenuLink href={item.href!} className={triggerClass}>
                {item.label}
              </NavigationMenuLink>
            )}

            {item.variant === "mega" && (
              <>
                <NavigationMenuTrigger className={triggerClass}>
                  {item.label}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid gap-4 p-4 lg:grid-cols-3">
                    {item.groups?.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-xl border border-border bg-background p-4"
                      >
                        <div className="mb-4">
                          <NavigationMenuLink
                            href={group.href}
                            className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700"
                          >
                            {group.title}
                          </NavigationMenuLink>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          {group.collections?.map((collection) => (
                            <div key={collection.title}>
                              <div className="mb-2">
                                <NavigationMenuLink
                                  href={collection.href}
                                  className="text-sm font-semibold"
                                >
                                  {collection.title}
                                </NavigationMenuLink>
                              </div>

                              <ul className="space-y-1">
                                {collection.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <NavigationMenuLink
                                      href={subItem.href}
                                      className="block rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                                    >
                                      {subItem.label}
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <NavigationMenuLink
                    className={
                      "w-fit px-4 py-2 bg-brand-700 text-background hover:bg-brand-500 mb-2 text-sm cursor-pointer self-center mx-auto"
                    }
                  >
                    Lihat Semua {item.label} yang tersedia
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
