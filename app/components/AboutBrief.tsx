"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Parallax from "./motion/Parallax";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function AboutBrief() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--cream) 0%, var(--cream-2) 100%)",
        }}
      />
      <div className="mx-auto max-w-[1300px] px-6 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <Parallax amount={20} className="relative">
          <motion.div
            className="relative aspect-[4/5] max-w-[480px] mx-auto rounded-[36px] overflow-hidden ring-1 ring-[color:var(--rouge)]/15 shadow-[0_30px_70px_-40px_rgba(43,26,22,0.4)]"
            initial={{ opacity: 0, scale: 0.97, y: 22 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease }}
          >
            <Image
              src="/petrina-about.png"
              alt="Dr. Petrina N. Harrison"
              fill
              sizes="(max-width:1024px) 90vw, 480px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(247,240,228,0) 30%, rgba(247,240,228,0.35) 100%)",
              }}
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -right-2 lg:-right-8 card-paper rounded-2xl px-6 py-5 max-w-[260px]"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            whileHover={{ y: -4 }}
          >
            <div className="text-[0.66rem] tracking-[0.22em] uppercase text-[color:var(--rouge)]">
              National Award-Winning
            </div>
            <div className="mt-1 font-display italic text-[1.2rem] text-[color:var(--rouge-deep)] leading-tight">
              Presenter &amp; Speaker
            </div>
          </motion.div>
        </Parallax>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
        >
          <motion.span
            className="eyebrow inline-block"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
          >
            About Dr. Harrison
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--rouge-deep)]"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
            }}
          >
            <span className="italic font-light">A nurse&rsquo;s</span>{" "}
            <span className="font-medium">conviction.</span>
            <br />
            <span className="italic font-light">A scholar&rsquo;s</span>{" "}
            <span className="font-medium">precision.</span>
          </motion.h2>
          <motion.p
            className="mt-7 font-serif text-[1.1rem] md:text-[1.18rem] leading-[1.75] text-[color:var(--ink-soft)]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
            }}
          >
            Doctor of Nursing Practice prepared, board-certified
            Adult-Gerontology Clinical Nurse Specialist, and Certified Infection
            Preventionist with over two decades of expertise in adult health,
            gerontology, acute care, long-term care, and infection prevention.
          </motion.p>
          <motion.p
            className="mt-5 font-serif text-[1.1rem] leading-[1.75] text-[color:var(--ink-soft)]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
            }}
          >
            Recognized nationally for her work in ovarian-cancer research &mdash; with
            an emphasis on early diagnosis, access to genetic testing, and the
            reduction of disparities in underserved communities.
          </motion.p>

          <motion.div
            className="mt-10 grid sm:grid-cols-2 gap-y-3 gap-x-6 font-serif"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {[
              "Doctor of Nursing Practice (DNP)",
              "Advanced Practice RN (APRN)",
              "Board-Certified AGCNS-BC",
              "Certified Infection Preventionist (CIC)",
              "Sigma Global Advocate",
              "Patent-Pending Inventor",
            ].map((c) => (
              <motion.div
                key={c}
                className="flex items-start gap-3 text-[1.02rem]"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
                }}
              >
                <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--rouge)]" />
                <span className="text-[color:var(--ink)]">{c}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
            whileHover={{ y: -3 }}
            className="inline-block mt-10"
          >
            <Link href="/about" className="btn-rouge">
              Full Biography <span className="arrow">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
