import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-white h-16">
      <div className="flex w-4/5 mx-auto justify-between items-center h-full">
        <div className="w-8">
          <Image src="" width={200} height={100} alt="Logo" />
        </div>
        <div className="flex items-center">
          <div className="text-slate-950">Home</div>
        </div>
      </div>
    </div>
  );
};
