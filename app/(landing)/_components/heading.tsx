"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Heading = () => {
  return (
    <div className={cn("max-w-3xl space-y-4 mt-3")}>
      <h1 className="text-3xl md:text-5xl sm:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is an all-in-one workspace for note-taking,
        <br />
        project management,and collaboration.
      </h3>
      <Button>
        Enter Notion
        <ArrowRight className="h-4 w-4 ml-2"></ArrowRight>
      </Button>
    </div>
  );
};

export default Heading;
