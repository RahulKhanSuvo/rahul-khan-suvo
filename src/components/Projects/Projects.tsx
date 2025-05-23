import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import projects from "@/data/projects.json";
import Project from "./Project";
import Image from "next/image";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div className=" w-full mx-[22px] md:mx-[16px] ">
        <SectionHeader plainText="👌Some of my" highlightedText="Best Works" />
        <div className="lg:w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              thumbnail={project.thumbnail[0]}
              title={project.title}
              link={project.link}
              description={project.description}
              languageIcons={project.languageIcons}
            />
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
