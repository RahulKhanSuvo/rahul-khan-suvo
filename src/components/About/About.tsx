"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const About = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetching a high-quality developer lottie animation
    fetch("https://lottie.host/7e0407a1-55b6-455b-9d41-356a6558110b/6v13l4bX0H.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  return (
    <SectionContainer id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
               <SectionHeader plainText="About" highlightedText="Me" />
               <h3 className="text-2xl md:text-4xl font-bold text-foreground mt-4 leading-tight">
                 Transforming visions into <span className="text-primary italic">web experience</span>
               </h3>
            </div>

            <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Welcome to my digital playground! I&apos;m not just a web developer; I&apos;m a passionate creator who turns ideas into captivating web experiences.
              </p>
              <p>
                As a Full Stack Developer, I craft beautiful user interfaces and build robust backend systems for seamless experiences. I excel at creating dynamic web applications and optimizing existing ones – always aiming for efficiency and scalability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="#contact" 
                className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Let&apos;s Contact <FiArrowRight />
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=1-j0laNGiXknvDWZ3RnZbsfp4CRcYquNC" 
                download
                className="flex items-center gap-2 border-2 border-foreground/10 text-foreground px-8 py-3 rounded-lg font-bold hover:bg-foreground/5 transition-all duration-300"
              >
                Resume <FiDownload />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto"
          >
            {/* Background decorative glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10 w-full h-full">
              {animationData && (
                <Lottie 
                  animationData={animationData} 
                  loop={true} 
                  className="w-full h-full drop-shadow-2xl"
                />
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
