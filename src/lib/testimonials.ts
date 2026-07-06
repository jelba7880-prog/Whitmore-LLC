import type { Testimonial } from "@/types";

// Canonical homepage testimonials — single source of truth (mirrors lib/stats.ts).
// No full client names anywhere: client type + matter type only, per site convention.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "After years of failed attempts with other firms, Whitmore & Associates recovered the full principal and interest within fourteen months. Their command of complex financial fraud litigation is unmatched.",
    clientType: "Institutional Client",
    matterType: "Securities Fraud Matter",
    court: "Southern District of New York",
    year: 2024,
  },
  {
    quote:
      "When the funds moved through three jurisdictions in as many weeks, most firms told us to expect years of delay. Whitmore & Associates traced and froze the assets before the trail went cold.",
    clientType: "Family Office",
    matterType: "Cross-Border Asset Recovery",
    court: "Southern District of Florida",
    year: 2023,
  },
  {
    quote:
      "Our co-investor's conduct put the entire fund at risk. The team built a case grounded in the partnership agreement itself, not speculation, and the resolution reflected that discipline.",
    clientType: "Private Equity Sponsor",
    matterType: "Breach of Fiduciary Duty & Partnership Dispute",
    court: "Delaware Court of Chancery",
    year: 2023,
  },
  {
    quote:
      "A supplier falsified certifications for over a year before we caught it. Whitmore & Associates untangled the paper trail and secured restitution without dragging the case through a jury trial.",
    clientType: "Manufacturing Company",
    matterType: "Commercial Contract Fraud",
    court: "Northern District of Illinois",
    year: 2022,
  },
  {
    quote:
      "Clawback litigation against a collapsed fund's inner circle is rarely fast or clean. Their team moved methodically and kept every stakeholder informed at each stage of recovery.",
    clientType: "Hedge Fund",
    matterType: "Investment Fraud · Ponzi Recovery",
    court: "Southern District of New York",
    year: 2024,
  },
  {
    quote:
      "Winning the arbitration was only half the battle — enforcing it across borders was the real fight. Whitmore & Associates handled that fight without losing a step.",
    clientType: "International Trading Company",
    matterType: "Arbitration Award Enforcement",
    court: "ICC Arbitration (Paris); enforced S.D. New York",
    year: 2022,
  },
];
