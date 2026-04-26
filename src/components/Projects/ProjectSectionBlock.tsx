"use client";

import React from "react";
import { motion } from "motion/react";

interface ProjectSectionBlockProps {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

export default function ProjectSectionBlock({
  title,
  items,
}: ProjectSectionBlockProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-16 md:mt-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <div className="h-[2px] flex-1 bg-foreground/10 mt-2"></div>
      </motion.div>

      <div className="space-y-8">
        {items.map((item, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-primary/60 outline outline-primary/10"></div>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-foreground/90 capitalize">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-foreground/70 text-base md:text-lg mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
