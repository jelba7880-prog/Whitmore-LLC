"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { practiceAreas } from "@/lib/practice-areas";

const NAV_LINKS = [
  { href: "/attorneys", label: "Attorneys" },
  { href: "/results", label: "Results" },
];

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobilePracticeAreasOpen, setMobilePracticeAreasOpen] =
    useState(false);
  const [desktopPracticeAreasOpen, setDesktopPracticeAreasOpen] =
    useState(false);
  const pathname = usePathname();

  const practiceAreasGroupRef = useRef<HTMLDivElement>(null);
  const practiceAreasTriggerRef = useRef<HTMLAnchorElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const suppressReopenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobilePracticeAreasOpen(false);
    setDesktopPracticeAreasOpen(false);
  }, [pathname]);

  // Lock body scroll while the full-screen mobile overlay is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Hide everything except the header from the accessibility tree while the
  // mobile overlay is open, so screen-reader swipe/rotor navigation (which
  // doesn't go through Tab) can't reach content stacked behind it.
  useEffect(() => {
    if (!menuOpen) return;
    const header = document.querySelector("header");
    const siblings = Array.from(document.body.children).filter(
      (el) => el !== header
    );
    siblings.forEach((el) => {
      el.setAttribute("aria-hidden", "true");
      el.setAttribute("inert", "");
    });
    return () => {
      siblings.forEach((el) => {
        el.removeAttribute("aria-hidden");
        el.removeAttribute("inert");
      });
    };
  }, [menuOpen]);

  // Trap focus within the mobile overlay and close it on Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const container = mobileNavRef.current;
    const focusable = container
      ? Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      : [];
    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Close the desktop Practice Areas dropdown on Escape.
  useEffect(() => {
    if (!desktopPracticeAreasOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        suppressReopenRef.current = true;
        setDesktopPracticeAreasOpen(false);
        practiceAreasTriggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [desktopPracticeAreasOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // On the homepage, the hero photo bleeds up behind the nav (see Hero.tsx),
  // so the nav renders as a translucent glass bar over the photo until the
  // page scrolls, then hands off to the standard solid navy bar.
  const isHome = pathname === "/";
  const overPhoto = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full h-[54px] md:h-[72px] transition-[background-color,box-shadow] duration-200 ${
        overPhoto
          ? "bg-navy/25 border-b border-cream/20 backdrop-blur-md"
          : `bg-navy border-b ${
              scrolled
                ? "border-gold/25 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                : "border-transparent"
            }`
      }`}
    >
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-[18px] md:text-[21px] font-bold text-cream"
        >
          Whitmore Harlow{" "}
          <span className="font-ui text-xs uppercase tracking-widest text-gold">
            LLP
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className={`font-ui text-sm uppercase tracking-[0.08em] pb-0.5 transition-colors ${FOCUS_RING} ${
              isActive("/about")
                ? "text-gold border-b border-gold"
                : "text-cream hover:text-gold-light"
            }`}
          >
            About
          </Link>

          <div
            ref={practiceAreasGroupRef}
            className="relative"
            onMouseEnter={() => setDesktopPracticeAreasOpen(true)}
            onMouseLeave={() => setDesktopPracticeAreasOpen(false)}
            onFocus={() => {
              if (suppressReopenRef.current) {
                suppressReopenRef.current = false;
                return;
              }
              setDesktopPracticeAreasOpen(true);
            }}
            onBlur={(event) => {
              if (
                !practiceAreasGroupRef.current?.contains(
                  event.relatedTarget as Node | null
                )
              ) {
                setDesktopPracticeAreasOpen(false);
              }
            }}
          >
            <Link
              ref={practiceAreasTriggerRef}
              href="/practice-areas"
              aria-haspopup="true"
              aria-expanded={desktopPracticeAreasOpen}
              className={`font-ui text-sm uppercase tracking-[0.08em] pb-0.5 transition-colors ${FOCUS_RING} ${
                isActive("/practice-areas")
                  ? "text-gold border-b border-gold"
                  : "text-cream hover:text-gold-light"
              }`}
            >
              Practice Areas
            </Link>

            <div
              className={`absolute left-0 top-full pt-4 transition-[opacity,transform] duration-200 ease-out ${
                desktopPracticeAreasOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-1"
              }`}
            >
              <div className="w-64 border-t border-gold bg-navy-mid py-3">
                {practiceAreas.map((area) => {
                  const href = `/practice-areas/${area.slug}`;
                  const isSubActive = pathname === href;
                  return (
                    <Link
                      key={area.slug}
                      href={href}
                      className={`group/item flex items-center justify-between px-5 py-2.5 font-ui text-sm transition-colors ${FOCUS_RING} ${
                        isSubActive
                          ? "text-gold-light"
                          : "text-cream/80 hover:text-gold-light"
                      }`}
                    >
                      {area.title}
                      <span
                        className={`ml-3 transition-[opacity,transform] duration-200 ease-out ${
                          isSubActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-ui text-sm uppercase tracking-[0.08em] pb-0.5 transition-colors ${FOCUS_RING} ${
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
            className={`bg-gold px-5 py-2.5 font-ui text-sm uppercase tracking-[0.08em] text-navy transition-colors hover:bg-gold-light ${FOCUS_RING}`}
          >
            Free Consultation
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={`md:hidden flex h-10 w-10 flex-col items-center justify-center gap-[6px] ${FOCUS_RING}`}
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
        ref={mobileNavRef}
        className={`md:hidden fixed inset-x-0 top-[54px] bottom-0 bg-navy transition-opacity duration-200 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col justify-between px-6 py-10">
          <nav className="flex flex-col gap-6">
            <Link
              href="/about"
              tabIndex={menuOpen ? undefined : -1}
              className={`font-display text-2xl ${FOCUS_RING} ${
                isActive("/about") ? "text-gold" : "text-cream"
              }`}
            >
              About
            </Link>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                tabIndex={menuOpen ? undefined : -1}
                aria-expanded={mobilePracticeAreasOpen}
                onClick={() => setMobilePracticeAreasOpen((open) => !open)}
                className={`flex items-center justify-between font-display text-2xl ${FOCUS_RING} ${
                  isActive("/practice-areas") ? "text-gold" : "text-cream"
                }`}
              >
                Practice Areas
                <span
                  className={`ml-3 font-ui text-base transition-transform duration-200 ${
                    mobilePracticeAreasOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {mobilePracticeAreasOpen && (
                <div className="flex flex-col gap-4 pl-4">
                  {practiceAreas.map((area) => {
                    const href = `/practice-areas/${area.slug}`;
                    return (
                      <Link
                        key={area.slug}
                        href={href}
                        tabIndex={menuOpen ? undefined : -1}
                        className={`font-display text-[18px] ${FOCUS_RING} ${
                          pathname === href
                            ? "text-gold-light"
                            : "text-cream/80"
                        }`}
                      >
                        {area.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? undefined : -1}
                className={`font-display text-2xl ${FOCUS_RING} ${
                  isActive(link.href) ? "text-gold" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/free-consultation"
            tabIndex={menuOpen ? undefined : -1}
            className={`block w-full bg-gold px-5 py-3 text-center font-ui text-sm uppercase tracking-[0.08em] text-navy ${FOCUS_RING}`}
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
