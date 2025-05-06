import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

type ProjectProps = {
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
};
export default function Project({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}: ProjectProps) {
  return (
    <div className="flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px] card-shadow card">
      <div className=" rounded-md border-gray-200 border-[0.2px]">
        <Image
          src={thumbnail}
          width={392}
          height={230}
          alt="Project Thumbnail"
          className="w-full  rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-[5px] py-[3px] gap-1 bg-[#b9b9b93d] items-center rounded text-[14px]"
          >
            <span className="hidden md:block">{link.label}</span>
            <MdArrowOutward />
          </a>
        </div>
        <p className="line-clamp-2 text-sm md:text-base">{description}</p>
        <div className="flex flex-row gap-[11px]">
          {languageIcons.map((icon, iconId) => (
            <Image
              key={iconId}
              src={icon}
              alt="language icon"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
