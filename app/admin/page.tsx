import StudentTable from "@/components/admin/dashboard/student/page";
import React from "react";
import { FaHandsClapping } from "react-icons/fa6";

const AdminDashBoard = () => {
  return (
    <main className="w-full h-full p-2">
      <h1 className="text-2xl font-bold tracking-wide ">Dashboard</h1>
      <p className="text-gray-500 text-sm flex gap-1 items-center ">
        Welcome back, Admin!
        <FaHandsClapping className="text-orange-400 text-[15px] " />
      </p>
      <StudentTable />
    </main>
  );
};

export default AdminDashBoard;
