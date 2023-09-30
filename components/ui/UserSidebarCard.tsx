import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const UserSidebarCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center">
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardDescription className="ml-3">Username</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default UserSidebarCard;
