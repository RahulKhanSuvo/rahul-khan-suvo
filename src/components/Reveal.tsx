"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";
type Props = {
  initialX?: number;
  initialY?: number;
  duration?: number;
  delay?: number;
  children?: React.ReactNode;
};
export default function Reveal({
  children,
  initialX = 0,
  initialY = 0,
  duration = 0,
  delay = 0,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);
  return (
    <motion.span
      ref={ref}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, x: initialX, y: initialY },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration, delay }}
      animate={controls}
    >
      {children}
    </motion.span>
  );
}
