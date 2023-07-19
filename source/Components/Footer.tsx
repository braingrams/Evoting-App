import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image src="/assets/logo.png" width={164} height={32} alt="Logo" />

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="mr-4 md:mr-6 ">
                Privacy Policy
            </li>
            <li className="mr-4 md:mr-6 ">
                Terms & Condition
            </li>
            <li>
              <a href="contact" className="mr-4 hover:underline md:mr-6 ">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
            LeaderShip™
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
