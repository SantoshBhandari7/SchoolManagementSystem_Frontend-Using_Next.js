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

const StudentForm = () => {
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

  const genderOptions = Object.values(Gender).map((gender) => ({
    _id: gender,
    name: gender,
  }));

  const { mutate, isPending } = useMutation({
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
    <div className="w-full px-4 sm:px-6 md:px-8">
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
      >
        <div className="w-full min-w-0">
          <Input
            name="name"
            id="name"
            register={register}
            label="Name"
            placeholder="John Doe"
            type="text"
            error={errors?.name?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
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
        </div>

        <div className="w-full min-w-0">
          <Input
            name="password"
            id="password"
            register={register}
            label="Password"
            placeholder="Enter password"
            type="password"
            error={errors?.password?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="address"
            id="address"
            register={register}
            label="Address"
            placeholder="Kathmandu, Nepal"
            type="text"
            error={errors?.address?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="roll_no"
            id="roll_no"
            register={register}
            label="Roll No"
            placeholder="Roll number"
            type="number"
            error={errors?.roll_no?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="parentName"
            id="parentName"
            register={register}
            label="Parent Name"
            placeholder="John Doe"
            type="text"
            error={errors?.parentName?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="parentPhone"
            id="parentPhone"
            register={register}
            label="Parent Phone"
            placeholder="9810928263"
            type="text"
            error={errors?.parentPhone?.message}
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            register={register}
            label="Profile Image"
            name="profile_image"
            id="profile_image"
            required
            type="file"
            error={errors?.profile_image?.message}
          />
        </div>

        <div className="w-full min-w-0">
          <CLassSelect register={register("class")} />
        </div>

        <div className="w-full min-w-0">
          <Select
            options={genderOptions}
            register={register("gender")}
            label="Gender"
            error={errors?.gender?.message}
          />
        </div>

        <div className="col-span-1 mt-2 w-full md:col-span-2">
          <Button
            disabled={isPending}
            type="submit"
            label={isPending ? "Submitting..." : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};
export default StudentForm;
