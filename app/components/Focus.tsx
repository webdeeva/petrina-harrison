"use client";

import { motion } from "motion/react";
import { FloralSprig } from "./Ornament";

const areas = [
  { title: "Ovarian Cancer Research", desc: "Provider strategies for timely diagnosis and individualized treatment plans." },
  { title: "Early Diagnosis", desc: "Improving detection across the diagnostic continuum to extend survival." },
  { title: "Access to Genetic Testing", desc: "Expanding BRCA1/2 screening in rural and underserved populations." },
  { title: "Health Equity", desc: "Reducing disparities for women across the health continuum." },
  { title: "Patient Safety", desc: "Evidence-based quality improvement across complex healthcare systems." },
  { title: "Nursing Education", desc: "Mentoring the next generation of nurses through scholarship and practice." },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Focus() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10">
        <header className="grid md:grid-cols-2 gap-10 mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease }}
          >
            <span className="eyebrow">Areas of Focus</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--rouge-deep)]">
              <span className="italic font-light">Where</span>{" "}
              <span className="font-medium">scholarship</span>{" "}
              <span className="italic font-light">meets</span>{" "}
              <span className="font-medium">action.</span>
            </h2>
          </motion.div>
          <motion.p
            className="font-serif text-[1.1rem] leading-relaxed text-[color:var(--ink-soft)] max-w-lg justify-self-end"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
          >
            A practice grounded in evidence, advocacy, and the conviction that
            excellence in nursing transforms healthcare systems &mdash; one
            woman, one community, one policy at a time.
          </motion.p>
        </header>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
        >
          {areas.map((a, i) => (
            <motion.article
              key={a.title}
              className="group relative card-paper rounded-[22px] p-7"
              variants={{
                hidden: { opacity: 0, y: 26 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
              }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <div className="flex items-start justify-between">
                <span className="font-display italic text-[color:var(--rouge)]/70 text-[1rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <FloralSprig className="w-14 h-6 text-[color:var(--rouge)]/50 group-hover:text-[color:var(--rouge)] transition-colors" />
              </div>
              <h3 className="mt-6 font-display text-[1.45rem] leading-tight text-[color:var(--rouge-deep)]">
                {a.title}
              </h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-[color:var(--ink-soft)]">
                {a.desc}
              </p>
              <motion.div
                className="mt-6 h-px bg-[color:var(--rouge)]/50 origin-left"
                initial={{ width: "2.5rem" }}
                whileHover={{ width: "5rem" }}
                transition={{ duration: 0.5, ease }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
