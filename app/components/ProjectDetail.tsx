import Image from "next/image";
import React from "react";
import myDbuddy from "../assets/portfolio/mydbuddy.png";
import innospireWeb from "../assets/portfolio/innospireweb.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import scienceWeb from "../assets/portfolio/scienceweb.jpg";
import todoList from "../assets/portfolio/todolist.jpg";
import { FaHtml5, FaLink, FaTimes } from "react-icons/fa";

function ProjectDetail() {
  return (
    <div
      className={`flex flex-col justify-center items-center absolute left-0 w-full h-screen bg-gray-900/75 text-white`}
    >
      <div
        className={`flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 px-10 pb-8 mx-3 sm:mx-48 max-w-6xl rounded-md`}
      >
        <div className={`flex justify-end w-full py-6`}>
          <FaTimes size={20} />
        </div>

        <div className={`max-w-4xl w-full`}>
          <Image src={myDbuddy} alt="placeholder" />
        </div>

        <div className={`mt-5 sm:mx-20`}>
          <div className={`flex`}>
            <p
              className={`text-3xl font-bold inline border-b-4 border-gray-500 hover:text-4xl duration-200`}
            >
              MyDBuddy Chatbot
            </p>
            <FaLink className={`text-md ml-2`} />
          </div>
          <p className={`py-6`}>
            As the UI/UX designer for our thesis project, I led the design
            efforts for a chatbot powered by both NLP and rule-based systems,
            which was aimed at enhancing our school's portal. I played a pivotal
            role in ensuring that the chatbot was user-friendly and provided a
            seamless experience for our target audience. You can find more
            detailed information about my contribution to the project in our
            repository.
          </p>
        </div>

        <ul className={`flex`}>
          <li className={`flex flex-col justify-center items-center mr-3`}>
            <FaHtml5 size={35} />
            <p className={`text-xs mt-1`}>HTML5</p>
          </li>
          <li className={`flex flex-col justify-center items-center mr-3`}>
            <FaHtml5 size={35} />
            <p className={`text-xs mt-1`}>HTML5</p>
          </li>
          <li className={`flex flex-col justify-center items-center`}>
            <FaHtml5 size={35} />
            <p className={`text-xs mt-1`}>HTML5</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetail;
