import Image from "next/image";
import React from "react";
import CustomUsers from "../svgs/CustomUsers.svg";

const CustomUsersIcon = () => {
  return <Image src={CustomUsers} width={40} height={40} alt="Users Icon" />;
};

export default CustomUsersIcon;
