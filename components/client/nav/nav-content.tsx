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
    label: "About Us",
    link: "/about-us",
    id: "about-page",
  },
  {
    label: "Contact-us",
    link: "/contact-us",
    id: "contact-page",
  },
];

const NavLinks = () => {
  return (
    <div>
      {navLinks.map((item) => (
        <NavLink key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NavLinks;
