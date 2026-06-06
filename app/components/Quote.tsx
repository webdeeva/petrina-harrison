"use client";

import { motion } from "motion/react";
import { FloralSprig } from "./Ornament";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Quote() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--cream) 0%, var(--cream-2) 50%, var(--cream) 100%)",
        }}
      />
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease }}
        >
          <FloralSprig className="mx-auto w-32 h-14 text-[color:var(--rouge)]/70" />
        </motion.div>

        <motion.p
          className="mt-8 font-display italic font-light text-[clamp(1.6rem,3.6vw,2.9rem)] leading-[1.25] text-[color:var(--rouge-deep)] tracking-[-0.01em]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease, delay: 0.15 }}
        >
          “Dr. Harrison&rsquo;s career illustrates the{" "}
          <span className="not-italic font-medium">power of nurses</span>{" "}
          taking the lead — at the bedside, in research, and in policy.”
        </motion.p>

        <motion.div
          className="mt-8 inline-flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.span
            className="h-px w-10 bg-[color:var(--rouge)]/40 origin-right block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
          />
          <span className="eyebrow">a life&rsquo;s work</span>
          <motion.span
            className="h-px w-10 bg-[color:var(--rouge)]/40 origin-left block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
          />
        </motion.div>
      </div>
    </section>
  );
}
