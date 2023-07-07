import React from "react";
import { HeroSection } from "../Components/HeroSection";
import { CandidateView } from "../Components/CandidateView";

export const Homepage = () => {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <div className="mt-[4rem]">
        <h2 className="text-center my-8 text-black text-4xl font-semibold">
          Candidate Gallery
        </h2>
        <div className="grid grid-cols-3 gap-8 py-10 w-4/5 mx-auto">
          <div>
            <div className="relative border-solid border-2 border-black h-14 w-3/4 mb-4 group ">
              <div className="bg-black px-6 py-2 absolute top-2 left-3 h-full w-full flex items-center text-2xl group-hover:top-[-0.5rem] group-hover:left[-0.5rem]">
                President
              </div>
            </div>
            <CandidateView />
          </div>
        </div>
      </div>
    </main>
  );
};
