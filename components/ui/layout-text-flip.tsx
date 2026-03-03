"use client";
import React, { useState, useEffect, useCallback } from "react";
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

  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(updateIndex, duration);
    return () => clearInterval(interval);
  }, [duration, updateIndex]);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-lg text-foreground mr-1"
        style={{ transform: "translateZ(0)" }}
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-md border border-transparent bg-[oklch(0.145_0.025_250)] px-3 py-1.5 sm:px-4 sm:py-2 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white shadow-sm ring shadow-blue-900/30 ring-blue-900/30 drop-shadow-lg dark:bg-white dark:text-[#1e293b] dark:shadow-sm dark:ring-1 dark:shadow-blue-500/20 dark:ring-blue-500/20"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -30, opacity: 0.6 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{ y: 30, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className={cn("inline-block whitespace-nowrap")}
            style={{ willChange: "transform, opacity" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
