import Link from "next/link";
import { ManifestTag } from "./ui/ManifestTag";
import { NewsletterForm } from "./NewsletterForm";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Farm Consultation", href: "/#services" },
      { label: "Planting Techniques", href: "/#services" },
      { label: "Seed Supply", href: "/#services" },
      { label: "Logistics Venture", href: "/logistics" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "What We're Up To", href: "/#activity" },
      { label: "Service Regions", href: "/consultation#map" },
      { label: "Book a Consultation", href: "/consultation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/consultation#faq" },
      { label: "Request Early Access", href: "/logistics#early-access" },
    ],
  },
];

const OFFICES = [
  { flag: "🇳🇬", place: "Abeokuta, Ogun State" },
  { flag: "🇳🇬", place: "Lagos" },
  { flag: "🇳🇬", place: "Ondo State" },
];

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-canopy text-parchment">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="font-display text-2xl font-semibold">Farmora</span>
            <p className="mt-3 max-w-xs text-sm text-parchment/60">
              Expert consultation, precision planting, premium seed, and
              full field management — from first seed to full harvest,
              anywhere in the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {OFFICES.map((o) => (
                <ManifestTag key={o.place} tone="neutral" className="!border-line-dark !text-parchment/60">
                  {o.flag} {o.place}
                </ManifestTag>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="manifest-tag text-parchment/45">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-parchment/75 transition-colors hover:text-wheat"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="manifest-tag text-parchment/45">Field Notes</h4>
            <p className="mt-4 text-sm text-parchment/75">
              Seasonal insights from our agronomists, in your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line-dark pt-8 text-xs text-parchment/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Farmora Agro Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-parchment/80">Privacy</Link>
            <Link href="#" className="hover:text-parchment/80">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
