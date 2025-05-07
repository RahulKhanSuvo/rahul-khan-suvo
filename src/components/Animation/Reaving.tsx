"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  x?: number;
  y?: number;
  duration?: number;
};

export default function Reaving({
  children,
  x = -40,
  y = 0,
  duration = 0.6,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
