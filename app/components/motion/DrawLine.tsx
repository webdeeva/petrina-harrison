"use client";

import { motion, useReducedMotion } from "motion/react";

export default function DrawLine({
  className,
  origin = "left",
  delay = 0.2,
  duration = 1.1,
}: {
  className?: string;
  origin?: "left" | "center" | "right";
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        transformOrigin: origin,
      }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.2, 0.7, 0.2, 1],
      }}
    />
  );
}
