import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PracticeAreaCards from "@/components/home/PracticeAreaCards";
import IndustriesServed from "@/components/home/IndustriesServed";
import AttorneyTeaser from "@/components/home/AttorneyTeaser";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import SectionDivider from "@/components/ui/SectionDivider";
import EditorialQuote from "@/components/ui/EditorialQuote";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout title template so the suffix isn't doubled.
  title: {
    absolute:
      "Fraud Recovery & Commercial Litigation | Whitmore & Associates LLP",
  },
  description:
    "Whitmore & Associates LLP represents individuals and institutions in complex fraud recovery, commercial litigation, and investment disputes. $2.1B recovered.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <PracticeAreaCards />
      <SectionDivider />
      <IndustriesServed />
      <EditorialQuote />
      <AttorneyTeaser />
      <TestimonialCarousel />
    </main>
  );
}
