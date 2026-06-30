import type { FAQ, PracticeArea, ProcessStep } from "@/types";

// Shared placeholder process scaffold. Real, area-specific steps replace these
// during content authoring; structure (≥3 steps) is enforced here.
function placeholderProcess(): ProcessStep[] {
  return [
    {
      number: 1,
      eyebrow: "{/* TODO: step 1 eyebrow */}",
      title: "{/* TODO: step 1 title */}",
      body: "{/* TODO: step 1 body */}",
    },
    {
      number: 2,
      eyebrow: "{/* TODO: step 2 eyebrow */}",
      title: "{/* TODO: step 2 title */}",
      body: "{/* TODO: step 2 body */}",
    },
    {
      number: 3,
      eyebrow: "{/* TODO: step 3 eyebrow */}",
      title: "{/* TODO: step 3 title */}",
      body: "{/* TODO: step 3 body */}",
    },
  ];
}

// FAQ questions are real placeholder copy; answers are authored later.
function faqs(questions: string[]): FAQ[] {
  return questions.map((question) => ({
    question,
    answer: "{/* TODO: answer */}",
  }));
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "fraud-asset-recovery",
    title: "Fraud & Asset Recovery",
    shortDescription:
      "Tracing and recovering assets misappropriated through fraud, Ponzi schemes, and breaches of fiduciary duty.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "How quickly should I act after discovering a fraud?",
      "Can assets moved overseas still be recovered?",
      "What does the asset-tracing process involve?",
      "How are fees structured in a recovery matter?",
    ]),
    relatedResults: ["result-001"],
    imageUrl: "/images/practice-areas/fraud-asset-recovery.jpg",
  },
  {
    slug: "commercial-litigation",
    title: "Commercial Litigation",
    shortDescription:
      "Representing businesses and investors in high-stakes commercial disputes across state and federal courts.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "When does a business dispute warrant litigation?",
      "How long does commercial litigation typically take?",
      "What is the difference between state and federal court for my matter?",
      "Can a dispute be resolved without going to trial?",
    ]),
    relatedResults: ["result-002"],
    imageUrl: "/images/practice-areas/commercial-litigation.jpg",
  },
  {
    slug: "securities-fraud",
    title: "Securities Fraud",
    shortDescription:
      "Pursuing claims on behalf of investors harmed by securities fraud, market manipulation, and broker misconduct.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "What conduct qualifies as securities fraud?",
      "Is my claim better suited to court or FINRA arbitration?",
      "What is the deadline to bring a securities fraud claim?",
      "How are damages calculated in an investor claim?",
    ]),
    relatedResults: ["result-003"],
    imageUrl: "/images/practice-areas/securities-fraud.jpg",
  },
  {
    slug: "economic-disputes",
    title: "Economic Disputes",
    shortDescription:
      "Resolving complex economic and financial disputes between businesses, partners, and investors.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "What types of economic disputes do you handle?",
      "How are damages quantified in a financial dispute?",
      "Do you work with forensic accountants and experts?",
      "Can a partnership or shareholder dispute be resolved privately?",
    ]),
    relatedResults: ["result-004"],
    imageUrl: "/images/practice-areas/economic-disputes.jpg",
  },
  {
    slug: "contract-disputes",
    title: "Contract Disputes",
    shortDescription:
      "Enforcing and defending contractual rights in disputes arising from breach, fraud, and non-performance.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "What remedies are available for a breach of contract?",
      "Does my contract require arbitration instead of litigation?",
      "How is breach proven when terms are ambiguous?",
      "What is the deadline to bring a breach-of-contract claim?",
    ]),
    relatedResults: ["result-005"],
    imageUrl: "/images/practice-areas/contract-disputes.jpg",
  },
  {
    slug: "international-arbitration",
    title: "International Arbitration",
    shortDescription:
      "Representing clients in cross-border commercial arbitration before leading international tribunals.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "Which arbitral institutions do you appear before?",
      "How is the governing law and seat of arbitration determined?",
      "How are foreign arbitral awards enforced in the United States?",
      "How long does an international arbitration typically take?",
    ]),
    relatedResults: ["result-006"],
    imageUrl: "/images/practice-areas/international-arbitration.jpg",
  },
];
