import { HeroPage } from "../components/Hero";
import About from "./about/page";
import Contact from "./contact/page";

import Skils from "./skils/page";

export default function Home() {
  return (
    <>
      <HeroPage />
      <About />
      <Skils />
      <Contact />
    </>
  );
}
