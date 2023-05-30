import React from "react";
import myDbuddy from "../assets/portfolio/mydbuddy.png";
import Image, { StaticImageData } from "next/image";
import { FaCode, FaEye } from "react-icons/fa";

interface Portfolio {
  id: number;
  src: StaticImageData;
}

function Portfolio() {
  const portfolio: Portfolio[] = [
    {
      id: 1,
      src: myDbuddy,
    },
    {
      id: 2,
      src: myDbuddy,
    },
    {
      id: 3,
      src: myDbuddy,
    },
    {
      id: 4,
      src: myDbuddy,
    },
    {
      id: 5,
      src: myDbuddy,
    },
    {
      id: 6,
      src: myDbuddy,
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
          {portfolio.map(({ id, src }) => {
            return (
              <div key={id} className={`shadow-md shadow-gray-700`}>
                <Image
                  src={src}
                  alt="mydbuddy chatbot project"
                  className={`rounded-md duration-200 hover:scale-105`}
                />
                <div className={`flex items-center justify-center`}>
                  <button className={`px-14 py-5 duration-200 hover:scale-105`}>
                    <FaEye size={20} />
                  </button>
                  <button className={`px-14 duration-200 hover:scale-105`}>
                    <FaCode size={20} />
                  </button>
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
