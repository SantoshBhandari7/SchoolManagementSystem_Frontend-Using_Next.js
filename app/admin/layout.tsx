"use client";
import SideBar from "@/components/admin/layout";
import SidebarContent from "@/components/admin/layout/sidebar-content";
import AuthSection from "@/components/common/ui/authsection";
import Logo from "@/components/common/ui/logo";
import withAuth from "@/hoc/withAuth.hoc";
import useAuth from "@/hook/auth.hook";
import { Role } from "@/types/enum.types";
import React from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  // const { user } = useAuth();
  return (
    <main className="h-screen flex ">
      <SideBar />
      <section className="h-18 w-full flex flex-col">
        <nav className="h-13 mt-2 mb-2 p-2 sm:h-18 lg:h-20 border-b border-gray-300 w-full flex items-center justify-between px-3 sm:px-4">
          <p className="italic font-bold text-lg text-gray-700 ">Hello Admin</p>
          <AuthSection />
        </nav>

        <div className=" overflow-auto">{children}</div>
      </section>
    </main>
  );
};

const Layout = withAuth(AdminLayout);
export default Layout;
