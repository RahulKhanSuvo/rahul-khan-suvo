import Image from "next/image";

export default function TopBackground() {
  return (
    <>
      <div className="absolute w-full max-w-[360px] md:max-w-screen h-[285px] md:h-[656px] top-[168px] md:top-11 left-1/2 -translate-1/2 md:overflow-x-hidden z-10">
        <div className="w-full h-full relative circle-icon top-0 left-[171px] md:top-28 md:left-72">
          <Image
            width={23}
            height={23}
            src={"/rocket_icon.svg"}
            alt="rocket icon"
          />
        </div>
      </div>
    </>
  );
}
