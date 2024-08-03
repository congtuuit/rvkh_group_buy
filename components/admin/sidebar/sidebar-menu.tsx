import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const SidebarMenu = ({ title, children }: Props) => {
  return (
    <div className="flex gap-2 flex-col" style={{ color: "inherit" }}>
      <span className="text-xs font-normal" style={{ color: "inherit" }}>
        {title}
      </span>
      {children}
    </div>
  );
};
