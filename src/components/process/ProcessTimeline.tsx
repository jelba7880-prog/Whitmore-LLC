import type { ProcessStep } from "@/types";

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

// Firm-wide process timeline (design-tokens.md § 09). Server component, no state.
//
// NOTE: process-step circles are the ONLY elements permitted a border-radius
// (`rounded-full`), per design-tokens.md § 09. Every other surface — cards,
// buttons, inputs — keeps sharp corners per CLAUDE.md Hard Rule #7. Do not add
// border-radius anywhere else.
export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative pl-[80px]">
      {/* Vertical gold rail running the full height of the timeline */}
      <div
        className="absolute bottom-0 left-[22px] top-0 w-px bg-gold opacity-40"
        aria-hidden="true"
      />

      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <div key={step.number} className="relative pb-12 last:pb-0">
            {/* Step circle — rounded-full permitted here only (design-tokens § 09) */}
            <div
              className={`absolute left-[-80px] top-0 flex h-11 w-11 items-center justify-center rounded-full border ${
                isLast ? "border-navy bg-navy" : "border-gold bg-cream"
              }`}
            >
              <span
                className={`font-display text-[18px] font-bold ${
                  isLast ? "text-cream" : "text-gold"
                }`}
              >
                {step.number}
              </span>
            </div>

            <p className="mb-1 font-ui text-[10px] uppercase tracking-[0.16em] text-gold">
              {step.eyebrow}
            </p>
            <h3 className="font-display text-[26px] font-bold tracking-[-0.01em] text-ink">
              {step.title}
            </h3>
            <p className="mt-3 font-body text-[17px] leading-[1.75] text-muted">
              {step.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}
