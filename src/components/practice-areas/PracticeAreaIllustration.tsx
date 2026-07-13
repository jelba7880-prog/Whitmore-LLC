import type { ReactNode } from "react";

// Static line-art illustration for the practice-area sidebar slot on pages
// that have no VideoEmbed. There is no existing logo/mark asset in this
// codebase to match, so the visual language (thin gold stroke on a cream
// field inside a navy frame, no fill) follows the same inline-SVG icon
// convention already established in components/home/IndustriesServed.tsx.

export type PracticeAreaIllustrationSlug =
  | "commercial-litigation"
  | "contract-disputes"
  | "economic-disputes"
  | "international-arbitration";

export function isPracticeAreaIllustrationSlug(
  slug: string,
): slug is PracticeAreaIllustrationSlug {
  return slug in MOTIFS;
}

interface Motif {
  description: string;
  art: ReactNode;
}

const MOTIFS: Record<PracticeAreaIllustrationSlug, Motif> = {
  "commercial-litigation": {
    description:
      "Decorative brand illustration: converging and diverging line motif",
    art: (
      <>
        <path d="M24 28 L50 50" />
        <path d="M24 50 L50 50" />
        <path d="M24 72 L50 50" />
        <path d="M50 50 L76 28" />
        <path d="M50 50 L76 50" />
        <path d="M50 50 L76 72" />
        <circle cx="50" cy="50" r="2.25" />
      </>
    ),
  },
  "contract-disputes": {
    description: "Decorative brand illustration: linked-forms motif",
    art: (
      <>
        <rect x="22" y="30" width="30" height="30" />
        <rect x="48" y="40" width="30" height="30" />
      </>
    ),
  },
  "economic-disputes": {
    description: "Decorative brand illustration: balance and ledger line motif",
    art: (
      <>
        <path d="M50 22 L50 42" />
        <path d="M28 34 L72 34" />
        <path d="M28 34 L28 46" />
        <path d="M72 34 L72 46" />
        <path d="M22 46 Q28 54 34 46" />
        <path d="M66 46 Q72 54 78 46" />
        <path d="M30 66 L70 66" />
        <path d="M30 74 L70 74" />
      </>
    ),
  },
  "international-arbitration": {
    description: "Decorative brand illustration: meridian and globe line motif",
    art: (
      <>
        <circle cx="50" cy="50" r="26" />
        <ellipse cx="50" cy="50" rx="10" ry="26" />
        <path d="M24 50 L76 50" />
        <path d="M28 38 Q50 32 72 38" />
        <path d="M28 62 Q50 68 72 62" />
      </>
    ),
  },
};

interface PracticeAreaIllustrationProps {
  practiceArea: PracticeAreaIllustrationSlug;
  className?: string;
}

export default function PracticeAreaIllustration({
  practiceArea,
  className = "",
}: PracticeAreaIllustrationProps) {
  const motif = MOTIFS[practiceArea];

  return (
    <svg
      viewBox="0 0 100 100"
      className={`aspect-square w-full ${className}`}
      aria-hidden="true"
    >
      <title>{motif.description}</title>
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        className="fill-cream stroke-navy"
        strokeWidth={2}
      />
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        fill="none"
        className="stroke-gold"
        strokeWidth={0.75}
      />
      <g
        fill="none"
        className="stroke-gold"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {motif.art}
      </g>
    </svg>
  );
}
