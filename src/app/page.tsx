import { HeroPage } from "../components/Hero";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <HeroPage />
      <About />
      <Contact />
    </>
  );
}
