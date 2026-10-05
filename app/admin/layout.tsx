import SidebarContent from "@/components/admin/layout/sidebar-content";
import Logo from "@/components/common/ui/logo";
import React from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-screen flex ">
      <Logo />
      <SidebarContent />
      <section>
        <nav>
          <p>Hello Admin</p>
        </nav>

        <div className="flex-1 p-2">{children}</div>
      </section>
    </main>
  );
};

export default AdminLayout;
