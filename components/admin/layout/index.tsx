import Logo from "@/components/common/ui/logo";
import React from "react";
import SidebarContent from "./sidebar-content";

const SideBar = () => {
  return (
    <aside className="w-64 py-4 h-full border-r border-gray-300">
      <header className="w-40 px-10 max-auto h-15 border-b border-gray-300">
        <Logo />
      </header>
      <SidebarContent />
    </aside>
  );
};

export default SideBar;
