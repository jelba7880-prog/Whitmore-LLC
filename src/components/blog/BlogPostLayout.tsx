import Image from "next/image";
import Link from "next/link";
import type { Attorney, BlogPost } from "@/types";
import { practiceAreas } from "@/lib/practice-areas";

interface BlogPostLayoutProps {
  post: BlogPost;
  author: Attorney;
  relatedPosts: BlogPost[];
}

// Full blog post layout (design-tokens.md § 13): navy article header, then a
// two-column body + right rail. The author is always a named, bar-licensed
// attorney from the /attorneys roster (Hard Rule #5) — the rendering page
// throws if authorSlug has no match, so `author` here is guaranteed real.
export default function BlogPostLayout({
  post,
  author,
  relatedPosts,
}: BlogPostLayoutProps) {
  const practiceArea = practiceAreas.find((a) => a.slug === post.practiceArea);
  const practiceAreaTitle = practiceArea?.title ?? post.practiceArea;

  const truncatedTitle =
    post.title.length > 40 ? `${post.title.slice(0, 40)}…` : post.title;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Placeholder bodies are stored as a TODO comment string (or left empty);
  // never surface either as article copy — show a holding card instead.
  const hasContent =
    post.content.length > 0 && !post.content.trimStart().startsWith("{/*");

  const heroImage = post.heroImage;

  return (
    <main className="bg-cream">
      {/* Article header. Falls back to solid bg-navy when no heroImage
          is set (e.g. default-hero.jpg was removed for a baked-in logo
          artifact — see public/images/README.md). */}
      <section className="relative overflow-hidden bg-navy py-16">
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
          </>
        )}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <Link href="/blog" className="transition-colors hover:text-gold">
              Insights
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">{truncatedTitle}</span>
          </nav>

          <div className="max-w-[760px]">
            <p className="mt-6 font-ui text-[10px] uppercase tracking-[0.14em] text-gold">
              {post.practiceArea}
            </p>
            <h1 className="mt-3 font-display text-h1-blog font-bold leading-[1.15] tracking-[-0.02em] text-cream">
              {post.title}
            </h1>
            <p className="mt-4 font-body text-[19px] leading-[1.65] text-[#9CAFC0]">
              {post.deck}
            </p>
            <p className="mt-4 font-ui text-[12px] text-muted">
              {author.name} &middot; {post.readMinutes} min read &middot;{" "}
              {formattedDate}
            </p>
          </div>
        </div>
      </section>

      {/* Body + right rail */}
      <section className="py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-16 px-6 lg:flex-row">
          {/* Article body */}
          <article className="min-w-0 flex-1">
            {hasContent ? (
              <div
                className="max-w-[70ch] font-body text-[18px] leading-[1.8] text-ink [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-gold [&_blockquote]:bg-parchment [&_blockquote]:px-7 [&_blockquote]:py-4 [&_blockquote]:font-body [&_blockquote]:text-[18px] [&_blockquote]:italic [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-[28px] [&_h3]:font-bold [&_h3]:tracking-[-0.01em] [&_h3]:text-ink [&_p]:mb-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="border border-navy-light bg-parchment p-8 text-center font-ui text-[13px] text-muted-on-light">
                Article content coming soon.
              </div>
            )}
          </article>

          {/* Right rail */}
          <aside className="flex w-full flex-shrink-0 flex-col gap-6 lg:sticky lg:top-24 lg:w-[300px]">
            {/* Author card */}
            <div className="border border-navy-light bg-parchment p-6">
              <p className="mb-4 border-b border-navy-light pb-2 font-ui text-[10px] uppercase tracking-[0.18em] text-ink">
                Author
              </p>
              <div className="relative aspect-square max-h-[120px] w-full overflow-hidden bg-navy-light">
                {author.imageUrl ? (
                  <Image
                    src={author.imageUrl}
                    alt={author.name}
                    fill
                    sizes="120px"
                    className="object-cover grayscale"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-display text-[36px] font-bold text-cream/40">
                    {author.initials}
                  </div>
                )}
              </div>
              <Link
                href={`/attorneys/${author.slug}`}
                className="mt-3 block font-display text-[18px] font-bold text-ink transition-colors hover:text-navy-light"
              >
                {author.name}
              </Link>
              <p className="mt-1 font-ui text-[10px] uppercase tracking-[0.12em] text-ink">
                {author.title}
              </p>
            </div>

            {/* Practice area card */}
            <div className="border border-navy-light bg-parchment p-6">
              <p className="mb-4 border-b border-navy-light pb-2 font-ui text-[10px] uppercase tracking-[0.18em] text-ink">
                Practice Area
              </p>
              <Link
                href={`/practice-areas/${post.practiceArea}`}
                className="mt-3 block font-display text-[18px] font-bold text-ink transition-colors hover:text-navy-light"
              >
                {practiceAreaTitle}
              </Link>
              <Link
                href={`/practice-areas/${post.practiceArea}`}
                className="mt-2 block font-ui text-[11px] uppercase tracking-[0.1em] text-ink"
              >
                View all {practiceAreaTitle} resources &rarr;
              </Link>
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="border border-navy-light bg-parchment p-6">
                <p className="mb-4 border-b border-navy-light pb-2 font-ui text-[10px] uppercase tracking-[0.18em] text-ink">
                  Related Insights
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="block"
                    >
                      <span className="block font-display text-[16px] font-bold leading-[1.3] text-ink transition-colors hover:text-navy-light">
                        {related.title}
                      </span>
                      <span className="mt-1 block font-ui text-[11px] text-muted-on-light">
                        {related.readMinutes} min read
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Mini CTA */}
            <div className="border border-gold/20 bg-navy p-6">
              <p className="mb-3 font-ui text-[10px] uppercase tracking-[0.18em] text-gold">
                Free Consultation
              </p>
              <p className="mb-3 font-display text-[20px] font-bold text-cream">
                Discuss Your Matter
              </p>
              <Link
                href="/free-consultation"
                className="block bg-gold px-6 py-3 text-center font-ui text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:bg-gold-light"
              >
                Get Started
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
