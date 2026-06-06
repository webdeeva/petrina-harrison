"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  amount?: number; // viewport amount needed before trigger
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article" | "header";
}

const offsetFor = (d: Direction) => {
  switch (d) {
    case "up": return { y: 28, x: 0 };
    case "down": return { y: -28, x: 0 };
    case "left": return { x: 28, y: 0 };
    case "right": return { x: -28, y: 0 };
    default: return { x: 0, y: 0 };
  }
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  direction = "up",
  amount = 0.25,
  once = true,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const offset = reduce ? { x: 0, y: 0 } : offsetFor(direction);

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.2, 0.7, 0.2, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.12,
  amount = 0.2,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const offset = offsetFor(direction);
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
