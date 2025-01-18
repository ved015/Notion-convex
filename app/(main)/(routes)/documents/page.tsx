"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentPage = () => {
  const router = useRouter();
  const user = useUser();
  const create = useMutation(api.documents.create);

  const createNote = () => {
    const promise = create({ title: "Untitled" })
      .then((documentId) => {router.push(`/documents/${documentId}`)})

    toast.promise(promise, {
      loading: "Creating a new node ...",
      success: "New Note Created!",
      error: "Failed to create Note. Try Again",
    });
  };

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
        <Button onClick={createNote}>
          <PlusCircle className="h-4 w-4 m-2"></PlusCircle>
          Create a Note
        </Button>
      </div>
    </>
  );
};

export default DocumentPage;
