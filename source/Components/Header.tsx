"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItems = ({ name, url }: { name: string; url: string }) => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <Link href={url} passHref>
      <div
        className={`hover:text-[#d8a642] ${
          pathname == url ? "text-[#d8a642]" : "text-slate-950"
        }`}
      >
        {name}
      </div>
    </Link>
  );
};

export const Header = () => {

  return (
    <div className="bg-white h-20">
      <div className="flex w-4/5 mx-auto justify-between items-center h-full">
        <div className="w-full">
          <Image src="/assets/logo.png" width={164} height={32} alt="Logo" />
        </div>
        <div className="flex items-center gap-10">
          <MenuItems name="Home" url="/" />
          <MenuItems name="About" url="/about" />
          <MenuItems name="Candidates" url="/candidates" />
          <a
            href="/login"
            className="flex items-center justify-center h-20 px-5 text-sm font-medium text-center 
            text-white border rounded-lg xl:h-10 bg-[#d8a642]"
          >
            Login
          </a>
          <a
            href="/signup"
            className="flex items-center justify-center h-20 px-5 text-sm 
          text-center text-[#d8a642] transition-colors duration-200 transform border rounded-lg xl:h-10 
          text-[#d8a642] border-[#d8a642] focus:outline-none"
          >
            Signup
          </a>
        </div>
      </div>
    </div>

    
  );
};


