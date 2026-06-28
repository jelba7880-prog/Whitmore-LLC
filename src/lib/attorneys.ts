import type { Attorney } from "@/types";

export const attorneys: Attorney[] = [
  {
    slug: "richard-whitmore",
    name: "Richard Whitmore",
    title: "Managing Partner",
    barNumbers: [
      {
        state: "NY",
        number: "0000000",
        verifyUrl: "https://iapps.courts.state.ny.us/attorney/AttorneyOnline",
      },
    ],
    bio: "TODO: Attorney bio — 3 paragraphs",
    practiceAreas: ["fraud-asset-recovery", "commercial-litigation", "securities-fraud"],
    imageUrl: undefined,
    initials: "RW",
    education: [], // TODO: education history
    admissions: [], // TODO: bar admissions
  },
  {
    slug: "catherine-harlow",
    name: "Catherine Harlow",
    title: "Senior Associate",
    barNumbers: [
      {
        state: "NY",
        number: "0000000",
        verifyUrl: "https://iapps.courts.state.ny.us/attorney/AttorneyOnline",
      },
    ],
    bio: "TODO: Attorney bio — 3 paragraphs",
    practiceAreas: ["economic-disputes", "contract-disputes", "international-arbitration"],
    imageUrl: undefined,
    initials: "CH",
    education: [], // TODO: education history
    admissions: [], // TODO: bar admissions
  },
];
