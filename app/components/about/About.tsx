"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className={`w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white min-h-[50em]`}
    >
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full`}
      >
        {/* Header Title First - Appear from top */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.8 }}
          className={`py-8 sm:pb-8 sm:pt-0`}
        >
          <p className={`text-4xl font-bold inline border-b-4 border-gray-500`}>
            About Me
          </p>
        </motion.div>

        {/* Second appear from left */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.8 }}
          className={`text-xl mt-10`}
        >
          With hands-on experience in Agile teams, I&apos;ve contributed to full-cycle application development—from front-end builds with Vue.js and React to backend integrations and API development with .NET and Azure Functions.
          I&apos;m a Boomi Certified Integration Developer and Microsoft Certified in Azure Fundamentals, with a strong foundation in cloud computing and version control.
        </motion.p>
        {/* Third appear from left */}
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.8 }}
          className={`text-xl mt-10`}
        >
          Beyond technical skills, I possess excellent teamwork and leadership
          abilities, allowing me to effectively collaborate with others and lead
          projects towards successful outcomes. I am enthusiastic about
          exploring opportunities in the field of Web and Application Development, where I can
          combine my technical expertise with my creative mindset. I am
          confident that my skills and passion will contribute to the success of
          any project I am involved in.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
