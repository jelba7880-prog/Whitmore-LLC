import type { Attorney } from "@/types";

export const attorneys: Attorney[] = [
  {
    slug: "richard-whitmore",
    name: "Richard A. Whitmore",
    title: "Managing Partner",
    // TODO: real bar numbers pending verification — see pre-launch-checklist.md
    barNumbers: [],
    bio: "Richard Whitmore is the founding partner of Whitmore Harlow LLP, concentrating his practice on fraud and asset recovery, commercial litigation, and securities matters. He has represented businesses, investors, and individuals in disputes involving misappropriated funds, breach of fiduciary duty, and complex commercial fraud, litigating before state and federal courts in New York, including the U.S. District Court for the Southern District of New York. He regularly works with forensic accountants and asset-tracing investigators to pursue recovery across multiple jurisdictions.",
    practiceAreas: [
      "fraud-asset-recovery",
      "commercial-litigation",
      "securities-fraud",
    ],
    imageUrl: "/images/attorneys/richard-whitmore.jpg",
    initials: "RW",
    education: [
      "J.D., Fordham University School of Law",
      "B.A., Political Science, Boston College",
    ],
    admissions: ["New York", "U.S. District Court S.D.N.Y."],
  },
  {
    slug: "catherine-harlow",
    name: "Catherine M. Harlow",
    title: "Partner",
    // TODO: real bar numbers pending verification — see pre-launch-checklist.md
    barNumbers: [],
    bio: "Catherine Harlow concentrates her practice on international arbitration, economic disputes, and contract disputes, representing businesses and individuals in cross-border commercial matters. She has appeared before international arbitral tribunals and in state and federal courts in California, including the U.S. District Court for the Central District of California, with particular focus on enforcement of arbitral awards and complex contract litigation.",
    practiceAreas: [
      "international-arbitration",
      "economic-disputes",
      "contract-disputes",
    ],
    imageUrl: "/images/attorneys/catherine-harlow.jpg",
    initials: "CH",
    education: [
      "J.D., UCLA School of Law",
      "B.A., Economics, University of Southern California",
    ],
    admissions: ["California", "U.S. District Court C.D. Cal."],
  },
];
