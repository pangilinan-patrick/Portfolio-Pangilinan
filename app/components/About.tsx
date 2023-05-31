import React from "react";

function About() {
  return (
    <div
      id="about"
      className={`w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white`}
    >
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full`}
      >
        {/* Header Title */}
        <div className={`py-8 sm:pb-8 sm:pt-0`}>
          <p className={`text-4xl font-bold inline border-b-4 border-gray-500`}>
            About Me
          </p>
        </div>

        <p className={`text-xl mt-10`}>
          I have experience and expertise in Front-end Development, with a
          strong inclination towards Graphic Design. My proficiency lies in
          technologies like ReactJS, VueJS with Quasar Framework, and Axios.
          Furthermore, I am well-versed in graphic design tools such as GIMP and
          Inkscape.
        </p>
        <p className={`text-xl mt-10`}>
          Beyond technical skills, I possess excellent teamwork and leadership
          abilities, allowing me to effectively collaborate with others and lead
          projects towards successful outcomes. I am enthusiastic about
          exploring opportunities in the field of Web Development, where I can
          combine my technical expertise with my creative mindset. I am
          confident that my skills and passion will contribute to the success of
          any project I am involved in.
        </p>
      </div>
    </div>
  );
}

export default About;
