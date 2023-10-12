import Image from "next/image";
import React from "react";
import CustomPhoto from "../svgs/CustomPhoto.svg";

const CustomPhotoIcon = () => {
  return (
    <Image
      className="cursor-pointer"
      src={CustomPhoto}
      width={40}
      height={40}
      alt="Photo Icon"
    />
  );
};

export default CustomPhotoIcon;
