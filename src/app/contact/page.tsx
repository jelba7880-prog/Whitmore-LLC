import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Whitmore Harlow LLP. Phone, address, office hours, and secure inquiry form. All communications are confidential.",
};

// Shared gold section-label style for the firm info card (design-tokens.md § 12).
const INFO_LABEL =
  "mb-3 border-b border-navy-light pb-2 font-ui text-[10px] uppercase tracking-[0.18em] text-gold";

export default function ContactPage() {
  return (
    <main className="bg-cream">
      {/* Page hero */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">Contact</span>
          </nav>
          <GoldRule className="mt-6" />
          <h1 className="mt-3 font-display text-h1 font-bold tracking-[-0.02em] text-cream">
            Contact the Firm
          </h1>
          <p className="mt-4 max-w-xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            All inquiries are confidential and protected by attorney-client
            privilege.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col items-start gap-[80px] lg:flex-row">
            {/* Left — contact form */}
            <div className="flex-1">
              <ContactForm />
            </div>

            {/* Right — firm info card */}
            <aside className="w-full flex-shrink-0 lg:sticky lg:top-24 lg:w-[360px]">
              <div className="border border-navy-light bg-parchment p-8">
                <div className="mb-6">
                  <h2 className={INFO_LABEL}>Office</h2>
                  <p className="font-body text-[15px] leading-[1.8] text-ink">
                    One Liberty Plaza, Suite 4200
                    <br />
                    New York, NY 10006
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className={INFO_LABEL}>Telephone</h2>
                  <a
                    href="tel:+12125550100"
                    className="font-body text-[15px] text-ink transition-colors hover:text-gold"
                  >
                    (212) 555-0100
                  </a>
                </div>

                <div className="mb-6">
                  <h2 className={INFO_LABEL}>Email</h2>
                  <a
                    href="mailto:contact@whitmore-assoc.com"
                    className="font-body text-[15px] text-ink transition-colors hover:text-gold"
                  >
                    contact@whitmore-assoc.com
                  </a>
                </div>

                <div>
                  <h2 className={INFO_LABEL}>Office Hours</h2>
                  <p className="font-body text-[15px] leading-[1.8] text-ink">
                    Monday – Friday: 9:00 AM – 6:00 PM ET
                    <br />
                    Saturday – Sunday: Closed
                  </p>
                </div>

                {/* TODO: replace with Google Maps iframe when MAPS_EMBED_KEY is set */}
                <div className="mt-6 flex aspect-[4/3] w-full items-center justify-center bg-navy-light p-4 text-center font-ui text-[11px] text-muted">
                  Map embed — add MAPS_EMBED_KEY to .env.local
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
