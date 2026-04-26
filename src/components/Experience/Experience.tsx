"use client";
import React from "react";
import { motion } from "motion/react";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";

import { MdWork, MdSchool } from "react-icons/md";

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader plainText="📝 Qualifications" highlightedText="Experience & Education" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 md:mt-24">
          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(80,47,254,0.1)]">
                <MdWork size={20} />
              </span>
              My Expertise
            </h3>
            <div className="relative border-l-2 border-foreground/10 ml-4 space-y-12">
              {experienceData.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.role}
                  subtitle={`${exp.company}${exp.location ? ` • ${exp.location}` : ""}`}
                  duration={exp.duration}
                  description={exp.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(80,47,254,0.1)]">
                <MdSchool size={22} />
              </span>
              Education Background
            </h3>
            <div className="relative border-l-2 border-foreground/10 ml-4 space-y-12">
              {educationData.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  duration={edu.duration}
                  description={edu.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  index: number;
}

const TimelineItem = ({ title, subtitle, duration, description, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 group"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 z-10" />

      {/* Card Content */}
      <div className="p-6 rounded-2xl bg-card border border-foreground/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden shadow-sm dark:shadow-none">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 relative z-10">
          <div>
            <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h4>
            <p className="text-foreground/50 text-sm mt-1">{subtitle}</p>
          </div>

          <div className="shrink-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold shadow-[0_0_15px_rgba(80,47,254,0.3)]">
              {duration}
            </span>
          </div>
        </div>

        <p className="text-foreground/60 text-sm leading-relaxed relative z-10">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Experience;
