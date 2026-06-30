export interface Attorney {
  slug: string;
  name: string;
  title: string; // e.g. "Managing Partner"
  barNumbers: {
    state: string; // e.g. "NY"
    number: string; // e.g. "5892012"
    verifyUrl: string; // e.g. "https://iapps.courts.state.ny.us/..."
  }[];
  bio: string;
  practiceAreas: string[]; // array of practice area slugs
  imageUrl?: string; // grayscale headshot; if absent, show initials
  initials: string; // e.g. "RW"
  education?: string[];
  admissions?: string[];
}

export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  process: ProcessStep[];
  faqs: FAQ[];
  relatedResults: string[];
   imageUrl?: string; // array of result IDs
}

export interface ProcessStep {
  number: number;
  eyebrow: string;
  title: string;
  body: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseResult {
  id: string;
  amount: string; // e.g. "$4.2M"
  description: string; // e.g. "Judgment & Disgorgement"
  matterType: string; // e.g. "Investment Fraud · Ponzi Recovery"
  court: string; // e.g. "S.D. Florida"
  year: number;
  practiceArea: string; // practice area slug
}

export interface BlogPost {
  slug: string;
  title: string;
  deck: string;
  authorSlug: string; // MUST match an attorney slug in attorneys.ts
  practiceArea: string; // practice area slug
  publishedAt: string; // ISO date string
  readMinutes: number;
  content: string; // MDX or HTML string
  relatedSlugs: string[];
  heroImage?: string; // other blog post slugs
}
