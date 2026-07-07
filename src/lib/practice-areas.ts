import type { FAQ, PracticeArea } from "@/types";

// Each practice area's process steps must be authored individually — do not
// reintroduce a shared generator/helper for this field. A prior version of
// this file used a shared placeholderProcess() helper, which caused all 6
// areas to silently display identical content.

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
    process: [
      {
        number: 1,
        eyebrow: "STEP ONE",
        title: "Trace the Assets",
        body: "We work with forensic accountants and investigators to identify where funds moved and what's realistically recoverable, before any filing.",
      },
      {
        number: 2,
        eyebrow: "STEP TWO",
        title: "Secure the Recovery",
        body: "We pursue emergency remedies — freezing orders, attachments — to prevent further dissipation while the underlying claim is prepared.",
      },
      {
        number: 3,
        eyebrow: "STEP THREE",
        title: "Enforce the Judgment",
        body: "We pursue enforcement across jurisdictions, including garnishment, receivership, and recognition proceedings, until funds are actually recovered.",
      },
    ],
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
      "When a contract dispute, partnership conflict, or competitive threat puts a company's operations at risk, the right strategy can be decisive. We represent businesses and investors in state and federal court through trial and appeal.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: [
      {
        number: 1,
        eyebrow: "STEP ONE",
        title: "Assess the Dispute",
        body: "We evaluate the claims, exposure, and realistic outcomes before committing to a courtroom strategy.",
      },
      {
        number: 2,
        eyebrow: "STEP TWO",
        title: "Build the Record",
        body: "Discovery, depositions, and expert testimony are assembled to support the strongest available position.",
      },
      {
        number: 3,
        eyebrow: "STEP THREE",
        title: "Resolve or Try the Case",
        body: "We pursue a negotiated resolution where it serves the client, or take the matter to trial when it doesn't.",
      },
    ],
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
    process: [
      {
        number: 1,
        eyebrow: "STEP ONE",
        title: "Identify the Scheme",
        body: "We analyze trading records, offering documents, and communications to establish how investors were misled.",
      },
      {
        number: 2,
        eyebrow: "STEP TWO",
        title: "Pursue Regulatory & Civil Claims",
        body: "We coordinate civil claims alongside relevant regulatory findings — SEC, FINRA, state securities regulators — where applicable.",
      },
      {
        number: 3,
        eyebrow: "STEP THREE",
        title: "Recover Investor Losses",
        body: "We pursue judgment, settlement, or receivership distributions toward recoverable funds.",
      },
    ],
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
      "When partners, investors, or businesses disagree over valuation, profits, or financial terms, resolution takes both legal and forensic expertise. We work with forensic accountants to quantify damages and resolve disputes through litigation or negotiation.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: [
      {
        number: 1,
        eyebrow: "STEP ONE",
        title: "Quantify the Damages",
        body: "We work with forensic accountants to establish what's actually owed before positions harden.",
      },
      {
        number: 2,
        eyebrow: "STEP TWO",
        title: "Negotiate from Strength",
        body: "We present a documented, defensible damages position to drive resolution without unnecessary litigation cost.",
      },
      {
        number: 3,
        eyebrow: "STEP THREE",
        title: "Litigate When Necessary",
        body: "When negotiation stalls, we proceed to litigation backed by the same damages analysis.",
      },
    ],
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
      "A breached or ambiguous contract can put a deal, a relationship, or a company's bottom line at risk. We enforce and defend contractual rights through litigation or arbitration, pursuing the remedies a breach requires.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: [
      {
        number: 1,
        eyebrow: "STEP ONE",
        title: "Interpret the Agreement",
        body: "We identify the specific provisions at issue and the strongest reading of the contract's actual terms.",
      },
      {
        number: 2,
        eyebrow: "STEP TWO",
        title: "Enforce or Defend",
        body: "We pursue breach claims or defend against them, depending on which side of the dispute our client sits on.",
      },
      {
        number: 3,
        eyebrow: "STEP THREE",
        title: "Secure the Remedy",
        body: "We pursue damages, specific performance, or termination rights — whichever the contract and facts support.",
      },
    ],
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
      "Cross-border disputes raise difficult questions of governing law, jurisdiction, and award enforcement. We represent clients in commercial arbitration before international tribunals and pursue enforcement of awards across borders.",
    longDescription: "{/* TODO: 3+ paragraph long description */}",
    process: [
      {
        number: 1,
        eyebrow: "STEP ONE",
        title: "Confirm Jurisdiction & Forum",
        body: "We establish governing law, applicable arbitration rules, and the proper tribunal before the matter proceeds.",
      },
      {
        number: 2,
        eyebrow: "STEP TWO",
        title: "Present the Case",
        body: "We build and present the case before the arbitral tribunal, coordinating counsel and evidence across jurisdictions.",
      },
      {
        number: 3,
        eyebrow: "STEP THREE",
        title: "Enforce the Award",
        body: "We pursue recognition and enforcement of the resulting award in the jurisdictions where assets are located.",
      },
    ],
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
