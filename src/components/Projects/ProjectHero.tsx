"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ProjectHeroProps {
  title: string;
  projectType: string;
  description: string;
  duration: string;
  backgroundImage: string;
}

export default function ProjectHero({
  title,
  projectType,
  description,
  duration,
  backgroundImage,
}: ProjectHeroProps) {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center pt-24 pb-32 md:pt-32 md:pb-48 px-4 text-center">
      {/* Faded Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 user-select-none pointer-events-none"
      >
        <Image
          src={backgroundImage}
          fill
          className="object-cover opacity-10 blur-xl"
          alt={`${title} Background`}
          quality={10}
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-background" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/70 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mt-4"
        >
          {projectType}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-tight"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
