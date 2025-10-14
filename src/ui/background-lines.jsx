import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}) => {
  return (
    <div
      className={cn(
        "relative w-full bg-black",
        className
      )}
    >
      {/* Acharya Logo in top left */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-50">
        <img
          src="/Acharya white logo.png"
          alt="Acharya Logo"
          className="w-10 md:w-14 lg:w-20 h-auto max-w-full"
        />
      </div>
      {/* Animated background lines */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          {...svgOptions}
        >
          <defs>
            <pattern
              id="background-lines"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#background-lines)"
          />
        </svg>

        {/* Animated moving lines */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute top-1/4 left-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
          className="absolute top-1/2 left-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 6,
          }}
          className="absolute top-3/4 left-0 h-full w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"
        />

        {/* Horizontal moving lines */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          className="absolute left-1/3 top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        />
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute left-2/3 top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};