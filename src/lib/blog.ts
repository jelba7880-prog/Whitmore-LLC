import type { BlogPost } from "@/types";
import { attorneys } from "@/lib/attorneys";

export const blogPosts: BlogPost[] = [
  {
    slug: "recognizing-warning-signs-of-investment-fraud",
    title: "Recognizing the Warning Signs of Investment Fraud",
    deck:
      "Common red flags that distinguish a legitimate investment from a fraudulent scheme.",
    authorSlug: "richard-whitmore",
    practiceArea: "fraud-asset-recovery",
    publishedAt: "2024-03-12T00:00:00.000Z",
    readMinutes: 6,
    content: "{/* TODO: Article body */}",
    relatedSlugs: [],
    // heroImage intentionally absent — default-hero.jpg removed for
    // baked-in garbled logo artifact (see public/images/README.md).
  },
  {
    slug: "navigating-cross-border-commercial-arbitration",
    title: "Navigating Cross-Border Commercial Arbitration",
    deck:
      "Key considerations for businesses facing disputes that span multiple jurisdictions.",
    authorSlug: "catherine-harlow",
    practiceArea: "international-arbitration",
    publishedAt: "2024-05-02T00:00:00.000Z",
    readMinutes: 8,
    content: "{/* TODO: Article body */}",
    relatedSlugs: [],
    // heroImage intentionally absent — default-hero.jpg removed for
    // baked-in garbled logo artifact (see public/images/README.md).
  },
];

// Build-time invariant (CLAUDE.md Hard Rule #5): every blog author must be a
// named attorney on the /attorneys roster. Fail the build on any mismatch.
const attorneySlugs = new Set(attorneys.map((attorney) => attorney.slug));
for (const post of blogPosts) {
  if (!attorneySlugs.has(post.authorSlug)) {
    throw new Error(
      `Blog post "${post.slug}" has authorSlug "${post.authorSlug}", which does not match any attorney in lib/attorneys.ts.`,
    );
  }
}
