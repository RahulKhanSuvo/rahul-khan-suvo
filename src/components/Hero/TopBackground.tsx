import Image from "next/image";

export default function TopBackground() {
  return (
    <div className="absolute w-full max-w-[360px] md:max-w-screen h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
      <div className="w-full h-full relative">
        {/* Rocket icon - top center */}
        <div className="circle-icon absolute top-0 left-[171px] md:top-20 md:left-72">
          <Image
            width={23}
            alt="Rocket icon"
            src={"/rocket_icon.svg"}
            height={23}
          />
        </div>

        {/* Bracket icon - bottom left */}
        <div className="circle-icon absolute top-[162px] left-[71px] md:top-64 md:left-0">
          <Image
            width={23}
            alt="Bracket icon"
            src={"/bracket_icon.svg"}
            height={23}
          />
        </div>

        {/* GitHub icon - center right */}
        <div className="circle-icon absolute top-60 left-[200px] md:top-80 md:left-[80%]">
          <Image
            width={23}
            alt="GitHub icon"
            src={"/github_icon.svg"}
            height={23}
          />
        </div>

        {/* Electricity icon - center left */}
        <div className="circle-icon absolute top-60 left-[50px] md:top-80 md:left-[20%]">
          <Image
            width={23}
            alt="Electricity icon"
            src={"/electricity_icon.svg"}
            height={23}
          />
        </div>

        {/* Merge icon - top right */}
        <div className="circle-icon absolute top-20 left-[250px] md:top-40 md:left-[85%]">
          <Image
            width={23}
            alt="Merge icon"
            src={"/merge_icon.svg"}
            height={23}
          />
        </div>

        {/* Stack icon - bottom right */}
        <div className=" hidden md:flex circle-icon absolute top-[200px] left-[250px] md:top-[70%] md:left-[85%]">
          <Image
            width={23}
            alt="Stack icon"
            src={"/stack_icon.svg"}
            height={23}
          />
        </div>
      </div>
    </div>
  );
}
