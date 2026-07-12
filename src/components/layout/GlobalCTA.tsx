"use client";

import { usePathname } from "next/navigation";
import CTASection from "@/components/layout/CTASection";

// Practice area detail pages render their own contextual inline CTA
// (see PracticeAreaDetail's "Discuss Your {area.title} Matter" section),
// so the generic global CTA would be a redundant second CTA before the
// footer on those pages only.
const PRACTICE_AREA_DETAIL_PATTERN = /^\/practice-areas\/[^/]+$/;

export default function GlobalCTA() {
  const pathname = usePathname();

  if (PRACTICE_AREA_DETAIL_PATTERN.test(pathname)) {
    return null;
  }

  return <CTASection />;
}
