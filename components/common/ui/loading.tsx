import React from "react";
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <p className="flex gap-0.5 font-semibold text-gray-500 text-md">
        <VscLoading size="20" /> Loading...
      </p>
    </div>
  );
};

export default Loading;
