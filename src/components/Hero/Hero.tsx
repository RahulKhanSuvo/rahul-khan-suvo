import Image from "next/image";
import SocialBtn from "./SocialBtn";
import { MdFileDownload } from "react-icons/md";
import Reaving from "../Animation/Reaving";
import { IntroSection } from "./IntroSection";
import ImageAnimating from "../Animation/ImageAnimating";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mx-auto px-4 sm:px-6 lg:px-8  w-full gap-8 md:gap-[137px] py-8 md:py-12 z-20">
      {/* Text Content */}
      <div className="flex flex-col gap-1 md:gap-[14px] items-center md:items-start text-center md:text-start md:my-[58px]">
        <Reaving>
          <IntroSection name="Rahul Khan" title="Frontend Developer" />
        </Reaving>

        <Reaving>
          <a
            href="https://drive.google.com/uc?export=download&id=1-j0laNGiXknvDWZ3RnZbsfp4CRcYquNC"
            download
            className="bg-[var(--primary)] text-white rounded-[4px] px-4 py-2 md:px-8 md:py-2   md:text-4xl transition-all flex items-center gap-2 md:self-start hover:scale-105 duration-300"
          >
            Resume{" "}
            <span>
              <MdFileDownload />
            </span>
          </a>
        </Reaving>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-xs sm:max-w-md md:w-auto">
        <Image
          src={"/profile.jpg"}
          alt="Profile picture of Rahul Khan"
          width={280}
          height={320}
          className="md:hidden w-full h-auto rounded-2xl  shadow-lg mx-auto"
          priority
        />
        <ImageAnimating>
          <div className="hidden md:flex items-center justify-center group  w-full h-auto">
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
              className="min-w-[350px] h-[415px] z-10 mr-[7.7px] my-[6.5px] rounded-2xl  border-white shadow-lg group-hover:scale-[102%] ease-in-out duration-300"
            />
          </div>
        </ImageAnimating>
      </div>
      <SocialBtn />
    </section>
  );
}
