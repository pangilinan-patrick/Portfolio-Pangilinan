// Social links to the left side
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";

interface Link {
  id: number;
  child: JSX.Element;
  href: string;
  style?: string;
}

function SocialLinks() {
  const links: Link[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={20} />
        </>
      ),
      href: "https://linkedin.com/in/ptrk-pngln",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/pangilinan-patrick",
    },
    {
      id: 3,
      child: (
        <>
          Mail <FaEnvelope size={20} />
        </>
      ),
      href: "mailto:patrickpangilinancs@proton.me",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaFile size={20} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
    },
  ];

  return (
    // Hidden in mobile viewports
    <div className={`hidden lg:flex flex-col top-[35%] left-0 fixed`}>
      <ul>
        {links.map(({ id, child, href, style }) => {
          return (
            <li
              key={id}
              className={`flex justify-between items-center pl-4 w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-900 ${style}`}
            >
              <a
                href={href}
                className={`flex justify-between items-center w-full text-white`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
