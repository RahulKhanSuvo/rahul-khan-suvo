import Image from "next/image";

export default function Skill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="relative flex gap-2 p-2 border-[var(--primary)] border rounded-lg h-[46px]">
      <Image width={20} height={20} src={icon} alt={`${name} icon`} />
      <p className="text-lg">{name}</p>
    </div>
  );
}
