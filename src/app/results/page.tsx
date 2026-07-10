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
  // Group results by practice area, dropping areas with no results.
  const grouped = practiceAreas
    .map((area) => ({
      area,
      results: caseResults.filter((r) => r.practiceArea === area.slug),
    }))
    .filter((group) => group.results.length > 0);

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

      {/* Results grid, grouped by practice area */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          {grouped.map(({ area, results }, index) => (
            <div key={area.slug}>
              <GoldRule />
              <h2 className="mb-8 mt-4 font-display text-[32px] font-bold tracking-[-0.01em] text-ink">
                {area.title}
              </h2>
              <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                {results.map((r) => (
                  <CaseResultCard result={r} key={r.id} />
                ))}
              </div>
              {index < grouped.length - 1 && (
                <SectionDivider className="mb-16" />
              )}
            </div>
          ))}

          {/* Bottom compliance block */}
          <div className="mt-8 border-t border-navy-light pt-8">
            <p className="mx-auto max-w-[760px] text-center font-ui text-[12px] text-muted">
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
