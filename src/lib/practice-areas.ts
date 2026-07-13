import type { PracticeArea } from "@/types";

// Each practice area's process steps must be authored individually — do not
// reintroduce a shared generator/helper for this field. A prior version of
// this file used a shared placeholderProcess() helper, which caused all 6
// areas to silently display identical content.

export const practiceAreas: PracticeArea[] = [
  {
    slug: "fraud-asset-recovery",
    title: "Fraud & Asset Recovery",
    shortDescription:
      "When a client discovers assets have vanished through fraud or a breach of trust, recovery often depends on speed. We trace misappropriated funds across jurisdictions and pursue judgment, disgorgement, and recovery wherever the money leads.",
    longDescription:
      "<p>Fraud rarely announces itself. It surfaces gradually, through a missed distribution, an unreachable business partner, or a transaction that doesn't reconcile, and by the time it's confirmed, the assets in question have often already begun moving. Whitmore Harlow LLP represents individuals, businesses, and institutional clients in identifying, tracing, and recovering assets lost to fraud, breach of fiduciary duty, and related misconduct.</p><h3>Why Speed Matters</h3><p>Asset recovery is fundamentally a race against dissipation. Funds moved through shell entities, offshore accounts, or intermediary transactions become harder to trace and harder to recover the longer they go unaddressed. We prioritize an early, realistic assessment of what's actually recoverable, so resources are directed toward strategies likely to result in real recovery, not a judgment that can't be collected.</p><p>Our work typically begins with forensic tracing: reconstructing the flow of funds through bank records, corporate filings, and transaction histories to identify where assets currently sit and who controls them. This groundwork informs both the legal theory of the case and, where the facts support it, an application for emergency relief, such as a freezing order or attachment, to prevent further dissipation while the underlying claim proceeds.</p><h3>Pursuing Recovery Across Jurisdictions</h3><p>Fraud cases frequently cross state and national borders, and recovery often requires coordinating with counsel and enforcement mechanisms outside the jurisdiction where a claim is filed. We pursue judgment, disgorgement, and recovery wherever the evidence leads, including recognition and enforcement of U.S. judgments in foreign jurisdictions where applicable.</p><p>Not every matter warrants full-scale litigation, and not every loss is fully recoverable. We give clients a candid assessment of the realistic path forward, including costs, timeline, and likelihood of recovery, before committing to a strategy.</p>",
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
    faqs: [
      {
        question: "How quickly should I act after discovering a fraud?",
        answer:
          "As soon as possible. Assets that can be traced and frozen early are far more likely to be recovered than assets left untouched while a claim is prepared. We can often begin an initial assessment within days of a consultation, including evaluating whether emergency remedies like a freezing order are appropriate.",
      },
      {
        question: "Can assets moved overseas still be recovered?",
        answer:
          "Often, yes, though it typically requires coordinating with counsel and enforcement mechanisms in the relevant foreign jurisdiction. We work with international asset-tracing investigators and pursue recognition of U.S. judgments abroad where the facts and receiving jurisdiction's law support it.",
      },
      {
        question: "What does the asset-tracing process involve?",
        answer:
          "We typically work with forensic accountants to reconstruct the flow of funds — bank records, corporate structures, and transaction histories — to identify where assets currently sit and who controls them. This groundwork shapes both the legal strategy and, where appropriate, the request for emergency relief.",
      },
      {
        question: "How are fees structured in a recovery matter?",
        answer:
          "Fee structures vary depending on the nature of the recovery and the client's preference, and may include hourly, contingent, or hybrid arrangements. We discuss the appropriate structure for a specific matter during the initial consultation, before any engagement begins.",
      },
    ],
    imageUrl: "/images/practice-areas/fraud-asset-recovery.jpg",
    sidebarVideo: {
      videoId: "43FTPuTCDTY",
      title:
        "True Fraud Stories: Hunter Wise's Silvery Slope — CFTC investor education series",
      caption: "From the CFTC's investor education series",
    },
  },
  {
    slug: "commercial-litigation",
    title: "Commercial Litigation",
    shortDescription:
      "When a contract dispute, partnership conflict, or competitive threat puts a company's operations at risk, the right strategy can be decisive. We represent businesses and investors in state and federal court through trial and appeal.",
    longDescription:
      "<p>Commercial disputes rarely resolve themselves, and the cost of inaction, whether a stalled negotiation, an unresolved partnership conflict, or a competitor operating in bad faith, often compounds the longer it goes unaddressed. Whitmore Harlow LLP represents businesses, investors, and institutional clients in commercial litigation in state and federal court, from initial dispute assessment through trial and, where necessary, appeal.</p><h3>Building a Strategy Around the Client's Actual Objectives</h3><p>Not every commercial dispute is best resolved the same way. A business preparing for a sale may prioritize a fast, contained resolution; a company defending a core business practice may need to litigate fully to protect its long-term position. We begin every matter by understanding what a client is actually trying to accomplish, then build a strategy around that objective.</p><p>Our commercial litigation practice covers breach of contract, partnership and shareholder conflicts, unfair competition, and disputes arising from the sale or dissolution of a business. We regularly appear in both state and federal court, and evaluate jurisdiction and venue early, since forum can meaningfully affect a matter's procedural posture and available remedies.</p><h3>Litigating Through Trial When Negotiation Isn't Enough</h3><p>Many commercial disputes resolve before trial, through negotiation, mediation, or dispositive motion practice. We pursue negotiated resolution where it serves a client's interests, while preparing every matter as though it may proceed to trial, so that option remains available if the other side isn't prepared to resolve the dispute on fair terms.</p>",
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
    faqs: [
      {
        question: "When does a business dispute warrant litigation?",
        answer:
          "Litigation typically becomes necessary once negotiation has stalled, a limitations period is approaching, or the other side shows no genuine willingness to resolve the matter without court involvement. We evaluate the strength of the claim, the realistic financial exposure, and available alternatives before recommending litigation over negotiated resolution.",
      },
      {
        question: "How long does commercial litigation typically take?",
        answer:
          "Timelines vary significantly by jurisdiction, case complexity, and whether a matter proceeds to trial or resolves earlier. Straightforward disputes may resolve in months; matters involving extensive discovery, multiple parties, or appeals can take considerably longer. We provide a realistic timeline estimate specific to each matter once we've assessed the claims involved.",
      },
      {
        question:
          "What is the difference between state and federal court for my matter?",
        answer:
          "Federal jurisdiction generally requires either a federal question or diversity of citizenship with sufficient amount in controversy; state courts handle the broader range of commercial disputes. The choice affects procedural rules, available judges, and in some cases strategic considerations around venue. We evaluate which forum best serves a client's matter early in the engagement.",
      },
      {
        question: "Can a dispute be resolved without going to trial?",
        answer:
          "Many commercial disputes resolve through negotiation, mediation, or summary judgment before reaching trial. We pursue negotiated resolution where it serves the client's interests, while preparing every matter as though it may proceed to trial, so that option remains available if the other side isn't prepared to resolve the matter fairly.",
      },
    ],
    imageUrl: "/images/practice-areas/commercial-litigation.jpg",
  },
  {
    slug: "securities-fraud",
    title: "Securities Fraud",
    shortDescription:
      "Investors who suffer losses from broker misconduct, market manipulation, or misrepresented investments often have limited time to act. We pursue claims in court and FINRA arbitration to recover losses and hold wrongdoers accountable.",
    longDescription:
      "<p>Investors who lose money to broker misconduct, market manipulation, or a materially misrepresented investment face two challenges at once: understanding what actually happened, and moving quickly enough to preserve their legal options. Whitmore Harlow LLP represents individual and institutional investors in securities fraud matters, pursuing claims in court and before FINRA arbitration panels.</p><h3>Identifying Actionable Misconduct</h3><p>Not every investment loss is the product of fraud, and not every instance of fraud is easily provable from the outside. We closely review account statements, trading records, offering documents, and communications between a client and their broker or advisor, to determine whether losses stem from ordinary market risk or from conduct that's actually actionable.</p><p>Many securities disputes are subject to mandatory arbitration under the customer agreement between an investor and their brokerage firm, while others, particularly claims against issuers or non-member parties, may proceed in court. We evaluate the relevant agreements early, since the choice of forum affects both strategy and timeline.</p><h3>Working Toward Recovery</h3><p>Securities fraud claims are frequently time-sensitive, governed by limitations periods that can be shorter than investors expect. We recommend seeking an evaluation promptly, since delay can foreclose options that would otherwise be available. Where litigation or arbitration proceeds, we work with financial experts to quantify losses and pursue recovery through judgment, settlement, or applicable regulatory distributions.</p>",
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
    faqs: [
      {
        question: "What conduct qualifies as securities fraud?",
        answer:
          "Securities fraud can include misrepresentation or omission of material facts in connection with an investment, unauthorized trading, unsuitable investment recommendations, and fraudulent schemes such as Ponzi structures. Whether specific conduct is actionable depends on the facts, including what was disclosed, what was reasonably relied upon, and the resulting losses.",
      },
      {
        question: "Is my claim better suited to court or FINRA arbitration?",
        answer:
          "Many disputes involving a broker or brokerage firm are subject to mandatory FINRA arbitration under the customer agreement, while claims against issuers or non-member parties may proceed in court. We review the relevant account agreements and the parties involved to determine the appropriate forum before a claim is filed.",
      },
      {
        question: "What is the deadline to bring a securities fraud claim?",
        answer:
          "Deadlines vary by claim type, governing statute, and jurisdiction, and can be shorter than clients expect. Because delay can permanently bar a claim, we recommend contacting us promptly after discovering a potential loss so we can evaluate the applicable limitations period for the specific facts involved.",
      },
      {
        question: "How are damages calculated in an investor claim?",
        answer:
          "Damages calculations typically account for actual investment losses, and in some cases lost opportunity or other recoverable amounts, depending on the theory of liability and applicable law. We work with financial experts where appropriate to establish a defensible damages figure specific to the claim.",
      },
    ],
    imageUrl: "/images/practice-areas/securities-fraud.jpg",
    sidebarVideo: {
      videoId: "S3NvLQglyy0",
      title:
        "How to Protect Yourself From Fraud Aimed at Older Investors — Investor.gov (U.S. Securities and Exchange Commission)",
      caption:
        "From Investor.gov, a resource of the U.S. Securities and Exchange Commission",
    },
  },
  {
    slug: "economic-disputes",
    title: "Economic Disputes",
    shortDescription:
      "When partners, investors, or businesses disagree over valuation, profits, or financial terms, resolution takes both legal and forensic expertise. We work with forensic accountants to quantify damages and resolve disputes through litigation or negotiation.",
    longDescription:
      "<p>Disputes over valuation, profit distribution, and financial terms sit at the intersection of law and accounting; resolving them requires both a sound legal theory and a defensible, well-documented damages analysis. Whitmore Harlow LLP represents businesses, partners, and investors in economic disputes, working with forensic accountants to quantify what's actually owed.</p><h3>Quantifying the Dispute Before Positions Harden</h3><p>Many economic disputes escalate unnecessarily because the parties are working from different, often informal, assumptions about what's owed. We prioritize an early, rigorous damages analysis, whether the dispute involves a contested valuation, a profit-allocation disagreement among partners, or a broader claim of financial harm. A documented, defensible position tends to change the negotiating dynamic considerably.</p><p>Our work regularly involves partnership and shareholder disputes, valuation disagreements arising from a business sale or buyout, and disputes over financial terms in commercial agreements. Because these matters often involve an ongoing business relationship, resolution through negotiation or mediation is frequently preferable to public litigation where the facts support it.</p><h3>Litigating When Negotiation Isn't Possible</h3><p>Not every economic dispute can be resolved privately. When negotiation stalls or the opposing party isn't acting in good faith, we proceed to litigation, backed by the same rigorous damages analysis developed at the outset.</p>",
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
    faqs: [
      {
        question: "What types of economic disputes do you handle?",
        answer:
          "We handle disputes involving business valuation disagreements, profit and distribution disputes among partners or shareholders, and other financial disagreements between businesses or investors where the underlying facts require both legal and financial analysis.",
      },
      {
        question: "How are damages quantified in a financial dispute?",
        answer:
          "Quantification typically depends on the nature of the dispute — lost profits, diminished valuation, or improperly withheld distributions each require a different analytical approach. We work with forensic accountants to build a damages position grounded in the specific financial facts of the matter.",
      },
      {
        question: "Do you work with forensic accountants and experts?",
        answer:
          "Yes. Financial disputes often turn on details that require specialized accounting or valuation expertise, and we regularly work with forensic accountants and other financial experts to establish and support a client's position.",
      },
      {
        question:
          "Can a partnership or shareholder dispute be resolved privately?",
        answer:
          "Many partnership and shareholder disputes resolve through negotiation or mediation, particularly where an ongoing business relationship or reputational considerations make a public court proceeding undesirable. We pursue private resolution where appropriate, while preparing the matter for litigation if the other side isn't willing to negotiate in good faith.",
      },
    ],
    imageUrl: "/images/practice-areas/economic-disputes.jpg",
  },
  {
    slug: "contract-disputes",
    title: "Contract Disputes",
    shortDescription:
      "A breached or ambiguous contract can put a deal, a relationship, or a company's bottom line at risk. We enforce and defend contractual rights through litigation or arbitration, pursuing the remedies a breach requires.",
    longDescription:
      "<p>A contract is only as reliable as the parties' willingness to honor it, and when one side doesn't, the other is often left weighing a costly, uncertain dispute against walking away from rights they're entitled to enforce. Whitmore Harlow LLP enforces and defends contractual rights through litigation or arbitration, depending on what the parties' agreement requires.</p><h3>Interpreting the Agreement's Actual Terms</h3><p>Contract disputes frequently turn on interpretation as much as on the underlying facts. Where language is ambiguous, we build the strongest available reading of a contract's actual terms: its plain language first, and, where that's insufficient, evidence of the parties' intent, course of dealing, and relevant industry custom.</p><p>Many commercial contracts include arbitration clauses directing disputes outside of court. We review the governing agreement early in every matter to confirm whether arbitration applies and, if so, under which rules and before which institution, since that determination shapes the strategy going forward.</p><h3>Pursuing the Right Remedy</h3><p>Depending on what the contract provides for and what the facts support, available remedies may include monetary damages, specific performance, or termination of the agreement. We evaluate which remedy actually serves a client's interests before determining a strategy, rather than defaulting to the most aggressive option available.</p>",
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
    faqs: [
      {
        question: "What remedies are available for a breach of contract?",
        answer:
          "Available remedies typically include monetary damages, specific performance, or termination of the agreement, depending on what the contract provides for and what the facts support. We evaluate which remedy best serves a client's interests before determining a litigation strategy.",
      },
      {
        question:
          "Does my contract require arbitration instead of litigation?",
        answer:
          "Many commercial contracts include arbitration clauses that require disputes to proceed outside of court. We review the relevant agreement early to confirm whether arbitration is required, and if so, under which rules and before which institution.",
      },
      {
        question: "How is breach proven when terms are ambiguous?",
        answer:
          "Ambiguous contract terms are typically interpreted using the agreement's plain language first, and where that's insufficient, evidence of the parties' intent, course of dealing, and industry custom. We build the strongest available interpretation of the agreement's actual terms to support a client's position.",
      },
      {
        question:
          "What is the deadline to bring a breach-of-contract claim?",
        answer:
          "Limitations periods for contract claims vary by jurisdiction and the type of agreement involved, and can be affected by when the breach was discovered. We recommend evaluating a potential claim promptly, since delay can affect what remedies remain available.",
      },
    ],
    imageUrl: "/images/practice-areas/contract-disputes.jpg",
  },
  {
    slug: "international-arbitration",
    title: "International Arbitration",
    shortDescription:
      "Cross-border disputes raise difficult questions of governing law, jurisdiction, and award enforcement. We represent clients in commercial arbitration before international tribunals and pursue enforcement of awards across borders.",
    longDescription:
      "<p>Disputes that cross national borders introduce questions domestic litigation doesn't: which law governs, which tribunal has authority, and ultimately whether a favorable outcome can actually be enforced against assets that may sit in an entirely different jurisdiction. Whitmore Harlow LLP represents clients in international commercial arbitration, from determining governing law and forum through presenting the case and, where necessary, enforcing the resulting award.</p><h3>Establishing Governing Law and Forum</h3><p>Governing law and the seat of arbitration are typically fixed by the parties' underlying arbitration agreement. Where that agreement is silent or ambiguous, these questions are resolved according to applicable institutional rules and relevant principles of international arbitration law. We resolve this groundwork early, since it shapes every procedural decision that follows.</p><p>We appear before major international arbitral institutions, with the appropriate forum depending on the parties' agreement and the nature of the dispute. Cross-border matters frequently require coordinating counsel, evidence, and witnesses across jurisdictions, and we manage that coordination directly.</p><h3>Enforcing the Award</h3><p>An arbitral award is only valuable if it can actually be enforced. Foreign arbitral awards are generally enforceable in U.S. courts under the New York Convention, subject to limited grounds for challenge, and we pursue recognition and enforcement in the jurisdiction where the counterparty's assets are located, since that's ultimately what determines whether an award translates into an actual recovery.</p>",
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
    faqs: [
      {
        question: "Which arbitral institutions do you appear before?",
        answer:
          "We appear before a range of major international arbitral institutions, with the appropriate forum depending on the parties' arbitration agreement and the nature of the dispute.",
      },
      {
        question:
          "How is the governing law and seat of arbitration determined?",
        answer:
          "Governing law and seat are typically fixed by the parties' underlying arbitration agreement. Where the agreement is silent or ambiguous, these questions are resolved according to the applicable institutional rules and relevant international arbitration law.",
      },
      {
        question:
          "How are foreign arbitral awards enforced in the United States?",
        answer:
          "Foreign arbitral awards are generally enforceable in U.S. courts under the New York Convention, subject to limited grounds for challenge. We pursue recognition and enforcement proceedings in the jurisdiction where the counterparty's assets are located.",
      },
      {
        question:
          "How long does an international arbitration typically take?",
        answer:
          "Timelines vary significantly based on the complexity of the dispute, the arbitral institution's procedures, and whether either party challenges the resulting award.",
      },
    ],
    imageUrl: "/images/practice-areas/international-arbitration.jpg",
  },
];
