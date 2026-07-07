import type { Attorney } from "@/types";

export const attorneys: Attorney[] = [
  {
    slug: "richard-whitmore",
    name: "Richard A. Whitmore",
    title: "Managing Partner",
    barNumbers: [
      {
        state: "NY",
        number: "5892012",
        verifyUrl:
          "https://iapps.courts.state.ny.us/attorneyservices/search?1",
        linkable: false,
      },
    ],
    bio: "",
    practiceAreas: [
      "fraud-asset-recovery",
      "commercial-litigation",
      "securities-fraud",
    ],
    imageUrl: undefined,
    initials: "RW",
    education: ["{/* TODO: JD, School, Year */}"],
    admissions: ["New York", "U.S. District Court S.D.N.Y."],
  },
  {
    slug: "catherine-harlow",
    name: "Catherine M. Harlow",
    title: "Partner",
    barNumbers: [
      {
        state: "CA",
        number: "298741",
        verifyUrl:
          "https://apps.calbar.ca.gov/attorney/Licensee/Detail/298741",
      },
    ],
    bio: "",
    practiceAreas: [
      "international-arbitration",
      "economic-disputes",
      "contract-disputes",
    ],
    imageUrl: undefined,
    initials: "CH",
    education: ["{/* TODO: JD, School, Year */}"],
    admissions: ["California", "U.S. District Court C.D. Cal."],
  },
];

// Build-time invariant (CLAUDE.md Hard Rule #4 / Attorney Card spec):
// every attorney must carry at least one bar number with a verify link.
// A missing bar number is a hard failure — fail the build, never render a card without one.
for (const attorney of attorneys) {
  if (!attorney.barNumbers || attorney.barNumbers.length === 0) {
    throw new Error(
      `Attorney "${attorney.slug}" has no bar numbers. Every attorney must have at least one.`,
    );
  }
}
