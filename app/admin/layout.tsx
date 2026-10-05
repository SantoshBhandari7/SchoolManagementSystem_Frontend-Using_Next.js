import SideBar from "@/components/admin/layout";
import SidebarContent from "@/components/admin/layout/sidebar-content";
import Logo from "@/components/common/ui/logo";
import React from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-screen flex ">
      <SideBar />
      <section className="h-full w-full flex flex-col">
        <nav className="h-18 border-b border-gray-300 w-full flex justify-between items-center pl-4 pr-10">
          <p className="italic font-bold text-lg text-gray-700 ">Hello Admin</p>
        </nav>

        <div className="flex-1 p-2">{children}</div>
      </section>
    </main>
  );
};

export default AdminLayout;
