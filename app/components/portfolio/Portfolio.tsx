"use client";
import React, { useState } from "react";
import myDbuddy from "public/mydbuddy/mydbuddy.jpg";
import calculator from "public/calculator/calculator.jpg";
import todoList from "public/todo-list/todolist.jpg";
import scienceWeb from "public/physical-science/scienceweb.jpg";
import userManagement from "public/user-management/usermanagement.jpg";
import innospireWeb from "public/innospire/innospireweb.jpg";
import Image, { StaticImageData } from "next/image";
import {
  FaBootstrap,
  FaCode,
  FaCss3,
  FaEye,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import { SiAxios, SiNextdotjs, SiQuasar, SiTailwindcss } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import { IconType } from "react-icons";

interface Portfolio {
  id: number;
  title: string;
  src: StaticImageData;
  folder: { path: string; alt: string }[];
  demoLink: string;
  codeLink: string;
  alt: string;
  description: React.ReactNode;
  techIcon: IconType[];
  techName: string[];
  shadowBorder: string;
}

function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(
    null
  );

  const close = () => {
    setModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const open = (project: Portfolio) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const portfolio: Portfolio[] = [
    {
      id: 1,
      title: "MyDBuddy Chatbot",
      src: myDbuddy,
      folder: [
        {
          path: "/mydbuddy/mydbuddy.jpg",
          alt: "Banner for my d buddy",
        },
        {
          path: "/mydbuddy/open-chatbot.gif",
          alt: "A demonstration of how the chatbot is opened",
        },
        {
          path: "/mydbuddy/rule-based.gif",
          alt: "Showing the rule-based capabilities of the chatbot",
        },
      ],
      demoLink: "https://github.com/pangilinan-patrick/MyDBuddy-Channel-Web",
      codeLink: "https://github.com/pangilinan-patrick/MyDBuddy-Channel-Web",
      alt: "mydbuddy banner",
      description: (
        <span>
          As the Front-End and UI/UX Developer for our thesis project, I led the
          development efforts in the front-facing side of the chatbot powered by
          both NLP and rule-based systems, which was aimed at enhancing our
          school&apos;s portal. I played a pivotal role in ensuring that the
          chatbot was user-friendly and provided a seamless experience for our
          target audience. You can find more detailed information about my
          contribution to the project in our repository.
        </span>
      ),
      techIcon: [FaHtml5, FaCss3, FaJs],
      techName: ["HTML5", "CSS3", "JavaScript"],
      shadowBorder: "shadow-green-700 border-green-500",
    },
    {
      id: 2,
      title: "Calculator React App",
      src: calculator,
      folder: [
        {
          path: "/calculator/calculator.jpg",
          alt: "A gist of the calculator UI built with reactjs",
        },
      ],
      demoLink: "https://pangilinan-patrick.github.io/calculator-react/",
      codeLink: "https://github.com/pangilinan-patrick/calculator-react",
      alt: "calculator app built with reactjs",
      description: (
        <span>
          The ReactJS Calculator is a side project I developed to enhance my
          proficiency in ReactJS and SCSS. The goal of this project was to gain
          hands-on experience with ReactJS components, state management, and
          styling using SCSS. This project is still currently a work in progress
          and may contain bugs.
        </span>
      ),
      techIcon: [FaReact, FaSass],
      techName: ["React", "SCSS"],
      shadowBorder: "shadow-yellow-400 border-yellow-100",
    },
    {
      id: 3,
      title: "Todo List React App",
      src: todoList,
      folder: [
        {
          path: "/todo-list/todolist.jpg",
          alt: "A gist of the Todo List UI built with NextJS",
        },
      ],
      demoLink: "https://todo-app-react-pangilinan-patrick.vercel.app/",
      codeLink: "https://github.com/pangilinan-patrick/todo-app-react",
      alt: "todo list app built with reactjs",
      description: (
        <span>
          This Next.js Todo List App with Tailwind CSS is an exciting side
          project that I embarked on to gain hands-on experience with Next.js, a
          powerful React framework, and Tailwind CSS, a highly customizable CSS
          framework. The primary goal of this project was to familiarize myself
          with the Next.js ecosystem and leverage the efficiency and flexibility
          of Tailwind CSS for building modern user interfaces.
        </span>
      ),
      techIcon: [FaReact, SiNextdotjs, SiTailwindcss],
      techName: ["React", "NextJS", "TailwindCSS"],
      shadowBorder: "shadow-sky-800 border-sky-800",
    },
    {
      id: 4,
      title: "Physical Science Website",
      src: scienceWeb,
      folder: [
        {
          path: "/physical-science/scienceweb.jpg",
          alt: "Initial look at the physical science website",
        },
      ],
      demoLink:
        "https://pangilinan-patrick.github.io/physical-science-web-shs/Home.html",
      codeLink:
        "https://github.com/pangilinan-patrick/physical-science-web-shs",
      alt: "physical science website",
      description: (
        <span>
          This website built with Bootstrap was a project that I developed
          during my senior high school years for my Physical Science subject.
          The objective of this project was to showcase my knowledge and
          understanding of web development while exploring the features and
          capabilities of Bootstrap, a popular front-end framework.
        </span>
      ),
      techIcon: [FaHtml5, FaCss3, FaBootstrap],
      techName: ["HTML5", "CSS3", "Bootstrap"],
      shadowBorder: "shadow-zinc-900 border-zinc-900",
    },
    {
      id: 5,
      title: "User Management System",
      src: userManagement,
      folder: [
        {
          path: "/user-management/usermanagement.jpg",
          alt: "The forms page of the user management system",
        },
      ],
      demoLink: "https://user-management-system-vue.vercel.app/#/list-of-users",
      codeLink:
        "https://github.com/pangilinan-patrick/user-management-system-vue",
      alt: "user management system in vuejs",
      description: (
        <span>
          The User Management System project is a web application developed
          using Vue.js, Quasar Framework, and Axios. Its primary purpose is to
          provide a robust and efficient solution for managing user accounts. I
          developed this project as part of one of the onboarding exercises at
          my OJT and it helped me get acquainted with the aformentioned web
          development technologies as well as using Rest APIs.
        </span>
      ),
      techIcon: [FaVuejs, SiQuasar, SiAxios],
      techName: ["VueJS", "Quasar", "Axios"],
      shadowBorder: "shadow-cyan-800 border-cyan-800",
    },
    {
      id: 6,
      src: innospireWeb,
      folder: [
        {
          path: "/innospire/innospireweb.jpg",
          alt: "Initial page of the draft innospire website",
        },
      ],
      title: "Innospire IT Solutions Website",
      demoLink:
        "https://pangilinan-patrick.github.io/innospire-website-shs/Home.html",
      codeLink: "https://github.com/pangilinan-patrick/innospire-website-shs",
      alt: "innospire website",
      description: (
        <span>
          During my 2-week student internship as part of my Work Immersion
          subject in Senior High School, I had the opportunity to contribute to
          the development of a draft website for Innospire IT Solutions.
          Innospire IT Solutions is a reputable IT company that specializes in
          providing innovative technological solutions to businesses.
        </span>
      ),
      techIcon: [FaHtml5, FaCss3],
      techName: ["HTML5", "CSS3"],
      shadowBorder: "shadow-blue-500 border-blue-500",
    },
  ];

  return (
    <div
      id="portfolio"
      className={`bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen min-h-[50em]`}
    >
      {/* Animation Code modified from Fireship's Framer Motion code example */}
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        // exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && selectedProject && (
          <ProjectDetails project={selectedProject} handleClose={close} />
        )}
      </AnimatePresence>
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full`}
      >
        {/* <div className={`py-8 sm:pb-8 sm:pt-0`}> */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.8 }}
          className={`py-8 sm:pb-8 sm:pt-0`}
        >
          <p className={`text-4xl font-bold inline border-b-4 border-gray-500`}>
            Portfolio
          </p>
          <p className={`py-6`}>
            Check out some of my work! The eye icon will show a demo of my work
            if it&apos;s deployed and the code icon will show the repository of
            the project. You can also click on the images for a description of
            the project.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0`}>
          {portfolio.map(
            ({
              id,
              title,
              src,
              folder,
              demoLink,
              codeLink,
              alt,
              description,
              techIcon,
              techName,
              shadowBorder,
            }) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (id / 10) * 3 }}
                  viewport={{ once: true, amount: 0.8 }}
                  key={id}
                  className={`shadow-md shadow-gray-700`}
                >
                  <button
                    aria-label={`${title} description and details`}
                    onClick={() =>
                      modalOpen
                        ? close()
                        : open({
                            id,
                            title,
                            src,
                            folder,
                            demoLink,
                            codeLink,
                            alt,
                            description,
                            techIcon,
                            techName,
                            shadowBorder,
                          })
                    }
                  >
                    <Image
                      src={src}
                      alt={alt}
                      className={`rounded-md duration-200 hover:shadow-md hover:${shadowBorder} hover:border-4 cursor-pointer`}
                    />
                  </button>
                  <div className={`flex items-center justify-evenly py-4`}>
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                    >
                      <button
                        className={`duration-200 hover:scale-105 flex flex-col items-center gap-1`}
                        aria-label={`${title} Demo`}
                      >
                        <FaEye size={20} />
                        <span className={`text-xs text-gray-300`}>Demo</span>
                      </button>
                    </a>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                    >
                      <button
                        className={`duration-200 hover:scale-105 flex flex-col items-center gap-1`}
                        aria-label={`${title} Repository`}
                      >
                        <FaCode size={20} />
                        <span className={`text-xs text-gray-300`}>Code</span>
                      </button>
                    </a>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
