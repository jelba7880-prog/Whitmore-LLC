import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Whitmore & Associates LLP is a fraud recovery and commercial litigation practice founded on the principle that complex financial harm demands sophisticated legal response.",
};

export default function AboutPage() {
  return (
    <main className="bg-cream">
      {/* Page hero */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">About</span>
          </nav>
          <GoldRule className="mt-6" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            The Firm
          </p>
          <h1 className="mt-3 font-display text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-cream">
            About Whitmore &amp; Associates
          </h1>
        </div>
      </section>

      {/* Founding & Mission */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <GoldRule />
          <h2 className="mb-8 mt-4 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
            Our Foundation
          </h2>
          <div className="space-y-6 font-body text-[18px] leading-[1.8] text-ink">
            <p>
              Whitmore &amp; Associates LLP was founded on a straightforward
              premise: victims of financial fraud and commercial misconduct
              deserve the same caliber of representation that sophisticated
              institutions retain. Since our founding, we have built a practice
              defined by technical depth, disciplined strategy, and an
              unflinching commitment to recovering what our clients have lost.
            </p>
            <p>
              Our practice is deliberately focused. We do not offer general
              legal services. Every attorney at the firm works exclusively in
              fraud recovery, commercial litigation, and related financial
              disputes. That concentration allows us to develop insight and
              relationships that generalist practices cannot replicate — in
              courtrooms, arbitral tribunals, and regulatory proceedings across
              the country.
            </p>
            <p>
              We represent individuals, family offices, closely held businesses,
              and institutional investors. Our matters range from
              single-plaintiff fraud recoveries to multi-party commercial
              disputes involving hundreds of millions of dollars. What they
              share is complexity — and our commitment to resolving them.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <SectionDivider />
      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <GoldRule />
          <h2 className="mb-12 mt-4 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border-t-2 border-gold pt-6">
              <h3 className="mb-3 font-display text-[24px] font-bold text-ink">
                Focused Practice
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-muted">
                We handle only fraud recovery and complex commercial litigation.
                No divorces, no real estate closings, no personal injury. That
                focus makes us materially better at what we do.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="mb-3 font-display text-[24px] font-bold text-ink">
                Technical Depth
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-muted">
                Financial fraud cases require understanding the mechanics of
                what went wrong — not just the legal theory. Our attorneys work
                fluently with forensic accountants, financial experts, and
                former regulators.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="mb-3 font-display text-[24px] font-bold text-ink">
                Institutional Relationships
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-muted">
                Eighteen years of practice in the same courts and arbitral
                tribunals has produced working relationships with opposing
                counsel, judges, and arbitrators that serve our clients&apos;
                interests at every turn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance statement */}
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <p className="font-ui text-[12px] leading-[1.8] text-cream/50">
            Whitmore &amp; Associates LLP is licensed to practice law in New York
            and California. For matters in other jurisdictions, we associate with
            qualified local counsel. Attorney Advertising. Prior results do not
            guarantee similar outcomes.
          </p>
        </div>
      </section>
    </main>
  );
}
