"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function TopBackground() {
  const techIcons = [
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React icon",
      position: "top-0 left-[171px] md:top-20 md:left-[40%]",
      animation: {
        rotate: 360,
        transition: { duration: 8, repeat: Infinity, ease: "linear" },
      },
    },
    {
      name: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript icon",
      position: "top-[140px] left-[7px] md:top-64 md:left-[30%] lg:left-[10%]",
      animation: {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: Infinity },
      },
    },
    {
      name: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js icon",
      position: "top-70 left-[270px] md:top-70 md:left-[56%]",
      animation: {
        scale: [1, 1.3, 1],
        transition: { duration: 4, repeat: Infinity },
      },
    },
    {
      name: "Tailwind",
      src: "https://www.svgrepo.com/show/374118/tailwind.svg",
      alt: "Tailwind CSS icon",
      position: "top-64 left-[40px] md:top-[400px] md:left-[40%]",
      animation: {
        opacity: [1, 0, 1],
        transition: { duration: 5, repeat: Infinity },
      },
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js icon",
      position: "top-20 left-[250px] md:top-40 md:left-[85%]",
      animation: {
        rotate: [0, 15, -15, 0],
        transition: { duration: 6, repeat: Infinity },
      },
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git icon",
      position: "top-[200px] left-[250px] md:top-[70%] md:left-[85%]",
      animation: {
        y: [0, 5, 0],
        transition: { duration: 4, repeat: Infinity },
      },
      responsive: "hidden md:flex",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript icon",
      position: "top-[100px] left-[100px] md:top-[500px] md:left-[20%]",
      animation: {
        scale: [1, 1.2, 1],
        transition: { duration: 5, repeat: Infinity },
      },
    },
    {
      name: "GraphQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "GraphQL icon",
      position: "top-[180px] left-[150px] md:top-[500px] md:left-[60%]",
      animation: {
        scale: [1, 1.1, 1],
        transition: { duration: 4, repeat: Infinity },
      },
    },
  ];

  return (
    <>
      <div className="absolute w-full max-w-[360px] md:max-w-screen h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
        <div className="w-full h-full relative">
          {techIcons.map((icon) => (
            <motion.div
              key={icon.name}
              className={`circle-icon absolute ${icon.position} ${
                icon.responsive || ""
              }`}
              animate={icon.animation}
              whileHover={{ scale: 1.2 }}
            >
              <Image width={23} height={23} src={icon.src} alt={icon.alt} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-[-315px] left-1/2  -translate-x-1/2 z-0 hidden dark:md:block">
        <Image
          width={809}
          height={877}
          src="top_highlight.svg"
          alt="dark mode highlighter"
        />
      </div>
      <div className="absolute top-[-115px] left-1/2  -translate-x-1/2 z-0 hidden dark:block dark:md:hidden">
        <Image
          width={429}
          height={465}
          src="/top_highlight_mobile.svg"
          alt="dark mode highlighter for mobile"
        />
      </div>
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_light.svg')] bg-[auto_auto] hidden dark:hidden md:block"></div>
      <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_light.svg')] bg-[auto_auto] dark:hidden"></div>
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_dark.svg')] bg-[auto_auto] hidden dark:md:block"></div>
      <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_dark.svg')] bg-[auto_auto] hidden dark:block md:dark:hidden"></div>
    </>
  );
}
