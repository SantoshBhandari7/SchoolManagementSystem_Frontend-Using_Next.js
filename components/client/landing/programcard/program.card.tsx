import { IProgram } from "@/types/program.types";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine, RiGhostLine } from "react-icons/ri";

interface IProps {
  program: IProgram;
}
const ProgramCard = ({
  program: { name, description, duration, eligibility },
}: IProps) => {
  return (
    // <main className="w-full ">
    <article className=" flex bg-white flex-col gap-2 min-h-40 max-h-60 min-w-70 max-w-100 border border-gray-300 p-3 rounded-lg relative  hover:scale-[1.05] hover:shadow">
      <div>
        <p className="text-lg font-bold text-gray-800 px-4 py-2">{name}</p>
        <p className="line-clamp-3 font-normal text-sm p-1 text-gray-600 leading-5">
          {description}
        </p>
        {/* <p className="text-md font-serif">{duration}</p>
        <p className="text-md font-serif">{eligibility}</p> */}
      </div>
      <Link
        href={`/programs`}
        className="flex items-center text-blue-500 gap-1 font-serif"
      >
        Learn more <RiArrowRightLine />
      </Link>
    </article>
    // </main>
  );
};

export default ProgramCard;
