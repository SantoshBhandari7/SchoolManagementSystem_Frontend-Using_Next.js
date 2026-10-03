import Logo from "@/components/common/ui/logo";
import Link from "next/link";
import React from "react";
import { BiLocationPlus, BiSolidPhoneCall } from "react-icons/bi";
import { BsPhoneLandscape } from "react-icons/bs";
import { TbEmailStamp, TbLocationBolt } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className=" bg-sky-300 w-full min-h-full ">
      <div className="flex flex-col items-start  justify-between gap-4 py-8 px-30  sm:flex-col md:flex-row lg:flex-row ">
        {/* {logo} */}
        <div className="flex flex-col px-6 py-2 sm:px-8  lg:px-10">
          <div className="w-30 mb-2">
            <Logo />
          </div>

          <p className="text-sm">LEARN.GROW.ACHIEVE</p>
          <p className="mt-2 max-w-xs text-sm text-gray-500 text-left">
            Empowering young minds with quality education, character
            development, and skills for a brighter future.
          </p>
        </div>
        <div className="flex flex-col  px-6 py-2 sm:px-8 items-center gap-3 m-3">
          <h1 className="text-md text-center font-stretch-100% font-semibold">
            Quick Links
          </h1>
          <nav className="flex flex-col items-center gap-2 md:items-start">
            <Link href={"/"} className=" hover:text-blue-500">
              Home
            </Link>
            <Link href={"/programs"} className=" hover:text-blue-500">
              Programs
            </Link>
            <Link href={"/about-us"} className=" hover:text-blue-500">
              About
            </Link>
            <Link href={"/contact-us"} className=" hover:text-blue-500">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center md:items-start m-3 ">
          <h1 className=" font-semibold text-md text-center ">Contact</h1>
          <div className="flex flex-col gap-3 text-md text-gray-700">
            <p className="flex items-center gap-1">
              <BiLocationPlus /> Kathmandu, Nepal
            </p>
            <p className="flex items-center gap-1">
              <BiSolidPhoneCall /> +977-981082932
            </p>
            <p className="flex items-center gap-1 ">
              <TfiEmail /> info@mkshacademy.edu.np
            </p>
          </div>
        </div>
      </div>
      <div className="border-t ">
        <div className="flex flex-col items-center justify-around gap-2 px-6 py-4  md:flex-row">
          <p>
            &copy;{new Date().getFullYear()} MKSH Academy. All Rights Reserved
          </p>
          <p>Designed and Developed by Santosh Bhandari</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
