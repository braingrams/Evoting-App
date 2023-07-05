import Image from "next/image";
import React from "react";

export const CandidateView = () => {
  return (
    <div className="w-full h-[20rem] bg-green-500 border-solid border-2 border-emerald-400 relative">
      <Image src="/a.webp" fill alt="candidate image" />
      <div className="z-1 w-4/5 h-fit absolute bottom-6 border-2 border-white left-2/4 translate-x-[-50%] p-2">
        <div className="text-gray-950">Adeyemi Ade</div>
        <div className="text-gray-950">400 Level</div>
        <div className="text-gray-950">Computer Science</div>
      </div>
    </div>
  );
};
