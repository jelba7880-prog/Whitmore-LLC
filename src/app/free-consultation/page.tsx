import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import IntakeForm from "@/components/contact/IntakeForm";

export const metadata: Metadata = {
  title: "Free Consultation",
  description:
    "Request a free, confidential case evaluation from Whitmore & Associates LLP. No obligation.",
};

export default function FreeConsultationPage() {
  return (
    <main className="bg-cream">
      {/* Page hero */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">Free Consultation</span>
          </nav>
          <GoldRule className="mt-6" />
          <h1 className="mt-3 font-display text-h1 font-bold tracking-[-0.02em] text-cream">
            Request a Free Consultation
          </h1>
          <p className="mt-4 max-w-xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            Tell us about your situation. Our attorneys will evaluate your matter
            and respond within one business day — at no charge and no obligation.
          </p>
        </div>
      </section>

      {/* Intake form */}
      <section className="py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <IntakeForm />
        </div>
      </section>
    </main>
  );
}
