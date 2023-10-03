"use client";

import { User } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import CustomUserIcon from "@/app/assets/Icons/Components/CustomUserIcon";

interface CustomAvatarProps {
  currentUser?: User;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ currentUser }) => {
  return (
    <Avatar className="relative">
      <AvatarImage
        className="flex rounded-full"
        src={currentUser?.image as string}
        width={40}
        height={40}
      />
      <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3"></span>
      <AvatarFallback>
        <CustomUserIcon />
      </AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
