import Image from "next/image";

export default function TopBackground() {
  return (
    <>
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
      {/* top light */}
      <div className="absolute top-[-315px] left-1/2  -translate-x-1/2 z-0 hidden dark:md:block">
        <Image
          width={809}
          height={877}
          src="top_highlight.svg"
          alt="dark mode highlighter"
        />
      </div>
      <div className="absolute top-[-115px] left-1/2  -translate-x-1/2 z-0 hidden dark:block dark:md:hidden">
        <Image
          width={429}
          height={465}
          src="/top_highlight_mobile.svg"
          alt="dark mode highlighter for mobile"
        />
      </div>
      {/* grid for light mode */}
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_light.svg')] bg-[auto_auto] hidden dark:hidden md:block"></div>

      {/* Light mode - Mobile */}
      <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_light.svg')] bg-[auto_auto]  dark:hidden"></div>

      {/* Dark mode - Desktop */}
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_dark.svg')] bg-[auto_auto]  hidden dark:md:block "></div>

      {/* Dark mode - Mobile */}
      <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_dark.svg')] bg-[auto_auto] hidden dark:block md:dark:hidden"></div>
    </>
  );
}
