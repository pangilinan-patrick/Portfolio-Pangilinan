"use client";
import React from "react";
import { IconType } from "react-icons";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaGitSquare,
  FaLinux
} from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { motion } from "framer-motion";

interface Tech {
  id: number;
  icon: IconType;
  title: string;
  color: string;
  style: string;
}

function Experience() {
  const tech: Tech[] = [
    {
      id: 1,
      icon: FaHtml5,
      title: "HTML",
      color: "text-orange-500",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      icon: FaCss3,
      title: "CSS",
      color: "text-blue-500",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      icon: FaJs,
      title: "JavaScript",
      color: "text-yellow-500",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      icon: SiDotnet,
      title: ".NET",
      // #6d439c
      color: "text-purple-500",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      icon: FaReact,
      title: "ReactJS",
      color: "text-teal-500",
      style: "shadow-teal-500",
    },
    {
      id: 6,
      icon: VscAzure,
      title: "Azure",
      // #36b8ec
      color: "text-sky-500",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      icon: DiMsqlServer,
      title: "MS SQL",
      color: "text-orange-500",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      icon: FaGitSquare,
      title: "Git",
      color: "text-orange-600",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      icon: FaLinux,
      title: "Linux",
      color: "text-slate-300",
      style: "shadow-slate-300",
    },
  ];

  return (
    <div
      id="experience"
      className={`bg-gradient-to-b from-gray-800 to-black w-full sm:h-screen min-h-[50em]`}
    >
      <div
        className={`max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white`}
      >
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
          className={`py-8 sm:pb-8 sm:pt-0`}
        >
          <p
            className={`text-4xl font-bold border-b-4 border-gray-500 p-2 inline`}
          >
            Experience
          </p>
          <p className={`py-6`}>
            These are some of the technologies I&apos;ve worked with.
          </p>
        </motion.div>

        {/* Tech Icons Cards  */}
        <div
          className={`w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0`}
        >
          {tech.map(({ id, title, icon: Icon, color, style }) => {
            return (
              <div className={`hover:scale-105 duration-500`} key={id}>
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? { duration: 0.5, delay: 0.3 }
                      : { duration: 0.5, delay: (id / 10) * 3 }
                  }
                  viewport={{ once: true, amount: 0.5 }}
                  className={`shadow-md py-2 rounded-lg ${style}`}
                >
                  <Icon
                    size={70}
                    className={`w-20 mx-auto ${color} tech-icon`}
                    aria-labelledby={`tech-exp-icon-${id}`}
                  />
                  <p id={`tech-exp-icon-${id}`} className={`mt-4`}>
                    {title}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
