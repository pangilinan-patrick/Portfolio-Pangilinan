"use client";
import React, { useState } from "react";
import myDbuddy from "../assets/portfolio/mydbuddy.png";
import innospireWeb from "../assets/portfolio/innospireweb.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import scienceWeb from "../assets/portfolio/scienceweb.jpg";
import todoList from "../assets/portfolio/todolist.jpg";
import userManagement from "../assets/portfolio/usermanagement.jpg";
import Image, { StaticImageData } from "next/image";
import { FaCode, FaEye } from "react-icons/fa";
import ProjectDetail from "./ProjectDetail";

interface Portfolio {
  id: number;
  src: StaticImageData;
  demoLink: string;
  codeLink: string;
  alt: string;
}

function Portfolio() {
  const [showDetails, setShowDetails] = useState(false);

  const portfolio: Portfolio[] = [
    {
      id: 1,
      src: myDbuddy,
      demoLink: "https://github.com/pangilinan-patrick/MyDBuddy-Channel-Web",
      codeLink: "https://github.com/pangilinan-patrick/MyDBuddy-Channel-Web",
      alt: "mydbuddy banner",
    },
    {
      id: 2,
      src: calculator,
      demoLink: "https://pangilinan-patrick.github.io/calculator-react/",
      codeLink: "https://github.com/pangilinan-patrick/calculator-react",
      alt: "calculator app built with reactjs",
    },
    {
      id: 3,
      src: todoList,
      demoLink: "https://todo-app-react-pangilinan-patrick.vercel.app/",
      codeLink: "https://github.com/pangilinan-patrick/todo-app-react",
      alt: "todo list app built with reactjs",
    },
    {
      id: 4,
      src: scienceWeb,
      demoLink:
        "https://pangilinan-patrick.github.io/physical-science-web-shs/Home.html",
      codeLink:
        "https://github.com/pangilinan-patrick/physical-science-web-shs",
      alt: "physical science website",
    },
    {
      id: 5,
      src: userManagement,
      demoLink:
        "https://github.com/pangilinan-patrick/user-management-system-vue",
      codeLink:
        "https://github.com/pangilinan-patrick/user-management-system-vue",
      alt: "user management system in vuejs",
    },
    {
      id: 6,
      src: innospireWeb,
      demoLink:
        "https://pangilinan-patrick.github.io/innospire-website-shs/Home.html",
      codeLink: "https://github.com/pangilinan-patrick/innospire-website-shs",
      alt: "innospire website",
    },
  ];

  return (
    <div
      id="portfolio"
      className={`bg-gradient-to-b from-black to-gray-800 w-full text-white sm:h-screen`}
    >
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full`}
      >
        <div className={`pb-8`}>
          <p className={`text-4xl font-bold inline border-b-4 border-gray-500`}>
            Portfolio
          </p>
          <p className={`py-6`}>Check out some of my work!</p>
        </div>

        <div
          className={`grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0`}
        >
          {portfolio.map(({ id, src, demoLink, codeLink, alt }) => {
            return (
              <div key={id} className={`shadow-md shadow-gray-700`}>
                <Image
                  src={src}
                  alt={alt}
                  onClick={() => setShowDetails(!showDetails)}
                  className={`rounded-md duration-200 hover:scale-105 cursor-pointer`}
                />
                <div className={`flex items-center justify-center`}>
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <button
                      className={`px-14 py-5 duration-200 hover:scale-105`}
                    >
                      <FaEye size={20} />
                    </button>
                  </a>
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <button
                      className={`px-14 py-5 duration-200 hover:scale-105`}
                    >
                      <FaCode size={20} />
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`${showDetails ? "flex" : "hidden"}`}>
          <ProjectDetail
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
