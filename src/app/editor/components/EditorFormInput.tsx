import React, { forwardRef } from "react";

export const EditorFormInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <>
    <input
      {...props}
      ref={ref}
      className="p-2 border w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
    />
  </>
));

EditorFormInput.displayName = "EditorFormInput";
