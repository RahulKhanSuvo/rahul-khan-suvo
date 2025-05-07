"use client";
import React from "react";
import { motion } from "motion/react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import about from "@/data/about.json";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    y: -5,
    boxShadow:
      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
};

export default function About() {
  return (
    <SectionContainer id="about">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full mx-[22px] md:mx-[16px]"
      >
        <SectionHeader plainText="About" highlightedText="Me" />

        <motion.div
          className="lg:w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-10"
          variants={containerVariants}
        >
          {about.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="card-shadow group card p-6 bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl dark:bg-gray-800/50"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-[var(--primary)] transition-colors duration-300">
                {item.title}
              </h3>
              <motion.p
                className="text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
