import GoldRule from "@/components/ui/GoldRule";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Differentiator {
  title: string;
  body: string;
}

const differentiators: Differentiator[] = [
  {
    title: "Strategic Thinking",
    body: "We build every engagement around the client's actual objective — recovery, resolution, or leverage — not just the next procedural step. Strategy is set before the first filing, not improvised after it.",
  },
  {
    title: "Partner-Level Attention",
    body: "Partners remain engaged in the matters they take on, from strategy sessions to key filings, rather than delegating away once an engagement is signed.",
  },
  {
    title: "Business-Minded Advice",
    body: "We advise clients as businesspeople first, weighing legal remedies against commercial reality — cost, time, and what a resolution is actually worth.",
  },
  {
    title: "Cross-Border Perspective",
    body: "Fraud and asset recovery rarely stay within one jurisdiction. Our approach accounts for cross-border enforcement and asset tracing from the outset, not as an afterthought.",
  },
  {
    title: "Efficient Resolution",
    body: "We pursue the shortest credible path to resolution — litigation when it's the right tool, negotiated outcomes when they serve the client better.",
  },
  {
    title: "Clear Communication",
    body: "We keep clients informed in plain language at each stage of a matter, including realistic expectations about cost, timeline, and likely outcomes.",
  },
];

const rows = [
  [differentiators[0], differentiators[1]],
  [differentiators[2], differentiators[3]],
  [differentiators[4], differentiators[5]],
];

export default function WhyWhitmore() {
  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-content px-6">
        {/* One-time entrance reveal (opacity/transform only) — no numbers here to
            count or roll up. Matches IndustriesServed's RevealOnScroll treatment. */}
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <GoldRule variant="short" />
            <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
              Why Whitmore Harlow
            </p>
            <h2 className="mt-3 font-display text-h2 font-bold tracking-[-0.02em] text-ink">
              How We Approach Every Matter
            </h2>
          </div>

          <div className="mx-auto max-w-[1000px]">
            {rows.map((row, index) => (
              <div key={row[0].title}>
                {index > 0 && <GoldRule className="my-10" />}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-16">
                  {row.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-display text-h3 font-bold tracking-[-0.01em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-body text-[17px] leading-[1.75] text-muted">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
