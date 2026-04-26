import Image from "next/image";
import SocialBtn from "./SocialBtn";
import { MdFileDownload } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import ImageAnimating from "../Animation/ImageAnimating";
import { IntroSection } from "./IntroSection";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 w-full gap-8 md:gap-12 py-10 md:py-16 z-20 min-h-[80vh] md:min-h-0">
      {/* Text Content */}
      <div className="flex flex-col gap-4 md:gap-5 items-center md:items-start text-center md:text-start w-full md:w-[55%]">
        <IntroSection name="Rahul Khan" title="Frontend Developer" />

        {/* CTA Row */}
        <div className="flex flex-wrap gap-3 mt-3">
          <a
            href="#contact"
            className="group bg-primary text-white rounded-lg px-6 py-2.5 text-sm font-semibold transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 duration-300"
          >
            Let&apos;s Talk
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1-j0laNGiXknvDWZ3RnZbsfp4CRcYquNC"
            download
            className="border border-foreground/15 text-foreground rounded-lg px-6 py-2.5 text-sm font-semibold transition-all flex items-center gap-2 hover:bg-foreground/5 duration-300"
          >
            Resume <MdFileDownload size={16} />
          </a>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:w-[40%] md:max-w-none">
        <Image
          src={"/profile.jpg"}
          alt="Profile picture of Rahul Khan"
          width={280}
          height={320}
          className="md:hidden w-full h-auto rounded-2xl shadow-lg mx-auto"
          priority
        />
        <ImageAnimating>
          <div className="hidden md:flex items-center justify-center group w-full h-auto">
            <Image
              src={"/profile_light_purple.png"}
              alt="Decorative background"
              height={430}
              width={375}
              className="w-[370px] h-[430px] absolute right-0 -z-10 group-hover:scale-[102%] group-hover:-rotate-3 ease-in-out duration-300"
            />
            <Image
              src={"/profile_dark_purple.png"}
              alt="Decorative background"
              height={430}
              width={372}
              className="w-[370px] h-[430px] absolute right-2 -z-10 group-hover:scale-[102%] group-hover:rotate-3 ease-in-out duration-300"
            />
            <Image
              src={"/profile.jpg"}
              alt="Profile picture of Rahul Khan"
              height={417}
              width={357}
              className="min-w-[350px] h-[415px] z-10 mr-[7.7px] my-[6.5px] rounded-2xl border-white shadow-lg group-hover:scale-[102%] ease-in-out duration-300"
            />
          </div>
        </ImageAnimating>
      </div>

      <SocialBtn />
    </section>
  );
}
