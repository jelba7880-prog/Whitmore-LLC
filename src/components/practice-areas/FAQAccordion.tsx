import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
}

// Zero-JS accordion built on native <details>/<summary> — server-renderable and
// accessible by default. The chevron rotation is handled in globals.css via the
// `.faq-item[open] .faq-chevron` rule.
export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div>
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="faq-item border-b border-navy-light last:border-b-0"
        >
          <summary className="group/faq flex cursor-pointer list-none items-center justify-between py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[20px] font-bold text-ink transition-colors group-hover/faq:text-gold">
              {faq.question}
            </span>
            <svg
              className="faq-chevron ml-4 flex-shrink-0 text-gold transition-transform duration-200"
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
          <div className="pb-5 font-body text-[17px] leading-[1.75] text-muted">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
