import NavBar from "@/components/client/nav";
import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      <section>{children}</section>
    </main>
  );
};

export default ClientLayout;
