"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface ParallaxImageProps {
  /**
   * A full-bleed `next/image` with `fill` (or any absolutely-positioned image).
   * The wrapper is a positioned ancestor, so a `fill` image resolves against it.
   */
  children: ReactNode;
  className?: string;
}

// Subtle, JS-driven image parallax for full-bleed hero backgrounds.
//
// The wrapper is rendered 130% of the section's height and offset up by 15%
// (`-top-[15%] h-[130%]`), giving a ±15% vertical buffer. The scroll-driven
// translateY is bounded to exactly that buffer, so the image can never reveal
// empty space at the top/bottom edges during scroll. The parent section must be
// `position: relative` with `overflow-hidden` (all three usage sites already
// are) so the extended image is clipped.
//
// Notes:
//  - Scroll work is throttled to one calc per animation frame (rAF), listener
//    is passive — never blocks scrolling.
//  - `prefers-reduced-motion` short-circuits BEFORE any listener is attached:
//    the image simply stays at its rest position (still fully covers the
//    section thanks to the 15% offset), matching RevealOnScroll /
//    TestimonialCarousel behavior.
//  - `will-change: transform` is set only while the section is in view and
//    cleared once it scrolls out, so the compositing hint isn't held forever.
export default function ParallaxImage({
  children,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const parent = node?.parentElement;
    if (!node || !parent) return;

    // Respect reduced motion: leave the image static at rest position.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Fraction of the section height the image may travel in EACH direction.
    // Must not exceed the 15% offset buffer, or a gap could appear.
    const MAX_SHIFT_RATIO = 0.15;

    let frame = 0;
    let active = false;

    const render = () => {
      frame = 0;

      // Measure the (untransformed) parent section for a stable reference.
      const rect = parent.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Fully out of view — drop the compositing hint and stop.
      if (rect.bottom < 0 || rect.top > viewportH) {
        if (active) {
          node.style.willChange = "auto";
          active = false;
        }
        return;
      }

      if (!active) {
        node.style.willChange = "transform";
        active = true;
      }

      // Normalized position of the section center relative to the viewport
      // center across a full pass: -1 (entering at bottom) → +1 (leaving at top).
      const sectionCenter = rect.top + rect.height / 2;
      const maxTravel = (viewportH + rect.height) / 2;
      let progress = (viewportH / 2 - sectionCenter) / maxTravel;
      progress = Math.max(-1, Math.min(1, progress));

      // Bounded to ±(MAX_SHIFT_RATIO × height) — always within the buffer.
      const shift = progress * MAX_SHIFT_RATIO * rect.height;
      node.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      node.style.willChange = "auto";
      node.style.transform = "";
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -top-[15%] h-[130%] ${className}`}
    >
      {children}
    </div>
  );
}
