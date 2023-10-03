"use client";

import { User } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

interface CustomSidebarAvatarProps {
  currentUser?: User;
}

const CustomSidebarAvatar: React.FC<CustomSidebarAvatarProps> = ({
  currentUser,
}) => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" width={40} height={40} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default CustomSidebarAvatar;
