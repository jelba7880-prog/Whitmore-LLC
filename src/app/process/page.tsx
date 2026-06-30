import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ProcessStep } from "@/types";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import GoldRule from "@/components/ui/GoldRule";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our approach to fraud recovery and commercial litigation — from initial evaluation through resolution.",
};

// Firm-wide process — intentionally defined inline rather than in lib, since this
// describes how the firm works on every matter, not per-practice-area steps.
const steps: ProcessStep[] = [
  {
    number: 1,
    eyebrow: "Step One",
    title: "Confidential Case Evaluation",
    body: "Every engagement begins with a no-obligation consultation. We listen to the facts, ask disciplined questions, and provide an honest assessment of the legal landscape — including the realistic range of outcomes and the litigation economics involved.",
  },
  {
    number: 2,
    eyebrow: "Step Two",
    title: "Investigation & Evidence Preservation",
    body: "Before filing, we conduct a thorough pre-litigation investigation. We work with forensic accountants and financial analysts to trace assets, authenticate documents, and identify all potentially liable parties. Early evidence preservation is often the difference between a recoverable and unrecoverable matter.",
  },
  {
    number: 3,
    eyebrow: "Step Three",
    title: "Strategy & Case Architecture",
    body: "We develop a comprehensive litigation strategy tailored to your matter — selecting the optimal forum, identifying the strongest legal theories, and anticipating the defenses most likely to be raised. We do not file and figure it out later.",
  },
  {
    number: 4,
    eyebrow: "Step Four",
    title: "Litigation or Arbitration",
    body: "Our attorneys are experienced in both federal and state court proceedings and major arbitral forums including AAA, FINRA, and ICC. We try cases. That credibility changes how opposing counsel approaches settlement.",
  },
  {
    number: 5,
    eyebrow: "Step Five",
    title: "Recovery & Enforcement",
    body: "A judgment or award is only as good as the effort put into collecting it. We pursue aggressive post-judgment enforcement — domesticating judgments across jurisdictions, locating concealed assets, and working through international recovery channels where necessary.",
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-cream">
      {/* Page hero — process intro */}
      <section className="relative overflow-hidden bg-navy py-20">
        <Image
          src="/images/process/glass-architecture.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">How We Work</span>
          </nav>
          <GoldRule className="mt-6" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Our Approach
          </p>
          <h1 className="mt-3 font-display text-[56px] font-bold tracking-[-0.02em] text-cream">
            How We Work
          </h1>
          <p className="mt-6 max-w-xl font-body text-[20px] text-[#9CAFC0]">
            From first call to final recovery — a disciplined process built for
            complex matters.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <GoldRule />
          <h2 className="mb-12 mt-4 font-display text-[40px] font-bold text-ink">
            Our Process
          </h2>
          <ProcessTimeline steps={steps} />
        </div>
      </section>
    </main>
  );
}
