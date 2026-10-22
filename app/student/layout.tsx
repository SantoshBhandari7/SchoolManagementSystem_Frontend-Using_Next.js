"use client";
import AuthSection from "@/components/common/ui/authsection";
import StudentSideBar from "@/components/student/layout";
import withAuth from "@/hoc/withAuth.hoc";
import useAuth from "@/hook/auth.hook";
import { students } from "@/types/enum.types";
import React from "react";

const StudentLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { user } = useAuth();
  return (
    <main className="h-screen flex ">
      <StudentSideBar />
      <section className="h-18 w-full flex flex-col">
        <nav className="h-13 mt-2 mb-2 p-2 sm:h-18 lg:h-20 border-b border-gray-300 w-full flex items-center px-3 sm:px-5">
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

const Layout = withAuth(StudentLayout, students);
export default Layout;
