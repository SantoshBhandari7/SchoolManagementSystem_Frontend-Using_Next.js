import React from "react";
import { Select } from "./select";
import { useQuery } from "@tanstack/react-query";
import { useForm, UseFormRegister } from "react-hook-form";
import { getStudent } from "@/api/student.api";
import { getAllClasses } from "@/api/class.api";

interface IProps {
  register: UseFormRegister<any>;
}

const CLassSelect = ({ register }: IProps) => {
  const { data } = useQuery({
    queryFn: getAllClasses,
    queryKey: ["getAllStudents"],
  });

  return (
    <div className="flex flex-col gap-1 ">
      <Select
        register={register}
        value="class"
        label="Class"
        options={data?.data?.classRecords ?? []}
      />
    </div>
  );
};

export default CLassSelect;
