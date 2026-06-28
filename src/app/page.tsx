export default function Home() {
  return (
    <main>
      {/* Section order is strict (CLAUDE.md): Hero → StatsBar → PracticeAreaCards
          → AttorneyTeaser → TestimonialBlock. CTASection + Footer come from layout. */}
      <section className="bg-navy px-6 py-32">
        <div className="mx-auto max-w-content">
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-gold">
            Whitmore &amp; Associates LLP
          </p>
          <h1 className="mt-4 max-w-[660px] font-display text-5xl font-bold leading-[1.05] text-cream md:text-6xl">
            Fraud Recovery &amp; Commercial Litigation Counsel
          </h1>
          {/* TODO: Hero subhead + primary/secondary CTAs + architectural photo */}
        </div>
      </section>
      {/* TODO: StatsBar (canonical STATS) */}
      {/* TODO: PracticeAreaCards (3×2 grid, all 6 areas) */}
      {/* TODO: AttorneyTeaser (2–3 cards → /attorneys) */}
      {/* TODO: TestimonialBlock (single featured testimonial) */}
    </main>
  );
}
