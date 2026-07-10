import Link from "next/link";
import Button from "@/components/ui/Button";
import { practiceAreas } from "@/lib/practice-areas";

const practiceAreaLinks = [
  ...practiceAreas.map((area) => ({
    label: area.title,
    href: `/practice-areas/${area.slug}`,
  })),
  { label: "Case Results", href: "/results" },
  { label: "How We Work", href: "/process" },
];

const industries = [
  "Financial Services & Banking",
  "Private Equity & Hedge Funds",
  "Real Estate & Construction",
  "Healthcare & Life Sciences",
  "Technology & Software",
  "Energy & Natural Resources",
  "Manufacturing & Industrials",
  "Insurance",
  "Retail & Consumer Goods",
  "Family Offices & High-Net-Worth Individuals",
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
          {/* Column 1 — Firm */}
          <div>
            <div className="font-display text-xl text-cream">
              Whitmore Harlow{" "}
              <span className="font-ui text-xs uppercase tracking-widest text-gold">
                LLP
              </span>
            </div>
            <p className="font-body text-sm text-cream/60 mt-4 leading-relaxed max-w-[320px]">
              Whitmore Harlow LLP is a commercial litigation and
              fraud recovery practice representing businesses, investors, and
              individuals in complex disputes across state, federal, and
              international forums.
            </p>
            <Button
              variant="ghost"
              href="/free-consultation"
              className="mt-6 inline-block"
            >
              Discuss Your Matter
            </Button>
          </div>

          {/* Column 2 — Practice Areas */}
          <div>
            <div className={columnHeaderClasses}>Practice Areas</div>
            <ul className="space-y-3">
              {practiceAreaLinks.map((link) => (
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

          {/* Column 3 — Industries We Serve */}
          <div>
            <div className={columnHeaderClasses}>Industries We Serve</div>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="font-ui text-[13px] text-cream/60"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <div className={columnHeaderClasses}>Contact</div>
            <div className="font-body text-sm text-cream/60 space-y-4">
              <p className="leading-relaxed">
                One Liberty Plaza, Suite 4200
                <br />
                New York, NY 10006
              </p>
              <a
                href="tel:+12125550100"
                className="block hover:text-gold-light transition-colors"
              >
                (212) 555-0100
              </a>
              <a
                href="mailto:contact@whitmore-assoc.com"
                className="block text-gold-light"
              >
                contact@whitmore-assoc.com
              </a>
              <p className="leading-relaxed">
                Monday – Friday: 9:00 AM – 6:00 PM ET
                <br />
                Saturday – Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Legal row */}
        <div className="border-t border-navy-light mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-ui text-[11px] font-light text-muted max-w-2xl">
            Attorney Advertising. Results may vary. Past results do not
            guarantee future outcomes.
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
          © {new Date().getFullYear()} Whitmore Harlow LLP. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
