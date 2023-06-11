"use client";
import React from "react";
import HeroImage from "app/assets/heroImage.jpg";
import spaceship from "app/assets/spaceship.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import ScrollLink from "../ScrollLink";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div
      id="home"
      className={`md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white min-h-[40em]`}
    >
      {/* Space to not clip navbar */}
      <div className={`w-full h-20 md:hidden mb-10`}></div>

      <div
        className={`max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row`}
      >
        <div className={`flex flex-col justify-center h-full`}>
          {/* First Section appear from top  */}
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl font-bold"
          >
            I&apos;m a Front-End Developer
          </motion.h2>

          {/* Second Section appear from left  */}
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-400 py-4 sm:mr-28"
          >
            Hi, I&apos;m Patrick Pangilinan! I&apos;m a diligent 4th Year
            Computer Science Student with skills in programming, and
            specialization in Front-end Development. Committed to continuous
            learning and professional growth, I consistently seek out new
            opportunities to expand my skills and knowledge.
          </motion.p>

          {/* Third Section appear from bottom  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ScrollLink
              href="#portfolio"
              className={`group w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500`}
              aria-label="Go to portfolio section"
            >
              Portfolio
              <span className={`group-hover:rotate-90 duration-300 ml-1`}>
                <FaAngleRight />
              </span>
            </ScrollLink>
          </motion.div>
        </div>

        {/* Last Section Appear from top */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5 }}
            className={`absolute right-14 sm:right-24 md:-right-4 bottom-3 md:-bottom-2 -z-1`}
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }} // Specify the y-axis animation values
              transition={{ duration: 5, repeat: Infinity }} // Set the animation duration and repeat it infinitely
              className={`w-32 sm:w-36`}
            >
              <Image src={spaceship} alt="spaceship" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div>
              <Image
                src={HeroImage}
                alt="portrait of patrick"
                priority={true}
                className={`rounded-2xl mx-auto w-2/4 md:w-full my-20`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
