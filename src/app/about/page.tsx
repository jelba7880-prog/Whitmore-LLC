import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Whitmore Harlow LLP is a fraud recovery and commercial litigation practice founded on the principle that complex financial harm demands sophisticated legal response.",
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
          <h1 className="mt-3 font-display text-h1 font-bold leading-[1.1] tracking-[-0.02em] text-cream">
            About Whitmore Harlow
          </h1>
        </div>
      </section>

      {/* Founding & Mission */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <GoldRule />
          <h2 className="mb-8 mt-4 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
            Our Foundation
          </h2>
          <div className="space-y-6 font-body text-[18px] leading-[1.8] text-ink">
            <p>
              Whitmore Harlow LLP was founded on a straightforward
              premise: victims of financial fraud and commercial misconduct
              deserve the same caliber of representation that sophisticated
              institutions retain. Since our founding, we have built a practice
              defined by technical depth, disciplined strategy, and an
              unflinching commitment to recovering what our clients have lost.
            </p>
            <p>
              The firm is led by founding partner Richard A. Whitmore and
              partner Catherine M. Harlow, whose combined practice spans fraud
              and asset recovery, commercial litigation, and international
              arbitration. That range reflects a deliberate choice: financial
              misconduct rarely respects a single area of law, and clients are
              better served by a firm built to litigate a matter wherever it
              actually needs to go, rather than referring pieces of it out.
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

          {/* Firm story image — bordered figure, fixed dimensions, no overlay */}
          <figure className="mt-12">
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-navy-light bg-navy-mid">
              <Image
                src="/images/about/law-library.jpg"
                alt="An attorney reviewing case documents in the firm's research library"
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-ui text-[11px] uppercase tracking-[0.1em] text-muted-on-light">
              Our research library — the foundation of disciplined case work.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Our Approach */}
      <SectionDivider />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <GoldRule />
          <h2 className="mb-8 mt-4 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
            Our Approach
          </h2>
          <div className="space-y-6 font-body text-[18px] leading-[1.8] text-ink">
            <p>
              Financial fraud and commercial misconduct cases are rarely won
              on legal theory alone. Understanding what actually happened, how
              funds moved, how a transaction was structured, or where a
              contractual relationship broke down, requires the same rigor as
              the litigation itself. Our attorneys work directly with forensic
              accountants, financial investigators, and former regulators to
              build a factual record that holds up under scrutiny, not just a
              legal argument that sounds persuasive in isolation.
            </p>
            <p>
              Complex disputes frequently cross state and national borders,
              and we structure our practice around that reality. We
              coordinate with local counsel where a matter requires it, pursue
              enforcement across jurisdictions, and represent clients before
              arbitral tribunals as readily as we appear in state and federal
              court.
            </p>
            <p>
              No two matters are alike, and we don&apos;t apply a single
              approach to every case. Some clients need an aggressive posture
              from day one; others are better served by a measured, negotiated
              strategy that preserves an ongoing business relationship. We
              build a strategy around what a client is actually trying to
              accomplish, and we say so plainly when a matter doesn&apos;t
              warrant the cost or risk of full litigation.
            </p>
          </div>
        </div>
      </section>

      {/* Discretion and Confidentiality */}
      <SectionDivider />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <GoldRule />
          <h2 className="mb-8 mt-4 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
            Discretion and Confidentiality
          </h2>
          <div className="space-y-6 font-body text-[18px] leading-[1.8] text-ink">
            <p>
              Financial fraud and commercial disputes are rarely comfortable
              to discuss publicly. A client who has been defrauded, or who is
              embroiled in a partnership or shareholder dispute, often has as
              much interest in managing how a matter becomes known as in
              resolving it favorably. We take that seriously.
            </p>
            <p>
              We handle client communications, case strategy, and, where
              appropriate, settlement discussions with an emphasis on privacy.
              Where litigation is the right path, we pursue it deliberately;
              where a matter can be resolved through negotiation or
              confidential arbitration without full public litigation, we
              discuss that option candidly as part of an overall strategy, not
              as an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <SectionDivider />
      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <GoldRule />
          <h2 className="mb-12 mt-4 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border-t-2 border-gold pt-6">
              <h3 className="mb-3 font-display text-[24px] font-bold text-ink">
                Focused Practice
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-muted-on-light">
                We handle only fraud recovery and complex commercial
                litigation. We do not take on divorces, real estate closings,
                personal injury matters, or general corporate work. That focus
                means every attorney at the firm spends their time exclusively
                on the kinds of disputes this page describes, rather than
                dividing attention across unrelated practice areas. Clients
                benefit from that concentration in ways that are easy to
                notice in practice: faster case assessment, fewer procedural
                surprises, and a team that has likely encountered a version of
                their situation before.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="mb-3 font-display text-[24px] font-bold text-ink">
                Technical Depth
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-muted-on-light">
                Financial fraud and complex commercial matters require
                understanding the mechanics of what actually went wrong, not
                just the legal theory built on top of it. Our attorneys work
                regularly with forensic accountants, financial experts, and
                former regulators, and that collaboration shapes case strategy
                from the outset rather than being brought in only once
                litigation is already underway. Where a matter turns on a
                disputed valuation, a reconstructed transaction history, or a
                technical securities question, that depth is often what
                separates a claim that holds up from one that doesn&apos;t.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="mb-3 font-display text-[24px] font-bold text-ink">
                Institutional Relationships
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-muted-on-light">
                Eighteen years of practice in the same courts and before the
                same arbitral institutions has given our attorneys a
                practical, on-the-ground familiarity that&apos;s difficult to
                build quickly: what a given court&apos;s procedures actually
                look like in practice, how a particular arbitral panel tends
                to manage complex disputes, and what opposing counsel in this
                space are likely to do next. That familiarity doesn&apos;t
                change the merits of a case, but it does mean fewer surprises
                and a more efficient path through unfamiliar procedural
                terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Offices */}
      <SectionDivider />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Office interior — bordered figure, fixed dimensions, no overlay */}
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-navy-light bg-navy-mid">
              <Image
                src="/images/about/office-interior.jpg"
                alt="A conference room at Whitmore Harlow LLP"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <GoldRule />
              <h2 className="mb-6 mt-4 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
                Visit Our Offices
              </h2>
              <p className="mb-6 font-body text-[18px] leading-[1.8] text-ink">
                We meet with clients by appointment. For office locations,
                hours, and directions — including a map — please see our contact
                page.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold px-8 py-4 font-ui text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light"
              >
                Contact &amp; Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance statement */}
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <p className="font-ui text-[12px] leading-[1.8] text-cream/50">
            Whitmore Harlow LLP is licensed to practice law in New York
            and California. For matters in other jurisdictions, we associate with
            qualified local counsel. Attorney Advertising. Prior results do not
            guarantee similar outcomes.
          </p>
        </div>
      </section>
    </main>
  );
}
