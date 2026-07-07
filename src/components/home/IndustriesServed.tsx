import type { ReactNode } from "react";
import GoldRule from "@/components/ui/GoldRule";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

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

const industries: { label: string; icon: ReactNode }[] = [
  {
    label: "Financial Services & Banking",
    icon: (
      <IconBase>
        <path d="M3 9.5 12 4l9 5.5" />
        <path d="M5 9.5V19M9.5 9.5V19M14.5 9.5V19M19 9.5V19" />
        <path d="M3 19h18" />
      </IconBase>
    ),
  },
  {
    label: "Private Equity & Hedge Funds",
    icon: (
      <IconBase>
        <rect x="3.5" y="8" width="17" height="11" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        <path d="M3.5 12.5h17" />
      </IconBase>
    ),
  },
  {
    label: "Real Estate & Construction",
    icon: (
      <IconBase>
        <rect x="5" y="3.5" width="14" height="17" />
        <path d="M8.5 7.5h1M14.5 7.5h1M8.5 11.5h1M14.5 11.5h1M8.5 15.5h1M14.5 15.5h1" />
        <path d="M10 20.5v-4h4v4" />
      </IconBase>
    ),
  },
  {
    label: "Healthcare & Life Sciences",
    icon: (
      <IconBase>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 8v8M8 12h8" />
      </IconBase>
    ),
  },
  {
    label: "Technology & Software",
    icon: (
      <IconBase>
        <rect x="5" y="5" width="14" height="14" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
      </IconBase>
    ),
  },
  {
    label: "Energy & Natural Resources",
    icon: (
      <IconBase>
        <path d="M13 3 5 13.5h5.5L11 21l8-11h-5.5z" />
      </IconBase>
    ),
  },
  {
    label: "Manufacturing & Industrials",
    icon: (
      <IconBase>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.07 5.93l-1.56 1.56M7.49 16.51l-1.56 1.56M18.07 18.07l-1.56-1.56M7.49 7.49 5.93 5.93" />
      </IconBase>
    ),
  },
  {
    label: "Insurance",
    icon: (
      <IconBase>
        <path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6z" />
        <path d="M9.25 12 11 13.75 15 9.75" />
      </IconBase>
    ),
  },
  {
    label: "Retail & Consumer Goods",
    icon: (
      <IconBase>
        <path d="M5.5 8h13l-1 12h-11z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </IconBase>
    ),
  },
  {
    label: "Family Offices & High-Net-Worth Individuals",
    icon: (
      <IconBase>
        <circle cx="9" cy="8" r="2.75" />
        <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <circle cx="17" cy="9" r="2" />
        <path d="M14.5 19c.3-2.2 1.8-3.6 3.5-3.8" />
      </IconBase>
    ),
  },
];

export default function IndustriesServed() {
  return (
    <section className="bg-navy-mid py-20">
      <div className="mx-auto max-w-content px-6">
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <GoldRule variant="short" />
            <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-gold">
              Industries We Serve
            </p>
            <h2 className="mt-3 font-display text-h2 font-bold tracking-[-0.02em] text-cream">
              Sector-Specific Experience Across Complex Disputes
            </h2>
          </div>

          <div className="mx-auto flex max-w-[1200px] flex-wrap items-stretch justify-center">
            {industries.map((industry, index) => (
              <div key={industry.label} className="contents">
                <div className="flex items-center gap-3 px-6 py-3">
                  {industry.icon}
                  <span className="font-ui text-[13px] uppercase tracking-[0.08em] text-cream">
                    {industry.label}
                  </span>
                </div>
                {index < industries.length - 1 && (
                  <div className="my-1 w-px self-stretch bg-navy-light" />
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
