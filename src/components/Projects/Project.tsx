"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";

type ProjectProps = {
  id: number;
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
    serverLink?: string;
    clientLink?: string;
  };
  description: string;
  languageIcons: string[];
  index: boolean;
};

export default function Project({
  id,
  thumbnail,
  title,
  link,
  index,
  description,
  languageIcons,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;

    mouseX.set(mX);
    mouseY.set(mY);

    const xPct = mX / width - 0.5;
    const yPct = mY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 2000 }}
      className="w-full relative outline-none"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`flex flex-col ${index ? "md:flex-row" : "md:flex-row-reverse"
          } items-stretch w-full p-5 md:p-[18px] gap-[30px] card-shadow card group relative transition-colors duration-300 hover:border-white/20`}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent 40%)`,
          }}
        />

        <div
          className="rounded-md border-white/10 border-[0.2px] w-full md:w-2/3 shadow-2xl relative z-20 bg-background/50"
          style={{ transform: "translateZ(30px)" }}
        >
          <Image
            src={thumbnail}
            width={392}
            height={280}
            alt="Project Thumbnail"
            className="w-full h-[200px] md:h-[280px] object-cover rounded-md"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div
          className={`w-full flex items-center relative z-20 ${index ? "pr-2" : "pl-2"
            }`}
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="flex flex-col gap-[11px] w-full">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl md:text-[22px] drop-shadow-md">{title}</h3>
            </div>

            <p className="line-clamp-2 text-sm md:text-base text-foreground/80">{description}</p>

            <div className="flex flex-row gap-[11px]">
              {languageIcons.map((icon, iconId) => (
                <Image
                  key={iconId}
                  src={icon}
                  alt="language icon"
                  width={20}
                  height={20}
                  style={{ height: 'auto' }}
                  className="drop-shadow-sm"
                />
              ))}
            </div>

            <div className="w-full flex justify-between gap-4 mt-2">
              <div className="w-full rounded-xl gap-2 flex flex-wrap">
                {link.clientLink && (
                  <a
                    href={link.clientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10  transition-colors border border-gray-500 backdrop-blur-md"
                  >
                    <FaGithub />
                    <span className="hidden md:block">Client</span>
                  </a>
                )}
                {link.serverLink && (
                  <a
                    href={link.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-gray-500 dark:border-white/5 backdrop-blur-md"
                  >
                    <FaGithub />
                    <span className="hidden md:block">Server</span>
                  </a>
                )}

                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-gray-500 dark:border-white/5 backdrop-blur-md"
                >
                  <TbWorld />
                  <span className="hidden md:block">Live</span>
                </a>
              </div>
              <div>
                <Link
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 transition-colors border dark:border-white/5 border-gray-500 backdrop-blur-md"
                  href={`/project/${id}`}
                >
                  <FaArrowUpRightFromSquare />
                  <span className="hidden md:block">Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}