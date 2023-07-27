import React from "react";
import { HeroSection } from "../Components/HeroSection";
// import data from "../Utilities/DummyData/data.json";
import { SingleCandidateTag } from "../Components/SingleCandidateTag";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";

async function getData() {
  try {
    const res = await fetch(
      "https://64b7af7521b9aa6eb078ceee.mockapi.io/profile",
      { next: { revalidate: 10 } }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log({ error });
  }
}

export const Homepage = async () => {
  const data = await getData();
  console.log({ data });
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <div className="mt-[4rem]">
        <h2 className="text-center my-8 text-black text-4xl font-semibold">
          Candidate Gallery
        </h2>
        <div className="grid grid-cols-3 gap-14 py-10 w-4/5 mx-auto">
          <SingleCandidateTag data={data.filter((x:any)=>x.position=="SUG President")}post="SUG President" />
          <SingleCandidateTag data={data.filter((x:any)=>x.position=="Vice President")} post="Vice President" />
          <SingleCandidateTag data={data.filter((x:any)=>x.position=="Fin Secretary")} post="Fin Secretary" />
          <SingleCandidateTag data={data.filter((x:any)=>x.position=="Gen Secretary")} post="Gen Secretary" />
          <SingleCandidateTag data={data.filter((x:any)=>x.position=="Social Secretary")} post="Social Secretary" />
          <SingleCandidateTag data={data.filter((x:any)=>x.position=="Treasurer")} post="Treasurer" />
        </div>
      </div>
      <AboutUs />
      <Footer />
    </main>
  );
};
