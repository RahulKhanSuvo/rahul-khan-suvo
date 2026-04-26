"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import experienceData from "@/data/experience.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import { MdWork, MdLocationOn } from "react-icons/md";
import { FiClock, FiExternalLink, FiArrowRight } from "react-icons/fi";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll-linked animation for the timeline track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <SectionContainer id="experience">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader plainText="💼 My" highlightedText="Work Experience" />

        <div ref={containerRef} className="relative mt-16 md:mt-24 space-y-12 md:space-y-24">
          {/* Animated Timeline Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ scaleY }}
              className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[var(--primary)] to-cyan-400 origin-top"
            />
          </div>

          {experienceData.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

interface ExperienceItemProps {
  experience: (typeof experienceData)[0];
  index: number;
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 top-0 h-10 w-10 rounded-full bg-[var(--primary)] border-4 border-[#0b0e14] -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white shadow-[0_0_20px_rgba(80,47,254,0.4)]">
        <MdWork size={20} />
      </div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className={`w-full md:w-[45%] rounded-2xl p-6 md:p-8 backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-500 group relative overflow-hidden`}
      >
        {/* Hover Highlight Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors duration-300">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <a 
                  href={experience.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-all group/link"
                >
                  {experience.company}
                  <FiExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 -translate-y-1 translate-x-1 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:items-end text-xs md:text-sm text-white/50 gap-1">
              <span className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                <FiClock size={14} />
                {experience.duration}
              </span>
              <span className="flex items-center gap-2 px-2.5 py-1">
                <MdLocationOn size={16} className="text-[var(--primary)]" />
                {experience.location}
              </span>
            </div>
          </div>

          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="space-y-3 mb-8">
            {experience.achievements.map((achievement, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-start gap-3 text-sm text-white/60 group/item"
              >
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--primary)] group-hover/item:scale-150 transition-transform duration-300 shrink-0" />
                <span className="group-hover/item:text-white/90 transition-colors duration-300">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {experience.skills.map((skill, i) => (
              <span 
                key={i} 
                className="text-[10px] md:text-xs font-semibold px-3 py-1 rounded-md bg-white/5 text-white/40 border border-white/5 group-hover:border-[var(--primary)]/30 group-hover:text-[var(--primary)] transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] group-hover:w-full transition-all duration-700" />
      </motion.div>

      {/* Date Marker (Mobile Only) */}
      <div className="md:hidden mt-4 mb-8 flex items-center gap-2 text-white/40 text-xs">
        <FiArrowRight /> Scroll for more
      </div>
    </div>
  );
};

export default Experience;
