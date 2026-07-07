import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-navy">
      <Image
        src="/images/home/hero-courthouse.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />

      {/* SVG grain overlay — turbulence noise, no motion */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        aria-hidden="true"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-content items-center px-6">
        <div className="max-w-[660px]">
          <div className="mb-4 h-px w-11 bg-gold" />
          <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Fraud Recovery &amp; Commercial Litigation
          </p>
          <h1 className="font-display text-h1-hero font-bold leading-[1.05] tracking-[-0.02em] text-cream">
            When Millions Are at Stake, the Recovery Strategy Matters.
          </h1>
          <p className="mt-4 font-ui text-[13px] uppercase tracking-[0.1em] text-gold">
            Commercial Litigation &middot; Economic Disputes &middot; Fraud Recovery &middot; International Arbitration
          </p>
          <p className="mt-6 max-w-xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            Whitmore &amp; Associates LLP represents businesses, institutions, and
            individuals pursuing or defending complex commercial and fraud
            claims.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/free-consultation"
              className="bg-gold px-9 py-4 font-ui text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light"
            >
              Discuss Your Matter
            </Link>
            <a
              href="tel:+12125550100"
              className="border border-cream/30 px-9 py-4 font-ui text-[12px] font-semibold uppercase tracking-widest text-cream transition-colors hover:border-cream/80"
            >
              Speak With Our Team
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-0 gap-y-3">
            {[
              "Confidential Representation",
              "Cross-Border Experience",
              "Business-Focused Strategy",
              "Responsive Counsel",
            ].map((label, index) => (
              <span key={label} className="flex items-center">
                {index > 0 && (
                  <span className="mx-4 h-3 w-px bg-navy-light" aria-hidden="true" />
                )}
                <span className="font-ui text-[11px] text-cream/65">
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
