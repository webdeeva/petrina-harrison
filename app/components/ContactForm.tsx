"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="thanks"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.7, ease }}
          className="card-paper rounded-[28px] p-10 flex flex-col items-center justify-center text-center min-h-[420px]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
            className="w-14 h-14 rounded-full bg-[color:var(--rouge)] text-[color:var(--bone)] flex items-center justify-center font-display text-[1.4rem]"
          >
            ✦
          </motion.div>
          <h3 className="mt-6 font-display text-[1.8rem] text-[color:var(--rouge-deep)]">
            Thank you.
          </h3>
          <p className="mt-3 font-serif text-[1.05rem] text-[color:var(--ink-soft)] max-w-sm">
            Your note has been received. Dr. Harrison&rsquo;s office will reach
            out soon &mdash; with intention and care.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="card-paper rounded-[28px] p-8 md:p-10 grid gap-6"
        >
          <Field id="name" label="Name" required />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field id="email" label="Email" type="email" required />
            <Field id="phone" label="Phone" type="tel" />
          </div>
          <Field id="comment" label="Comment" textarea />
          <motion.button
            type="submit"
            className="btn-rouge mt-2 self-start"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Submit <span className="arrow">→</span>
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  id,
  label,
  type = "text",
  textarea = false,
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="block">
      <div className="text-[0.7rem] tracking-[0.24em] uppercase text-[color:var(--rouge)] mb-2">
        {label}
        {required && <span className="text-[color:var(--rouge)]/60"> *</span>}
      </div>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          required={required}
          className="w-full rounded-2xl bg-transparent border border-[color:var(--rouge)]/25 px-4 py-3 font-serif text-[1.05rem] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--rouge)] transition-colors resize-none"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className="w-full rounded-full bg-transparent border border-[color:var(--rouge)]/25 px-5 py-3 font-serif text-[1.05rem] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--rouge)] transition-colors"
        />
      )}
    </label>
  );
}
