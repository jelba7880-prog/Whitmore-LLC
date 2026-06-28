import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog";

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
  return (
    <main>
      <h1>{params.slug}</h1>
      {/* TODO: Blog post content, author card, practice area card, related posts, mini-CTA */}
    </main>
  );
}
