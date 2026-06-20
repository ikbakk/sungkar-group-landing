type PackageData = {
  title: string;
  slug: string;
  region: string;
  collectionSlug: string;
  collectionTitle: string;
};

type RegionLabels = Record<string, string>;

interface ContactFormConfig {
  whatsappNumber: string;
  packagesData: PackageData[];
  choosePackageLabel: string;
  selectLocationFirstLabel: string;
  whatsappGreeting: string;
  whatsappLocationLabel: string;
  whatsappFormDateLabel: string;
  whatsappFormGuestsLabel: string;
  whatsappFormMessageLabel: string;
  whatsappFormPackageLabel: string;
  whatsappFollowUp: string;
  regionLabels: RegionLabels;
}

export function initContactForm(config: ContactFormConfig) {
  const locationSelect =
    document.querySelector<HTMLSelectElement>('[name="location"]');
  const packageSelect =
    document.querySelector<HTMLSelectElement>('[name="package"]');
  const submitBtn = document.getElementById(
    "contact-whatsapp",
  ) as HTMLButtonElement | null;

  function updateButton() {
    const travelDate =
      (document.getElementById("travelDate") as HTMLInputElement | null)
        ?.value ?? "";
    const guests =
      (document.getElementById("guests") as HTMLInputElement | null)?.value ??
      "";
    const location = locationSelect?.value ?? "";
    const pkg = packageSelect?.value ?? "";

    if (submitBtn) {
      submitBtn.disabled = !(travelDate && guests && location && pkg);
    }
  }

  function updatePackages() {
    const region = locationSelect?.value ?? "";
    if (!region) {
      if (packageSelect) {
        packageSelect.innerHTML = `<option value="">${config.selectLocationFirstLabel}</option>`;
        packageSelect.disabled = true;
      }
      updateButton();
      return;
    }

    const filtered = config.packagesData.filter((p) => p.region === region);

    const groups: Record<string, { title: string; packages: PackageData[] }> =
      {};
    for (const p of filtered) {
      if (!groups[p.collectionSlug]) {
        groups[p.collectionSlug] = {
          title: p.collectionTitle,
          packages: [],
        };
      }
      groups[p.collectionSlug].packages.push(p);
    }

    let html = `<option value="">${config.choosePackageLabel}</option>`;
    for (const slug of Object.keys(groups)) {
      const group = groups[slug];
      html += `<optgroup label="${group.title}">`;
      for (const pkg of group.packages) {
        html += `<option value="${pkg.title.replace(/"/g, "&quot;")}">${pkg.title}</option>`;
      }
      html += "</optgroup>";
    }

    if (packageSelect) {
      packageSelect.innerHTML = html;
      packageSelect.value = "";
      packageSelect.disabled = false;
    }
    updateButton();
  }

  locationSelect?.addEventListener("change", updatePackages);
  packageSelect?.addEventListener("change", updateButton);

  const travelDateInput = document.getElementById("travelDate");
  const guestsInput = document.getElementById("guests");

  travelDateInput?.addEventListener("input", updateButton);
  guestsInput?.addEventListener("input", updateButton);

  async function submitForm() {
    const form = document.getElementById(
      "availability-form",
    ) as HTMLFormElement | null;
    const accessKey =
      (form?.querySelector('[name="access_key"]') as HTMLInputElement | null)
        ?.value ?? "";

    if (accessKey && form) {
      const formData = new FormData(form);
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      } catch {
        console.warn("Form backend unreachable, falling back to WhatsApp only");
      }
    }

    openWhatsApp();
  }

  function openWhatsApp() {
    const travelDate =
      (document.getElementById("travelDate") as HTMLInputElement | null)
        ?.value ?? "";
    const guests =
      (document.getElementById("guests") as HTMLInputElement | null)?.value ??
      "";
    const location = locationSelect?.value ?? "";
    const packageName = packageSelect?.value ?? "";
    const message =
      (document.getElementById("message") as HTMLTextAreaElement | null)
        ?.value ?? "";

    const lines: string[] = [config.whatsappGreeting, ""];

    if (location) {
      lines.push(
        config.whatsappLocationLabel.replace(
          "{region}",
          config.regionLabels[location] || location,
        ),
      );
    }

    if (packageName) {
      lines.push(
        config.whatsappFormPackageLabel.replace("{package}", packageName),
      );
    }

    lines.push("");
    lines.push(config.whatsappFormDateLabel.replace("{date}", travelDate));
    lines.push(config.whatsappFormGuestsLabel.replace("{guests}", guests));

    if (message) {
      lines.push(config.whatsappFormMessageLabel.replace("{message}", message));
    }

    lines.push("");
    lines.push(config.whatsappFollowUp);

    const whatsappMessage = lines.join("\n");
    const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  }

  submitBtn?.addEventListener("click", submitForm);
  updateButton();
}
