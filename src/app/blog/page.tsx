import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from the attorneys of Whitmore & Associates LLP on fraud recovery and commercial litigation.",
};

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      {/* TODO: Blog post cards grid */}
    </main>
  );
}
