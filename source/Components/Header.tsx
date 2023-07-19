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
        </div>
      </div>
    </div>
  );
};
