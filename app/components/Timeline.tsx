"use client";

import { motion } from "motion/react";

const entries = [
  {
    year: "2003",
    role: "RN, Acute Care & Infectious Diseases",
    desc: "Petrina’s journey begins with a burning passion for patient-centered health care.",
  },
  {
    year: "2012",
    role: "Nurse Case Manager · Team Supervisor",
    desc: "Her clinical excellence becomes a leadership role that shapes colleagues across her unit.",
  },
  {
    year: "2021",
    role: "Adjunct Professor of Nursing",
    desc: "Bridging didactic scholarship and clinical experience for the next generation of nurses.",
  },
  {
    year: "2024",
    role: "Global Presence",
    desc: "A leading expert and national advocate for ovarian cancer detection, treatment, and equity.",
  },
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Timeline() {
  return (
    <section id="career" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease }}
          >
            <span className="eyebrow">A Career Built On Service</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--rouge-deep)] max-w-xl">
              <span className="italic font-light">Twenty</span>{" "}
              <span className="font-medium">years.</span>{" "}
              <span className="italic font-light">One mission.</span>
            </h2>
          </motion.div>
          <motion.p
            className="font-serif text-[1.1rem] max-w-md text-[color:var(--ink-soft)] leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
          >
            From bedside infection prevention to the lecture hall and the global
            advocacy stage — a steady arc of nurses-led leadership.
          </motion.p>
        </header>

        <motion.ol
          className="relative grid md:grid-cols-4 gap-8 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
          }}
        >
          {/* connecting line draws across on view */}
          <motion.div
            className="hidden md:block absolute left-0 right-0 top-[26px] h-px bg-gradient-to-r from-transparent via-[color:var(--rouge)]/40 to-transparent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease, delay: 0.1 }}
          />
          {entries.map((e, i) => (
            <motion.li
              key={e.year}
              className="relative"
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
              }}
            >
              <motion.div
                className="hidden md:flex absolute -top-[6px] left-0 w-3 h-3 rounded-full bg-[color:var(--rouge)] ring-4 ring-[color:var(--cream)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.18 }}
              />
              <div className="md:pt-12">
                <div className="font-display text-[2.2rem] md:text-[2.6rem] leading-none text-[color:var(--rouge)] mb-3">
                  {e.year}
                </div>
                <h3 className="font-serif text-[1.18rem] md:text-[1.22rem] font-medium text-[color:var(--ink)] leading-snug">
                  {e.role}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--ink-soft)]">
                  {e.desc}
                </p>
              </div>
              {i < entries.length - 1 && (
                <div className="md:hidden h-12 w-px bg-[color:var(--rouge)]/30 ml-2 mt-6" />
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
