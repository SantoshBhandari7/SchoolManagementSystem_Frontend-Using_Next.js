import React from "react";
import SectionHeader from "../section-header";
import ProgramLists from "./list";

const Programs = () => {
  return (
    <div className="px-20 py-10 bg-gray-300">
      <SectionHeader
        title="Our Academy Programs"
        subtitle="Discover program with faculties"
      />
      <ProgramLists />
    </div>
  );
};

export default Programs;
