import Link from "next/link";
import type { BlogPost } from "@/types";
import { attorneys } from "@/lib/attorneys";

interface BlogCardProps {
  post: BlogPost;
  showAuthor?: boolean;
}

// Blog card used in the attorney profile (articles by this attorney) and the
// blog index. Author is resolved from the canonical roster (Hard Rule #5) — a
// build-time invariant in lib/blog.ts guarantees every authorSlug matches.
export default function BlogCard({ post, showAuthor = true }: BlogCardProps) {
  const author = attorneys.find((a) => a.slug === post.authorSlug);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block border border-navy-light bg-parchment p-7 transition-all duration-200 hover:border-gold"
    >
      <p className="mb-3 font-ui text-[10px] uppercase tracking-[0.16em] text-gold">
        {post.practiceArea}
      </p>
      <h3 className="font-display text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-ink">
        {post.title}
      </h3>
      <p className="mt-3 font-body text-[15px] leading-[1.65] text-muted">
        {post.deck}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-navy-light pt-4">
        {showAuthor ? (
          <span className="font-ui text-[11px] text-muted">
            {author?.name ?? post.authorSlug}
          </span>
        ) : (
          <span aria-hidden="true" />
        )}
        <span className="font-ui text-[11px] text-muted">
          {post.readMinutes} min read &middot; {formattedDate}
        </span>
      </div>
    </Link>
  );
}
