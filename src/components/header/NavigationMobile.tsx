import { useRef, useEffect } from "react";

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
} from "@/components/ui/accordion-legacy";

import type { NavItem } from "@/lib/content/shared/types";
import { localizeHref } from "@/lib/i18n/localize";
import {
  LOCALE_LABELS,
  LOCALE_SHORT_LABELS,
  LOCALES,
  getLocalizedPath,
  type Locale,
} from "@/lib/i18n";
import { getHeaderStrings } from "@/lib/i18n";

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

function TruncatedLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.scrollWidth > el.clientWidth + 1) {
      el.title = label;
    }
  }, [label]);

  return (
    <a
      ref={ref}
      href={href}
      className={`overflow-hidden text-ellipsis whitespace-nowrap ${className}`}
    >
      {label}
    </a>
  );
}

export default function NavigationMobile({ items, locale = "id" }: Props) {
  const lh = (href: string | undefined) => localizeHref(href, locale);
  const strings = getHeaderStrings(locale);

  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <button
            className="
              rounded-full
              border
              border-border
              bg-white/80
              px-4
              py-2
              text-sm
              font-medium
              text-foreground
              shadow-sm
            "
          >
            {strings.menu}
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-[85vh]">
          <DrawerHeader className="space-y-2 pb-2">
            <DrawerTitle className="text-center text-xl font-medium font-sans">
              {strings.exploreDestinations}
            </DrawerTitle>

            <p className="text-center text-sm text-muted-foreground">
              {strings.destinationsSubtitle}
            </p>
          </DrawerHeader>

          <div className="flex flex-1 flex-col font-sans overflow-hidden">
            <div className="flex-1 overflow-y-auto px-6 min-h-0">
              <div className="mb-4 border-b border-border pb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {strings.language}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {LOCALES.map((l) => {
                    const isCurrent = l === locale;
                    return (
                      <a
                        key={l}
                        href={
                          isCurrent
                            ? undefined
                            : getLocalizedPath(
                                typeof window !== "undefined"
                                  ? window.location.pathname
                                  : "/",
                                l,
                              )
                        }
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                          isCurrent
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        <span className="text-base leading-none">
                          {FLAGS[l]}
                        </span>
                        <span>{LOCALE_SHORT_LABELS[l as Locale]}</span>
                        <span className="hidden sm:inline">
                          {LOCALE_LABELS[l as Locale]}
                        </span>
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

                  if (item.variant === "dropdown") {
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
                            <div className="grid gap-1 pl-4 pb-2">
                              {item.items?.map((subItem) => (
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
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
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
                            {item.groups
                              ?.filter(
                                (group) =>
                                  (group.items?.length ?? 0) > 0 ||
                                  (group.collections?.length ?? 0) > 0,
                              )
                              .map((group) => {
                                const totalItems =
                                  (group.items?.length ?? 0) +
                                  (group.collections?.reduce(
                                    (acc, c) => acc + c.items.length,
                                    0,
                                  ) ?? 0);

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
                                        <span>{group.title}</span>

                                        <span className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary text-primary-foreground text-xs font-medium px-4 py-1 ">
                                          {totalItems}
                                        </span>
                                      </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="bg-background">
                                      <div className="space-y-4 pl-4">
                                        {/* Direct items (single-package collections) */}
                                        {group.items &&
                                          group.items.length > 0 && (
                                            <div className="grid gap-1">
                                              {group.items.map((subItem) => (
                                                <TruncatedLink
                                                  key={subItem.href}
                                                  href={lh(subItem.href)!}
                                                  label={subItem.label}
                                                  className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                                />
                                              ))}
                                            </div>
                                          )}

                                        {/* Multi-package collections */}
                                        {group.collections &&
                                          group.collections.length > 0 && (
                                            <div className="space-y-4">
                                              {group.collections.map(
                                                (collection) => (
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
                                                            href={lh(
                                                              subItem.href,
                                                            )}
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
                                                ),
                                              )}
                                            </div>
                                          )}
                                      </div>
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
