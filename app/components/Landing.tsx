"use client";
import React from "react";
import HeroImage from "../assets/heroImage.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import ScrollLink from "./ScrollLink";

function Landing() {
  return (
    <div
      id="home"
      className={`h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white`}
    >
      <div
        className={`max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row`}
      >
        <div className={`flex flex-col justify-center h-full`}>
          <h2 className="text-4xl sm:text-7xl font-bold">
            I&apos;m a Front-End Developer
          </h2>
          <p className={`text-gray-500 py-4 sm:mr-28`}>
            Hi! I&apos;m a diligent 4th Year Computer Science Student with
            skills in programming, and specialization in Front-end Development.
            Committed to continuous learning and professional growth, I
            consistently seek out new opportunities to expand my skills and
            knowledge.
          </p>

          <div>
            <ScrollLink className="btn" href="#portfolio">
              <button
                className={`group w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500`}
              >
                Portfolio
                <span className={`group-hover:rotate-90 duration-300 ml-1`}>
                  <FaAngleRight />
                </span>
              </button>
            </ScrollLink>
          </div>
        </div>

        <div>
          <Image
            src={HeroImage}
            alt="my portrait"
            className={`rounded-2xl mx-auto w-2/3 md:w-full`}
          />
        </div>
      </div>
    </div>
  );
}
export default Landing;
