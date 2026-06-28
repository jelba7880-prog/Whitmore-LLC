import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/lib/practice-areas";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

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
  const practiceArea = practiceAreas.find((p) => p.slug === params.slug);

  if (!practiceArea) {
    notFound();
  }

  return (
    <main>
      <h1>{practiceArea.title}</h1>
      {/* TODO: Page hero, long description, process steps, FAQs, related results, inline CTA */}
    </main>
  );
}
