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
                  <div
                    className="grid gap-3 p-3"
                    style={{
                      gridTemplateColumns: `repeat(${
                        item.groups?.length ?? 1
                      }, minmax(220px, 1fr))`,
                    }}
                  >
                    {item.groups?.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-lg border border-border bg-background p-2"
                      >
                        <div className="mb-2">
                          {group.href ? (
                            <NavigationMenuLink
                              href={group.href}
                              className="text-sm font-semibold text-brand-700 hover:underline"
                            >
                              {group.title}
                            </NavigationMenuLink>
                          ) : (
                            <div className="text-sm font-semibold text-brand-700">
                              {group.title}
                            </div>
                          )}
                        </div>

                        {group.collections ? (
                          <ul className="space-y-1">
                            {group.collections.map((collection) => (
                              <li key={collection.href}>
                                <NavigationMenuLink
                                  href={collection.href}
                                  className="
                                    block
                                    rounded-md
                                    px-2
                                    py-2
                                    text-sm
                                    text-muted-foreground
                                    hover:bg-accent
                                    hover:text-foreground
                                  "
                                >
                                  {collection.title}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="space-y-1">
                            {group.items?.map((subItem: any) => (
                              <li key={subItem.href}>
                                <NavigationMenuLink
                                  href={subItem.href}
                                  className="
                                    block
                                    rounded-md
                                    px-2
                                    py-2
                                    text-sm
                                    text-muted-foreground
                                    hover:bg-accent
                                    hover:text-foreground
                                  "
                                >
                                  {subItem.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {item.href && (
                    <div className="flex justify-center pb-3">
                      <NavigationMenuLink
                        href={item.href}
                        className="
                          inline-flex
                          items-center
                          rounded-md
                          bg-brand-700
                          px-4
                          py-2
                          text-sm
                          text-background
                          transition-colors
                          hover:bg-brand-500
                        "
                      >
                        Lihat Semua {item.label}
                      </NavigationMenuLink>
                    </div>
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
