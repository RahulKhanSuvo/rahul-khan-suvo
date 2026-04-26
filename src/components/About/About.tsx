"use client";
import React from "react";
import { motion } from "motion/react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <SectionContainer id="about">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader plainText="About" highlightedText="Me" />
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Simplified Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <SimpleDeveloperIllustration />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col gap-6"
          >
            <div>

              <h3 className="text-xl md:text-3xl font-bold text-foreground mt-4 leading-snug">
                Transforming visions into <span className="text-primary italic">web experience</span>
              </h3>
            </div>

            <div className="space-y-4 text-foreground/70 text-sm md:text-base leading-relaxed">
              <p>
                Welcome to my digital playground! I&apos;m not just a web developer; I&apos;m a passionate creator who turns ideas into captivating web experiences.
              </p>
              <p>
                As a Full Stack Developer, I craft beautiful user interfaces and build robust backend systems for seamless experiences. I excel at creating dynamic web applications and optimizing existing ones – always aiming for efficiency and scalability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                Let&apos;s Contact <FiArrowRight size={18} />
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </SectionContainer>
  );
};

// Simplified Clean SVG Illustration
const SimpleDeveloperIllustration = () => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[350px]"
    >
      <circle cx="200" cy="200" r="150" fill="var(--primary)" fillOpacity="0.05" />

      {/* Screen Outline */}
      <rect x="100" y="120" width="200" height="140" rx="4" stroke="currentColor" strokeWidth="2" className="text-foreground/30" />
      <rect x="108" y="128" width="184" height="110" rx="2" fill="currentColor" className="text-foreground/5" />

      {/* Base */}
      <path d="M180 260 L220 260 L230 280 L170 280 Z" fill="currentColor" className="text-foreground/20" />
      <rect x="150" y="280" width="100" height="4" rx="2" fill="currentColor" className="text-foreground/10" />

      {/* Code Lines */}
      <rect x="120" y="145" width="60" height="4" rx="2" fill="var(--primary)" fillOpacity="0.4" />
      <rect x="120" y="155" width="100" height="4" rx="2" fill="currentColor" className="text-foreground/10" />
      <rect x="120" y="165" width="80" height="4" rx="2" fill="currentColor" className="text-foreground/10" />

      {/* Floating Elements */}
      <circle cx="200" cy="240" r="3" fill="var(--primary)" />
    </svg>
  );
};

export default About;
