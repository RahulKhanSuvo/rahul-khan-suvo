"use client";
import { motion } from "motion/react";
import React from "react";

interface IntroSectionProps {
  name: string;
  title: string;
  tagline?: string;
  emoji?: string;
}

export const IntroSection: React.FC<IntroSectionProps> = ({
  name,
  title,
  tagline = "Crafting pixel-perfect experiences with React & Next.js",
  emoji = "👋",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-1"
    >
      <motion.h1
        className=" md:text-xl font-bold tracking-tight lg:text-3xl"
        whileHover={{ scale: 1.02 }}
      >
        <motion.span
          className="inline-block mr-2"
          animate={{
            rotate: [0, 11, -11, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {emoji}
        </motion.span>
        <span className="-m-1.5">Hi, I&apos;m {name}</span>
      </motion.h1>

      <div className="flex items-center justify-center md:justify-start gap-2">
        <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
          I&apos;m a
        </span>
        <motion.span
          className="text-xl lg:text-3xl  font-semibold  bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent "
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          {title}
        </motion.span>
      </div>

      {tagline && (
        <motion.p
          className="text-gray-500 dark:text-gray-400 text-basic  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {tagline}
        </motion.p>
      )}
    </motion.div>
  );
};
