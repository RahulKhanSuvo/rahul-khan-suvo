"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Reveal from "../Reveal";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEventHandler } from "react";
import { motion } from "motion/react";

type ProjectProps = {
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
};

export default function Project({
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
    y.set(yPos); // Fixed: Use yPos instead of xPos
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal initialX={-50} delay={0.5}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX: xRotation,
          rotateY: yRotation,
        }}
        className="flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px] card-shadow card"
      >
        <div
          style={{ transform: "translateZ(100px)" }}
          className="rounded-md border-gray-200 border-[0.2px]"
        >
          <Image
            src={thumbnail}
            width={392}
            height={230}
            alt="Project Thumbnail"
            className="w-full rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-[11px]">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex px-[5px] py-[3px] gap-1 bg-[#b9b9b93d] items-center rounded text-[14px]"
            >
              <span className="hidden md:block">{link.label}</span>
              <MdArrowOutward />
            </a>
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
        </div>
      </motion.div>
    </Reveal>
  );
}
