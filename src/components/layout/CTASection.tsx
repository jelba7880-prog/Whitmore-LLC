import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-navy w-full py-24">
      <div className="max-w-[620px] mx-auto text-center px-6">
        <div className="w-10 h-px bg-gold mx-auto mb-8" />
        <h2 className="font-display text-5xl font-bold tracking-tight text-cream leading-tight">
          Ready to Recover What&apos;s Yours?
        </h2>
        <p className="font-body text-lg text-muted leading-relaxed mt-6">
          Our team has recovered over $2.1B for clients across complex fraud
          and commercial disputes. Your consultation is free and confidential.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link
            href="/free-consultation"
            className="bg-gold text-navy font-ui text-xs font-semibold uppercase tracking-widest px-10 py-4 hover:bg-gold-light transition-colors"
          >
            Free Consultation
          </Link>
          <a
            href="tel:+12125550100"
            className="text-cream border border-cream/30 font-ui text-xs font-semibold uppercase tracking-widest px-10 py-4 hover:border-cream transition-colors"
          >
            (212) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
