"use client";

import Link from "next/link";
import React, { useState } from "react";

const CandidateForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Display "Submitted" message and clear the form fields
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      event.currentTarget.reset();
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6  my-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-[#d8a642]">
          Register To Contest
        </h1>
        <form className="mt-6" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800"
            >
              Name
            </label>
            <input
              type="name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-800"
            >
              Phone Number
            </label>
            <input
              type="tel"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-800"
            >
              Level
            </label>
            <input
              type="tel"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-800"
            >
              Dept
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-800"
            >
              Position
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="MyTextarea"
              className="block text-sm font-medium text-gray-800"
            >
              Manifesto
            </label>
            <textarea
              name="message"
              className="px-4 py-2 mt-2 text-gray-700 w-full bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="MyTextarea"
              rows="10"
            ></textarea>
              <div className="mb-2">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-[#d8a642] focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
          {submitted && (
            <div className="text-green-600 font-bold text-center">
              Submitted!
            </div>
          )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateForm;
