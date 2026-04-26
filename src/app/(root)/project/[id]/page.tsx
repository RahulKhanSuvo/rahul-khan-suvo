"use client";

import Image from "next/image";
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { TbWorld, TbStack2, TbTarget, TbBulb, TbCalendar, TbUser } from "react-icons/tb";
import projects from "@/data/projects.json";
import PhotoSlider from "@/components/Projects/PhotoSlider";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolve = React.use(params);
  const { id } = resolve;
  const projectIndex = projects.findIndex((p) => p.id === Number(id));
  const project = projects[projectIndex];

  if (!project) return <div className="p-6 text-center text-foreground">Project not found</div>;

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Sticky Header Nav */}
      <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/50 border-b border-foreground/5 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link href="/#projects" className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-medium">
            <FaArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>
          <div className="flex gap-4">
            <a href={project.link.url} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary">
              <TbWorld size={20} />
            </a>
            {(project.link as any).githubLink && (
              <a href={(project.link as any).githubLink} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-foreground/10 rounded-full transition-colors">
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 space-y-16">

        {/* Project Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Main Info */}
          <div className="lg:col-span-12 space-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">{(project as any).projectType || "Project Case Study"}</span>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Sidebar / Overview (Now horizontal on top or left) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 bg-foreground/5 p-8 rounded-3xl border border-foreground/5">
              <OverviewItem icon={<TbUser className="text-primary" size={24} />} label="Role" value={(project as any).role || "Developer"} />
              <OverviewItem icon={<TbCalendar className="text-primary" size={24} />} label="Timeline" value={(project as any).duration || "2024"} />
              <OverviewItem icon={<TbStack2 className="text-primary" size={24} />} label="Stack" value={project.languageIcons.length + " Technologies"} />
              <div className="pt-4 flex flex-col gap-3 col-span-2 lg:col-span-1">
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
                >
                  Launch Project <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {/* Gallery */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 border border-foreground/5 bg-foreground/5">
              <PhotoSlider thumbnails={project.thumbnail} />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 italic">
                <span className="w-8 h-1 bg-primary rounded-full" /> Overview
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-4xl">
                {project.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid & Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContentCard
            title="Key Features"
            icon={<TbBulb size={24} />}
            accent="primary"
            items={project.keyFeatures}
          />
          <ContentCard
            title="Challenges"
            icon={<TbTarget size={24} />}
            accent="danger"
            items={project.challengesFaced}
          />
        </div>

        {/* Full Width Section: Future */}
        {project.futurePlans && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[3rem] bg-primary text-white space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black">Future Plans & <br />Roadmap</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.futurePlans.map((plan, index) => (
                  <div key={index} className="flex gap-4 items-start bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <span className="p-2 bg-white/20 rounded-lg text-sm font-bold">0{index + 1}</span>
                    <p className="text-lg font-medium">{plan}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Technology Stack Grid */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center uppercase tracking-widest text-foreground/40">Powered By</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100">
            {project.languageIcons.map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.1 }}
                className="w-16 h-16 relative"
              >
                <Image
                  src={icon}
                  alt="Technology icon"
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-20 border-t border-foreground/5">
          <Link href={`/project/${nextProject.id}`} className="group relative block p-12 md:p-20 rounded-[3rem] bg-foreground/5 hover:bg-primary transition-colors duration-500 overflow-hidden">
            <div className="flex flex-col gap-2 relative z-10 group-hover:text-white transition-colors">
              <span className="text-sm font-bold uppercase tracking-widest opacity-50">Next Project</span>
              <h3 className="text-4xl md:text-8xl font-black">{nextProject.title}</h3>
            </div>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 text-primary group-hover:text-white transition-all transform group-hover:translate-x-4 duration-500">
              <FaExternalLinkAlt size={64} className="opacity-10 md:opacity-100" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

const OverviewItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-foreground/5 rounded-2xl">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">{label}</p>
      <p className="text-lg font-bold text-foreground/80">{value}</p>
    </div>
  </div>
);

const ContentCard = ({ title, icon, items, accent }: { title: string, icon: React.ReactNode, items: string[], accent: "primary" | "danger" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 md:p-10 rounded-[2.5rem] bg-foreground/5 border border-foreground/5 space-y-6 hover:shadow-xl transition-shadow group"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${accent === "primary" ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white" : "bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white"}`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-foreground/60 group-hover:text-foreground/80 transition-colors">
          <span className="text-primary font-bold mt-1.5">•</span>
          <p className="leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  </motion.div>
);
