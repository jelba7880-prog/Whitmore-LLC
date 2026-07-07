import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import PracticeAreaCard from "@/components/practice-areas/PracticeAreaCard";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Whitmore & Associates LLP handles fraud recovery, commercial litigation, securities fraud, economic disputes, contract disputes, and international arbitration.",
};

export default function PracticeAreasPage() {
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
            <span className="text-cream/70">Practice Areas</span>
          </nav>
          <GoldRule className="mt-6" />
          <h1 className="mt-4 font-display text-h1 font-bold tracking-[-0.02em] text-cream">
            Practice Areas
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            We handle the full spectrum of complex commercial disputes and fraud
            matters, from domestic litigation to international arbitration.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
