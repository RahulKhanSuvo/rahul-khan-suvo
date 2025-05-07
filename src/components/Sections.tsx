import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function Sections() {
  return (
    <main className="flex flex-col  min-h-screen  gap-[90px] w-full md:max-w-[1300px]  md:pt-32 mx-auto">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
