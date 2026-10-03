import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiRightArrow, BiSolidRightArrow } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";

const Hero = () => {
  return (
    // <main className="h-full w-full flex">
    <section className="relative h-[85vh]">
      {/* <div style={"backgroundImage:url(`)"}> */}
      <Image
        src={"/Sunny Modern Academy Campus.png"}
        alt="MKSH Academic Picture"
        fill
        className="object-right object-cover md:object-center z-1"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40 z-10 bg-linear-to-r from-white via-white/10 to-transparent"></div>

      <div className="relative  z-20">
        <div className="flex  min-h-150 gap-5 items-center px-10 md:px-18">
          <div className="max-w-xl -translate-y-10 ">
            <p className=" font-serif text-xl text-blue-500  ">
              LEARN . GROW . ACHIEVE
            </p>
            <h1 className=" font-bold text-4xl pt-5 text-black tracking-wider  ">
              Welcome to <br /> <span className="text-blue-500 ">MKSH</span>{" "}
              Academy
            </h1>
            <p className="text-gray-700 py-1 text-md">
              Empowering Minds, Shaping Futures, <br /> Building Tomorrow’s
              Leaders
            </p>

            <div className="flex mt-6 gap-2 sm:flex-col md:flex-row lg:flex-row">
              <Link
                href={"/programs"}
                className="flex items-center text-white bg-blue-500 border rounded-md w-fit h-fit px-2 py-1  hover:scale-[105%]"
              >
                Explore Programs
                <RiArrowRightLine />
              </Link>
              <Link
                href={"/login"}
                className="text-white bg-blue-500 flex  border rounded-md items-center w-fit h-fit px-2 py-1  hover:scale-[105%] "
              >
                MIS Login <RiArrowRightLine />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </main>
  );
};

export default Hero;
