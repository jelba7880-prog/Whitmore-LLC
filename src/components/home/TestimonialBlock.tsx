export default function TestimonialBlock() {
  return (
    <section className="bg-navy-mid py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="select-none font-display text-[140px] font-bold leading-none text-gold/30">
          {"“"}
        </div>

        <blockquote className="mx-auto mt-[-40px] max-w-[800px] font-body text-[22px] italic leading-[1.7] text-cream">
          After years of failed attempts with other firms, Whitmore &amp;
          Associates recovered the full principal and interest within fourteen
          months. Their command of complex financial fraud litigation is
          unmatched.
        </blockquote>

        <p className="mt-8 font-ui text-[12px] uppercase tracking-[0.1em] text-cream/80">
          Institutional Client &middot; Securities Fraud Matter
        </p>
        <p className="mt-1 font-ui text-[12px] text-muted">
          Southern District of New York &middot; 2024
        </p>

        <p className="mt-6 font-ui text-[11px] text-muted/70">
          Past results do not guarantee future outcomes. Each case is unique.
        </p>
      </div>
    </section>
  );
}
