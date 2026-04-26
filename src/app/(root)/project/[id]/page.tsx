"use client";

import { FaArrowLeft } from "react-icons/fa";
import projects from "@/data/projects.json";
import PhotoSlider from "@/components/Projects/PhotoSlider";
import Link from "next/link";
import React from "react";
import ProjectHero from "@/components/Projects/ProjectHero";
import ProjectBrowserFrame from "@/components/Projects/ProjectBrowserFrame";
import ProjectSectionBlock from "@/components/Projects/ProjectSectionBlock";

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolve = React.use(params);
  const { id } = resolve;
  const projectIndex = projects.findIndex((p) => p.id === Number(id));
  const project = projects[projectIndex];

  if (!project)
    return <div className="p-6 text-center text-foreground">Project not found</div>;

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 font-sans">
      {/* Back Button */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-foreground/10 card-shadow"
        >
          <FaArrowLeft size={14} />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      <ProjectHero
        title={project.title}
        projectType={(project as any).projectType || "Project"}
        description={project.description}
        duration={project.duration}
        backgroundImage={project.thumbnail[0]}
      />

      <ProjectBrowserFrame
        title={project.title}
        thumbnailUrl={project.thumbnail[0]}
        languageIcons={project.languageIcons}
        link={project.link}
      />

      <ProjectSectionBlock
        title="Challenges"
        items={project.challengesFaced}
      />

      {/* Photo Slider Section */}
      {project.thumbnail.length > 1 && (
        <div className="max-w-5xl mx-auto px-4 mt-16 md:mt-32">
          <div className="rounded-3xl p-2 bg-foreground/5 border border-foreground/5">
            <PhotoSlider thumbnails={project.thumbnail} />
          </div>
        </div>
      )}

      <ProjectSectionBlock
        title="Solutions"
        items={project.keyFeatures}
      />
    </div>
  );
}
