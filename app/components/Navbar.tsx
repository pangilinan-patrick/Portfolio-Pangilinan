"use client";
import React, { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";

function Navbar() {
  interface Link {
    id: number;
    link: string;
  }

  const [nav, setNav] = useState(false);

  // Navbar Links
  const links: Link[] = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 text-white fixed bg-black px-4`}
    >
      <div>
        <FaGithub
          className={`text-3xl cursor-pointer font-medium  hover:scale-105 duration-200 list-none`}
        />
      </div>

      <ul className={`hidden md:flex`}>
        {/* Looping over links array and using object destructuring to shorthand retrieving the properties */}
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={`px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 list-none`}
            >
              {link}
            </li>
          );
        })}
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 text-gray-500 md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Links List */}
      {nav && (
        <ul
          className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800`}
        >
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className={`px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 list-none py-6 text-4xl`}
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
