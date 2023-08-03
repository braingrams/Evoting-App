"use client";

import React, { useState } from "react";
import Image from "next/image";

const Candidates = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Your form submission logic...
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000); // Hide the modal after 5 seconds (5000 milliseconds)
  };

  return (
    
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 py-8">
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              SUG President
            </h1>
          </div>
          <div className="h-[20rem] overflow-hidden">
            <Image
              className="w-100 h-100 object-cover"
              src="/assets/a.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                David Adeleke
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              500 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Petroleum Engineering
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href=""
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
                onClick={handleSubmit}
              >
                Vote
              </a>
            </div>
            {showModal ? (
              <div className="fixed inset-0 flex items-center justify-center mx-auto mt-10 p-5 border h-80 w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Voted
                  </h3>
                  <div className="mt-2 px-7 py-3">
                    <p className="text-sm text-red-500">
                      You Can Only Vote Once
                    </p>
                  </div>
                  <div className="items-center px-4 py-3">
                    <button
                      className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                      onClick={handleSubmit}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              SUG President
            </h1>
          </div>
          <div className="h-[20rem] overflow-hidden">
            <Image
              className="w-100 h-100 object-cover"
              src="/assets/b.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Tunji Bossman
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Computer Science
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              SUG President
            </h1>
          </div>
          <div className="h-[20rem] overflow-hidden">
            <Image
              className="w-100 h-100 object-cover"
              src="/assets/c.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Chinedu Ajunwa
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              300 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Mechanical Engineering
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Vice President
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/w.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Blessing Oluyomi
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Biochemistry
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Vice President
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/d.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Chika Collins
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Economics
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Vice President
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/g.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Femi Johnson
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              300 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Petroleum Engineering
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Fin Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/f.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Emeka Obi
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              300 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Banking & Finance
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Fin Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/p.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Oluwaseun Adewale
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              300 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Computer Science
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Fin Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/q.webp"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Daniel Ojo
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Mathematics
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Gen Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/i.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Segun Donald
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              300 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Pharmacy
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Gen Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/j.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Benson Idoho
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Microbiology
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Gen Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/k.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Olayomi Jacobs
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              300 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Civil Engineering
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Social Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/x.jpeg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Dorothy Olawale
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              300 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Sociology
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Social Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/h.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Peter Boluwatife
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Mass Communication
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Social Secretary
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/m.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Jude Coker
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Sociology
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Treasurer
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/n.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Bayo Lawrence
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Statistics
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Treasurer
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/v.jpeg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Angela Lawson
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              400 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Banking & Finance
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
          <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-black">
              Treasurer
            </h1>
          </div>
          <a href="#">
            <Image
              className=""
              src="/assets/o.jpg"
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Micheal Jones
              </h5>
            </a>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              300 Level
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-black">
              Mathematics
            </p>
            <div className="flex justify-between gap-4">
              <a
                href="viewprofile"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                View Profile
              </a>
              <a
                href="vote"
                className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Candidates;
