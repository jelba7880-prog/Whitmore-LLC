import Image from "next/image";
import Link from "next/link";
import type { Attorney } from "@/types";

interface AttorneyCardProps {
  attorney: Attorney;
}

// Horizontal attorney card (design-tokens.md § 07). Reused on /attorneys and the
// homepage teaser. Photo left, content right; sharp corners, gold hover border.
export default function AttorneyCard({ attorney }: AttorneyCardProps) {
  // Hard Rule #8 — a card without a bar number is a hard failure. Never render one.
  if (attorney.barNumbers.length === 0) {
    throw new Error(
      `Attorney ${attorney.slug} has no bar numbers — violates Hard Rule #8`,
    );
  }

  // Placeholder bios are stored as TODO comment strings; never surface them.
  const showBio = !attorney.bio.startsWith("{/*");
  const bioExcerpt =
    attorney.bio.length > 200 ? attorney.bio.slice(0, 200) + "…" : attorney.bio;

  return (
    <Link
      href={`/attorneys/${attorney.slug}`}
      className="flex border border-navy-light bg-parchment transition-colors duration-200 hover:border-gold"
    >
      {/* Photo area — grayscale headshot or initials fallback */}
      <div className="relative min-h-[220px] w-[196px] flex-shrink-0 overflow-hidden bg-navy-light">
        {attorney.imageUrl ? (
          <Image
            src={attorney.imageUrl}
            alt={attorney.name}
            fill
            sizes="196px"
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
        <h3 className="font-display text-[28px] font-bold tracking-[-0.01em] text-ink">
          {attorney.name}
        </h3>
        <p className="mt-1 font-ui text-[11px] uppercase tracking-[0.12em] text-gold">
          {attorney.title}
        </p>

        {/* Bar numbers + verify links (Hard Rule #8) */}
        <div className="mt-2 font-ui text-[12px] text-muted">
          {attorney.barNumbers.map((bar) => (
            <span key={`${bar.state}-${bar.number}`}>
              {bar.state} Bar #{bar.number} &middot;{" "}
              <a
                href={bar.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition-colors hover:text-gold-light"
              >
                Verify &rarr;
              </a>
            </span>
          ))}
        </div>

        {showBio && (
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-ink">
            {bioExcerpt}
          </p>
        )}

        {/* Practice area tags */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {attorney.practiceAreas.map((slug) => (
            <span key={slug} className="font-ui text-[11px] text-muted">
              &#9679; {slug}
            </span>
          ))}
        </div>

        <span className="mt-auto pt-5 font-ui text-[11px] uppercase tracking-[0.1em] text-gold">
          View Profile &rarr;
        </span>
      </div>
    </Link>
  );
}
