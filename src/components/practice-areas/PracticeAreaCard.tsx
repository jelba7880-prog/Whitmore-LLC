import Link from "next/link";
import type { PracticeArea } from "@/types";

interface PracticeAreaCardProps {
  area: PracticeArea;
}

// Card used on the Practice Areas index and in related-area contexts.
// Sharp corners (no border-radius); gold reserved for the icon stroke and label.
export default function PracticeAreaCard({ area }: PracticeAreaCardProps) {
  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="block border border-navy-light bg-parchment p-9 transition-all duration-200 hover:border-gold hover:shadow-[0_8px_32px_rgba(13,27,42,0.13)]"
    >
      {/* Icon placeholder — SVG icons come later */}
      <div className="mb-6 flex h-[30px] w-[30px] items-center justify-center border border-gold/60">
        <div className="h-3 w-3 bg-gold/70" />
      </div>
      <h3 className="mt-4 font-display text-[26px] font-bold tracking-[-0.01em] text-ink">
        {area.title}
      </h3>
      <p className="mt-3 font-body text-[15px] leading-[1.65] text-muted">
        {area.shortDescription}
      </p>
      <span className="mt-6 block font-ui text-[11px] uppercase tracking-[0.1em] text-gold">
        Learn More &rarr;
      </span>
    </Link>
  );
}
