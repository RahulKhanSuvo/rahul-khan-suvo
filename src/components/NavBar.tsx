"use client";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { motion } from "motion/react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection("home");
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-background card-shadow p-3 rounded md:hidden"
      >
        <Image
          alt="light"
          src="/menu_icon_light.svg"
          height={20}
          width={20}
          className=" block dark:hidden"
        />
        <Image
          alt="dark"
          src="/menu_icon_dark.svg"
          height={20}
          width={20}
          className="hidden dark:block"
        />
      </button>
      <Reveal initialY={-20} duration={0.5}>
        <nav
          className={classNames(
            "bg-background card-shadow p-3 duration-300 ease-in-out rounded md:block",
            {
              " visible pointer-events-auto": isOpen,
              "hidden md:opacity-100": !isOpen,
            }
          )}
        >
          <ul className="flex flex-col  gap-4 items-center text-lg font-normal md:flex-row whitespace-nowrap">
            {sections.map(({ id, label }) => (
              <li className="relative" key={id}>
                <div
                  onClick={() => {
                    scrollToSection(id);
                    setActiveSection(id);
                    setIsOpen(false);
                  }}
                  className={`p-1  cursor-pointer  ${
                    activeSection === id && "text-white"
                  }`}
                >
                  {activeSection === id && (
                    <motion.div
                      layoutId="active-pill"
                      style={{ borderRadius: 4 }}
                      className="absolute  inset-0 bg-[var(--primary)] "
                    ></motion.div>
                  )}
                  <span className="relative z-10"> {label}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>
    </div>
  );
}

export default NavBar;
