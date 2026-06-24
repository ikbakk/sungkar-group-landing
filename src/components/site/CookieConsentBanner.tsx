import { useEffect, useState } from "react";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n";

// Extend Window to include the Google dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const CONSENT_STORAGE_KEY = "sg-cookie-consent";

type ConsentChoice = "granted" | "denied";

interface ConsentState {
  analytics_storage: ConsentChoice;
  ad_storage: ConsentChoice;
  ad_user_data: ConsentChoice;
  ad_personalization: ConsentChoice;
}

function readStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

function storeConsent(state: ConsentState) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage may be unavailable
  }
}

function applyConsent(state: ConsentState) {
  // Push consent update to the dataLayer (forwarded to Partytown worker)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["consent", "update", state]);
}

interface Props {
  locale: Locale;
}

export default function CookieConsentBanner({ locale }: Props) {
  const [visible, setVisible] = useState(false);
  const strings = t(locale).consent;

  useEffect(() => {
    // Check if user already made a choice
    const stored = readStoredConsent();
    if (stored) {
      // Re-apply the stored preference on every page load
      applyConsent(stored);
      setVisible(false);
    } else {
      // Show the banner after a short delay for a smooth UX
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAcceptAll() {
    const state: ConsentState = {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    };
    storeConsent(state);
    applyConsent(state);
    setVisible(false);
  }

  function handleRejectAll() {
    const state: ConsentState = {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    };
    storeConsent(state);
    applyConsent(state);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 shadow-lg md:p-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1 text-sm leading-relaxed text-foreground">
          <p className="mb-1 font-semibold">{strings.title}</p>
          <p className="text-text-muted">{strings.description}</p>
          <a
            href="/kebijakan-privasi"
            className="mt-1 inline-block text-xs underline underline-offset-2 hover:text-primary"
          >
            {strings.learnMore}
          </a>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            onClick={handleRejectAll}
            className="cursor-pointer rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {strings.rejectAll}
          </button>
          <button
            onClick={handleAcceptAll}
            className="cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {strings.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
