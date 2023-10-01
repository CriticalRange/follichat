import Image from "next/image";
import React from "react";
import CustomChat from "../svgs/CustomChat.svg";

const CustomChatIcon = () => {
  return <Image src={CustomChat} width={40} height={40} alt="Chat Icon" />;
};

export default CustomChatIcon;
