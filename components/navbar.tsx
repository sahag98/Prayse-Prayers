"use client";

import { Apple, AppleIcon, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";
import { RiAppleLine } from "react-icons/ri";
import { LiaAndroid } from "react-icons/lia";
import { useTheme } from "next-themes";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex px-4 bg-background py-0 justify-between items-center border shadow-md rounded-2xl w-full lg:w-1/3 md:w-1/2">
      <Image
        src={
          theme === "dark" || theme === undefined
            ? "/prayse-dark.png"
            : "/prayse-light.png"
        }
        alt="Prayse logo"
        width={500}
        height={500}
        className="w-14 h-14"
      />
      <section className="flex items-center gap-3">
        <Link href={"https://apps.apple.com/us/app/prayseapp/id6443480347"}>
          <RiAppleLine color="#d2d2d2" size={28} />
        </Link>
        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.sahag98.prayerListApp&hl=en_US&gl=US&pli=1"
          }
        >
          <LiaAndroid color="#d2d2d2" size={28} />
        </Link>
        <Link href={"https://www.instagram.com/prayse.app/"}>
          <Instagram color="#d2d2d2" />
        </Link>
        <ModeToggle />
      </section>
    </nav>
  );
};

export default Navbar;
