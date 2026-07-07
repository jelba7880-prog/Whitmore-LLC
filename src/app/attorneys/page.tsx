import type { Metadata } from "next";
import Link from "next/link";
import AttorneyCard from "@/components/attorneys/AttorneyCard";
import GoldRule from "@/components/ui/GoldRule";
import { attorneys } from "@/lib/attorneys";

export const metadata: Metadata = {
  title: "Our Attorneys",
  description:
    "Meet the attorneys at Whitmore & Associates LLP — experienced fraud recovery and commercial litigation counsel.",
};

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
          <h1 className="mt-4 font-display text-h1 font-bold tracking-[-0.02em] text-cream">
            Our Attorneys
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            Our attorneys bring decades of experience in complex commercial
            litigation and fraud recovery to every engagement.
          </p>
        </div>
      </section>

      {/* Roster */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-6">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.slug} attorney={attorney} />
            ))}
          </div>

          <div className="mt-12 border-t border-navy-light pt-8">
            <p className="text-center font-ui text-[12px] text-muted">
              Bar admission and verification information is current as of the
              date of this publication. Verify current status directly with the
              relevant state bar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
