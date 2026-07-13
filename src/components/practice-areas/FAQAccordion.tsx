"use client";

import { useRef } from "react";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
}

// Progressive-enhancement accordion: server-rendered on native <details>/
// <summary> (accessible, keyboard-operable, and functional with JS disabled —
// native toggle still fires before hydration). Once hydrated, open/close is
// intercepted and animated via the Web Animations API, because CSS cannot
// transition `height: auto`. The chevron rotation stays CSS-only
// (globals.css) and runs on the same duration/easing as the panel so both
// move in lockstep.
const DURATION = 250;
const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  // Per-<details> "currently animating" guard so a fast double-click can't
  // queue overlapping animations or leave a panel in a half-open state.
  const animating = useRef<WeakSet<HTMLDetailsElement>>(new WeakSet());

  const handleToggleClick = (e: React.MouseEvent<HTMLElement>) => {
    const summary = e.currentTarget;
    const details = summary.parentElement as HTMLDetailsElement | null;
    if (!details) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // let native instant toggle run unmodified
    }

    if (animating.current.has(details)) {
      e.preventDefault();
      return;
    }

    const panel = summary.nextElementSibling as HTMLElement | null;
    if (!panel) return;

    e.preventDefault();
    animating.current.add(details);

    if (details.open) {
      const startHeight = panel.offsetHeight;
      const anim = panel.animate(
        [{ height: `${startHeight}px` }, { height: "0px" }],
        { duration: DURATION, easing: EASING }
      );
      anim.onfinish = () => {
        details.open = false;
        animating.current.delete(details);
      };
    } else {
      details.open = true;
      const endHeight = panel.offsetHeight;
      const anim = panel.animate(
        [{ height: "0px" }, { height: `${endHeight}px` }],
        { duration: DURATION, easing: EASING }
      );
      anim.onfinish = () => {
        panel.style.height = "";
        animating.current.delete(details);
      };
    }
  };

  return (
    <div>
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="faq-item border-b border-navy-light last:border-b-0"
        >
          <summary
            onClick={handleToggleClick}
            className="group/faq flex cursor-pointer list-none items-center justify-between py-5 [&::-webkit-details-marker]:hidden"
          >
            <span className="font-display text-[20px] font-bold text-ink transition-colors group-hover/faq:text-gold">
              {faq.question}
            </span>
            <svg
              className="faq-chevron ml-4 flex-shrink-0 text-gold transition-transform duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="overflow-hidden pb-5 font-body text-[17px] leading-[1.75] text-muted">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
