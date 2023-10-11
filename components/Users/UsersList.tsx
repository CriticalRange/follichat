import { User } from "@prisma/client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserSidebarCard from "@/components/Users/UserSidebarCard";

interface UsersListProps {
  items: User[];
}

const UsersList: React.FC<UsersListProps> = ({ items }) => {
  return (
    <div className="flex flex-row">
      <div className="text-white rounded-md">
        {items.map((user) => (
          <UserSidebarCard key={user.id} userData={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
