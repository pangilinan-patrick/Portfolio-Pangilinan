import React from "react";
import myDbuddy from "../assets/portfolio/mydbuddy.png";
import innospireWeb from "../assets/portfolio/innospireweb.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import scienceWeb from "../assets/portfolio/scienceweb.jpg";
import todoList from "../assets/portfolio/todolist.jpg";
import userManagement from "../assets/portfolio/usermanagement.jpg";
import Image, { StaticImageData } from "next/image";
import { FaCode, FaEye } from "react-icons/fa";

interface Portfolio {
  id: number;
  src: StaticImageData;
  demoLink: string;
  codeLink: string;
}

function Portfolio() {
  const portfolio: Portfolio[] = [
    {
      id: 1,
      src: myDbuddy,
      demoLink: "",
      codeLink: "https://github.com/pangilinan-patrick/MyDBuddy-Channel-Web",
    },
    {
      id: 2,
      src: calculator,
      demoLink: "https://pangilinan-patrick.github.io/calculator-react/",
      codeLink: "https://github.com/pangilinan-patrick/calculator-react",
    },
    {
      id: 3,
      src: todoList,
      demoLink: "https://github.com/pangilinan-patrick/todo-app-react",
      codeLink: "https://todo-app-react-pangilinan-patrick.vercel.app/",
    },
    {
      id: 4,
      src: scienceWeb,
      demoLink:
        "https://pangilinan-patrick.github.io/physical-science-web-shs/Home.html",
      codeLink:
        "https://github.com/pangilinan-patrick/physical-science-web-shs",
    },
    {
      id: 5,
      src: userManagement,
      demoLink: "",
      codeLink:
        "https://github.com/pangilinan-patrick/user-management-system-vue",
    },
    {
      id: 6,
      src: innospireWeb,
      demoLink:
        "https://pangilinan-patrick.github.io/innospire-website-shs/Home.html",
      codeLink: "https://github.com/pangilinan-patrick/innospire-website-shs",
    },
  ];

  return (
    <div
      id="portfolio"
      className={`bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen`}
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
          {portfolio.map(({ id, src, demoLink, codeLink }) => {
            return (
              <div key={id} className={`shadow-md shadow-gray-700`}>
                <Image
                  src={src}
                  alt="mydbuddy chatbot project"
                  className={`rounded-md duration-200 hover:scale-105`}
                />
                <div className={`flex items-center justify-center`}>
                  <a href={demoLink}>
                    <button
                      className={`px-14 py-5 duration-200 hover:scale-105`}
                    >
                      <FaEye size={20} />
                    </button>
                  </a>
                  <a href={codeLink}>
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
      </div>
    </div>
  );
}

export default Portfolio;
