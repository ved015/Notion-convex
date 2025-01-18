"use client";

import Spinner from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";
import { SearchCommand } from "@/components/ui/search-command";
// import { ThemeProvider } from "@/components/providers/theme-provider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }
  if (!isAuthenticated) {
    return redirect("/");
  }
  // bg-[#1F1F1F]"
  return (
    <div className="h-full flex bg-white">
      {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange
          storageKey="Notion-theme"> */}
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default MainLayout;
