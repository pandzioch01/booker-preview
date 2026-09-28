"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useSkipEntranceAnimation } from "@/components/client/language-transition";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Wzorzec scroll reveal oparty na przykładach Motion. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const skipEntranceAnimation = useSkipEntranceAnimation();

  return (
    <motion.div
      className={className}
      initial={reducedMotion || skipEntranceAnimation ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
