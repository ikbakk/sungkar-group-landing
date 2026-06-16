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

import type { NavItem } from "@/lib/content/shared/types";
import { localizeHref } from "@/lib/i18n/localize";
import {
  LOCALE_LABELS,
  LOCALE_SHORT_LABELS,
  LOCALES,
  getLocalizedPath,
  type Locale,
} from "@/lib/i18n";
import { t } from "@/lib/i18n/ui-strings";

type Props = {
  items: NavItem[];
  locale?: string;
};

const FLAGS: Record<string, string> = {
  id: "\uD83C\uDDEE\uD83C\uDDE9",
  en: "\uD83C\uDDEC\uD83C\uDDE7",
  ar: "\uD83C\uDDF8\uD83C\uDDE6",
  ms: "\uD83C\uDDF2\uD83C\uDDFE",
  zh: "\uD83C\uDDE8\uD83C\uDDF3",
};

export default function NavigationMobile({ items, locale = "id" }: Props) {
  const lh = (href: string | undefined) => localizeHref(href, locale);

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
            {t(locale).header.menu}
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-[85vh]">
          <DrawerHeader className="space-y-2 pb-2">
            <DrawerTitle className="text-center text-xl font-medium font-sans">
              {t(locale).header.exploreDestinations}
            </DrawerTitle>

            <p className="text-center text-sm text-muted-foreground">
              Lombok • Sumbawa • Labuan Bajo
            </p>
          </DrawerHeader>

          <div className="flex flex-1 flex-col font-sans overflow-hidden">
            <div className="flex-1 overflow-y-auto px-6 min-h-0">
              <div className="mb-4 border-b border-border pb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {t(locale).header.language}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {LOCALES.map((l) => {
                    const isCurrent = l === locale;
                    return (
                      <a
                        key={l}
                        href={isCurrent ? undefined : getLocalizedPath(
                          typeof window !== "undefined" ? window.location.pathname : "/",
                          l,
                        )}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                          isCurrent
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        <span className="text-base leading-none">{FLAGS[l]}</span>
                        <span>{LOCALE_SHORT_LABELS[l as Locale]}</span>
                        <span className="hidden sm:inline">{LOCALE_LABELS[l as Locale]}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
              <nav className="flex flex-col [&_h3]:font-sans">
                {items.map((item) => {
                  if (item.variant === "link") {
                    return (
                      <a
                        key={item.label}
                        href={lh(item.href)}
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

                                      <span className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary text-primary-foreground text-xs font-medium px-4 py-1 ">
                                        {group.collections?.length
                                          ? group.collections.reduce(
                                              (acc, collection) =>
                                                acc + collection.items.length,
                                              0,
                                            )
                                          : (group.items?.length ?? 0)}
                                      </span>
                                    </div>
                                  </AccordionTrigger>

                                  <AccordionContent className="bg-background">
                                    {group.collections?.length ? (
                                      <div className="space-y-4 pl-4">
                                        {group.collections.map((collection) => (
                                          <div key={collection.title}>
                                            <a
                                              href={lh(collection.href)}
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
                                                    href={lh(subItem.href)}
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
                                            href={lh(subItem.href)}
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
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
