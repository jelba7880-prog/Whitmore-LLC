import type { ReactNode } from "react";
import type { Industry } from "@/types";

// Single source of truth for the 10 industries. Consumed by:
//   - components/home/IndustriesServed.tsx (homepage inline list — icon + label only)
//   - app/industries/page.tsx (full listing — icon, label, definition, involvement, cross-links)
//
// Compliance (hard rule): the `involvement` copy must never state or imply a
// specific matter count, dollar amount, win count, or client outcome tied to a
// specific industry unless it is pulled directly from lib/stats.ts or an
// existing entry in lib/results.ts. Firm "involvement" is substantiated by the
// cross-links in `relatedPracticeAreas`, not by invented figures. Keep this copy
// in general terms.

function IconBase({ children }: { children: ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const industries: Industry[] = [
  {
    slug: "financial-services-banking",
    label: "Financial Services & Banking",
    icon: (
      <IconBase>
        <path d="M3 9.5 12 4l9 5.5" />
        <path d="M5 9.5V19M9.5 9.5V19M14.5 9.5V19M19 9.5V19" />
        <path d="M3 19h18" />
      </IconBase>
    ),
    definition:
      "Banks, broker-dealers, lenders, and payment institutions operate under intensive regulation and move high volumes of funds between counterparties. Disputes in the sector frequently turn on fiduciary duty, regulatory exposure, and the flow of money between parties.",
    involvement:
      "We advise financial institutions and their counterparties in disputes involving fiduciary duty, regulatory exposure, and counterparty fraud. Our work includes tracing misappropriated funds, enforcing contractual obligations, and litigating claims arising from lending, trading, and custodial relationships.",
    relatedPracticeAreas: [
      "fraud-asset-recovery",
      "securities-fraud",
      "commercial-litigation",
    ],
  },
  {
    slug: "private-equity-hedge-funds",
    label: "Private Equity & Hedge Funds",
    icon: (
      <IconBase>
        <rect x="3.5" y="8" width="17" height="11" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        <path d="M3.5 12.5h17" />
      </IconBase>
    ),
    definition:
      "Private funds raise and deploy capital through complex partnership structures governed by detailed offering and governance documents. Conflicts commonly arise over valuation, fee and distribution allocation, disclosure, and the terms binding sponsors and investors.",
    involvement:
      "We represent funds, sponsors, and investors in disputes over valuation, distribution terms, and the interpretation of governing agreements. Our work includes claims of misrepresentation in fund offerings, conflicts among partners, and the recovery of misappropriated assets.",
    relatedPracticeAreas: [
      "securities-fraud",
      "economic-disputes",
      "commercial-litigation",
    ],
  },
  {
    slug: "real-estate-construction",
    label: "Real Estate & Construction",
    icon: (
      <IconBase>
        <rect x="5" y="3.5" width="14" height="17" />
        <path d="M8.5 7.5h1M14.5 7.5h1M8.5 11.5h1M14.5 11.5h1M8.5 15.5h1M14.5 15.5h1" />
        <path d="M10 20.5v-4h4v4" />
      </IconBase>
    ),
    definition:
      "Real estate and construction projects depend on layered contracts among owners, developers, contractors, and lenders, often over long timelines. Disputes commonly involve performance, payment, and the interpretation of the agreements that structure a project.",
    involvement:
      "We handle disputes arising from purchase agreements, development contracts, and construction defaults. Our work includes enforcing and defending contractual rights, litigating claims of nonperformance, and pursuing recovery where funds have been diverted or misapplied.",
    relatedPracticeAreas: [
      "contract-disputes",
      "commercial-litigation",
      "fraud-asset-recovery",
    ],
  },
  {
    slug: "healthcare-life-sciences",
    label: "Healthcare & Life Sciences",
    icon: (
      <IconBase>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 8v8M8 12h8" />
      </IconBase>
    ),
    definition:
      "Healthcare providers, life-sciences companies, and their commercial partners operate in a heavily regulated environment built on intricate supply, licensing, and reimbursement arrangements. Disputes often center on contract performance and the financial terms of these relationships.",
    involvement:
      "We advise healthcare and life-sciences businesses in commercial disputes involving supply and licensing agreements, partnership conflicts, and disagreements over financial terms. Our work focuses on contract enforcement and the resolution of complex economic disputes.",
    relatedPracticeAreas: [
      "commercial-litigation",
      "contract-disputes",
      "economic-disputes",
    ],
  },
  {
    slug: "technology-software",
    label: "Technology & Software",
    icon: (
      <IconBase>
        <rect x="5" y="5" width="14" height="14" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
      </IconBase>
    ),
    definition:
      "Technology and software companies build value on intellectual property, licensing, and platform relationships governed by fast-moving commercial agreements. Disputes frequently involve contract interpretation, alleged breach, and cross-border enforcement.",
    involvement:
      "We represent technology companies and their counterparties in disputes over licensing, development, and platform agreements. Our work includes contract litigation, commercial disputes among founders or investors, and arbitration of cross-border technology matters.",
    relatedPracticeAreas: [
      "contract-disputes",
      "commercial-litigation",
      "international-arbitration",
    ],
  },
  {
    slug: "energy-natural-resources",
    label: "Energy & Natural Resources",
    icon: (
      <IconBase>
        <path d="M13 3 5 13.5h5.5L11 21l8-11h-5.5z" />
      </IconBase>
    ),
    definition:
      "Energy and natural-resources ventures rely on long-term supply, joint-venture, and offtake agreements that often span multiple jurisdictions. Disputes in the sector regularly implicate governing law, contract performance, and the enforcement of awards across borders.",
    involvement:
      "We advise participants in energy and resources matters on disputes arising from supply, joint-venture, and offtake agreements. Our work includes commercial litigation and international arbitration, including the recognition and enforcement of awards across jurisdictions.",
    relatedPracticeAreas: [
      "international-arbitration",
      "contract-disputes",
      "commercial-litigation",
    ],
  },
  {
    slug: "manufacturing-industrials",
    label: "Manufacturing & Industrials",
    icon: (
      <IconBase>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.07 5.93l-1.56 1.56M7.49 16.51l-1.56 1.56M18.07 18.07l-1.56-1.56M7.49 7.49 5.93 5.93" />
      </IconBase>
    ),
    definition:
      "Manufacturers and industrial companies rely on interlocking supply, distribution, and purchase agreements that cross state and national lines. Disputes commonly arise from performance failures, pricing, and the terms of long-term commercial contracts.",
    involvement:
      "We represent manufacturers and industrial companies in disputes over supply, distribution, and purchase agreements. Our work includes enforcing and defending contractual rights, litigating breach claims, and arbitrating cross-border commercial matters.",
    relatedPracticeAreas: [
      "contract-disputes",
      "commercial-litigation",
      "international-arbitration",
    ],
  },
  {
    slug: "insurance",
    label: "Insurance",
    icon: (
      <IconBase>
        <path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6z" />
        <path d="M9.25 12 11 13.75 15 9.75" />
      </IconBase>
    ),
    definition:
      "Insurers, reinsurers, and policyholders operate under detailed policy language that governs coverage, exclusions, and the handling of claims. Disputes frequently turn on the interpretation of that language and the financial obligations it creates.",
    involvement:
      "We handle disputes involving coverage, policy interpretation, and the financial terms of insurance and reinsurance arrangements. Our work includes contract litigation and economic disputes over the amounts owed under a policy or program.",
    relatedPracticeAreas: [
      "commercial-litigation",
      "contract-disputes",
      "economic-disputes",
    ],
  },
  {
    slug: "retail-consumer-goods",
    label: "Retail & Consumer Goods",
    icon: (
      <IconBase>
        <path d="M5.5 8h13l-1 12h-11z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </IconBase>
    ),
    definition:
      "Retail and consumer-goods businesses depend on supply, vendor, and distribution relationships that move products across markets. Disputes often involve contract performance, payment, and, at times, fraud within the supply chain.",
    involvement:
      "We advise retail and consumer-goods companies in disputes over supply, vendor, and distribution agreements. Our work includes contract enforcement, commercial litigation, and the tracing and recovery of assets where fraud is involved.",
    relatedPracticeAreas: [
      "contract-disputes",
      "commercial-litigation",
      "fraud-asset-recovery",
    ],
  },
  {
    slug: "family-offices-high-net-worth",
    label: "Family Offices & High-Net-Worth Individuals",
    icon: (
      <IconBase>
        <circle cx="9" cy="8" r="2.75" />
        <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <circle cx="17" cy="9" r="2" />
        <path d="M14.5 19c.3-2.2 1.8-3.6 3.5-3.8" />
      </IconBase>
    ),
    definition:
      "Family offices and high-net-worth individuals manage concentrated wealth across investments, entities, and advisors, often with limited internal oversight. Disputes frequently involve breaches of trust, misappropriation, and conflicts among partners or advisors.",
    involvement:
      "We represent family offices and individuals in disputes involving breach of fiduciary duty, misappropriation of assets, and investment losses. Our work includes tracing and recovering diverted funds, securities and investment-fraud claims, and disputes over financial terms.",
    relatedPracticeAreas: [
      "fraud-asset-recovery",
      "securities-fraud",
      "economic-disputes",
    ],
  },
];
