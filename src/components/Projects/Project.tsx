"use client";
import Image from "next/image";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEventHandler } from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type ProjectProps = {
  id: number;
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
    githubLink: string;
  };
  description: string;
  languageIcons: string[];
};

export default function Project({
  id,
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}: ProjectProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { damping: 20, stiffness: 300 });
  const ySpring = useSpring(y, { damping: 20, stiffness: 300 });
  const xRotation = useTransform(ySpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const yRotation = useTransform(xSpring, [-0.5, 0.5], ["15deg", "-15deg"]);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!e.currentTarget) return;
    const target = e.currentTarget as HTMLElement;
    const clientRect = target.getBoundingClientRect();
    const xPos = (e.clientX - clientRect.left) / clientRect.width - 0.5;
    const yPos = (e.clientY - clientRect.top) / clientRect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: xRotation,
        rotateY: yRotation,
      }}
      className="flex flex-col items-stretch w-full  p-5 md:p-[18px] gap-[30px] card-shadow card"
    >
      <div
        style={{ transform: "translateZ(100px)" }}
        className="rounded-md border-gray-200 border-[0.2px] w-full"
      >
        <Image
          src={thumbnail}
          width={392}
          height={230}
          alt="Project Thumbnail"
          className="w-full rounded-md object-cover"
        />
      </div>
      <div
        className="flex flex-col gap-[11px]"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
          {/* <motion.a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-[5px] py-[3px] gap-1 bg-[#b9b9b93d] items-center rounded text-[14px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden md:block">{link.label}</span>
            <MdArrowOutward />
          </motion.a> */}
        </div>
        <p className="line-clamp-2 text-sm md:text-base">{description}</p>
        <div className="flex flex-row gap-[11px]">
          {languageIcons.map((icon, iconId) => (
            <Image
              key={iconId}
              src={icon}
              alt="language icon"
              width={20}
              height={20}
            />
          ))}
        </div>
        <div className=" w-full rounded-xl flex justify-between">
          <a
            href={link.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            <FaGithub />
            <span className="hidden md:block">GitHub</span>
          </a>
          <Link
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            href={`/project/${id}`}
          >
            <FaArrowUpRightFromSquare />
            <span className="hidden md:block">Details</span>
          </Link>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            <TbWorld />
            <span className="hidden md:block">Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
