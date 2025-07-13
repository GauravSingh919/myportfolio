"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import MagicButton from "./MagicButton";
import HoverCard from "../HoverCard";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10 md:px-20 mt-60 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-3 border border-[#7024f88b] opacity-[0.9] "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]"> FullStack Web Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-5xl md:text-6xl mt-6 font-bold text-white max-w-[600px] w-auto h-auto  sm:text-left"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-500 my-5 max-w-[600px]"
        >
          Hey , myself Gaurav Singh working as a Full Stack Web Developer <br />
          My Works is basically Live Website Check out my projects and skills am
          working on
        </motion.p>

        <motion.a variants={slideInFromLeft(1)} className="">
          <MagicButton
            title="Download Resume"
            icon={""}
            position=""
            otherClasses=""
          />
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full sm:flex justify-center items-center hidden "
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          className="hidden sm:block"
          width={650}
          height={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
