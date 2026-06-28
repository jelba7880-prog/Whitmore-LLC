import Image from "next/image";
import Link from "next/link";
import type { Attorney, BlogPost, CaseResult } from "@/types";
import CaseResultCard from "@/components/results/CaseResultCard";
import BlogCard from "@/components/blog/BlogCard";
import GoldRule from "@/components/ui/GoldRule";
import SectionDivider from "@/components/ui/SectionDivider";

interface AttorneyProfileProps {
  attorney: Attorney;
  relatedResults: CaseResult[];
  posts: BlogPost[];
}

// Full attorney profile layout. Section order is mandated by CLAUDE.md:
// A) Hero  B) Biography  C) Notable Matters  D) Articles. Server component.
export default function AttorneyProfile({
  attorney,
  relatedResults,
  posts,
}: AttorneyProfileProps) {
  const bioIsTodo = attorney.bio.startsWith("{/*");
  const bioParagraphs = bioIsTodo ? [] : attorney.bio.split("\n\n");
  // "last name only" — use the final name token (not split[1], which is the
  // middle initial for these names). See report note.
  const lastName = attorney.name.split(" ").pop() ?? attorney.name;
  // Drop any TODO placeholder education entries.
  const educationItems = (attorney.education ?? []).filter(
    (item) => !item.startsWith("{/*"),
  );

  return (
    <main>
      {/* ──── SECTION A: Attorney Hero ──── */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 lg:flex-row lg:items-start">
          {/* Left column */}
          <div className="flex-1">
            <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link
                href="/attorneys"
                className="transition-colors hover:text-gold"
              >
                Attorneys
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-cream/70">{attorney.name}</span>
            </nav>

            <GoldRule className="mt-6" />

            <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
              {attorney.title}
            </p>
            <h1 className="mt-3 font-display text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-cream">
              {attorney.name}
            </h1>

            {/* Bar numbers */}
            <div className="mt-6">
              {attorney.barNumbers.map((bar, index) => (
                <div key={`${bar.state}-${bar.number}`}>
                  {index > 0 && (
                    <div
                      className="my-2 border-b border-navy-light"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex items-center gap-3 font-ui text-[13px] text-cream/70">
                    <span>
                      &#9679; {bar.state} Bar #{bar.number}
                    </span>
                    <a
                      href={bar.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-gold transition-colors hover:text-gold-light"
                    >
                      Verify with {bar.state} State Bar &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bar admissions */}
            {attorney.admissions && attorney.admissions.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 font-ui text-[10px] uppercase tracking-[0.16em] text-muted">
                  Bar Admissions
                </p>
                <p className="font-body text-[15px] leading-[1.8] text-cream/70">
                  {attorney.admissions.join(" · ")}
                </p>
              </div>
            )}

            {/* Practice areas */}
            <div className="mt-6 flex flex-wrap gap-2">
              {attorney.practiceAreas.map((slug) => (
                <Link
                  key={slug}
                  href={`/practice-areas/${slug}`}
                  className="border border-gold/40 px-3 py-1 font-ui text-[11px] text-gold/80 transition-colors hover:border-gold hover:text-gold"
                >
                  {slug}
                </Link>
              ))}
            </div>
          </div>

          {/* Right column — photo */}
          <div className="w-full flex-shrink-0 lg:w-[320px]">
            <div className="relative aspect-[3/4] overflow-hidden bg-navy-light">
              {attorney.imageUrl ? (
                <Image
                  src={attorney.imageUrl}
                  alt={attorney.name}
                  fill
                  sizes="320px"
                  className="object-cover grayscale"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center font-display text-[72px] font-bold text-cream/20">
                  {attorney.initials}
                </div>
              )}
            </div>

            {/* Education */}
            {educationItems.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 font-ui text-[10px] uppercase tracking-[0.16em] text-gold">
                  Education
                </p>
                {educationItems.map((item, index) => (
                  <p
                    key={`edu-${index}`}
                    className="font-body text-[14px] leading-[1.7] text-cream/70"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ──── SECTION B: Full Biography ──── */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <GoldRule />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Biography
          </p>
          <h2 className="mb-8 mt-3 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
            About {lastName}
          </h2>

          {bioIsTodo ? (
            <div className="border border-navy-light bg-parchment p-8 text-center font-ui text-[13px] text-muted">
              Attorney biography coming soon.
            </div>
          ) : (
            <div className="space-y-6">
              {bioParagraphs.map((para, index) => (
                <p
                  key={`bio-${index}`}
                  className="font-body text-[18px] leading-[1.8] text-ink"
                >
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ──── SECTION C: Notable Matters ──── */}
      {relatedResults.length > 0 && (
        <section className="bg-parchment py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <SectionDivider className="mb-16" />
            <GoldRule />
            <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
              Representative Matters
            </p>
            <h2 className="mb-10 mt-3 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
              Notable Results
            </h2>

            <p className="mb-8 font-ui text-[11px] text-muted">
              Past results do not guarantee future outcomes. Each case is unique.
              Client names and identifying details are omitted to protect
              confidentiality.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedResults.map((result) => (
                <CaseResultCard key={result.id} result={result} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ──── SECTION D: Articles by This Attorney ──── */}
      {posts.length > 0 && (
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <SectionDivider className="mb-16" />
            <GoldRule />
            <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
              Insights & Commentary
            </p>
            <h2 className="mb-10 mt-3 font-display text-[40px] font-bold tracking-[-0.02em] text-ink">
              Articles by {attorney.name}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} showAuthor={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
