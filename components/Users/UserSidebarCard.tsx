"use client";

import React, { useCallback, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";
import CustomAvatar from "../Shared/CustomAvatar";

interface UserSidebarCardProps {
  userData: User;
}

const UserSidebarCard: React.FC<UserSidebarCardProps> = ({ userData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("api/conversations", {
        userId: userData.id,
      })
      .then((response) => {
        router.push(`/conversations/${response.data.id}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer border-transparent max-h-20"
    >
      <CardHeader>
        <div className="flex flex-row h-fit items-center justify-start">
          <CustomAvatar currentUser={userData} />
          <CardDescription className="ml-3">{userData.name}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserSidebarCard;
