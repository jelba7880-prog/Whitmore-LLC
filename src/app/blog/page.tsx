import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import GoldRule from "@/components/ui/GoldRule";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Legal insights and commentary on fraud recovery, commercial litigation, and financial disputes from the attorneys at Whitmore & Associates LLP.",
};

export default function BlogPage() {
  // Most recent post leads as the featured block; everything else follows in
  // a 2-column row. Sorting a copy avoids mutating the shared lib/blog.ts export.
  const [featuredPost, ...secondaryPosts] = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <main className="bg-cream">
      {/* Page hero */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="font-ui text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream/70">Insights</span>
          </nav>
          <GoldRule className="mt-6" />
          <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
            Insights &amp; Commentary
          </p>
          <h1 className="mt-3 font-display text-[56px] font-bold tracking-[-0.02em] text-cream">
            From the Firm
          </h1>
          <p className="mt-6 max-w-xl font-body text-[20px] text-[#9CAFC0]">
            Legal analysis and commentary from our attorneys on fraud recovery,
            commercial litigation, and financial disputes.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          {!featuredPost ? (
            <div className="py-20 text-center font-body text-[18px] text-muted">
              Insights coming soon.
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <BlogCard post={featuredPost} showAuthor={true} featured />
              {secondaryPosts.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {secondaryPosts.map((p, index) => {
                    // Odd one out at the end of the row spans full width
                    // instead of leaving an empty column beside it.
                    const isTrailingOdd =
                      secondaryPosts.length % 2 === 1 &&
                      index === secondaryPosts.length - 1;
                    return (
                      <div
                        key={p.slug}
                        className={isTrailingOdd ? "md:col-span-2" : undefined}
                      >
                        <BlogCard post={p} showAuthor={true} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
