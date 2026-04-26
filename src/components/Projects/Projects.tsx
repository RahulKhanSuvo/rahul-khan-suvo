"use client";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import projects from "@/data/projects.json";
import Project from "./Project";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Individual animated card — uses its own ref so it's
// independent of any parent motion context.
function AnimatedCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      // Start hidden (no `initial` prop needed — `animate` drives it)
      style={{ opacity: 0, y: 60 }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div className="w-full mx-[22px] md:mx-[16px]">
        <SectionHeader plainText="👌Some of my" highlightedText="Best Works" />

        <div className="lg:w-full space-y-10 mt-10">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} delay={index * 0.12}>
              <Project
                id={project.id}
                index={index % 2 === 0}
                thumbnail={project.thumbnail[0]}
                title={project.title}
                link={project.link}
                description={project.description}
                languageIcons={project.languageIcons}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>

      <Image
        src={"/projects_highlight.svg"}
        alt="background highlight"
        width={558}
        height={558}
        className="absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      />
    </SectionContainer>
  );
}
