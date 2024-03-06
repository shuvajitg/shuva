import { HeroPage } from "../components/Hero";
import About from "./about/page";
import Contact from "./contact/page";
import Navbar2 from "../components/Navebar2";

export default function Home() {
  return (
    <>
      <Navbar2 className="" />

      <HeroPage />
      <About />
      <Contact />
    </>
  );
}
