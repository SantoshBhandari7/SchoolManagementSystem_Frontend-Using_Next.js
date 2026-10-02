import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface IProps {
  title: string;
  subtitle: string;
  link?: string;
}
const SectionHeader = ({ title, subtitle, link }: IProps) => {
  return (
    <header className="flex justify-center mb-7  mt-5 items-center">
      <div>
        <h1 className="text-xl font-bold text-gray-700 ">{title}</h1>
        <p className="text-sm text-gray-500 ">{subtitle}</p>
      </div>
    </header>
  );
};

export default SectionHeader;
