import Image from "next/image";
import React from "react";
import CustomSend from "../svgs/CustomSend.svg";

const CustomSendIcon = () => {
  return <Image src={CustomSend} width={24} height={24} alt="Send Icon" />;
};

export default CustomSendIcon;
