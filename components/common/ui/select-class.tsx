import React from "react";
import { Select } from "./select";
import { useQuery } from "@tanstack/react-query";
import { UseFormRegisterReturn } from "react-hook-form";

import { getAllClasses } from "@/api/class.api";

interface IProps {
  register: UseFormRegisterReturn;
}

const CLassSelect = ({ register }: IProps) => {
  const { data } = useQuery({
    queryFn: getAllClasses,
    queryKey: ["get-all-classes"],
  });

  return (
    <div className="flex flex-col gap-1 ">
      <Select
        register={register}
        label="Class"
        options={data?.data?.classRecord ?? []}
      />
    </div>
  );
};

export default CLassSelect;
