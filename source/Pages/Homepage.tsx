import React from "react";
import { HeroSection } from "../Components/HeroSection";
import data from "../Utilities/DummyData/data.json";
import { SingleCandidateTag } from "../Components/SingleCandidateTag";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";

export const Homepage = () => {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <div className="mt-[4rem]">
        <h2 className="text-center my-8 text-black text-4xl font-semibold">
          Candidate Gallery
        </h2>
        <div className="grid grid-cols-3 gap-14 py-10 w-4/5 mx-auto">
          <SingleCandidateTag data={data} post="SUG President" />
          <SingleCandidateTag data={data} post="Vice President" />
          <SingleCandidateTag data={data} post="Fin Secretary" />
          <SingleCandidateTag data={data} post="Gen Secretary" />
          <SingleCandidateTag data={data} post="Social Secretary" />
          <SingleCandidateTag data={data} post="Misc Secretary" />
        </div>
      </div>
      <AboutUs />
      <Footer />
    </main>
  );
};
