"use client";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

interface IntroSectionProps {
  name: string;
  title: string;
  tagline?: string;
}

const Typewriter = ({ texts, speed = 80, delay = 2500 }: { texts: string[], speed?: number, delay?: number }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentText = texts[index];

    if (!isDeleting && displayText === currentText) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, isDeleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, speed, delay]);

  return (
    <span>
      {displayText}
      <span className="inline-block text-4xl md:text-5xl lg:text-6xl w-[2px] h-[1em] bg-primary ml-0.5 animate-pulse align-middle" />
    </span>
  );
};

export const IntroSection: React.FC<IntroSectionProps> = ({
  name,
  tagline = "Crafting pixel-perfect experiences with React & Next.js",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="space-y-4"
    >
      {/* Small greeting */}
      <motion.div
        className="flex items-center gap-2 text-sm md:text-base text-foreground/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.span
          className="inline-block text-lg"
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          👋
        </motion.span>
        <span>Hello there, I&apos;m</span>
      </motion.div>

      {/* Name — largest element */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {name.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-primary">{name.split(" ").slice(-1)}</span>
      </motion.h1>

      {/* Typing title */}
      <motion.div
        className="h-8 md:h-10 flex items-center text-lg md:text-xl font-medium text-foreground/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="mr-2 text-foreground/40">&lt;</span>
        <Typewriter texts={["Frontend Developer", "Full Stack Developer", "UI/UX Enthusiast"]} />
        <span className="ml-2 text-foreground/40">/&gt;</span>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-foreground/50 text-sm md:text-base max-w-md leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {tagline}
      </motion.p>
    </motion.div>
  );
};
