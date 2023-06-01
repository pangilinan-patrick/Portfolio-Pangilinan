import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

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
        className={`flex justify-center bg-gray-800 pb-1 mb-0 text-xs text-gray-600`}
      >
        Built with NextJS by Patrick Pangilinan
      </div>
    </main>
  );
}
