"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      className="px-4 md:px-10 flex flex-row items-center justify-center mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Open to work
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Full Stack Developer
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
         Recent NSIT Delhi graduate (2023) with 1.5 year of experience in React, Node.js, ,MongoDB and Express as an Associate Software Engineer at RoboMQ. Currently at Academically, I specialize in full-stack development and have honed my skills in JavaScript, HTML, CSS, Git, and RabbitMQ. With a passion for crafting efficient solutions, I’m seeking opportunities to contribute to innovative projects, grow my expertise, and make a meaningful impact in the software development field.
        </motion.p>
        <Link
            href="#contact-me"
            target="_self"
            rel="noreferrer noopener"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <span className="text-[15px] ml-[6px]">Let&apos;s Connect</span>
        </Link>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
