import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { DarkModeSwitch } from "./darkmodeswitch";
import { authService } from "@/features";

export const UserDropdown = () => {
  const router = useRouter();
  const handleLogout = useCallback( () => {
    authService.logoutAsync(router);
  }, [router]);

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as="button"
            color="secondary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
      </NavbarItem>

      <DropdownMenu aria-label="User menu actions" onAction={() => {}}>
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Thông tin tài khoản</p>
          <p>tuvan@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">Cài đặt</DropdownItem>
        <DropdownItem key="system">Hệ thống</DropdownItem>
        <DropdownItem key="help_and_feedback">Hỗ trợ</DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          onPress={handleLogout}
        >
          Đăng xuất
        </DropdownItem>
        <DropdownItem key="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
