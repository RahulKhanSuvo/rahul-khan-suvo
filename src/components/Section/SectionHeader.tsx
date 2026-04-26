"use client";
import { motion, Variants } from "motion/react";

const animationDuration = 0.6;
const delayTime = animationDuration / 5;
const springEffect = {
  type: "spring" as const,
  ease: "easeInOut" as const,
  stiffness: 100,
  damping: 10,
};

const textUpVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1,
      delayChildren: 0,
      staggerChildren: delayTime,
      ...springEffect,
    },
  },
};

const textUpChildVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      ...springEffect,
    },
  },
};

type Props = {
  plainText: string;
  highlightedText: string;
};

export default function SectionHeader({ plainText, highlightedText }: Props) {
  return (
    <motion.h2
      variants={textUpVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-[22px] md:text-[35px] text-center px-4 md:px-20 overflow-hidden flex flex-wrap justify-center items-center gap-x-2"
    >
      {plainText.split(" ").map((word, i) => (
        <motion.span
          variants={textUpChildVariants}
          key={i}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
      <motion.span
        variants={textUpChildVariants}
        className="px-2 text-white rounded-[4px] bg-primary whitespace-nowrap inline-block"
      >
        {highlightedText}
      </motion.span>
    </motion.h2>
  );
}
