import React, { forwardRef } from "react";

export const EditorFormTextarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return (
    <>
      <textarea
        {...props}
        ref={ref}
        className="w-full rounded-lg border border-gray-200 align-top shadow-sm sm:text-sm p-2"
      ></textarea>
    </>
  );
});

EditorFormTextarea.displayName = "EditorFormTextarea";
