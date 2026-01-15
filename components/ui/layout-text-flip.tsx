"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text,
  words,
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-lg text-foreground mr-1"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-md border border-transparent bg-[oklch(0.145_0.025_250)] px-3 py-1.5 sm:px-4 sm:py-2 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white shadow-sm ring shadow-blue-900/30 ring-blue-900/30 drop-shadow-lg dark:bg-white dark:text-[#1e293b] dark:shadow-sm dark:ring-1 dark:shadow-blue-500/20 dark:ring-blue-500/20"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
