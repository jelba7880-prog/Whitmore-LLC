import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import { industries } from "@/lib/industries";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Whitmore Harlow LLP brings sector-specific experience to complex disputes across financial services, private equity, real estate, healthcare, technology, energy, manufacturing, insurance, retail, and family offices.",
};

const practiceAreaTitles = new Map(
  practiceAreas.map((area) => [area.slug, area.title])
);

export default function IndustriesPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-navy py-20">
        <Image
          src="/images/industries/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Navy scrim so the gold/cream hero content stays legible over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(13,27,42,0.94) 0%, rgba(13,27,42,0.86) 45%, rgba(13,27,42,0.7) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">Industries</span>
          </nav>
          <GoldRule className="mt-6" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Industries We Serve
          </p>
          <h1 className="mt-3 font-display text-h1 font-bold tracking-[-0.02em] text-cream">
            Sector-Specific Experience Across Complex Disputes
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            Complex disputes rarely occur in a vacuum. We bring an understanding
            of how each sector operates — its contracts, its regulators, and its
            risks — to the litigation, arbitration, and recovery work we handle
            for clients across these industries.
          </p>
        </div>
      </section>

      {/* Industry listing */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          {industries.map((industry, index) => (
            <div key={industry.slug}>
              <article className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
                <div>
                  <div className="flex items-center gap-3">
                    {industry.icon}
                    <h2 className="font-display text-[28px] font-bold tracking-[-0.01em] text-ink">
                      {industry.label}
                    </h2>
                  </div>
                  <p className="mt-4 font-body text-[16px] leading-[1.7] text-muted-on-light">
                    {industry.definition}
                  </p>
                </div>

                <div>
                  <p className="font-body text-[17px] leading-[1.75] text-ink">
                    {industry.involvement}
                  </p>

                  <div className="mt-6">
                    <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-gold">
                      Related Practice Areas
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.relatedPracticeAreas.map((slug) => (
                        <Link
                          key={slug}
                          href={`/practice-areas/${slug}`}
                          className="border border-navy-light px-4 py-2 font-ui text-[11px] uppercase tracking-[0.08em] text-ink transition-colors hover:border-gold hover:text-navy-light"
                        >
                          {practiceAreaTitles.get(slug) ?? slug}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {index < industries.length - 1 && (
                <GoldRule className="my-12 opacity-40" />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
