import React from "react";

function About() {
  return (
    <div
      name="about"
      className={`w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white`}
    >
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full`}
      >
        {/* Header Title */}
        <div className={`pb-8`}>
          <p className={`text-4xl font-bold inline border-b-4 border-gray-500`}>
            About
          </p>
        </div>

        <p className={`text-xl mt-10`}>
          Specializing in Front-end Development along with a passion for Graphic
          Design. Experienced in ReactJS, VueJS with Quasar Framework and Axios,
          as well as tools such as GIMP and Inkscape. In addition, I possess
          strong teamwork and leadership skills that enable me to collaborate
          effectively and guide projects towards success. With my technical
          skills and creativity, I am excited to explore opportunities in Web
          Development.
        </p>
      </div>
    </div>
  );
}

export default About;
