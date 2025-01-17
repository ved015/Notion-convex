"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { Iconpicker } from "./icon-picker";
import { Button } from "./button";
import { X, Smile, ImageIcon } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

import React, { useRef, useState, ComponentRef } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/use-cover-image";

interface ToolbarProps {
  intialData: Doc<"documents">;
  preview?: boolean;
}

const Toolbar = ({ intialData, preview }: ToolbarProps) => {
  const inputRef = useRef<ComponentRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(intialData.title);

  const update = useMutation(api.documents.update);
  const removeIcon = useMutation(api.documents.removeIcon);

  const coverImage = useCoverImage();

  const enableInput = () => {
    if (preview) return;

    setIsEditing(true);
    setTimeout(() => {
      setValue(intialData.title);
      inputRef.current?.focus();
    }, 0);
  };

  const disableInput = () => setIsEditing(false);

  const onInput = (value: string) => {
    setValue(value);
    update({
      id: intialData._id,
      title: value || "Untitled",
    });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key == "Enter") {
      event.preventDefault();
      disableInput();
    }
  };

  const onIconSelect = (icon: string) => {
    update({
      id: intialData._id,
      icon,
    });
  };

  const onRemoveIcon = () => {
    removeIcon({
      id: intialData._id,
    });
  };

  return (
    <div className="pl-[54px] group relative">
      {!!intialData.icon && !preview && (
        <div className="flex items-center gap-x-2 group/icon pt-6">
          <Iconpicker onChange={onIconSelect}>
            <p className="text-6xl hover:opacity-75 transition">
              {intialData.icon}
            </p>
          </Iconpicker>
          <Button
            onClick={onRemoveIcon}
            className="rounded-full opacity-0 group-hover/icon:opacity-100
                        transition text-muted-foreground text-xs"
            variant="outline"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {!!intialData.icon && preview && (
        <p className="text-6xl pt-6">{intialData.icon}</p>
      )}
      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 py-4">
        {!intialData.icon && !preview && (
          <Iconpicker asChild onChange={onIconSelect}>
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
            >
              <Smile className="h-4 w-4 mr-2" />
              Add icon
            </Button>
          </Iconpicker>
        )}
        {!intialData.coverImage && !preview && (
          <Button
            variant="outline"
            size="sm"
            className="text-muted-foreground text-xs"
            onClick={coverImage.onOpen}
          >
            <ImageIcon className="h-4 2-4 mr-2" />
            Add Cover
          </Button>
        )}
      </div>
      {isEditing && !preview ? (
        <TextareaAutosize
          ref={inputRef}
          onKeyDown={onKeyDown}
          onBlur={disableInput}
          value={value}
          onChange={(e) => onInput(e.target.value)}
          className="text-5xl bg-transparent font-bold break-words
                    outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none"
        />
      ) : (
        <div
          onClick={enableInput}
          className="pb-[11.5px] text-5xl font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF]"
        >
          {intialData.title}
        </div>
      )}
    </div>
  );
};

export default Toolbar;
