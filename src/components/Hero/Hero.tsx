import Image from "next/image";
import SocialBtn from "./SocialBtn";
import { MdFileDownload } from "react-icons/md";
import Reaving from "../Animation/Reaving";
import ImageAnimating from "../Animation/ImageAnimating";
import { IntroSection } from "./IntroSection";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mx-auto px-4 sm:px-6 lg:px-8  w-full gap-8 md:gap-[137px] py-8 md:py-12 z-20">
      {/* Text Content */}
      <div className="flex flex-col gap-1 md:gap-[14px] items-center md:items-start text-center md:text-start md:my-[58px]">
        <Reaving>
          <IntroSection name="Rahul Khan Suvo" title="Frontend Developer" />
        </Reaving>
        <Reaving>
          <a
            href="https://drive.google.com/uc?export=download&id=1-j0laNGiXknvDWZ3RnZbsfp4CRcYquNC"
            download
            className="bg-primary text-white rounded-[4px] px-4 py-2 md:px-8 md:py-2   md:text-4xl transition-all flex items-center gap-2 md:self-start hover:scale-105 duration-300"
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
          alt="Profile picture of Rahul Khan Suvo"
          width={280}
          height={320}
          className="md:hidden w-full h-auto rounded-4xl shadow-2xl mx-auto border-4 border-white/10"
          style={{ height: 'auto' }}
          priority
        />
        <ImageAnimating>
          <div className="hidden md:flex items-center justify-center group w-full h-auto">
            <Image
              src={"/profile_light_purple.png"}
              alt="Decorative background"
              height={430}
              width={375}
              className="w-[370px] h-[430px] absolute right-0 -z-10 group-hover:scale-[105%] group-hover:-rotate-6 ease-in-out duration-500 transition-all opacity-80"
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src={"/profile_dark_purple.png"}
              alt="Decorative background"
              height={430}
              width={372}
              className="w-[370px] h-[430px] absolute right-2 -z-10 group-hover:scale-[105%] group-hover:rotate-6 ease-in-out duration-500 transition-all opacity-80"
              style={{ width: 'auto', height: 'auto' }}
            />

            <Image
              src={"/profile.jpg"}
              alt="Profile picture of Rahul Khan Suvo"
              height={417}
              width={357}
              className="min-w-[350px] h-[415px] z-10 mr-[7.7px] my-[6.5px] rounded-4xl border-4 border-white/20 shadow-2xl group-hover:scale-[102%] group-hover:border-primary/50 ease-in-out duration-300 transition-all overflow-hidden object-cover"
              style={{ height: 'auto' }}
            />
          </div>
        </ImageAnimating>

        {/* Spinning Experience Badge */}
        <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-12 z-30 w-28 h-28 md:w-36 md:h-36 bg-background rounded-full outline outline-background flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
            <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="transparent" />
            <text className="text-[10px] font-black fill-primary tracking-[0.2em] uppercase">
              <textPath href="#circlePath">
                • 1+ Years Exp • Web Developer
              </textPath>
            </text>
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-primary mt-1">
            <span className="text-3xl font-black leading-none">1+</span>
          </div>
        </div>
      </div>
      <SocialBtn />
    </section>
  );
}
