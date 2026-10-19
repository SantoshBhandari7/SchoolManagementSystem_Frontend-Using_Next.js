"use client";
import StudentTable from "@/components/admin/dashboard/student/page";
import TeacherDataTable from "@/components/teacher/teacherdata-table";
import useAuth from "@/hook/auth.hook";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";

const TeacherDashBoard = () => {
  const { user } = useAuth();

  return (
    <main className="w-full h-full px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3">
      <div className="mb-3">
        <h1 className="text-2xl font-bold tracking-wide ">Dashboard</h1>
        <p className="text-gray-500 text-sm flex gap-1 items-center ">
          Welcome back, {user?.name ?? "teacher!"}
          <FaHandsClapping className="text-orange-400 text-[15px] " />
        </p>
      </div>
      {/* <StudentTable /> */}
      <TeacherDataTable />
    </main>
  );
};

export default TeacherDashBoard;
