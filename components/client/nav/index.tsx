import React from "react";
import NavLinks from "./nav-content";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div>{/* {logo} */}</div>

      {/* {links} */}
      <NavLinks />

      <div>
        <Link href={"login"} className="text-gray-700 hover:text-sky-500">
          MIS Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
