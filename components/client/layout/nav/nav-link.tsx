import Link from "next/link";
import React from "react";

export const NavLink = ({
  item: { label, link },
}: {
  item: { label: string; link: string; id: string };
}) => {
  return (
    <Link href={link}>
      <span className="text-lg font-semibold text-gray-700 hover:text-sky-600">
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
