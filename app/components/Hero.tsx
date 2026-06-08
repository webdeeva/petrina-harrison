"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FloralSprig, CornerOrn } from "./Ornament";
import Parallax from "./motion/Parallax";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          className="absolute -top-32 -right-40 w-[680px] h-[680px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(116,40,46,0.32), rgba(116,40,46,0.05) 55%, transparent 70%)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2, ease }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(214,178,122,0.35), rgba(214,178,122,0.05) 60%, transparent 75%)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2, ease, delay: 0.3 }}
        />
        <CornerOrn className="absolute top-28 left-8 w-24 h-24 text-[color:var(--rouge)]/30 hidden md:block" />
        <CornerOrn className="absolute bottom-10 right-8 w-24 h-24 text-[color:var(--rouge)]/30 hidden md:block rotate-180" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
        {/* Left: editorial typography */}
        <div className="relative">
          <motion.div
            className="flex items-center gap-4 mb-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            <span className="eyebrow">No Woman Left Behind</span>
            <motion.span
              className="h-px flex-1 max-w-[120px] bg-[color:var(--rouge)]/30 origin-left block"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.4 }}
            />
          </motion.div>

          <h1 className="font-display text-[clamp(2.6rem,6.4vw,5.5rem)] leading-[1.02] tracking-[-0.02em] text-[color:var(--rouge-deep)]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease, delay: 0.2 }}
            >
              <span className="italic font-light">A life</span>{" "}
              <span className="font-medium">devoted</span>
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease, delay: 0.35 }}
            >
              to the women
            </motion.span>
            <motion.span
              className="block italic font-light text-[color:var(--rouge)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, ease, delay: 0.5 }}
            >
              medicine forgot.
            </motion.span>
          </h1>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
          >
            <FloralSprig className="w-28 h-12 text-[color:var(--rouge)]/70" />
          </motion.div>

          <motion.p
            className="mt-8 max-w-xl font-serif text-[1.18rem] md:text-[1.28rem] leading-[1.6] text-[color:var(--ink-soft)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
          >
            Dr. Petrina N. Harrison,{" "}
            <span className="italic">DNP, APRN, AGCNS-BC, CIC,</span> is a
            board-certified clinical nurse specialist, ovarian-cancer advocate, and
            nursing professor — leading at the bedside, in research, and in policy
            for more than two decades.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.95 }}
          >
            <motion.div whileHover={reduce ? {} : { y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link href="/about" className="btn-rouge">
                Meet Dr. Harrison
                <span className="arrow">→</span>
              </Link>
            </motion.div>
            <Link href="/#advocacy" className="btn-ghost">
              Our Mission
            </Link>
          </motion.div>

          {/* Credential strip */}
          <motion.div
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { delayChildren: 1.1, staggerChildren: 0.12 } },
            }}
          >
            <Stat n="20+" label="Years in practice" />
            <Stat n="DNP" label="Doctor of Nursing" />
            <Stat n="Global" label="Award-winning speaker" />
          </motion.div>
        </div>

        {/* Right: portrait frame */}
        <div className="relative">
          <PortraitFrame />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      }}
    >
      <div className="font-display text-[2rem] md:text-[2.4rem] leading-none text-[color:var(--rouge)]">
        {n}
      </div>
      <div className="mt-2 text-[0.72rem] tracking-[0.18em] uppercase text-[color:var(--ink-soft)]">
        {label}
      </div>
    </motion.div>
  );
}

function PortraitFrame() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[580px] aspect-[4/5]"
      initial={{ opacity: 0, scale: 0.96, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease, delay: 0.25 }}
    >
      {/* Outer warm vignette glow — breathing */}
      <motion.div
        className="absolute -inset-6 rounded-[40px] -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(116,40,46,0.22), transparent 70%)",
        }}
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.03, 1] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Decorative arch frame holding the styled hero image */}
      <div
        className="absolute inset-0 rounded-t-[260px] rounded-b-[28px] overflow-hidden ring-1 ring-[color:var(--rouge)]/25"
        style={{
          boxShadow:
            "0 40px 80px -40px rgba(43,26,22,.45), 0 8px 24px -16px rgba(90,31,36,.35)",
        }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease }}
        >
          <Image
            src="/petrina-hero.png"
            alt="Dr. Petrina N. Harrison portrait"
            fill
            priority
            sizes="(max-width:1024px) 90vw, 580px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Soft warm wash for cohesion */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(247,240,228,0) 55%, rgba(247,240,228,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 30%, rgba(116,40,46,0.0) 40%, rgba(61,20,24,0.18) 100%)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Inner gold hairline */}
        <div className="absolute inset-3 rounded-t-[240px] rounded-b-[20px] border border-[color:var(--gold-soft)]/55 pointer-events-none" />
      </div>

      {/* Floating cards — gentle parallax + drift
          On mobile, both cards live near the bottom edge so they
          never cover Dr. Harrison's face. On md+ the Specialty card
          jumps back to its top-right anchor. */}
      <Parallax amount={18} className="absolute -left-2 md:-left-10 bottom-4 md:bottom-12">
        <motion.div
          className="card-paper rounded-2xl px-4 md:px-5 py-3 md:py-4 flex items-center gap-3"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease, delay: 1 }}
          whileHover={{ y: -4 }}
        >
          <motion.div
            className="w-9 h-9 rounded-full bg-[color:var(--rouge)] text-[color:var(--bone)] flex items-center justify-center font-display text-[1rem]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            ✦
          </motion.div>
          <div>
            <div className="text-[0.66rem] tracking-[0.22em] uppercase text-[color:var(--ink-soft)]">
              Sigma Global Advocate
            </div>
            <div className="font-serif italic text-[color:var(--rouge-deep)] text-[1.05rem]">
              Health Literacy
            </div>
          </div>
        </motion.div>
      </Parallax>

      <Parallax
        amount={-22}
        className="absolute -right-2 md:-right-8 bottom-32 sm:bottom-28 md:bottom-auto md:top-10"
      >
        <motion.div
          className="card-paper rounded-2xl px-4 md:px-5 py-3 md:py-4 max-w-[180px] md:max-w-[230px]"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease, delay: 1.2 }}
          whileHover={{ y: -4 }}
        >
          <div className="text-[0.66rem] tracking-[0.22em] uppercase text-[color:var(--rouge)]">
            Specialty
          </div>
          <div className="mt-1 font-serif text-[1.02rem] leading-snug text-[color:var(--ink)]">
            Adult-Gerontology Clinical Nurse Specialist
          </div>
        </motion.div>
      </Parallax>

      {/* Signature */}
      <motion.div
        className="mt-8 flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <span className="h-px w-12 bg-[color:var(--rouge)]/30" />
        <span className="font-display italic text-[color:var(--rouge)]/80 text-[1.05rem]">
          est. 2003
        </span>
        <span className="h-px w-12 bg-[color:var(--rouge)]/30" />
      </motion.div>
    </motion.div>
  );
}
