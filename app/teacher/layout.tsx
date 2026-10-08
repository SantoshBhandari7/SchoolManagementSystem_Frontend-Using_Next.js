import SideBar from "@/components/admin/layout";
import SidebarContent from "@/components/admin/layout/sidebar-content";
import Logo from "@/components/common/ui/logo";
import TeacherSideBar from "@/components/teacher/layout";
import React from "react";

const TeacherLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-screen flex ">
      <TeacherSideBar />
      <section className="h-full w-full flex flex-col">
        <nav className="h-13 mt-4 sm:h-18 lg:h-20 border-b border-gray-300 w-full flex items-center px-3 sm:px-5">
          <p className="italic font-bold text-lg text-gray-700 ">
            Hello Teacher
          </p>
        </nav>

        <div className=" px-3 py-2 overflow-auto">{children}</div>
      </section>
    </main>
  );
};

export default TeacherLayout;
