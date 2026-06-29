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
          {blogPosts.length === 0 ? (
            <div className="py-20 text-center font-body text-[18px] text-muted">
              Insights coming soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((p) => (
                <BlogCard post={p} showAuthor={true} key={p.slug} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
