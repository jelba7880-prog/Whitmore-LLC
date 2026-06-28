import Image from "next/image";
import Link from "next/link";
import GoldRule from "@/components/ui/GoldRule";
import { attorneys } from "@/lib/attorneys";

export default function AttorneyTeaser() {
  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 text-center">
          <GoldRule variant="short" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            The Firm
          </p>
          <h2 className="mt-3 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
            Our Attorneys
          </h2>
        </div>

        <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
          {attorneys.map((attorney) => {
            // Belt-and-suspenders: a card without a bar number is a hard failure.
            if (!attorney.barNumbers || attorney.barNumbers.length === 0) {
              throw new Error(
                `Attorney "${attorney.slug}" has no bar numbers — cannot render AttorneyCard.`,
              );
            }

            return (
              <Link
                key={attorney.slug}
                href={`/attorneys/${attorney.slug}`}
                className="flex border border-navy-light bg-parchment transition-colors duration-200 hover:border-gold"
              >
                {/* Photo area — grayscale headshot or initials fallback */}
                <div className="relative h-auto min-h-[220px] w-[196px] flex-shrink-0 bg-navy-light">
                  {attorney.imageUrl ? (
                    <Image
                      src={attorney.imageUrl}
                      alt={attorney.name}
                      fill
                      sizes="196px"
                      className="object-cover grayscale"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-display text-[36px] font-bold text-cream/40">
                        {attorney.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content area */}
                <div className="flex-1 p-8">
                  <h3 className="font-display text-[28px] font-bold tracking-[-0.01em] text-ink">
                    {attorney.name}
                  </h3>
                  <p className="mt-1 font-ui text-[11px] uppercase tracking-[0.12em] text-gold">
                    {attorney.title}
                  </p>

                  <div className="mt-2 font-ui text-[12px] text-muted">
                    {attorney.barNumbers.map((bar) => (
                      <span key={`${bar.state}-${bar.number}`}>
                        {bar.state} Bar #{bar.number} &middot;{" "}
                        <a
                          href={bar.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:text-gold-light"
                        >
                          Verify &rarr;
                        </a>
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 font-body text-[15px] leading-[1.7] text-ink">
                    {attorney.bio.slice(0, 200)}&hellip;
                  </p>

                  <p className="mt-4 font-ui text-[11px] text-muted">
                    {attorney.practiceAreas.map((slug) => (
                      <span key={slug}>&#9679; {slug} </span>
                    ))}
                  </p>

                  <span className="mt-5 block font-ui text-[11px] uppercase tracking-[0.1em] text-gold">
                    View Profile &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mx-auto max-w-[1200px] text-right">
          <Link
            href="/attorneys"
            className="mt-8 inline-block font-ui text-[13px] uppercase tracking-widest text-gold hover:text-gold-light"
          >
            View All Attorneys &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
