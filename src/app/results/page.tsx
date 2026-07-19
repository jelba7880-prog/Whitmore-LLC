import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseResults } from "@/lib/results";
import { practiceAreas } from "@/lib/practice-areas";
import CaseResultCard from "@/components/results/CaseResultCard";
import GoldRule from "@/components/ui/GoldRule";
import SectionDivider from "@/components/ui/SectionDivider";
import ParallaxImage from "@/components/ui/ParallaxImage";

export const metadata: Metadata = {
  title: "Case Results",
  description:
    "Representative case results for Whitmore Harlow LLP. Past results do not guarantee future outcomes.",
};

export default function ResultsPage() {
  // Sorted newest-first. Rendered as a single unified grid rather than
  // grouped per practice area — with one result per area today, per-area
  // grouping produced lone cards stranded in otherwise-empty rows.
  const results = [...caseResults].sort((a, b) => b.year - a.year);

  return (
    <main className="bg-cream">
      {/* Page hero */}
      <section className="relative overflow-hidden bg-navy py-20">
        <ParallaxImage>
          <Image
            src="/images/results/city-skyline.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">Results</span>
          </nav>
          <GoldRule className="mt-6" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Representative Matters
          </p>
          <h1 className="mt-3 font-display text-h1 font-bold tracking-[-0.02em] text-cream">
            Case Results
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            A selection of representative matters handled by our attorneys.
            Client names and identifying details are omitted to protect
            confidentiality.
          </p>
          <p className="mt-6 font-ui text-[12px] text-cream/50">
            Past results do not guarantee future outcomes. Each case is unique.
          </p>
        </div>
      </section>

      {/* Results grid — unified across all practice areas */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <GoldRule />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-ink">
            Selected Outcomes
          </p>
          <h2 className="mb-10 mt-3 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
            Representative Case Results
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((r) => (
              <CaseResultCard result={r} key={r.id} />
            ))}
          </div>

          <SectionDivider className="mt-16" />

          {/* Explore by practice area — cross-links, replaces the old per-area headers */}
          <div className="mt-16">
            <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-ink">
              Explore by Practice Area
            </p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {practiceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="font-ui text-[13px] uppercase tracking-wide text-ink transition-colors hover:text-navy-light"
                >
                  {area.title} &rarr;
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom compliance block */}
          <div className="mt-16 border-t border-navy-light pt-8">
            <p className="mx-auto max-w-[760px] text-center font-ui text-[12px] text-muted-on-light">
              The case results described above are intended to illustrate the
              types of matters handled by Whitmore Harlow LLP. Results
              depend upon a variety of factors unique to each matter and do not
              guarantee or predict a similar result in any future case. Attorney
              Advertising.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
