import StudentSideBar from "@/components/student/layout";
import React from "react";

const StudentLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-screen flex ">
      <StudentSideBar />
      <section className="h-full w-full flex flex-col">
        <nav className="h-13 mt-4 sm:h-18 lg:h-20 border-b border-gray-300 w-full flex items-center px-3 sm:px-5">
          <p className="italic font-bold text-lg text-gray-700 ">
            Hello Student
          </p>
        </nav>

        <div className=" px-3 py- overflow-auto">{children}</div>
      </section>
    </main>
  );
};
export default StudentLayout;
