interface GoldRuleProps {
  variant?: "solid" | "gradient" | "short";
  className?: string;
}

export default function GoldRule({ variant = "solid", className = "" }: GoldRuleProps) {
  if (variant === "gradient") {
    return (
      <div
        className={`w-full h-px opacity-50 ${className}`}
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }}
      />
    );
  }

  if (variant === "short") {
    return <div className={`w-10 h-px bg-gold mx-auto ${className}`} />;
  }

  return <div className={`w-full h-px bg-gold ${className}`} />;
}
