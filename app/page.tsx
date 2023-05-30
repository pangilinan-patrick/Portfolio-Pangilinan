import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className={raleway.className}>Hello World</div>
    </main>
  );
}
