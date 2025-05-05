"use client";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-background card-shadow p-3 rounded"
      >
        <Image
          alt="light"
          src="/menu_icon_light.svg"
          height={20}
          width={20}
          className="block dark:hidden"
        />
        <Image
          alt="dark"
          src="/menu_icon_dark.svg"
          height={20}
          width={20}
          className="dark:block hidden"
        />
      </button>

      <nav
        className={classNames(
          "bg-background card-shadow p-3 duration-300 ease-in-out rounded md:block",
          {
            "opacity-100 visible pointer-events-auto": isOpen,
            "opacity-0 invisible pointer-events-none": !isOpen,
          }
        )}
      >
        <ul className="space-y-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <div
                onClick={() => {
                  scrollToSection(id);
                  setActiveSection(id);
                  setIsOpen(false);
                }}
                className={classNames("rounded p-1 cursor-pointer", {
                  "bg-[var(--primary)] text-white": activeSection === id,
                })}
              >
                {label}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
