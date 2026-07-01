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
      "When a client discovers assets have vanished through fraud or a breach of trust, recovery often depends on speed. We trace misappropriated funds across jurisdictions and pursue judgment, disgorgement, and recovery wherever the money leads.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "How quickly should I act after discovering a fraud?",
      "Can assets moved overseas still be recovered?",
      "What does the asset-tracing process involve?",
      "How are fees structured in a recovery matter?",
    ]),
    relatedResults: ["result-001"],
    // imageUrl intentionally absent — source file removed for baked-in
    // garbled logo artifact (see public/images/README.md).
  },
  {
    slug: "commercial-litigation",
    title: "Commercial Litigation",
    shortDescription:
      "When a contract dispute, partnership conflict, or competitive threat puts a company's operations at risk, the right strategy can be decisive. We represent businesses and investors in state and federal court through trial and appeal.",
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
      "Investors who suffer losses from broker misconduct, market manipulation, or misrepresented investments often have limited time to act. We pursue claims in court and FINRA arbitration to recover losses and hold wrongdoers accountable.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "What conduct qualifies as securities fraud?",
      "Is my claim better suited to court or FINRA arbitration?",
      "What is the deadline to bring a securities fraud claim?",
      "How are damages calculated in an investor claim?",
    ]),
    relatedResults: ["result-003"],
    // imageUrl intentionally absent — source file removed for baked-in
    // garbled logo artifact (see public/images/README.md).
  },
  {
    slug: "economic-disputes",
    title: "Economic Disputes",
    shortDescription:
      "When partners, investors, or businesses disagree over valuation, profits, or financial terms, resolution takes both legal and forensic expertise. We work with forensic accountants to quantify damages and resolve disputes through litigation or negotiation.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "What types of economic disputes do you handle?",
      "How are damages quantified in a financial dispute?",
      "Do you work with forensic accountants and experts?",
      "Can a partnership or shareholder dispute be resolved privately?",
    ]),
    relatedResults: ["result-004"],
    // imageUrl intentionally absent — source file removed for baked-in
    // garbled logo artifact (see public/images/README.md).
  },
  {
    slug: "contract-disputes",
    title: "Contract Disputes",
    shortDescription:
      "A breached or ambiguous contract can put a deal, a relationship, or a company's bottom line at risk. We enforce and defend contractual rights through litigation or arbitration, pursuing the remedies a breach requires.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "What remedies are available for a breach of contract?",
      "Does my contract require arbitration instead of litigation?",
      "How is breach proven when terms are ambiguous?",
      "What is the deadline to bring a breach-of-contract claim?",
    ]),
    relatedResults: ["result-005"],
    // imageUrl intentionally absent — source file removed for baked-in
    // garbled logo artifact (see public/images/README.md).
  },
  {
    slug: "international-arbitration",
    title: "International Arbitration",
    shortDescription:
      "Cross-border disputes raise difficult questions of governing law, jurisdiction, and award enforcement. We represent clients in commercial arbitration before international tribunals and pursue enforcement of awards across borders.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: placeholderProcess(),
    faqs: faqs([
      "Which arbitral institutions do you appear before?",
      "How is the governing law and seat of arbitration determined?",
      "How are foreign arbitral awards enforced in the United States?",
      "How long does an international arbitration typically take?",
    ]),
    relatedResults: ["result-006"],
    // imageUrl intentionally absent — source file removed for baked-in
    // garbled logo artifact (see public/images/README.md).
  },
];
