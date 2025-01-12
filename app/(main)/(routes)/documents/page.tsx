"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentPage = () => {
  const user = useUser();
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image
        src="/landing.png"
        height="300"
        width="300"
        alt="landing"
        ></Image>
      <h2 className="text-lg font-medium">
        Welcome to {user.user?.firstName}&apos;s Notion
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 m-2"></PlusCircle>
        Create a Note
      </Button>
      </div>
    </>
  );
};

export default DocumentPage;
