import Programs from "@/components/client/landing/programcard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const ProgramPage = () => {
  return (
    <main className="w-full min-h-screen">
      <section className="bg-[#f5f7f9] ">
        <div className="flex flex-col md:flex-row items-center gap-10 px-18 py-6 ">
          <div className="w-full md:w-1/2">
            <p className="text-sm uppercase tracking-wide  text-blue-600 mb-4">
              Our Programs
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold">Choose Your Path</h1>

            <h2 className="text-xl sm:text-3xl  text-blue-500 font-semibold mt-2">
              Build Your Future
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-7 text-gray-600">
              At MKSH Academy, we offer quality +2 programs designed to build
              strong academic foundations, practical skills, confidence, and
              career opportunities for every student.
            </p>

            <Link
              href={"/programs"}
              className="mt-3 flex items-center border rounded-md bg-blue-400 w-fit h-fit p-1"
            >
              Explore Programs
              <RiArrowRightLine />
            </Link>
          </div>

          <div className="w-full md:w-150 border-t">
            <div className="relative w-full h-75 sm:h-100 md:h-113">
              <Image
                src="/programpage.png"
                alt="MKSH Academy Students"
                fill
                priority
                className="object-cover object-right rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-500">
        <Programs />
      </div>
    </main>
  );
};

export default ProgramPage;
