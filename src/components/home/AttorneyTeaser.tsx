import Link from "next/link";
import AttorneyCard from "@/components/attorneys/AttorneyCard";
import GoldRule from "@/components/ui/GoldRule";
import { attorneys } from "@/lib/attorneys";

// Homepage roster is fixed to the two founding partners, regardless of how
// many attorneys exist in lib/attorneys.ts or what order they're listed in.
const FEATURED_SLUGS = ["richard-whitmore", "catherine-harlow"];
const featuredAttorneys = FEATURED_SLUGS.map((slug) =>
  attorneys.find((attorney) => attorney.slug === slug),
).filter((attorney): attorney is (typeof attorneys)[number] => Boolean(attorney));

export default function AttorneyTeaser() {
  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 text-center">
          <GoldRule variant="short" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            The Firm
          </p>
          <h2 className="mt-3 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
            Our Attorneys
          </h2>
        </div>

        <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
          {featuredAttorneys.map((attorney) => (
            <AttorneyCard key={attorney.slug} attorney={attorney} />
          ))}
        </div>

        <div className="mx-auto max-w-[1200px] text-right">
          <Link
            href="/attorneys"
            className="mt-8 inline-block font-ui text-[13px] uppercase tracking-widest text-gold hover:text-gold-light"
          >
            View All Attorneys &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
