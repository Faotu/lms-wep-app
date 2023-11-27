import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="pr-0 pt-0"
      height={130}
      width={130}
      alt="logo"
      src="/logo.svg"
    />
  );
};

export default Logo;
