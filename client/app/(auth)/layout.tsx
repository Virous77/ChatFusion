import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen items-center justify-center flex">
      {children}
    </main>
  );
};

export default AuthLayout;
