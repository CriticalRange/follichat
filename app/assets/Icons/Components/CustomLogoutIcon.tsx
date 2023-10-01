import Image from "next/image";
import React from "react";
import CustomLogout from "../svgs/CustomLogout.svg";

const CustomLogoutIcon = () => {
  return <Image src={CustomLogout} width={40} height={40} alt="User Icon" />;
};

export default CustomLogoutIcon;
