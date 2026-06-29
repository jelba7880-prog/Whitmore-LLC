import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticeAreaDetail from "@/components/practice-areas/PracticeAreaDetail";
import { practiceAreas } from "@/lib/practice-areas";
import { caseResults } from "@/lib/results";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const area = practiceAreas.find((p) => p.slug === params.slug);

  if (!area) {
    notFound();
  }

  return {
    title: area.title,
    description: area.shortDescription,
  };
}

export default function PracticeAreaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = practiceAreas.find((p) => p.slug === params.slug);

  if (!area) {
    notFound();
  }

  const relatedResults = caseResults.filter((r) =>
    area.relatedResults.includes(r.id),
  );

  return <PracticeAreaDetail area={area} relatedResults={relatedResults} />;
}
