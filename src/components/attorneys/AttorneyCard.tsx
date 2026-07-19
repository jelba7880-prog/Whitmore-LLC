import Image from "next/image";
import Link from "next/link";
import type { Attorney } from "@/types";
import { practiceAreas } from "@/lib/practice-areas";

interface AttorneyCardProps {
  attorney: Attorney;
}

// Horizontal attorney card (design-tokens.md § 07). Reused on /attorneys and the
// homepage teaser. Photo left, content right; sharp corners, gold hover border.
export default function AttorneyCard({ attorney }: AttorneyCardProps) {
  // Placeholder bios are stored as TODO comment strings, or left empty
  // pending content; never surface either as rendered copy.
  const showBio = attorney.bio.length > 0 && !attorney.bio.startsWith("{/*");
  const bioExcerpt =
    attorney.bio.length > 200 ? attorney.bio.slice(0, 200) + "…" : attorney.bio;

  return (
    <div className="relative flex flex-col border border-navy-light bg-parchment transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-[0_14px_40px_rgba(13,27,42,0.15)] sm:flex-row">
      {/* Photo area — grayscale headshot or initials fallback. Full-width on top
          for mobile; fixed 196px column beside the content from sm up. */}
      <div className="relative h-[240px] w-full flex-shrink-0 overflow-hidden bg-navy-light sm:h-auto sm:min-h-[220px] sm:w-[196px]">
        {attorney.imageUrl ? (
          <Image
            src={attorney.imageUrl}
            alt={attorney.name}
            fill
            sizes="(max-width: 640px) 100vw, 196px"
            className="object-cover grayscale"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-display text-[40px] font-bold text-cream/40">
            {attorney.initials}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-display text-h3 font-bold tracking-[-0.01em] text-ink">
          {attorney.name}
        </h3>
        <p className="mt-1 font-ui text-[11px] uppercase tracking-[0.12em] text-ink">
          {attorney.title}
        </p>

        {showBio && (
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-ink">
            {bioExcerpt}
          </p>
        )}

        {/* Practice area tags */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {attorney.practiceAreas.map((slug) => {
            const area = practiceAreas.find((a) => a.slug === slug);
            const label = area?.title ?? slug;
            return (
              <span key={slug} className="font-ui text-[11px] text-muted-on-light">
                &#9679; {label}
              </span>
            );
          })}
        </div>

        <Link
          href={`/attorneys/${attorney.slug}`}
          className="before:absolute before:inset-0 before:content-[''] mt-auto pt-5 font-ui text-[11px] uppercase tracking-[0.1em] text-ink"
        >
          View Profile &rarr;
        </Link>
      </div>
    </div>
  );
}
