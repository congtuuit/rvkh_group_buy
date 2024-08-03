"use client";

import React from "react";
import { Sidebar } from "./sidebar.styles";
import { CompaniesDropdown } from "./companies-dropdown";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();


  console.log("pathname ", pathname)
  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={
          Sidebar({
            collapsed: collapsed,
          }) + " sidebar-bg"
        }
        style={{ backgroundColor: "#171717", color: "white" }}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarMenu title="Tùy chọn">
              <SidebarItem
                isActive={pathname === "/group-buy-courses"}
                title="Khóa học group buy"
                icon={<ViewIcon />}
                href="/group-buy-courses"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
