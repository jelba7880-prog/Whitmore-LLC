import type { CaseResult } from "@/types";

// One placeholder result per practice area slug. Amounts are illustrative
// placeholders; no client names are used. Year ∈ {2023, 2024}.
export const caseResults: CaseResult[] = [
  {
    id: "result-001",
    amount: "$4.2M",
    description: "Judgment & Disgorgement",
    matterType: "Investment Fraud · Ponzi Recovery",
    court: "S.D. Florida",
    year: 2024,
    practiceArea: "fraud-asset-recovery",
    challenge:
      "A group of investors discovered their retirement savings had been diverted into a Ponzi scheme disguised as a real estate fund.",
    resolution:
      "We traced the diverted funds through multiple shell entities and obtained judgment and disgorgement to recover the investors' losses.",
  },
  {
    id: "result-002",
    amount: "$2.8M",
    description: "Jury Verdict",
    matterType: "Breach of Fiduciary Duty · Business Tort",
    court: "S.D. New York",
    year: 2023,
    practiceArea: "commercial-litigation",
    challenge:
      "A minority partner was frozen out of a business and stripped of profits by a co-founder who breached his fiduciary duties.",
    resolution:
      "At trial, we proved the breach and business tort claims, and the jury returned a verdict covering the lost profits and damages.",
  },
  {
    id: "result-003",
    amount: "$1.1M",
    description: "Arbitral Award",
    matterType: "Securities Fraud · Broker Misconduct",
    court: "D. New Jersey",
    year: 2024,
    practiceArea: "securities-fraud",
    challenge:
      "A retired investor's savings were placed into unsuitable, high-risk investments by a broker who misrepresented the risk involved.",
    resolution:
      "We pursued the claim in FINRA arbitration and secured an award covering the investor's losses and associated damages.",
  },
  {
    id: "result-004",
    amount: "$890K",
    description: "Settlement",
    matterType: "Shareholder Dispute · Valuation",
    court: "N.D. Illinois",
    year: 2023,
    practiceArea: "economic-disputes",
    challenge:
      "Shareholders in a closely held company disagreed sharply over its valuation following a forced buyout offer.",
    resolution:
      "Working with forensic accountants, we built an independent valuation and negotiated a settlement reflecting the company's worth.",
  },
  {
    id: "result-005",
    amount: "$3.4M",
    description: "Summary Judgment",
    matterType: "Breach of Contract · Supply Agreement",
    court: "E.D. Texas",
    year: 2024,
    practiceArea: "contract-disputes",
    challenge:
      "A supplier stopped fulfilling its obligations under a multi-year supply agreement, leaving our client to cover costs on short notice.",
    resolution:
      "We moved for summary judgment on the breach, and the court ruled in our client's favor without the need for a trial.",
  },
  {
    id: "result-006",
    amount: "$6.7M",
    description: "Award Confirmed & Enforced",
    matterType: "Cross-Border Commercial Arbitration",
    court: "S.D. New York",
    year: 2023,
    practiceArea: "international-arbitration",
    challenge:
      "A cross-border joint venture collapsed after a foreign partner refused to honor its payment obligations under the venture agreement.",
    resolution:
      "We obtained a favorable arbitral award and confirmed and enforced it in U.S. federal court to secure payment.",
  },
];
