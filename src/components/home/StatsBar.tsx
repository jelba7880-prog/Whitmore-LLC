import { STATS } from "@/lib/stats";

export default function StatsBar() {
  return (
    <section className="bg-navy-mid py-12">
      <div className="mx-auto grid max-w-content grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        {STATS.map((stat, index) => (
          <div key={stat.label} className="contents">
            <div className="px-8 text-center">
              <div className="font-display text-[58px] font-bold leading-none text-gold">
                {stat.value}
              </div>
              <div className="mt-2 font-ui text-[11px] uppercase tracking-[0.14em] text-cream/65">
                {stat.label}
              </div>
            </div>
            {index < STATS.length - 1 && (
              <div className="my-6 w-px self-stretch bg-navy-light" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
