import Link from "next/link";
import type { CaseResult } from "@/types";
import { practiceAreas } from "@/lib/practice-areas";
import { attorneys } from "@/lib/attorneys";

interface CaseResultCardProps {
  result: CaseResult;
  // Suppress the "Handled by" credit line when the card is already rendered
  // in the context of that attorney's own profile page (redundant there).
  hideAttorneyCredit?: boolean;
}

// Case result card (design-tokens.md § 08). Gold on the amount figure is an
// explicit, sanctioned use in the design system. Compliance line is mandatory
// on every card.
export default function CaseResultCard({
  result,
  hideAttorneyCredit = false,
}: CaseResultCardProps) {
  const area = practiceAreas.find((a) => a.slug === result.practiceArea);
  const credited = attorneys.filter((a) =>
    result.attorneySlugs.includes(a.slug)
  );

  return (
    <div className="flex h-full flex-col border border-navy-light bg-parchment p-8">
      <div className="mb-2 flex items-start justify-between gap-3">
        <p className="font-ui text-[10px] uppercase tracking-[0.14em] text-muted">
          Result
        </p>
        {area && (
          <Link
            href={`/practice-areas/${area.slug}`}
            className="font-ui text-[10px] uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-light"
          >
            {area.title}
          </Link>
        )}
      </div>
      <p className="font-display text-[44px] font-bold leading-none text-gold">
        {result.amount}
      </p>
      <p className="mt-2 font-display text-[20px] font-bold text-ink">
        {result.description}
      </p>
      <p className="mt-3 font-ui text-[12px] text-muted">
        {result.matterType} &middot; {result.court} &middot; {result.year}
      </p>
      <p className="mt-4 font-body text-[14px] leading-[1.6] text-muted">
        {result.challenge}
      </p>
      <p className="mt-2 font-body text-[14px] leading-[1.6] text-muted">
        {result.resolution}
      </p>
      {!hideAttorneyCredit && credited.length > 0 && (
        <p className="mt-4 font-ui text-[11px] text-ink">
          Handled by{" "}
          {credited.map((a, i) => (
            <span key={a.slug}>
              <Link
                href={`/attorneys/${a.slug}`}
                className="transition-colors hover:text-gold"
              >
                {a.name}
              </Link>
              {i < credited.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      )}
      <p className="mt-auto pt-4 font-ui text-[10px] text-muted/60">
        Past results do not guarantee future outcomes.
      </p>
    </div>
  );
}
