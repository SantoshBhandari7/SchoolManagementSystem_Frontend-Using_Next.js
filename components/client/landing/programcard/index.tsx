import React from "react";
import SectionHeader from "../section-header";
import ProgramLists from "./list";

const Programs = () => {
  return (
    <div className="px-20 py-30   bg-gray-200">
      <SectionHeader
        title="Our Academy Programs"
        subtitle="Discover world-class programs designed to prepare you for success in your chosen field "
      />
      <div className="pt-6">
        <ProgramLists />
      </div>
    </div>
  );
};

export default Programs;
