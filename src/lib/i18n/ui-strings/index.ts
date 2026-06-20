import type { UIStrings } from "./types";
import { id } from "./id";
import { en } from "./en";
import { ar } from "./ar";
import { ms } from "./ms";
import { zh } from "./zh";

export const translations: Record<string, UIStrings> = {
  id,
  en,
  ar,
  ms,
  zh,
};

export type { UIStrings };

export function t(locale: string): UIStrings {
  return translations[locale] || translations.id;
}
