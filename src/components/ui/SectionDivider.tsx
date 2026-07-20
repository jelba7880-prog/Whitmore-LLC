interface SectionDividerProps {
  className?: string;
}

// Gradient gold rule between major sections (design-tokens.md § Section Dividers).
export default function SectionDivider({
  className = "",
}: SectionDividerProps) {
  return (
    <div
      role="presentation"
      className={`h-px w-full opacity-50 ${className}`}
      style={{
        background:
          "linear-gradient(to right, transparent, var(--gold), transparent)",
      }}
    />
  );
}
