"use client";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { Select } from "@/components/common/ui/select";
import CLassSelect from "@/components/common/ui/select-class";
import { StudentSchema } from "@/schema/student.schema";
import { Gender } from "@/types/enum.types";
import { ICreateStudent } from "@/types/student.types";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateStudent>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      roll_no: 0,
      class: "",
      address: "",
      gender: "" as Gender,
      parentName: "",
      parentPhone: "",
    },
    resolver: yupResolver(StudentSchema),
    mode: "all",
  });

  return (
    <div>
      <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-5">
        <Input
          name="name"
          id="name"
          register={register}
          label="Name"
          placeholder="john doe"
          type="text"
          error={errors?.name?.message}
          required
        />
        <Input
          name="email"
          id="email"
          register={register}
          label="Email"
          placeholder="john@gmail.com"
          type="email"
          error={errors?.name?.message}
          required
        />
        <Input
          name="password"
          id="password"
          register={register}
          label="Password"
          placeholder="enter password"
          type="password"
          error={errors?.password?.message}
          required
        />
        <Input
          name="address"
          id="address"
          register={register}
          label="Address"
          placeholder="Kathmandu, nepal"
          type="text"
          error={errors?.address?.message}
          required
        />
        <Input
          name="roll_no"
          id="roll_no"
          register={register}
          label="RollNo"
          placeholder="roll number"
          type="text"
          error={errors?.roll_no?.message}
          required
        />
        <Input
          name="parentName"
          id="parentName"
          register={register}
          label="ParentName"
          placeholder="john doe"
          type="text"
          error={errors?.parentName?.message}
          required
        />
        <Input
          name="parentPhone"
          id="parentPhone"
          register={register}
          label="ParentPhone"
          placeholder="9810928263"
          type="text"
          error={errors?.parentPhone?.message}
        />

        <div className="mt-3">
          <CLassSelect register={register} />
        </div>
      </form>
      <div className="mt-4">
        <Button type="submit" label="Submit" />
      </div>
    </div>
  );
};

export default StudentForm;
