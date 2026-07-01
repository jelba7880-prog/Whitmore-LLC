// Unattributed firm-philosophy pull quote (design-tokens.md §13 pull-quote token, scaled for section use).
// Distinct from Testimonial: no navy-mid background, no quote-mark glyph, no attribution line.
export default function EditorialQuote() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-content px-6">
        <blockquote className="mx-auto max-w-[720px] border-l-2 border-gold bg-parchment px-7 py-4 text-center font-body text-[24px] italic leading-[1.6] text-ink">
          Justice is measured not by the arguments made, but by the results
          achieved.
        </blockquote>
      </div>
    </section>
  );
}
