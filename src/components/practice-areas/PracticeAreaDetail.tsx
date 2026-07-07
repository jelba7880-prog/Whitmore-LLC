import Image from "next/image";
import Link from "next/link";
import type { CaseResult, PracticeArea } from "@/types";
import GoldRule from "@/components/ui/GoldRule";
import SectionDivider from "@/components/ui/SectionDivider";
import FAQAccordion from "@/components/practice-areas/FAQAccordion";
import CaseResultCard from "@/components/results/CaseResultCard";
import ProcessTimeline from "@/components/process/ProcessTimeline";

interface PracticeAreaDetailProps {
  area: PracticeArea;
  relatedResults: CaseResult[];
}

// Full content layout for a single practice area page. Server component — no
// client state (the FAQ accordion is zero-JS via <details>/<summary>).
export default function PracticeAreaDetail({
  area,
  relatedResults,
}: PracticeAreaDetailProps) {
  return (
    <main>
      {/* SECTION A — Page Hero */}
      <section className="relative overflow-hidden bg-navy py-20">
        {area.imageUrl && (
          <>
            <Image
              src={area.imageUrl}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/65" aria-hidden="true" />
          </>
        )}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link
              href="/practice-areas"
              className="transition-colors hover:text-gold"
            >
              Practice Areas
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">{area.title}</span>
          </nav>
          <GoldRule className="mt-6" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Practice Area
          </p>
          <h1 className="mt-3 font-display text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-cream">
            {area.title}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            {area.shortDescription}
          </p>
        </div>
      </section>

      {/* SECTIONS B + C — Long description & Our Process (shared cream bg) */}
      <section className="bg-cream py-20">
        {/* B — Long description + sticky CTA card */}
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div
              className="pa-prose flex-1 font-body text-[18px] leading-[1.8] text-ink"
              dangerouslySetInnerHTML={{ __html: area.longDescription }}
            />

            <aside className="w-full flex-shrink-0 lg:sticky lg:top-24 lg:w-[300px]">
              <div className="border border-gold/20 bg-navy p-8">
                <p className="mb-4 font-ui text-[10px] uppercase tracking-[0.18em] text-gold">
                  Discuss Your Case
                </p>
                <h3 className="mb-3 font-display text-[24px] font-bold text-cream">
                  Is This Your Situation?
                </h3>
                <p className="mb-6 font-body text-[15px] leading-[1.7] text-cream/70">
                  Our attorneys offer a confidential consultation to evaluate
                  your matter and explain your options — with no obligation.
                </p>
                <Link
                  href="/free-consultation"
                  className="block w-full bg-gold px-8 py-4 text-center font-ui text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light"
                >
                  Request a Consultation
                </Link>
                <a
                  href="tel:+12125550100"
                  className="mt-3 block text-center font-ui text-[12px] uppercase tracking-widest text-cream/70 transition-colors hover:text-cream"
                >
                  (212) 555-0100
                </a>
                <p className="mt-4 text-center font-ui text-[10px] text-muted">
                  Past results do not guarantee future outcomes. Each case is
                  unique.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Divider between long description and process */}
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionDivider className="my-20" />
        </div>

        {/* C — Our Process */}
        <div className="mx-auto max-w-[1200px] px-6">
          <GoldRule />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            How We Approach {area.title}
          </p>
          <h2 className="mt-3 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
            Our Process
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[760px] px-6">
          <ProcessTimeline steps={area.process} />
        </div>
      </section>

      {/* SECTION D — FAQ accordion */}
      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <GoldRule />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Common Questions
          </p>
          <h2 className="mb-10 mt-3 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={area.faqs} />
        </div>
      </section>

      {/* SECTION E — Related Results (only when present) */}
      {relatedResults.length > 0 && (
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <SectionDivider className="mb-16" />
            <GoldRule />
            <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
              Representative Matters
            </p>
            <h2 className="mb-10 mt-3 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
              Case Results
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedResults.map((result) => (
                <CaseResultCard key={result.id} result={result} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION F — Inline CTA */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-[620px] px-6 text-center">
          <GoldRule variant="short" />
          <h2 className="mt-6 font-display text-[50px] font-bold leading-[1.1] tracking-[-0.02em] text-cream">
            Discuss Your {area.title} Matter
          </h2>
          <p className="mt-4 font-body text-[18px] leading-[1.7] text-muted">
            Contact our attorneys for a confidential evaluation of your case. No
            obligation. All inquiries protected by attorney-client privilege.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/free-consultation"
              className="bg-gold px-10 py-4 font-ui text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light"
            >
              Request a Free Consultation
            </Link>
            <a
              href="tel:+12125550100"
              className="border border-cream/30 px-10 py-4 font-ui text-[12px] uppercase tracking-widest text-cream transition-colors hover:border-cream/80"
            >
              (212) 555-0100
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
