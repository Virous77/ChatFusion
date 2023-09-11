import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

const ServerLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex gap-1">
      <div className=" h-screen w-[150px] bg-zinc-500 flex justify-center p-[10px]">
        <Sidebar />
      </div>
      <div>{children}</div>
    </main>
  );
};

export default ServerLayout;
