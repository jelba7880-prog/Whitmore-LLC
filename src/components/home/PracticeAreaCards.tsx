import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import { practiceAreas } from "@/lib/practice-areas";

export default function PracticeAreaCards() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 text-center">
          <GoldRule variant="short" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Our Practice
          </p>
          <h2 className="mt-3 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
            What We Do
          </h2>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="border border-navy-light bg-parchment p-9 transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-[0_14px_40px_rgba(13,27,42,0.18)]"
            >
              {/* Icon placeholder — SVG icons come later */}
              <div className="mb-6 flex h-[30px] w-[30px] items-center justify-center border border-gold/60">
                <div className="h-3 w-3 bg-gold/70" />
              </div>
              <h3 className="mt-4 font-display text-[26px] font-bold tracking-[-0.01em] text-ink">
                {area.title}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.65] text-muted-on-light">
                {area.shortDescription}
              </p>
              <span className="mt-6 block font-ui text-[11px] uppercase tracking-[0.1em] text-gold">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
