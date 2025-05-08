"use client";
import React from "react";
import { motion } from "motion/react";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function SocialButtons() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <IoLogoGithub size={20} />,
      url: "https://github.com/RahulKhanSuvo",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={20} />,
      url: "https://www.facebook.com/rahul.khan.suvo",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/rahul-khan-suvo",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      url: "https://api.whatsapp.com/send/?phone=%2B8801609553810&text&type=phone_number&app_absent=0",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="flex gap-4 items-center justify-center md:justify-start absolute -bottom-5 md:bottom-0 left-1/2 transform -translate-x-1/2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[var(--primary)] rounded-full p-2.5 transition-colors duration-300"
          aria-label={`Visit my ${link.name} profile`}
          variants={item}
          whileHover="hover"
          whileTap="tap"
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
