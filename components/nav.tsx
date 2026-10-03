"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { BookCall } from "./buttons";
import { ease } from "./motion";

const items = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.1, ease }}
      className={`theme-fade fixed inset-x-0 top-0 z-50 border-b bg-nav backdrop-blur-xl backdrop-saturate-150 ${
        scrolled || open ? "border-hairline" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-[15px] font-semibold tracking-tight">
          Anshuman Nigam
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="text-[13px] text-ink-2 transition-colors hover:text-ink">
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <span className="hidden sm:inline-flex">
            <BookCall size="sm">Book a call</BookCall>
          </span>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-8 place-items-center rounded-full text-ink-2 hover:bg-surface md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-6 pb-8 pt-2">
              {items.map((i, idx) => (
                <motion.a
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4, ease }}
                  className="border-b border-hairline py-3 text-2xl font-semibold tracking-tight"
                >
                  {i.label}
                </motion.a>
              ))}
              <div className="pt-6">
                <BookCall />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
