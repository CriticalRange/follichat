"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { User } from "@prisma/client";
import PropTypes from "prop-types";
import CustomSidebarAvatar from "./CustomSidebarAvatar";

interface DesktopSidebarProps {
  currentUser: User;
}
const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  // States
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex mt-2 justify-start flex-col min-h-screen w-16 text-white">
      <ul role="list" className="flex flex-col items-center space-y-5">
        <div onClick={() => setIsOpen(!isOpen)}>
          <CustomSidebarAvatar currentUser={currentUser} />
        </div>
        {routes.map((route) => (
          <SidebarItem
            key={route.label}
            href={route.href}
            label={route.label}
            active={route.active}
            onClick={route.onClick}
            icon={route.icon}
          />
        ))}
      </ul>
    </div>
  );
};

DesktopSidebar.propTypes = {
  currentUser: PropTypes.any,
};

export default DesktopSidebar;
