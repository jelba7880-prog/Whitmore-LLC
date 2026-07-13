import type { Metadata } from "next";
import Link from "next/link";
import AttorneyCard from "@/components/attorneys/AttorneyCard";
import GoldRule from "@/components/ui/GoldRule";
import { attorneys, isPartner } from "@/lib/attorneys";

export const metadata: Metadata = {
  title: "Our Attorneys",
  description:
    "Meet the attorneys at Whitmore Harlow LLP — experienced fraud recovery and commercial litigation counsel.",
};

const orderedAttorneys = [
  ...attorneys.filter(isPartner),
  ...attorneys.filter((attorney) => !isPartner(attorney)),
];

export default function AttorneysPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">Attorneys</span>
          </nav>
          <GoldRule className="mt-6" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            The Firm
          </p>
          <h1 className="mt-3 font-display text-h1 font-bold leading-[1.1] tracking-[-0.02em] text-cream">
            Attorneys
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            Whitmore Harlow&apos;s attorneys work across fraud and asset
            recovery, commercial litigation, securities and investment fraud,
            economic disputes, contract and partnership disputes, and
            international arbitration. Matters are led by our named partners
            and staffed according to the specific demands of each case — from
            asset tracing to cross-border arbitration.
          </p>
        </div>
      </section>

      {/* Roster */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-6">
            {orderedAttorneys.map((attorney) => (
              <AttorneyCard key={attorney.slug} attorney={attorney} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
