import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import skills from "@/data/skills.json";

export default function Sections() {
  return (
    <main className="flex flex-col  min-h-screen  gap-[90px] w-full md:max-w-screen-lg  md:pt-32 mx-auto">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
