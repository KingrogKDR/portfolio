"use client";
import { Data } from "@/data/data";
import { motion } from "motion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function HeroSection() {
  const { theme } = useTheme();
  return (
    <div className="pt-20">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-gray-400 to-gray-800 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {Data.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-2"
      >
        {Data.location}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-cyan-400 to-gray-800 dark:bg-gradient-to-br dark:from-cyan-300 dark:to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        {Data.profession}
      </motion.p>

      <div className="relative flex items-center justify-center w-full">
        <div className="flex-grow h-px bg-gray-400 dark:bg-gray-600 mr-4 max-w-[100px] sm:max-w-[150px] lg:max-w-[200px]" />

        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-pink-300 to-gray-600 dark:bg-gradient-to-br dark:from-purple-200 dark:to-slate-700 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl z-10 whitespace-nowrap"
        >
          Contact Me
        </motion.p>

        <div className="flex-grow h-px bg-gray-400 dark:bg-gray-600 ml-4 max-w-[100px] sm:max-w-[150px] lg:max-w-[200px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.9,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        <TooltipProvider delayDuration={200}>
          {Data.socialLinks.map((social, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-cyan-100 to-neutral-400 dark:bg-gradient-to-br dark:from-teal-500 dark:to-slate-700
            transition-all text-gray-800 dark:text-white text-lg hover:scale-110 hover:shadow-sm dark:shadow-gray-600 duration-500"
                  aria-label={social.name}
                >
                  {theme === "dark" ? (
                    <FontAwesomeIcon
                      icon={social.iconDark}
                      suppressHydrationWarning
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={social.iconLight}
                      suppressHydrationWarning
                    />
                  )}
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="text-xs px-3 py-1.5 rounded-md shadow-md"
              >
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </motion.div>
    </div>
  );
}
