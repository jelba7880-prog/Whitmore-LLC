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
  {
    slug: "daniel-reyes",
    name: "Daniel P. Reyes",
    title: "Attorney and Counselor at Law",
    // TODO: real bar numbers pending verification — see pre-launch-checklist.md
    barNumbers: [],
    bio: "Daniel Reyes concentrates his practice on commercial litigation and contract and partnership disputes, representing businesses and individual clients in disagreements arising from complex commercial relationships.\n\nBefore joining Whitmore Harlow LLP, Daniel practiced with a mid-sized commercial litigation firm in Philadelphia, where he represented clients in partnership dissolution disputes, breach of contract claims, and business valuation disagreements. He is licensed to practice in New York.\n\nDaniel approaches each matter by identifying what a client actually needs to resolve a dispute, rather than defaulting to the most aggressive available strategy. Outside the office, Daniel is a distance runner and serves on the board of a Philadelphia-based legal aid nonprofit.",
    practiceAreas: ["commercial-litigation", "contract-disputes"],
    initials: "DR",
    education: [
      "J.D., Temple University Beasley School of Law",
      "B.A. Economics, Villanova University",
    ],
  },
  {
    slug: "priya-anand",
    name: "Priya N. Anand",
    title: "Attorney and Counselor at Law",
    // TODO: real bar numbers pending verification — see pre-launch-checklist.md
    barNumbers: [],
    bio: "Priya Anand concentrates her practice on securities and investment fraud and economic disputes, representing investors and business clients in matters involving financial misconduct and complex economic loss.\n\nPrior to joining Whitmore Harlow LLP, Priya spent several years in financial compliance at a Chicago-based investment firm before transitioning to legal practice — an experience that continues to inform how she approaches securities matters and financial-industry disputes. She is licensed to practice in New York.\n\nPriya regularly works with forensic accountants and financial experts to build the factual record necessary to support a client's claim, particularly in matters involving disputed valuations or complex transaction histories. Outside of work, Priya volunteers with a financial literacy program for first-generation college students and enjoys long-distance cycling.",
    practiceAreas: ["securities-fraud", "economic-disputes"],
    initials: "PA",
    education: [
      "J.D., Northwestern University Pritzker School of Law",
      "B.S. Finance, University of Illinois at Urbana-Champaign",
    ],
  },
  {
    slug: "sarah-voss",
    name: "Sarah K. Voss",
    title: "Senior Associate",
    // TODO: real bar numbers pending verification — see pre-launch-checklist.md
    barNumbers: [],
    bio: "Sarah Voss is a senior associate concentrating her practice on fraud and asset recovery and economic disputes. Before attending law school, she worked for several years in commercial banking, including credit risk assessment across the Southeast — experience that continues to inform her approach to tracing and recovering misappropriated assets.\n\nHer practice includes matters involving fraudulent transfers, business valuation disputes, and cases requiring coordination with forensic accountants to reconstruct complex financial transactions. She is licensed to practice in Pennsylvania.\n\nWhen not working, Sarah hikes in the Pocono Mountains and volunteers with a regional literacy nonprofit.",
    practiceAreas: ["fraud-asset-recovery", "economic-disputes"],
    initials: "SV",
    education: [
      "J.D., University of North Carolina School of Law",
      "B.A. Political Science, Wake Forest University",
    ],
    languages: ["English", "French"],
  },
  {
    slug: "james-alvarez",
    name: "James O. Alvarez",
    title: "Associate",
    // TODO: real bar numbers pending verification — see pre-launch-checklist.md
    barNumbers: [],
    bio: "James Alvarez received his Juris Doctor from Duquesne University School of Law, where he served on the school's trial advocacy team, and his Bachelor of Arts from Pennsylvania State University.\n\nPrior to joining Whitmore Harlow LLP, James clerked for a state trial court in Pittsburgh, gaining early experience with commercial litigation from the perspective of the bench. His practice focuses on commercial litigation and contract and partnership disputes, assisting senior attorneys with case preparation, discovery, and client communication. He is licensed to practice in New York.\n\nOutside of the office, James enjoys golf, is a season-ticket holder for Penn State football, and spends time with his wife and their two children.",
    practiceAreas: ["commercial-litigation", "contract-disputes"],
    initials: "JA",
    education: [
      "J.D., Duquesne University School of Law",
      "B.A., Pennsylvania State University",
    ],
  },
];
