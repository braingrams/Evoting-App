import React from "react";
import { HeroSection } from "../Components/HeroSection";
import { CandidateView } from "../Components/CandidateView";

export const Homepage = () => {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <div className="grid grid-cols-3 gap-8 py-10 w-4/5 mx-auto">
        <div>
          <div className="bg-black w-fit px-6 py-2">President </div>
          <CandidateView />
        </div>
      </div>
    </main>
  );
};
