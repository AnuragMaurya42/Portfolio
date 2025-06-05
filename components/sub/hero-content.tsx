"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-start justify-between gap-x-16 px-6 md:px-12 mt-32 max-w-[1400px] mx-auto z-[20]"
    >
      {/* Left Text Content */}
      <div className="w-full max-w-[680px] flex flex-col gap-6 justify-center text-start">
        {/* Welcome Tag */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center gap-3 py-2 px-5 rounded-lg border border-[#7042f88b] bg-white/5 backdrop-blur-md shadow-md text-white"
        >
          <SparklesIcon className="text-[#b49bff] h-6 w-6" />
          <h1 className="text-base font-medium tracking-wide">
            Anurag Maurya • Fullstack Developer Portfolio
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-5xl md:text-6xl font-extrabold text-white"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Anurag Maurya
            </span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-gray-300 mt-4 leading-relaxed"
        >
          Computer Science Engineering student from NIT Srinagar with strong DSA
          skills in C++. Proficient in MERN Stack development and experienced in
          building scalable, real-world applications. I enjoy problem solving,
          rapid learning, and collaborating in fast-paced environments.
        </motion.p>

        {/* Highlights */}
        <motion.p
          variants={slideInFromLeft(1)}
          className="text-lg text-gray-400 mb-4"
        >
          💻 LeetCode, GeeksforGeeks & HackerRank: Solved 800+ algorithmic
          problems using C++ and C. HackerRank: 5⭐ in C++ and 4⭐ in C programming.
        </motion.p>
      </div>

      {/* Right Image Content */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex items-center justify-center"
      >
        <div className="w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-purple-800/30 to-cyan-800/30 shadow-2xl flex items-center justify-center transform hover:rotate-[1deg] hover:scale-105 transition duration-500 ease-out border border-purple-700/30 backdrop-blur-lg">
          <Image
            src="/anurag.png"
            alt="hero profile"
            height={480}
            width={480}
            draggable={false}
            className="rounded-full select-none shadow-2xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
