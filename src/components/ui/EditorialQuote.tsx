// Unattributed firm-philosophy pull quote (design-tokens.md §13 pull-quote token, scaled for section use).
// Distinct from Testimonial: no navy-mid background, no attribution line.
export default function EditorialQuote() {
  return (
    <section className="bg-cream-light py-16">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-[720px] text-center">
          {/* Mark sits above the bordered box rather than inside its padding, so
              it doesn't collide with the border-l-2 accent on the box's left edge. */}
          <div
            aria-hidden="true"
            className="select-none font-display text-[140px] font-bold leading-none text-gold/30"
          >
            {"“"}
          </div>
          <blockquote className="-mt-6 border-l-2 border-gold bg-parchment px-7 py-4 text-center font-body text-[24px] italic leading-[1.6] text-ink">
            Justice is measured not by the arguments made, but by the results
            achieved.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
