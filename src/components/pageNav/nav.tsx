"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Collections",
      link: "#",
    },
    {
      labe: "Men",
      link: "#",
    },
    {
      labe: "About",
      link: "#",
    },
    {
      labe: "Contact",
      link: "#",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between p-4 items-center py-4 bg-slate-300 mt-1 mb-1 rounded-full">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* logo */}
            <Link
              href={"/"}
              className="sm:text-2xl lg:text-4xl text-xl font-semibold uppercase font-mono text-slate-50  shadow-2xl"
            >
              <span className="text-orange-600">shuva</span>jit
            </Link>
          </section>
        </div>
        <BsMoonStarsFill
          id="darkmood "
          className="sm:text-2xl lg:text-4xl text-xl font-semibold uppercase font-mono cursor-pointer text-slate-50"
        />
      </nav>
      <hr className=" " />
    </main>
  );
}
