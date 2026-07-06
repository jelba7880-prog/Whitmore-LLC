import Link from "next/link";
import { practiceAreas } from "@/lib/practice-areas";

const firmLinks = [
  { label: "About", href: "/about" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Results", href: "/results" },
  { label: "Process", href: "/process" },
];

const contactLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Free Consultation", href: "/free-consultation" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Accessibility", href: "/accessibility" },
];

const columnHeaderClasses =
  "font-ui text-[10px] uppercase tracking-[0.18em] text-gold pb-3 border-b border-navy-light mb-4";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold pt-16 pb-8 px-6">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="font-display text-xl text-cream">
              Whitmore <span className="text-gold">&</span> Associates LLP
            </div>
            <p className="font-body text-sm text-cream/60 mt-2 max-w-[260px]">
              Fraud recovery and commercial litigation counsel.
            </p>
            <div className="font-body text-sm text-cream/60 mt-6 leading-relaxed">
              <p>One Liberty Plaza, Suite 4200</p>
              <p>New York, NY 10006</p>
            </div>
            <a
              href="mailto:contact@whitmore-assoc.com"
              className="block font-body text-sm text-gold-light mt-4"
            >
              contact@whitmore-assoc.com
            </a>
          </div>

          {/* Column 2 — Practice Areas */}
          <div>
            <div className={columnHeaderClasses}>Practice Areas</div>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="font-ui text-[13px] text-cream/60 hover:text-gold-light hover:opacity-100 transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Firm */}
          <div>
            <div className={columnHeaderClasses}>Firm</div>
            <ul className="space-y-3">
              {firmLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-[13px] text-cream/60 hover:text-gold-light hover:opacity-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <div className={columnHeaderClasses}>Contact</div>
            <ul className="space-y-3 mb-5">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-[13px] text-cream/60 hover:text-gold-light hover:opacity-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="font-body text-sm text-cream/65 space-y-1">
              <p>
                <a
                  href="tel:+12125550100"
                  className="hover:text-gold-light transition-colors"
                >
                  (212) 555-0100
                </a>
              </p>
              <p>Mon–Fri, 9:00 AM – 6:00 PM ET</p>
            </div>
          </div>
        </div>

        {/* Compliance bar */}
        <div className="border-t border-navy-light mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-ui text-[11px] font-light text-muted">
            Attorney Advertising. Results may vary. Past results do not
            guarantee future outcomes. Whitmore &amp; Associates LLP.
          </p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-ui text-[11px] text-muted hover:text-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="font-ui text-[11px] text-muted mt-4">
          © {new Date().getFullYear()} Whitmore & Associates LLP. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
