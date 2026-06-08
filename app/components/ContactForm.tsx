"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ease = [0.2, 0.7, 0.2, 1] as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    website: "", // honeypot
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: { ok?: boolean; error?: string } = await res
        .json()
        .catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
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
          onSubmit={handleSubmit}
          className="card-paper rounded-[28px] p-8 md:p-10 grid gap-6"
          noValidate
        >
          <Field
            id="name"
            label="Name"
            required
            value={form.name}
            onChange={handleChange("name")}
            disabled={status === "submitting"}
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              id="email"
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={handleChange("email")}
              disabled={status === "submitting"}
            />
            <Field
              id="phone"
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              disabled={status === "submitting"}
            />
          </div>
          <Field
            id="comment"
            label="Comment"
            textarea
            value={form.comment}
            onChange={handleChange("comment")}
            disabled={status === "submitting"}
          />

          {/* Honeypot — hidden from real users, bots tend to fill every input */}
          <label
            htmlFor="website"
            className="sr-only"
            aria-hidden="true"
            tabIndex={-1}
            style={{
              position: "absolute",
              left: "-10000px",
              width: 1,
              height: 1,
              overflow: "hidden",
            }}
          >
            Website (leave blank)
            <input
              id="website"
              name="website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
              value={form.website}
              onChange={handleChange("website")}
            />
          </label>

          <AnimatePresence>
            {status === "error" && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -6, height: 0 }}
                className="rounded-2xl border border-[color:var(--rouge)]/30 bg-[color:var(--rouge)]/5 px-5 py-3 text-[color:var(--rouge-deep)] text-sm font-serif"
                role="alert"
              >
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={status === "submitting"}
            className="btn-rouge mt-2 self-start disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={status === "submitting" ? {} : { y: -2 }}
            whileTap={status === "submitting" ? {} : { scale: 0.97 }}
          >
            {status === "submitting" ? (
              <>
                Sending
                <motion.span
                  className="inline-block ml-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  aria-hidden
                >
                  ◌
                </motion.span>
              </>
            ) : (
              <>
                Submit <span className="arrow">→</span>
              </>
            )}
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
  value,
  onChange,
  disabled,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabled?: boolean;
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
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full rounded-2xl bg-transparent border border-[color:var(--rouge)]/25 px-4 py-3 font-serif text-[1.05rem] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--rouge)] transition-colors resize-none disabled:opacity-60"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          autoComplete={
            type === "email" ? "email" : type === "tel" ? "tel" : "name"
          }
          className="w-full rounded-full bg-transparent border border-[color:var(--rouge)]/25 px-5 py-3 font-serif text-[1.05rem] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--rouge)] transition-colors disabled:opacity-60"
        />
      )}
    </label>
  );
}
