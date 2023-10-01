"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  // States
  const routes = useRoutes();
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="flex mt-2 justify-start flex-col min-h-screen w-16 text-white">
      <ul role="list" className="flex flex-col items-center space-y-5">
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

export default Sidebar;
