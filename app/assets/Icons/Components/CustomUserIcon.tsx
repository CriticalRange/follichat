import Image from "next/image";
import React from "react";
import CustomUser from "../svgs/CustomUser.svg";

const CustomUserIcon = () => {
  return <Image src={CustomUser} width={40} height={40} alt="User Icon" />;
};

export default CustomUserIcon;
