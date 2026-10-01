import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/logo.png"}
        alt="MKSH Academy"
        width={500}
        height={500}
        className="h-full w-full text-sky-700"
      />
    </div>
  );
};

export default Logo;
