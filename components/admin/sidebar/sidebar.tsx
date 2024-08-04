"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { ViewIcon } from "../icons/sidebar/view-icon";
import { useSidebarContext } from "../layout/layout-context";

import { Sidebar } from "./sidebar.styles";
import { CompaniesDropdown } from "./companies-dropdown";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div
          className={Sidebar.Overlay()}
          role="presentation"
          onClick={setCollapsed}
        />
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
                href="/group-buy-courses"
                icon={<ViewIcon />}
                isActive={pathname === "/group-buy-courses"}
                title="Khóa học group buy"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
