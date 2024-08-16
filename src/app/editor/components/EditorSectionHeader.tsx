import React, { ReactNode } from "react";

export const EditorSectionHeader: React.FC<{
  title: string;
  children?: ReactNode;
}> = ({ title, children }) => {
  return (
    <header className="px-5 flex items-center justify-between">
      <h2 className="text-sm font-semibold tracking-tight md:text-base">
        {title}
      </h2>

      {children}
    </header>
  );
};
