"use client";
import { motion } from "motion/react";

import { ReactNode } from "react";

export default function ImageAnimating({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
