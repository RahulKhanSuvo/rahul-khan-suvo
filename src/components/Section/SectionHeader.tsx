"use client";
import { motion } from "motion/react";

type Props = {
  plainText: string;
  highlightedText: string;
};

export default function SectionHeader({ plainText, highlightedText }: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-[22px] md:text-[35px] text-center px-4 md:px-20"
    >
      {plainText}{" "}
      <span className="px-2 text-white rounded-[4px] bg-[var(--primary)] whitespace-nowrap">
        {highlightedText}
      </span>
    </motion.h2>
  );
}
