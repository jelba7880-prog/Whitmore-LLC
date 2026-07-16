import { STATS } from "@/lib/stats";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function StatsBar() {
  return (
    <section className="bg-navy-mid py-12">
      {/* One-time entrance reveal only — the stat VALUES render at final value
          immediately (no counter/roll-up), per Hard Rule #6. RevealOnScroll is
          the sole client boundary; StatsBar stays a server component. */}
      <RevealOnScroll>
        {/* 2×2 grid on mobile → 4-across from md up. Dividers are cell borders
            (not separate grid tracks) so they render correctly in both layouts:
            mobile shows a cross between the four cells; md shows three vertical
            rules between the row of four. */}
        <div className="mx-auto grid max-w-content grid-cols-2 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-navy-light px-4 py-4 text-center md:px-8 md:py-2 [&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t md:[&:nth-child(3)]:border-l md:[&:nth-child(n+3)]:border-t-0"
            >
              <div className="font-display text-[42px] font-bold leading-none text-gold md:text-[58px]">
                {stat.value}
              </div>
              <div className="mt-2 font-ui text-[11px] uppercase tracking-[0.14em] text-cream/65">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
