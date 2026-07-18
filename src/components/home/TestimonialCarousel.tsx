"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function TestimonialCarousel() {
  const sectionRef = useRef<HTMLElement>(null);

  // `entered` gates BOTH the one-time entrance animation and the Embla init:
  // Embla (and therefore autoplay) does not initialize until the section has
  // scrolled into view for the first time.
  const [entered, setEntered] = useState(false);
  // Autoplay is added as an Embla plugin only when motion is allowed. Under
  // prefers-reduced-motion the array stays empty → Embla mounts with manual
  // swipe only, no autoplay.
  const [plugins, setPlugins] = useState<ReturnType<typeof Autoplay>[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);

  // One-time IntersectionObserver gate — same disconnect-after-trigger pattern
  // as RevealOnScroll.tsx (threshold 0.15). Fires exactly once per page load.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // Decide autoplay BEFORE Embla initializes so it mounts once, correctly.
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (!prefersReducedMotion) {
          setPlugins([
            Autoplay({
              delay: 10000,
              // false = a manual swipe RESETS the 10s timer (and is what lets
              // hover/focus pause resume on leave/blur). `true` would instead
              // stop autoplay permanently on first interaction, which fails the
              // "resumes on mouse-leave/blur" acceptance criteria.
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ]);
        }
        setEntered(true);
        observer.disconnect();
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Keep the active indicator in sync with Embla's selected slide.
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section ref={sectionRef} className="bg-navy-mid py-20">
      <div
        className={`mx-auto max-w-[1200px] px-6 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
          entered ? "translate-y-0 opacity-100" : "translate-y-2.5 opacity-0"
        }`}
      >
        {/* Embla viewport — attaching the ref is what initializes Embla, so it
            stays detached until the section first enters the viewport. */}
        <div
          className="overflow-hidden"
          ref={entered ? emblaRef : undefined}
        >
          {/* Embla container */}
          <div className="flex">
            {TESTIMONIALS.map((testimonial, index) => (
              <figure
                key={index}
                className="min-w-0 flex-[0_0_100%] text-center"
              >
                <div
                  aria-hidden="true"
                  className="select-none font-display text-[140px] font-bold leading-none text-gold/30"
                >
                  {"“"}
                </div>

                <blockquote className="mx-auto mt-[-40px] max-w-[800px] font-body text-[22px] italic leading-[1.7] text-cream">
                  {testimonial.quote}
                </blockquote>

                <figcaption>
                  <p className="mt-8 font-ui text-[12px] uppercase tracking-[0.1em] text-cream/80">
                    {testimonial.clientType} &middot; {testimonial.matterType}
                  </p>
                  <p className="mt-1 font-ui text-[12px] text-muted">
                    {testimonial.court} &middot; {testimonial.year}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Indicator ticks — square/rectangular, never rounded (Hard Rule #7). */}
        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`View testimonial ${index + 1} of ${TESTIMONIALS.length}`}
              aria-current={selectedIndex === index ? "true" : undefined}
              className={`h-1.5 w-6 transition-colors ${
                selectedIndex === index ? "bg-gold" : "bg-gold/30"
              }`}
            />
          ))}
        </div>

        <p className="mt-8 text-center font-ui text-[11px] text-muted-on-dark">
          Past results do not guarantee future outcomes. Each case is unique.
        </p>
      </div>
    </section>
  );
}
