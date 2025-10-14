import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { useIsMobile, useIsTablet } from "../hooks/useMediaQuery";

export function Prize({ children }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={`mt-4 sm:mt-6 md:mt-8 bg-gradient-to-br from-yellow-300 to-yellow-500 py-2 sm:py-3 md:py-4 bg-clip-text text-center font-bold tracking-tight text-transparent ${
          isMobile ? 'text-2xl' : 
          isTablet ? 'text-3xl' : 
          'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
        }`}
      >
        {children}
      </motion.h1>
    </LampContainer>
  );
}
