"use client";
import { createStudent } from "@/api/student.api";
import { createTeacher } from "@/api/teacher.api";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { Select } from "@/components/common/ui/select";
import { teacherSchema } from "@/schema/teacher.schema";
import { Gender } from "@/types/enum.types";
import { ICreateStudent } from "@/types/student.types";
import { ICreateTeacher, ITeachers, TTeacher } from "@/types/teacher.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const TeacherForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTeacher>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      experience: undefined,
      salary: undefined,
      gender: "" as Gender,
      subject: "",
      address: "",
      phone: "",
    },
    resolver: yupResolver(teacherSchema),
    mode: "all",
  });

  const genderOptions = Object.values(Gender).map((gender) => ({
    _id: gender,
    name: gender,
  }));

  const { mutate, isPending } = useMutation({
    mutationFn: createTeacher,
    onSuccess: (response) => {
      toast.success(response?.message ?? "Teacher Created Successfully");
      router.replace("/admin");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Failed To Create Teacher");
    },
  });

  const OnSubmit = (data: ICreateTeacher) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("experience", String(data.experience));
    formData.append("address", data.address);
    formData.append("subject", data.subject);
    formData.append("gender", data.gender);
    formData.append("salary", String(data.salary));
    formData.append("phone", String(data.phone));

    if (data.profile_image?.[0]) {
      formData.append("profile_image", data.profile_image[0]);
    }
    mutate(formData);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
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
            name="experience"
            id="experience"
            register={register}
            label="Experience"
            placeholder="0"
            type="number"
            error={errors?.experience?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="subject"
            id="subject"
            register={register}
            label="Subject"
            placeholder="Mathematics"
            type="text"
            error={errors?.subject?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="salary"
            id="salary"
            register={register}
            label="Salary"
            placeholder="30000"
            type="number"
            error={errors?.salary?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="phone"
            id="phone"
            register={register}
            label="Phone"
            placeholder="9810928263"
            type="text"
            error={errors?.phone?.message}
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            register={register}
            label="Profile Image"
            name="profile_image"
            id="profile_image"
            type="file"
            error={errors?.profile_image?.message}
            required
          />
        </div>

        <div className="w-full min-w-0 ">
          <Select
            register={register("gender")}
            label="Gender"
            options={genderOptions}
            error={errors?.gender?.message}
          />
        </div>

        <div className="col-span-1 mt-2 w-full md:col-span-2">
          <Button
            disabled={isPending}
            label={isPending ? "Submitting..." : "Submit"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
