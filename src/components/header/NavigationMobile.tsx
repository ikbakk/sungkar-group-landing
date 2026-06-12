import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import type { NavItem } from "@/lib/content/navigationData";
import { Badge } from "../ui/badge";

type Props = {
  items: NavItem[];
  isHome?: boolean;
};

export default function NavigationMobile({ items, isHome }: Props) {
  const totalPackages = items
    .flatMap((item) => item.groups ?? [])
    .flatMap((group) => group.collections ?? [])
    .flatMap((collection) => collection.items).length;

  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <button
            className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              text-sm
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            Menu
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-[85vh]">
          <DrawerHeader className="space-y-2 pb-2">
            <DrawerTitle className="text-center text-xl font-medium">
              Jelajahi Destinasi
            </DrawerTitle>

            <p className="text-center text-sm text-muted-foreground">
              Lombok • Sumbawa • Labuan Bajo
            </p>

            <p className="text-center text-xs text-muted-foreground">
              {totalPackages} Paket Wisata Tersedia
            </p>
          </DrawerHeader>

          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto px-6">
              <nav className="flex flex-col">
                {items.map((item) => {
                  if (item.variant === "link") {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="
                          py-4
                          text-base
                          text-foreground
                        "
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Accordion
                      key={item.label}
                      className="border-none bg-background"
                    >
                      <AccordionItem
                        value={item.label}
                        className="border-none bg-background"
                      >
                        <AccordionTrigger
                          className="
                            bg-background
                            py-4
                            text-base
                            pl-0
                            font-normal
                            hover:no-underline
                          "
                        >
                          {item.label}
                        </AccordionTrigger>

                        <AccordionContent>
                          <Accordion className="pb-2 border-none bg-background">
                            {item.groups?.map((group) => {
                              const shortTitle = group.title
                                .replace("Paket Wisata ", "")
                                .replace("Open Trip ", "");

                              return (
                                <AccordionItem
                                  key={group.title}
                                  value={group.title}
                                  className="border-none"
                                >
                                  <AccordionTrigger
                                    className="
                                      py-3
                                      text-sm
                                      font-normal
                                      text-muted-foreground
                                      bg-background
                                    "
                                  >
                                    <div className="flex items-center w-full justify-between gap-2">
                                      <span>{shortTitle}</span>

                                      <Badge className="px-4 py-2 pt-2.5">
                                        {group.collections?.length
                                          ? group.collections.reduce(
                                              (acc, collection) =>
                                                acc + collection.items.length,
                                              0,
                                            )
                                          : (group.items?.length ?? 0)}
                                      </Badge>
                                    </div>
                                  </AccordionTrigger>

                                  <AccordionContent className="bg-background">
                                    {group.collections?.length ? (
                                      <div className="space-y-4 pl-4">
                                        {group.collections.map((collection) => (
                                          <div key={collection.title}>
                                            <a
                                              href={collection.href}
                                              className="
                                                mb-2
                                                block
                                                text-xs
                                                font-medium
                                                uppercase
                                                tracking-wide
                                                text-brand-700
                                              "
                                            >
                                              {collection.title}
                                            </a>

                                            <div className="grid gap-1">
                                              {collection.items.map(
                                                (subItem) => (
                                                  <a
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="
                                                    py-2
                                                    text-sm
                                                    text-muted-foreground
                                                    transition-colors
                                                    hover:text-foreground
                                                  "
                                                  >
                                                    {subItem.label}
                                                  </a>
                                                ),
                                              )}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <div className="grid gap-1 pl-4">
                                        {group.items?.map((subItem) => (
                                          <a
                                            key={subItem.href}
                                            href={subItem.href}
                                            className="
                                              py-2
                                              text-sm
                                              text-muted-foreground
                                              transition-colors
                                              hover:text-foreground
                                            "
                                          >
                                            {subItem.label}
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </AccordionContent>
                                </AccordionItem>
                              );
                            })}
                          </Accordion>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
              </nav>
            </div>

            <div
              className="
                sticky
                bottom-0
                border-t
                bg-background
                p-4
              "
            >
              <div className="grid gap-3">
                {!isHome && (
                  <Button variant="outline">
                    <a href="/kontak">Cek Ketersediaan</a>
                  </Button>
                )}

                <Button size="lg">
                  <a href="/kontak">Chat WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
