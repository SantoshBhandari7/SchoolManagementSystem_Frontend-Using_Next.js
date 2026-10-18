import SideBar from "@/components/admin/layout";
import SidebarContent from "@/components/admin/layout/sidebar-content";
import AuthSection from "@/components/common/ui/authsection";
import Logo from "@/components/common/ui/logo";
import TeacherSideBar from "@/components/teacher/layout";
import useAuth from "@/hook/auth.hook";
import React from "react";

const TeacherLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { user } = useAuth();
  return (
    <main className="h-screen flex ">
      <TeacherSideBar />
      <section className="h-full w-full flex flex-col">
        <nav className="h-13 mt-4 sm:h-18 lg:h-20 border-b border-gray-300 w-full flex items-center px-3 sm:px-5">
          <p className="italic font-bold text-lg text-gray-700 ">
            Hello {user?.name}
          </p>
          <AuthSection />
        </nav>

        <div className=" px-3 py- overflow-auto">{children}</div>
      </section>
    </main>
  );
};

export default TeacherLayout;
