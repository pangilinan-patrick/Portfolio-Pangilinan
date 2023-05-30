import { Raleway } from "next/font/google";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={raleway.className}>
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Experience />

      <SocialLinks />
    </main>
  );
}
