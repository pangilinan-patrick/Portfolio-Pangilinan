import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
      <div
        id="footer"
        className={`flex justify-center bg-gray-800 pb-1 mb-0 text-xs text-gray-300`}
      >
        Built with NextJS by Patrick Pangilinan
      </div>
    </main>
  );
}
