import React from "react";
import { IconType } from "react-icons";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaLinux,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";

function Experience() {
  interface Tech {
    id: number;
    icon: IconType;
    title: string;
    color: string;
    style: string;
  }

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
      icon: FaVuejs,
      title: "VueJS",
      color: "text-green-500",
      style: "shadow-green-500",
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
      icon: FaSass,
      title: "SCSS",
      color: "text-pink-500",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      icon: FaBootstrap,
      title: "Bootstrap",
      color: "text-purple-500",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      icon: FaGit,
      title: "Git",
      color: "text-amber-700",
      style: "shadow-amber-700",
    },
    {
      id: 9,
      icon: FaLinux,
      title: "Linux",
      color: "text-slate-400",
      style: "shadow-slate-400",
    },
  ];

  return (
    <div
      name="experience"
      className={`bg-gradient-to-b from-gray-800 to-black w-full h-screen`}
    >
      <div
        className={`max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white`}
      >
        <div>
          <p
            className={`text-4xl font-bold border-b-4 border-gray-500 p-2 inline`}
          >
            Experience
          </p>
          <p className={`py-6`}>
            These are some of the technologies I've worked with
          </p>
        </div>
        <div
          className={`w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0`}
        >
          {tech.map(({ id, title, icon: Icon, color, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <Icon size={100} className={`w-20 mx-auto ${color}`} />
                <p className={`mt-4`}>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
