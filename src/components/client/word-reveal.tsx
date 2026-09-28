"use client";

import { motion, useReducedMotion } from "motion/react";
import { useSkipEntranceAnimation } from "@/components/client/language-transition";

type WordRevealProps = { text: string; className?: string };

/** Adaptacja idei Text Effect z Motion Primitives: animacja po słowach. */
export function WordReveal({ text, className }: WordRevealProps) {
  const reducedMotion = useReducedMotion();
  const skipEntranceAnimation = useSkipEntranceAnimation();
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial={reducedMotion || skipEntranceAnimation ? false : "hidden"}
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.075, delayChildren: 0.08 } } }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          className="reveal-word"
          aria-hidden="true"
          key={`${word}-${index}`}
          variants={{ hidden: { opacity: 0, y: 22, filter: "blur(5px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}{index < text.split(" ").length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
