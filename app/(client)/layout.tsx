import NavBar from "@/components/client/nav";
import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      <section className="min-h-[85vh]">{children}</section>
    </main>
  );
};

export default ClientLayout;
