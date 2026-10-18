"use client"
import useAuth from "@/hook/auth.hook";
import Image from "next/image";
import React, { useContext } from "react";

const AuthSection = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <div>
        <Image
          src={user?.profile_image?.path ?? "/logo.png"}
          alt="Profile_image"
          width={600}
          height={600}
          className="h-full w-full rounded-full "
        />
        <p>{user?.name}</p>
        <p onClick={logout}>Logout</p>
      </div>
    </div>
  );
};

export default AuthSection;
