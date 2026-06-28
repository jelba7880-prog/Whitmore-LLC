import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: post ? post.title : "Blog Post",
    description: post
      ? post.deck
      : "An article from Whitmore & Associates LLP.",
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

  return (
    <main>
      <h1>{post.title}</h1>
      {/* TODO: Article body, author card, practice area card, related posts, mini-CTA */}
    </main>
  );
}
