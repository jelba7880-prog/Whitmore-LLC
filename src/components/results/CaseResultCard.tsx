import type { CaseResult } from "@/types";

interface CaseResultCardProps {
  result: CaseResult;
}

// Case result card (design-tokens.md § 08). Gold on the amount figure is an
// explicit, sanctioned use in the design system. Compliance line is mandatory
// on every card.
export default function CaseResultCard({ result }: CaseResultCardProps) {
  return (
    <div className="border border-navy-light bg-parchment p-8">
      <p className="mb-2 font-ui text-[10px] uppercase tracking-[0.14em] text-muted">
        Result
      </p>
      <p className="font-display text-[44px] font-bold leading-none text-gold">
        {result.amount}
      </p>
      <p className="mt-2 font-display text-[20px] font-bold text-ink">
        {result.description}
      </p>
      <p className="mt-3 font-ui text-[12px] text-muted">
        {result.matterType} &middot; {result.court} &middot; {result.year}
      </p>
      <p className="mt-4 font-ui text-[10px] text-muted/60">
        Past results do not guarantee future outcomes.
      </p>
    </div>
  );
}
