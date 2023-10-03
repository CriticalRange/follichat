import { User } from "@prisma/client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserSidebarCard from "@/components/Users/UserSidebarCard";

interface UsersListProps {
  items: User[];
}

const UsersList: React.FC<UsersListProps> = ({ items }) => {
  return (
    <div className="flex flex-row h-screen">
      <ScrollArea className="text-white max-h-full w-[350px] rounded-md border border-grey">
        {items.map((user) => (
          <UserSidebarCard key={user.id} userData={user} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default UsersList;
