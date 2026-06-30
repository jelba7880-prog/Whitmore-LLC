import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-navy">
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

      {/* Right photo area — architectural / texture only, no faces */}
      <div className="absolute right-0 top-0 h-full w-[38%] bg-navy-light">
        <Image
          src="/images/hero/courthouse-exterior.jpg"
          alt="Federal courthouse exterior with neoclassical stone columns"
          width={680}
          height={520}
          priority
          className="h-full w-full object-cover"
        />
        {/* Left-edge gradient fade into the navy section */}
        <div
          className="absolute inset-y-0 left-0 w-32"
          style={{
            background: "linear-gradient(to right, #0D1B2A, transparent)",
          }}
        />
      </div>

      {/* Left content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-content items-center px-6">
        <div className="max-w-[660px]">
          <div className="mb-4 h-px w-11 bg-gold" />
          <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Fraud Recovery &amp; Commercial Litigation
          </p>
          <h1 className="font-display text-[72px] font-bold leading-[1.05] tracking-[-0.02em] text-cream">
            Recovering What Was Taken. Holding the Responsible Accountable.
          </h1>
          <p className="mt-6 max-w-xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            Whitmore &amp; Associates LLP represents individuals, institutions,
            and businesses in complex fraud recovery, commercial litigation, and
            investment disputes.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/free-consultation"
              className="bg-gold px-9 py-4 font-ui text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light"
            >
              Request a Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-cream/30 px-9 py-4 font-ui text-[12px] font-semibold uppercase tracking-widest text-cream transition-colors hover:border-cream/80"
            >
              Contact the Firm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
