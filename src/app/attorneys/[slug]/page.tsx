import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { attorneys } from "@/lib/attorneys";

export function generateStaticParams() {
  return attorneys.map((attorney) => ({ slug: attorney.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const attorney = attorneys.find((a) => a.slug === params.slug);
  return {
    title: attorney ? attorney.name : "Attorney Profile",
    description: attorney
      ? `Attorney profile for ${attorney.name}, ${attorney.title} at Whitmore & Associates LLP.`
      : "Attorney profile at Whitmore & Associates LLP.",
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

  return (
    <main>
      <h1>{attorney.name}</h1>
      {/* TODO: Attorney hero (name, title, bar number + verify link), bio, notable matters, articles */}
    </main>
  );
}
