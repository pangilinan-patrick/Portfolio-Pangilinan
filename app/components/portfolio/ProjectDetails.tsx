import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import React from "react";
import { FaLink, FaTimes } from "react-icons/fa";
import Backdrop from "./Backdrop";
import { IconType } from "react-icons";
import { Carousel } from "./carousel/Carousel";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface ProjectDetailsProps {
  handleClose: () => void;
  project: {
    id: number;
    title: string;
    folder: string[];
    demoLink: string;
    codeLink: string;
    description: React.ReactNode;
    techIcon: IconType[];
    techName: string[];
  };
}

const ProjectDetails = ({ handleClose, project }: ProjectDetailsProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          className={`flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 px-10 pb-8 mx-4 max-w-6xl rounded-md project-detail-modal`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className={`flex justify-end w-full py-6`}>
            <FaTimes
              size={20}
              className={`cursor-pointer`}
              onClick={handleClose}
            />
          </div>

          <div className={`max-w-4xl w-full`}>
            <div className={`relative flex justify-center items-center`}>
              <Carousel folder={project.folder} />
              {/* Space behind the image */}
              <div className="aspect-w-2 aspect-h-1"></div>
            </div>
          </div>

          {/* Title and Descriptions */}
          <div className={`mt-5 xl:mx-20`}>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`flex`}>
                <p
                  className={`text-3xl font-bold inline border-b-4 border-gray-500 hover:text-[2rem] duration-200`}
                >
                  {project.title}
                </p>

                <FaLink className={`text-md ml-2`} />
              </div>
            </a>
            <p className={`my-6 h-44 md:h-auto overflow-y-auto`}>
              {/* <p className={`py-6`}> */}
              {project.description}
            </p>
          </div>

          {/* Tech Icons and Names */}
          <ul className={`flex gap-7`}>
            {project.techIcon.map((Icon, index) => (
              <li
                key={index}
                className={`flex flex-col justify-center items-center `}
              >
                <Icon size={35} />
                <p className={`text-xs mt-1`}>{project.techName[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default ProjectDetails;
