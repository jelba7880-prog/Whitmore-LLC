import type { Metadata } from "next";
import { practiceAreas } from "@/lib/practice-areas";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const practiceArea = practiceAreas.find((p) => p.slug === params.slug);
  return {
    title: practiceArea ? practiceArea.title : "Practice Area",
    description: practiceArea
      ? practiceArea.shortDescription
      : "A practice area handled by Whitmore & Associates LLP.",
  };
}

export default function PracticeAreaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main>
      <h1>{params.slug}</h1>
      {/* TODO: Long description, process steps, FAQs, related results, inline CTA */}
    </main>
  );
}
