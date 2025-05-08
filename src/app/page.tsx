import ScrollProgressBar from "@/components/Animation/ScrollProgressBar";
import TopBackground from "@/components/Hero/TopBackground";
import NavBar from "@/components/NavBar";
import Sections from "@/components/Sections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <ScrollProgressBar />
      <NavBar />

      <Sections />
      <TopBackground />
      <Image
        alt="bottom gradient"
        width={1200}
        height={700}
        className="absolute bottom-0 min-w-[1240px] min-h-[700px] -z-50 md:hidden"
        src={"/bottom_gradient_mobile.svg"}
      />
      <Image
        alt="bottom gradient"
        width={1557}
        height={936}
        className="absolute -bottom-[175px] left-1/2 -translate-x-1/2 min-w-[1557px] min-h-[936px] -z-50 hidden md:block"
        src={"/bottom_gradient.svg"}
      />
    </div>
  );
}
