import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import skills from "@/data/skills.json";
import Skill from "./Skill";

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <div className="mx-[22px] md:mx-[16px] w-full flex flex-col items-center gap-10 md:gap-[50px]">
        <SectionHeader plainText="💻 This is my" highlightedText="Tech Stack" />
        <div className="bg-[var(--card)] rounded-lg w-full card-shadow px-[23px] py-[27px] flex flex-wrap flex-col md:flex-row justify-center items-center gap-[19px] md:gap-[33px]">
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon}></Skill>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
