import type { Metadata } from "next";
import { attorneys } from "@/lib/attorneys";

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
  return (
    <main>
      <h1>{params.slug}</h1>
      {/* TODO: Attorney hero, bio, notable matters, articles */}
    </main>
  );
}
