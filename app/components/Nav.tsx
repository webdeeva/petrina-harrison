"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-[color:var(--cream)]/85 border-b border-[color:var(--rouge)]/10 py-3"
          : "py-6",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Dr. Petrina Harrison home"
        >
          <span className="font-display text-[1.35rem] md:text-[1.6rem] tracking-tight text-[color:var(--rouge-deep)] leading-none">
            <span className="italic font-light">Dr.</span>{" "}
            <span className="font-medium">Petrina Harrison</span>
          </span>
          <span className="hidden md:inline-block text-[0.62rem] tracking-[0.32em] uppercase text-[color:var(--rouge)]/80 border-l border-[color:var(--rouge)]/30 pl-3 leading-none">
            DNP · RN · AGCNS-BC
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/#advocacy", label: "Advocacy" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-rouge text-[0.84rem] tracking-[0.18em] uppercase"
            >
              {l.label}
            </Link>
          ))}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn-ghost !py-2 !px-5 !text-[0.74rem]">
              Contact
            </Link>
          </motion.div>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[color:var(--rouge-deep)] p-2"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.4, ease }}
            className="md:hidden mt-3 mx-4 card-paper rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
          >
            <Link href="/" onClick={() => setOpen(false)} className="link-rouge tracking-[0.18em] uppercase text-sm">
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="link-rouge tracking-[0.18em] uppercase text-sm">
              About
            </Link>
            <Link href="/#advocacy" onClick={() => setOpen(false)} className="link-rouge tracking-[0.18em] uppercase text-sm">
              Advocacy
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-ghost justify-center">
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
