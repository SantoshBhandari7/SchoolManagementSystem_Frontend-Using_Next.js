import Link from "next/link";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";

const LinkSection = () => {
  return (
    <main className="w-full min-h-full p-12 bg-gray-400 ">
      <div className=" flex flex-col  sm:flex sm:flex-cols md:flex-row lg:flex-row justify-around gap-4">
        <div className="flex items-center gap-1">
          <FaGraduationCap size={40} className="text-blue-500" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-blue-500">
              Your Future Starts Here
            </h1>
            <p className="text-md font-serif text-gray-700">
              Join MKSH Academy and take the first step towards a bright future
            </p>
          </div>
        </div>
        <div className="flex flex-col px-5  gap-2 sm:flex-col md:flex-row lg:flex-row">
          <Link
            href={"/programs"}
            className=" flex bg-blue-500 font-serif justify-center border-green-500 items-center w-fit h-fit p-1 border rounded-md hover:scale-[1.05]"
          >
            Explore Programs <RiArrowRightLine />
          </Link>
          <Link
            href={"/contacts-us"}
            className="border border-gray-300 w-fit h-fit p-1 rounded-md  hover:scale-[1.05] bg-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LinkSection;
