import Reveal from "../Reveal";

type Props = {
  plainText: string;
  highlightedText: string;
};
export default function SectionHeader({ plainText, highlightedText }: Props) {
  return (
    <Reveal initialX={-40}>
      <h2 className="text-[22px] md:text-[35px] text-center px-20">
        {plainText}{" "}
        <span className="px-2 text-white rounded-[4px] bg-[var(--primary)] whitespace-nowrap">
          {highlightedText}
        </span>
      </h2>
    </Reveal>
  );
}
