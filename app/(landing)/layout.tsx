import React from "react";
import Navbar from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-20">{children}</main>
    </div>
  );
};

export default LandingLayout;
