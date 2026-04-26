"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectBrowserFrameProps {
  title: string;
  thumbnailUrl: string;
  languageIcons: string[];
  link: {
    url?: string;
    clientLink?: string;
    serverLink?: string;
  };
}

export default function ProjectBrowserFrame({
  title,
  thumbnailUrl,
  languageIcons,
  link,
}: ProjectBrowserFrameProps) {
  // Helper to extract tech name from URL
  const getTechName = (url: string) => {
    try {
      const parts = url.split("/");
      let name = parts[parts.length - 2];
      if (!name) return "Tech";
      // Handle special cases
      if (name.includes("css")) return "CSS";
      if (name.includes("html")) return "HTML";
      if (name.includes("js")) return name.replace("js", ".js");
      return name.charAt(0).toUpperCase() + name.slice(1);
    } catch {
      return "Tech";
    }
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-20 md:-mt-32 flex flex-col items-center">
      {/* Browser Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 bg-card"
      >
        {/* Mac window header */}
        <div className="bg-foreground/5 px-4 py-3 flex items-center gap-2 border-b border-foreground/5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="relative aspect-video w-full bg-background">
          <Image
            src={thumbnailUrl}
            fill
            className="object-cover md:object-contain object-top bg-foreground/5"
            alt={`${title} Preview`}
            priority
          />
        </div>
      </motion.div>

      {/* Tech Stack Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-12 px-4"
      >
        {languageIcons.map((icon, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 text-foreground/80 hover:text-primary transition-colors"
          >
            <div className="relative w-5 h-5 md:w-6 md:h-6 grayscale hover:grayscale-0 transition-all">
              <Image src={icon} fill alt="Tech" className="object-contain" />
            </div>
            <span className="text-sm md:text-base font-semibold">
              {getTechName(icon)}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Links Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        {link.url && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-foreground/10 bg-background hover:bg-foreground/5 hover:border-foreground/20 transition-all flex items-center gap-2 text-sm font-semibold shadow-sm card-shadow"
          >
            Live Site <FiArrowUpRight size={16} className="text-primary" />
          </motion.a>
        )}
        {link.clientLink && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link.clientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-foreground/10 bg-background hover:bg-foreground/5 hover:border-foreground/20 transition-all flex items-center gap-2 text-sm font-semibold shadow-sm card-shadow"
          >
            Source Code <FiArrowUpRight size={16} className="text-primary" />
          </motion.a>
        )}
        {link.serverLink && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link.serverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-foreground/10 bg-background hover:bg-foreground/5 hover:border-foreground/20 transition-all flex items-center gap-2 text-sm font-semibold shadow-sm card-shadow"
          >
            Backend Code <FiArrowUpRight size={16} className="text-primary" />
          </motion.a>
        )}
      </motion.div>
    </div>
  );
}
