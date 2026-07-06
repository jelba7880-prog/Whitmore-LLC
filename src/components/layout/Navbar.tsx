"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/results", label: "Results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full h-[54px] md:h-[72px] bg-navy transition-shadow duration-200 ${
        scrolled
          ? "border-b border-gold/25 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-[18px] md:text-[21px] font-bold text-cream"
        >
          Whitmore <span className="text-gold">&amp;</span> Associates LLP
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-ui text-sm uppercase tracking-[0.08em] pb-0.5 transition-colors ${
                isActive(link.href)
                  ? "text-gold border-b border-gold"
                  : "text-cream hover:text-gold-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/free-consultation"
            className="bg-gold px-5 py-2.5 font-ui text-sm uppercase tracking-[0.08em] text-navy transition-colors hover:bg-gold-light"
          >
            Free Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`block h-px w-[22px] bg-cream transition-all duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-[22px] bg-cream transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-[22px] bg-cream transition-all duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-[54px] bottom-0 bg-navy transition-opacity duration-200 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 py-10">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-2xl ${
                  isActive(link.href) ? "text-gold" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/free-consultation"
            className="block w-full bg-gold px-5 py-3 text-center font-ui text-sm uppercase tracking-[0.08em] text-navy"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
