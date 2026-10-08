import ClassTable from "@/components/admin/dashboard/classes/page";
import Link from "next/link";
import React from "react";

const ProgramSection = () => {
  return (
    <main className="min-h-full w-full bg-gray-100 sm:p-5 lg:p-8">
      <section className="mb-7 flex justify-between gap-4 border-b border-gray-400 ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Classes</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your classes</p>
        </div>
        <Link
          href={"/admin/classes/add-new"}
          className="rounded-lg  bg-blue-600 p-2 h-fit  text-center font-semibold text-white w-fit "
        >
          +Add Class
        </Link>
      </section>

      <ClassTable />
    </main>
  );
};

export default ProgramSection;
