"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { TealRibbon, FloralSprig } from "./Ornament";
import Parallax from "./motion/Parallax";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Advocacy() {
  return (
    <section
      id="advocacy"
      className="relative py-24 md:py-32 overflow-hidden text-[color:var(--bone)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, #74282e 0%, #5a1f24 35%, #3d1418 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(247,240,228,1) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />

      <div className="mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-[1fr_0.85fr] gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
        >
          <motion.div
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <TealRibbon className="w-8 h-12 text-[color:var(--gold-soft)]" />
            </motion.div>
            <span className="text-[0.72rem] tracking-[0.32em] uppercase text-[color:var(--gold-soft)]">
              World Ovarian Cancer Day · May 8
            </span>
          </motion.div>

          <motion.h2
            className="mt-6 font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.04] tracking-[-0.02em]"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
            }}
          >
            <span className="italic font-light">Know</span>{" "}
            <span className="font-medium">the symptoms.</span>
            <br />
            <span className="italic font-light">Change</span>{" "}
            <span className="font-medium text-[color:var(--gold-soft)]">the outcomes.</span>
          </motion.h2>

          <motion.p
            className="mt-7 font-serif text-[1.12rem] md:text-[1.18rem] leading-[1.7] max-w-xl text-[color:var(--bone)]/85"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
            }}
          >
            Ovarian cancer is the second most common gynecologic malignancy in
            the United States, yet over <em className="not-italic font-medium text-[color:var(--gold-soft)]">60%</em> of cases
            are diagnosed at a late stage. Dr. Harrison&rsquo;s work focuses on
            timely diagnosis, access to genetic testing, and the reduction of
            disparities in underserved communities.
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
            }}
          >
            <Fact n="324k" l="women diagnosed annually" />
            <Fact n="29%" l="five-year survival rate" />
            <Fact n="2013" l="campaign established" />
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--bone)] text-[color:var(--rouge-deep)] text-[0.85rem] tracking-[0.12em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-colors"
              >
                Learn About the Research
                <span>→</span>
              </Link>
            </motion.div>
            <span className="self-center text-[0.78rem] tracking-[0.2em] uppercase text-[color:var(--bone)]/65">
              #KnowTheSymptoms · #WOCD2026
            </span>
          </motion.div>
        </motion.div>

        {/* Right: research image card */}
        <Parallax amount={26} className="relative">
          <motion.div
            className="relative aspect-[4/5] rounded-[28px] overflow-hidden ring-1 ring-[color:var(--gold-soft)]/30 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease }}
            whileHover={{ y: -4 }}
          >
            <Image
              src="/petrina-research.webp"
              alt="Dr. Petrina N. Harrison presenting ovarian cancer research"
              fill
              sizes="(max-width:1024px) 90vw, 500px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(61,20,24,0.05) 0%, rgba(61,20,24,0.45) 70%, rgba(61,20,24,0.85) 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="text-[0.66rem] tracking-[0.3em] uppercase text-[color:var(--gold-soft)]">
                Research Showcase
              </div>
              <div className="mt-2 font-display italic text-[1.5rem] leading-tight">
                Providers&rsquo; Strategies for Timely Diagnosis &amp; Treatment of Patients with Ovarian Cancer
              </div>
              <div className="mt-3 text-[0.78rem] text-[color:var(--bone)]/70">
                University at Buffalo, School of Nursing
              </div>
            </div>
          </motion.div>

          <FloralSprig className="absolute -bottom-8 -right-2 w-32 h-14 text-[color:var(--gold-soft)]/70" />
        </Parallax>
      </div>
    </section>
  );
}

function Fact({ n, l }: { n: string; l: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      }}
    >
      <div className="font-display text-[2rem] md:text-[2.4rem] leading-none text-[color:var(--gold-soft)]">
        {n}
      </div>
      <div className="mt-2 text-[0.7rem] tracking-[0.18em] uppercase text-[color:var(--bone)]/65 leading-snug">
        {l}
      </div>
    </motion.div>
  );
}
