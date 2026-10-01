import React from "react";
import NavLinks from "./nav-content";
import Link from "next/link";
import Logo from "@/components/common/ui/logo";

const NavBar = () => {
  return (
    <nav className="hidden lg:flex gap-6 justify-between items-center px-15 h-15 border-b border-gray-300 shadow">
      <div className="flex w-25 items-center h-10">
        {/* {logo} */}
        <Logo />
      </div>

      {/* {links} */}
      <NavLinks />
      {/* <div>
        <Link
          href={"login"}
          className="text-gray-700 hover:text-sky-500 font-bold flex"
        >
          MIS Login
        </Link>
      </div> */}
    </nav>
  );
};

export default NavBar;
