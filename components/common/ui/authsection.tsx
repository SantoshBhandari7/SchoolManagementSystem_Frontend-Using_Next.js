"use client";
import useAuth from "@/hook/auth.hook";
import Image from "next/image";
import React, { useContext } from "react";

const AuthSection = () => {
  const { user, logout } = useAuth();
  return (
    <div className="flex items-center  justify-center gap-2 ">
      <div
        title="profile"
        className="h-14 w-16 rounded-full border border-sky-600 p-1 overflow-clip"
      >
        <Image
          src={user?.profile_image?.path ?? "/logo.png"}
          alt="Profile_image"
          width={600}
          height={600}
          className="h-full w-full rounded-full "
        />
      </div>
      <div className="">
        <p className="font-semibold text-lg text-gray-600 ">{user?.name}</p>
        <p
          onClick={logout}
          className=" cursor-pointer text-md font-semibold text-red-500 "
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default AuthSection;
