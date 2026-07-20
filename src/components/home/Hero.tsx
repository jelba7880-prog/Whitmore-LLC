import Image from "next/image";
import Link from "next/link";
import ParallaxImage from "@/components/ui/ParallaxImage";

// Full-bleed photo hero (design ref: design_handoff_hero_1c, Option 1C). The
// section bleeds up behind the fixed Navbar via a negative margin that
// cancels the root layout's nav-height offset (see layout.tsx), so the photo
// runs edge-to-edge under the glass nav instead of starting below it.
export default function Hero() {
  return (
    <section className="relative -mt-[54px] min-h-[100svh] overflow-hidden bg-navy-hero md:-mt-[72px]">
      <ParallaxImage>
        <Image
          src="/images/home/hero-courthouse.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </ParallaxImage>

      {/* Scrim — diagonal fade from opaque navy (left, behind the headline)
          to near-transparent (right), so the photo's detail stays visible. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(78deg, rgba(13,27,42,0.94) 0%, rgba(13,27,42,0.78) 38%, rgba(13,27,42,0.25) 72%, rgba(13,27,42,0.05) 100%)",
        }}
        aria-hidden="true"
      />

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

      {/* Content, bottom-anchored */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-content flex-col justify-end px-6 pb-16 pt-24 md:pb-20">
        <div className="max-w-[660px]">
          <div className="mb-[26px] flex items-center gap-3.5">
            <span className="h-px w-11 bg-gold" aria-hidden="true" />
            <span className="font-ui text-[13px] font-semibold uppercase tracking-[0.26em] text-gold">
              Fraud Recovery &amp; Commercial Litigation
            </span>
          </div>
          <h1 className="font-display text-h1-hero font-bold text-cream [text-wrap:balance]">
            Complex claims. Decisive recovery.
          </h1>
          <p className="mt-6 max-w-xl font-body text-[20px] leading-[1.65] text-[#9CAFC0]">
            Whitmore Harlow LLP acts for businesses, institutions, and
            individuals in high-value commercial disputes and fraud recovery
            worldwide.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/free-consultation"
              className="bg-gold px-10 py-4 font-ui text-xs font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light"
            >
              Discuss Your Matter &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
