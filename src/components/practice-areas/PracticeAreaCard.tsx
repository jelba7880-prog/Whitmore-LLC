import Image from "next/image";
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
      className="block border border-navy-light bg-parchment transition-all duration-200 hover:border-gold hover:shadow-[0_8px_32px_rgba(13,27,42,0.13)]"
    >
      {/* Media area — image with navy overlay, or navy-mid placeholder block */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-navy-mid">
        {area.imageUrl && (
          <>
            <Image
              src={area.imageUrl}
              alt={`${area.title} — representative imagery`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/50" aria-hidden="true" />
          </>
        )}
      </div>

      <div className="p-9">
        {/* Icon placeholder — SVG icons come later */}
        <div className="mb-6 flex h-[30px] w-[30px] items-center justify-center border border-gold/60">
          <div className="h-3 w-3 bg-gold/70" />
        </div>
        <h3 className="mt-4 font-display text-[26px] font-bold tracking-[-0.01em] text-ink">
          {area.title}
        </h3>
        <p className="mt-3 font-body text-[15px] leading-[1.65] text-muted-on-light">
          {area.shortDescription}
        </p>
        <span className="mt-6 block font-ui text-[11px] uppercase tracking-[0.1em] text-ink">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
}
