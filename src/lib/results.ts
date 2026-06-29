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
  },
  {
    id: "result-002",
    amount: "$2.8M",
    description: "Jury Verdict",
    matterType: "Breach of Fiduciary Duty · Business Tort",
    court: "S.D. New York",
    year: 2023,
    practiceArea: "commercial-litigation",
  },
  {
    id: "result-003",
    amount: "$1.1M",
    description: "Arbitral Award",
    matterType: "Securities Fraud · Broker Misconduct",
    court: "D. New Jersey",
    year: 2024,
    practiceArea: "securities-fraud",
  },
  {
    id: "result-004",
    amount: "$890K",
    description: "Settlement",
    matterType: "Shareholder Dispute · Valuation",
    court: "N.D. Illinois",
    year: 2023,
    practiceArea: "economic-disputes",
  },
  {
    id: "result-005",
    amount: "$3.4M",
    description: "Summary Judgment",
    matterType: "Breach of Contract · Supply Agreement",
    court: "E.D. Texas",
    year: 2024,
    practiceArea: "contract-disputes",
  },
  {
    id: "result-006",
    amount: "$6.7M",
    description: "Award Confirmed & Enforced",
    matterType: "Cross-Border Commercial Arbitration",
    court: "S.D. New York",
    year: 2023,
    practiceArea: "international-arbitration",
  },
];
