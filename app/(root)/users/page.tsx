"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserSidebarCard from "@/components/ui/UserSidebarCard";
import { signOut } from "next-auth/react";

const page = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col w-max"></div>
      <Sidebar />
      <ScrollArea className="text-white max-h-full w-[350px] rounded-md border">
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
        <UserSidebarCard />
      </ScrollArea>
    </div>
  );
};

export default page;
