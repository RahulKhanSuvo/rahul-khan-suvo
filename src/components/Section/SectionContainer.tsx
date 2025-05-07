export default function SectionContainer({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className="w-full relative flex justify-center z-30 scroll-m-[100px]"
    >
      {children}
    </section>
  );
}
