"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function WhatsAppButton() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href="https://api.whatsapp.com/send/?phone=%2B8801609553810&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow group"
            aria-label="Chat on WhatsApp"
          >
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
            <FaWhatsapp className="w-8 h-8 z-10" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
