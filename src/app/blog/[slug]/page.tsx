import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import { attorneys } from "@/lib/attorneys";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import type { BlogPost } from "@/types";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.deck,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Hard Rule #5 — a blog author must be a named attorney on the /attorneys
  // roster. lib/blog.ts enforces this at build time, but we guard here too so a
  // mismatch can never render an anonymous byline.
  const author = attorneys.find((a) => a.slug === post.authorSlug);
  if (!author) {
    throw new Error(
      `Blog post "${post.slug}" has authorSlug "${post.authorSlug}", which does not match any attorney in lib/attorneys.ts.`,
    );
  }

  const relatedPosts = post.relatedSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p));

  return (
    <BlogPostLayout post={post} author={author} relatedPosts={relatedPosts} />
  );
}
