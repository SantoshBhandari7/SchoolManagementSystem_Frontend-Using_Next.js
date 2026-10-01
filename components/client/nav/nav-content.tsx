import React from "react";
import NavLink from "./nav-link";

const navLinks: { label: string; link: string; id: string }[] = [
  {
    label: "Home",
    link: "/",
    id: "home-page",
  },
  {
    label: "Programs",
    link: "/programs",
    id: "program-page",
  },
  {
    label: "AboutUs",
    link: "/about-us",
    id: "about-page",
  },
  {
    label: "ContactUs",
    link: "/contact-us",
    id: "contact-page",
  },
  {
    label: "MIS Login",
    link: "/login",
    id: "login-page",
  },
];

const NavLinks = () => {
  return (
    <div className="flex gap-3">
      {navLinks.map((item) => (
        <NavLink key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NavLinks;
