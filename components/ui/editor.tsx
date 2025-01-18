"use client"

import {
    BlockNoteEditor,
    PartialBlock
  } from "@blocknote/core";

  import {
      BlockNoteViewRaw,
      useCreateBlockNote
} from "@blocknote/react";

import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { useTheme } from "next-themes";
// import { HTMLAttributes } from "react";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps{
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}
  
const Editor = ({
    onChange,
    initialContent,
    editable
} : EditorProps) => {

    const {edgestore} = useEdgeStore();
    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file
        });
        
        return response.url;
    }



    const resolvetheme = useTheme();
    const editor: BlockNoteEditor = useCreateBlockNote({
        // editable,
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
        uploadFile : handleUpload
    });

    return (
        <div>
            <BlockNoteView 
            editor={editor} 
            onChange={() => onChange(JSON.stringify(editor.document, null, 2))} 
            theme="light"
            />
        </div>
    )
}

export default Editor;