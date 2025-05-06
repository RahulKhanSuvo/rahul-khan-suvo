import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import projects from "@/data/projects.json";
import Project from "./Project";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div className="mx-6 md:mx-[16px]">
        <SectionHeader plainText="👌Some of my" highlightedText="Best Works" />
        <div className="lg:w-full grid grid-cols-1 md:grid-cols-2 gap-50">
          {projects.map((project, id) => (
            <Project
              key={id}
              thumbnail={project.thumbnail}
              title={project.title}
              link={project.link}
              description={project.description}
              languageIcons={project.languageIcons}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
