import StudentTable from "@/components/admin/dashboard/student/page";
import Link from "next/link";
import React from "react";

const StudentSection = () => {
  return (
    <main className="min-h-full w-full bg-gray-100 sm:p-5 lg:p-8">
      <section className="mb-7 flex justify-between gap-4 border-b border-gray-400 ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Students</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your students</p>
        </div>
        <Link
          href={"/admin/students/add-new"}
          className="rounded-lg  bg-blue-600 p-2 h-fit  text-center font-semibold text-white w-fit "
        >
          +Add Student
        </Link>
      </section>

      <StudentTable />
    </main>
  );
};

export default StudentSection;
