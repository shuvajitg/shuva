import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import { MyCard } from "./card";

export function HeroPage() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className=" p-4 mx-auto pt-10 md:pt-0">
        <MyCard />
      </div>
    </div>
  );
}
