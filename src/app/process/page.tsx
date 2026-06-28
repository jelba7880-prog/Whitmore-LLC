import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "An overview of how Whitmore & Associates LLP evaluates, pursues, and resolves complex fraud and commercial litigation matters.",
};

export default function ProcessPage() {
  return (
    <main>
      <h1>How We Work</h1>
      {/* TODO: Process timeline */}
    </main>
  );
}
