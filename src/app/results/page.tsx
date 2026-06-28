import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Results",
  description:
    "A record of judgments, settlements, and arbitral awards obtained on behalf of clients of Whitmore & Associates LLP.",
};

export default function ResultsPage() {
  return (
    <main>
      <h1>Case Results</h1>
      {/* TODO: Case result cards grid */}
    </main>
  );
}
