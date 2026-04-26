export default function ExperienceBadge() {
  return (
    <div className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5 z-30 w-20 h-20 md:w-28 md:h-28 bg-background rounded-full outline outline-background flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-[spin_12s_linear_infinite]"
      >
        <path
          id="circlePath"
          d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
          fill="transparent"
        />
        <text className="fill-primary" fontSize="10" fontWeight="bold" letterSpacing="2">
          <textPath href="#circlePath">
            • 1+ Years Exp • Developer
          </textPath>
        </text>
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-primary">
        <span className="text-xl md:text-2xl font-black leading-none">1+</span>
        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wide opacity-70">YRS</span>
      </div>
    </div>
  );
}
