import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PracticeAreaCards from "@/components/home/PracticeAreaCards";
import IndustriesServed from "@/components/home/IndustriesServed";
import AttorneyTeaser from "@/components/home/AttorneyTeaser";
import TestimonialBlock from "@/components/home/TestimonialBlock";

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
      <IndustriesServed />
      <AttorneyTeaser />
      <TestimonialBlock />
    </main>
  );
}
