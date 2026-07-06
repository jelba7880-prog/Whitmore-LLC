import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AttorneyProfile from "@/components/attorneys/AttorneyProfile";
import { attorneys } from "@/lib/attorneys";
import { caseResults } from "@/lib/results";

export function generateStaticParams() {
  return attorneys.map((attorney) => ({ slug: attorney.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const attorney = attorneys.find((a) => a.slug === params.slug);

  if (!attorney) {
    notFound();
  }

  return {
    title: attorney.name,
    description: `${attorney.name} is a ${attorney.title} at Whitmore & Associates LLP, focusing on ${attorney.practiceAreas
      .slice(0, 2)
      .join(" and ")}.`,
  };
}

export default function AttorneyProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const attorney = attorneys.find((a) => a.slug === params.slug);

  if (!attorney) {
    notFound();
  }

  // Proxy for "this attorney's matters" until per-attorney result linking
  // exists: surface results whose practice area is in this attorney's focus.
  const relatedResults = caseResults.filter((result) =>
    attorney.practiceAreas.includes(result.practiceArea),
  );

  return (
    <AttorneyProfile
      attorney={attorney}
      relatedResults={relatedResults}
    />
  );
}
