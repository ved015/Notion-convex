"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React from "react";

import Toolbar from "@/components/ui/toolbar";
import Cover from "@/components/ui/cover";

interface DocumentIdProps {
  params: {
    documentId: Id<"documents">;
  };
}
const DocumentIdpage = ({ params }: DocumentIdProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (document === undefined) {
    return <div>Loading...</div>;
  }

  if (document === null) {
    return <div>Not Found</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar intialData={document} />
      </div>
    </div>
  );
};

export default DocumentIdpage;
