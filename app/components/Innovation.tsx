"use client";

import { motion } from "motion/react";
import { FloralSprig } from "./Ornament";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Innovation() {
  return (
    <section id="innovation" className="relative py-24 md:py-32 overflow-hidden">
      {/* Cream + warm wash backdrop with a subtle gold orb */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--cream-2) 0%, var(--cream) 60%, var(--cream-2) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(214,178,122,0.22), transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.header
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease }}
        >
          <span className="eyebrow">Innovation &amp; Technology</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--rouge-deep)]">
            <span className="italic font-light">Translating</span>{" "}
            <span className="font-medium">research</span>{" "}
            <span className="italic font-light">into</span>{" "}
            <span className="font-medium">tools that save lives.</span>
          </h2>
          <p className="mt-6 font-serif text-[1.12rem] leading-[1.75] text-[color:var(--ink-soft)]">
            From scholarship to the bedside &mdash; Dr. Harrison&rsquo;s clinical
            insight is being translated into technology that puts early
            detection within reach of every provider.
          </p>
          <div className="mt-7 flex justify-center">
            <FloralSprig className="w-32 h-12 text-[color:var(--rouge)]/70" />
          </div>
        </motion.header>

        {/* Patent card */}
        <motion.article
          className="mt-14 relative card-paper rounded-[36px] overflow-hidden grid lg:grid-cols-[0.42fr_0.58fr]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease }}
        >
          {/* LEFT: rouge "seal" pane */}
          <div
            className="relative p-10 md:p-12 text-[color:var(--bone)] overflow-hidden"
            style={{
              background:
                "radial-gradient(120% 100% at 0% 0%, #74282e 0%, #5a1f24 45%, #3d1418 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(247,240,228,1) 1px, transparent 1px)",
                backgroundSize: "5px 5px",
              }}
            />

            {/* Patent seal */}
            <div className="relative flex items-center gap-4">
              <motion.div
                className="relative w-20 h-20 rounded-full border border-[color:var(--gold-soft)]/60 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute inset-3 rounded-full border border-[color:var(--gold-soft)]/30" />
                <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 L 14.5 8.5 L 21.5 9 L 16 13.5 L 18 20 L 12 16.5 L 6 20 L 8 13.5 L 2.5 9 L 9.5 8.5 Z" stroke="#d6b27a" />
                </svg>
              </motion.div>
              <div>
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-[color:var(--gold-soft)]">
                  Patent Pending
                </div>
                <div className="mt-1 font-display italic text-[1.4rem] leading-tight">
                  U.S. Patent &amp; Trademark Office
                </div>
              </div>
            </div>

            <div className="relative mt-10">
              <div className="text-[0.66rem] tracking-[0.28em] uppercase text-[color:var(--gold-soft)]/80">
                Application No.
              </div>
              <div className="mt-2 font-display text-[2.6rem] md:text-[3rem] leading-none text-[color:var(--bone)] tabular-nums">
                19/574,302
              </div>
            </div>

            <div className="relative mt-10 flex items-center gap-3">
              <span className="h-px w-12 bg-[color:var(--gold-soft)]/50" />
              <span className="font-display italic text-[color:var(--gold-soft)]/90 text-[1rem]">
                Filed by Dr. Petrina N. Harrison
              </span>
            </div>
          </div>

          {/* RIGHT: paper pane with the invention */}
          <div className="relative p-10 md:p-14 flex flex-col">
            <div className="text-[0.7rem] tracking-[0.28em] uppercase text-[color:var(--rouge)]">
              The Invention
            </div>
            <h3 className="mt-3 font-display text-[clamp(1.8rem,2.6vw,2.4rem)] leading-[1.15] tracking-[-0.01em] text-[color:var(--rouge-deep)]">
              Clinical Decision Support System for{" "}
              <span className="italic font-light">Early Detection</span> &amp;{" "}
              <span className="italic font-light">Risk Stratification</span> of
              Ovarian Cancer
            </h3>
            <p className="mt-6 font-serif text-[1.08rem] leading-[1.7] text-[color:var(--ink-soft)] max-w-xl">
              A point-of-care intelligence system that integrates symptom
              presentation, risk factors, and clinical history to surface women
              at elevated risk earlier in the diagnostic continuum &mdash;
              built to live inside the electronic medical record and support
              every provider, in every community.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                { k: "Domain", v: "Gynecologic oncology · early detection" },
                { k: "Integration", v: "Electronic medical record (EMR)" },
                { k: "Audience", v: "Primary care · women's health providers" },
                { k: "Status", v: "Patent pending · USPTO" },
              ].map((it) => (
                <div key={it.k}>
                  <div className="text-[0.64rem] tracking-[0.24em] uppercase text-[color:var(--rouge)]">
                    {it.k}
                  </div>
                  <div className="mt-1.5 font-serif text-[0.98rem] leading-snug text-[color:var(--ink)]">
                    {it.v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-[color:var(--ink-soft)] text-[0.84rem] italic font-serif">
              <span aria-hidden>✦</span>
              <span>
                Information disclosed under USPTO public records. All rights
                reserved by inventor.
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
