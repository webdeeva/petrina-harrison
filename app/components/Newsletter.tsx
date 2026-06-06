"use client";

import { motion } from "motion/react";
import { useState } from "react";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <motion.div
          className="relative rounded-[36px] overflow-hidden px-8 md:px-16 py-16 md:py-20 text-center"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, rgba(116,40,46,0.95), rgba(90,31,36,0.98) 50%, rgba(61,20,24,1) 100%)",
            color: "var(--bone)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(247,240,228,1) 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
            animate={{ backgroundPositionX: ["0px", "12px"] }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          />
          <motion.span
            className="relative eyebrow !text-[color:var(--gold-soft)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            Stay In Touch
          </motion.span>
          <motion.h2
            className="relative mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
          >
            <span className="italic font-light">Join the</span>{" "}
            <span className="font-medium">circle.</span>
          </motion.h2>
          <motion.p
            className="relative mt-5 font-serif text-[1.1rem] max-w-xl mx-auto text-[color:var(--bone)]/80"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
          >
            The latest in research, upcoming engagements, and resources for the
            women medicine forgot &mdash; delivered with intention.
          </motion.p>

          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="relative mt-9 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full px-6 py-3.5 bg-[color:var(--bone)]/10 border border-[color:var(--bone)]/30 text-[color:var(--bone)] placeholder:text-[color:var(--bone)]/50 focus:outline-none focus:border-[color:var(--gold-soft)]"
            />
            <motion.button
              type="submit"
              className="rounded-full px-7 py-3.5 bg-[color:var(--gold-soft)] text-[color:var(--rouge-deep)] uppercase tracking-[0.14em] text-[0.78rem] font-semibold hover:bg-[color:var(--bone)] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {done ? "Thank you ✦" : "Sign Up"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
