"use client";

import React from "react";

import { NavbarWrapper } from "../navbar/navbar";
import { SidebarWrapper } from "../sidebar/sidebar";
import { SidebarContext } from "./layout-context";
import ToastWrapper from "@/components/admin/ToastWrapper";
import { authService } from "@/features";
import useAuth from "@/features/auth/useAuth";
import { useRouter } from "next/router";
  
interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  //const [_, setLocked] = useLockedBody(false);

  useAuth();

  function handleToggleSidebar() {
    setSidebarOpen(!sidebarOpen);
    //setLocked(!sidebarOpen);
  }
  

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className="flex">
        <ToastWrapper />
        <SidebarWrapper />
        <NavbarWrapper>{children}</NavbarWrapper>
      </section>
    </SidebarContext.Provider>
  );
};
