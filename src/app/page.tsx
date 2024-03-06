import { HeroPage } from "../components/Hero";
import About from "./about/page";
import Contact from "./contact/page";
import Navbar2 from "../components/Navebar2";
import Skils from "./skils/page";

export default function Home() {
  return (
    <>
      <Navbar2 className="" />
      <HeroPage />
      <About />
      <Skils />
      {/* <Contact /> */}
    </>
  );
}
