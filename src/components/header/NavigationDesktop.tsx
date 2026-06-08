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
                    className="grid gap-4 p-4"
                    style={{
                      gridTemplateColumns: `repeat(${
                        item.groups?.length ?? 1
                      }, minmax(240px, 1fr))`,
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
                                className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
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
