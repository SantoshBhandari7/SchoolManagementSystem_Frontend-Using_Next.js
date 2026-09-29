import React from "react";
import { TbCloudOff } from "react-icons/tb";

const DataNotFound = ({ message: string }: { message: string }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <TbCloudOff size={30} className="text-blue-500" />
    </div>
  );
};

export default DataNotFound;
