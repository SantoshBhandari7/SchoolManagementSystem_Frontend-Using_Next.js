"use client";
import { createStudent } from "@/api/student.api";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { Select } from "@/components/common/ui/select";
import CLassSelect from "@/components/common/ui/select-class";
import { StudentSchema } from "@/schema/student.schema";
import { Gender } from "@/types/enum.types";
import { ICreateStudent } from "@/types/student.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";

const TeacherForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateStudent>({
    defaultValues: {
      name: "",
      email: "",
      password: "",

      class: "",
      address: "",
      gender: "" as Gender,
      parentName: "",
      parentPhone: "",
    },
    resolver: yupResolver(StudentSchema),
    mode: "all",
  });

  const genderOptions = Object.values(Gender).map((gender) => ({
    _id: gender,
    name: gender,
  }));

  const { mutate } = useMutation({
    mutationFn: createStudent,
    onSuccess: (response) => {
      toast.success(response?.message ?? "Student created Successfully");
      router.replace("/admin");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Failed to create student");
    },
  });

  const OnSubmit = (data: ICreateStudent) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("roll_no", String(data.roll_no));
    formData.append("address", data.address);
    formData.append("classId", data.class);
    formData.append("gender", data.gender);
    formData.append("parentName", data.parentName);
    formData.append("parentPhone", String(data.parentPhone));

    if (data.profile_image?.[0]) {
      formData.append("profile_image", data.profile_image[0]);
    }
    mutate(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-3"
      >
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
          error={errors?.email?.message}
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
        <Input
          register={register}
          label="Profile_Image"
          name="profile_image"
          id="profile_image"
          required
          type="file"
        />

        <div className="mt-3">
          <CLassSelect register={register("class")} />
        </div>
        <div className="mb-3 mt-1">
          <Select
            options={genderOptions}
            register={register("gender")}
            label="Gender"
          />
        </div>
        <div className="mt-4 col-span-2">
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
