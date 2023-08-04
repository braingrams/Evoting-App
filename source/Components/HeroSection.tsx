import React from "react";

export const HeroSection = () => {
  return (
    <div className="h-[80vh] text-black flex items-center bg-[url('/assets/hero.jpg')]">
      <div className="w-4/5 mx-auto">
        <div className="w-2/4">
          <div className=" text-[58px] leading-tight font-bold">
            Election Day is Coming
          </div>
          <div className="my-6 text-xl">
            Make sure to cast your vote, it is your political and fundamental
            human right.
          </div>
          <button className="bg-[#d8a642] text-white text-[1.2rem] font-medium py-3 px-8 rounded-md">
           <a href="/login"> Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};
