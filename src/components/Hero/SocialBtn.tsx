import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function SocialBtn() {
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

  return (
    <div className="flex gap-4 items-center justify-center md:justify-start absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--primary)] text-white rounded-full p-2.5 transition-all hover:scale-110 duration-300"
          aria-label={`Visit my ${link.name} profile`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
