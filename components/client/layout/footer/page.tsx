import Logo from "@/components/common/ui/logo";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 justify-between gap-4 w-full min-h-full m-6 px-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-col-3  ">
      {/* {logo} */}
      <div className="w-20 h-16 flex flex-col justify-center">
        <Logo />
        <p className="text-sm">LEARN.GROW.ACHIEVE</p>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-md text-center font-stretch-100% font-semibold">
          Quick Links
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 justify-around">
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
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="font-semibold text-md text-center">Contact</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
          <p>Kathmandu, Nepal</p>
          <p>+977-981082932</p>
          <p>info@mkshacademy.edu.np</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
