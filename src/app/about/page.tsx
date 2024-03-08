"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Secondery Education :",
    year: "2019",
    description: "Devnagar Makashada dinda higher secondery Education",
    zip: "743357",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/debnagar.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Higher Secondery Education :",
    year: "2021",
    description: "Kautala Ram Krishna Ashram High School (H.S.)",
    zip: "743349",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/debnagar.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Graduation :",
    year: "2024",
    description: "Swami Vivekananda Institute of Science and Technology(SVIST)",
    zip: "700145",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/debnagar.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function About() {
  return (
    <>
      <BackgroundBeams />

      <div className="h-screen w-full rounded-md bg-gray-900 relative flex flex-col antialiased">
        <div className="max-w-2xl mx-auto p-4 mt-2">
          <h1 className="relative text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold underline underline-offset-2">
            About Me
          </h1>
        </div>
        <div className="p-10">
          <StickyScroll content={content} />
        </div>
      </div>
    </>
  );
}
