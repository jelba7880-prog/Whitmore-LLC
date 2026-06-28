import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "An overview of Whitmore & Associates LLP, its practice focus, and the principles that guide its fraud recovery and commercial litigation work.",
};

export default function AboutPage() {
  return (
    <main>
      <h1>About the Firm</h1>
      {/* TODO: Firm history, mission, and approach */}
    </main>
  );
}
