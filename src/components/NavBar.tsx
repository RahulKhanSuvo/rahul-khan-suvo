"use client";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

function NavBar() {
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
  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50">
      <button className="bg-background card-shadow p-3 rounded">
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
      <nav>
        <ul>
          <li>
            <div
              onClick={() => {
                scrollToSection("home");
                setActiveSection("home");
              }}
              className={classNames("rounded p-1", {
                "bg-[var(--primary)] text-white": true,
              })}
            >
              Home
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
