"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";

export default function About() {
  return (
    <>
      <div className="h-screen w-full rounded-md bg-gray-900 flex flex-col antialiased">
        <div className="max-w-2xl mx-auto p-4 mt-2">
          <h1 className=" z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold underline underline-offset-2">
            About Me
          </h1>
        </div>

        {/* <BackgroundBeams /> */}
      </div>
    </>
  );
}
