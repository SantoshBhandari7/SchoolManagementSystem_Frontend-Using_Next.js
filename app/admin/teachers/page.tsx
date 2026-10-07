"use client";
import TeacherTable from "@/components/admin/dashboard/teacher/page";
import Link from "next/link";
import React from "react";

const TeacherSection = () => {
  return (
    <main className="min-h-full w-full bg-gray-100 sm:p-5 lg:p-8">
      <section className="mb-7 flex justify-between gap-4 border-b border-gray-400 ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Teachers</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your Teachers</p>
        </div>
        <Link
          href={"/admin/teachers/add-new"}
          className="rounded-lg  bg-blue-600 p-2 h-fit  text-center font-semibold text-white w-fit "
        >
          +Add Teacher
        </Link>
      </section>

      <TeacherTable />
    </main>
  );
};

export default TeacherSection;
