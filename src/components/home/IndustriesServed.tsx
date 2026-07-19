import GoldRule from "@/components/ui/GoldRule";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { industries } from "@/lib/industries";

export default function IndustriesServed() {
  return (
    <section className="bg-navy-mid py-20">
      <div className="mx-auto max-w-content px-6">
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <GoldRule variant="short" />
            <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
              Industries We Serve
            </p>
            <h2 className="mt-3 font-display text-h2 font-bold tracking-[-0.02em] text-cream">
              Sector-Specific Experience Across Complex Disputes
            </h2>
          </div>

          <div className="mx-auto flex max-w-[1200px] flex-wrap items-stretch justify-center">
            {industries.map((industry, index) => (
              <div key={industry.label} className="contents">
                <div className="flex items-center gap-3 px-6 py-3">
                  {industry.icon}
                  <span className="font-ui text-[13px] uppercase tracking-[0.08em] text-cream">
                    {industry.label}
                  </span>
                </div>
                {index < industries.length - 1 && (
                  <div className="my-1 hidden w-px self-stretch bg-navy-light md:block" />
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
