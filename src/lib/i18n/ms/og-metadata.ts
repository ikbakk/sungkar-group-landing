import type { ImageSource } from "@/lib/images";
import { HERO, GALLERY, DESTINATIONS } from "@/assets/images";

export interface OGMetadata {
  title: string;
  description: string;
  image: ImageSource;
  imageAlt: string;
  type?: "website" | "article" | "profile";
}

export const pageOGMetadata: Record<string, OGMetadata> = {
  "/": {
    title: "Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Pengendali pelancongan tempatan Lombok untuk lawatan peribadi, destinasi, pengangkutan, ulasan, dan panduan perjalanan.",
    image: HERO.heroLombok,
    imageAlt: "Pemandangan pantai Lombok ketika matahari terbenam",
  },
  "/tentang-kami": {
    title: "Tentang Kami | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Ketahui lebih lanjut tentang Sungkar Group, pasukan tempatan kami, dan pendekatan perjalanan lestari kami.",
    image: GALLERY.tourCultural,
    imageAlt:
      "Pengalaman budaya tempatan bersama pasukan Sungkar Group",
  },
  "/paket-wisata": {
    title: "Pakej Pelancongan | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Terokai pakej pelancongan Lombok yang lengkap dari lawatan 3 hari hingga pengalaman budaya tempatan.",
    image: HERO.heroLombok,
    imageAlt: "Pakej pelancongan Lombok dengan perkhidmatan tempatan terbaik",
  },
  "/destinasi": {
    title: "Destinasi | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Temui destinasi terbaik di Lombok, Kepulauan Gili, dan gunung Rinjani untuk pengembaraan anda.",
    image: DESTINATIONS.lombok,
    imageAlt: "Destinasi pelancongan terbaik di Lombok",
  },
  "/ulasan": {
    title: "Ulasan | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Baca ulasan daripada pengembara yang telah merasai perkhidmatan Sungkar Group.",
    image: HERO.heroLombok,
    imageAlt: "Ulasan positif daripada pelawat Sungkar Group",
  },
  "/panduan-wisata": {
    title: "Panduan Perjalanan | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Panduan lengkap untuk merancang perjalanan anda ke Lombok, dari cuaca hingga pengangkutan tempatan.",
    image: DESTINATIONS.rinjani,
    imageAlt: "Panduan perjalanan lengkap untuk Lombok",
  },
  "/kontak": {
    title: "Hubungi Kami | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Hubungi Sungkar Group melalui WhatsApp, e-mel, atau borang dalam talian untuk semak ketersediaan.",
    image: HERO.heroLombok,
    imageAlt: "Hubungi Sungkar Group untuk konsultasi percuma",
  },
  "/faq": {
    title: "Soalan Lazim | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Jawapan lengkap kepada soalan lazim tentang pakej pelancongan dan perkhidmatan Sungkar Group.",
    image: HERO.heroLombok,
    imageAlt: "Soalan lazim tentang pelancongan Lombok",
  },
  "/akomodasi": {
    title: "Penginapan | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Cadangan penginapan terbaik di Lombok dengan harga berpatutan dan kemudahan lengkap.",
    image: DESTINATIONS.lombok,
    imageAlt: "Cadangan penginapan di Lombok",
  },
  "/sewa-mobil": {
    title: "Sewa Kereta | Sungkar Group - Pelancongan & Pengembaraan",
    description:
      "Sewa kenderaan tempatan dengan pemandu berpengalaman untuk perjalanan yang selesa dan fleksibel.",
    image: HERO.heroLombok,
    imageAlt: "Perkhidmatan sewa kereta dengan pemandu profesional",
  },
};

export function getPageOGMetadata(pathname: string): OGMetadata {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  return pageOGMetadata[normalizedPath] || pageOGMetadata["/"];
}

export function getPackageOGMetadata(
  title: string,
  description: string,
  image: ImageSource,
  imageAlt: string,
): OGMetadata {
  return {
    title: `${title} | Sungkar Group - Pelancongan & Pengembaraan`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}

export function getDestinationOGMetadata(
  title: string,
  description: string,
  image: ImageSource,
  imageAlt: string,
): OGMetadata {
  return {
    title: `${title} | Sungkar Group - Pelancongan & Pengembaraan`,
    description,
    image,
    imageAlt,
    type: "article",
  };
}