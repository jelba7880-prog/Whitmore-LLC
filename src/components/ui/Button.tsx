import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const sharedClasses =
  "font-ui text-xs font-semibold uppercase tracking-widest px-10 py-4 transition-colors";

const variantClasses = {
  primary: "bg-gold text-navy hover:bg-gold-light",
  ghost: "border border-cream/30 text-cream hover:border-cream",
};

export default function Button({
  variant,
  href,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const classes = `${sharedClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
