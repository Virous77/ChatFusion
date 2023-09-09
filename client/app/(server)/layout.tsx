import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

const ServerLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <div className="fixed top-0 left-0 z-10 h-full w-1/5 bg-zinc-500">
        <Sidebar />
      </div>
      <div className="text-red ml-72">{children}</div>
    </main>
  );
};

export default ServerLayout;
