"use client";
import { createStudent } from "@/api/student.api";
import { createTeacher } from "@/api/teacher.api";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { Select } from "@/components/common/ui/select";
import { subjectSchema } from "@/schema/subject.schema";
import { teacherSchema } from "@/schema/teacher.schema";
import { Gender } from "@/types/enum.types";
import { ICreateStudent } from "@/types/student.types";
import { ICreateSubject } from "@/types/subject.types";
import { ICreateTeacher } from "@/types/teacher.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SubjectForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateSubject>({
    defaultValues: {
      subjectname: "",
      credithour: undefined,
      teacher: "",
      program: "",
      class: "",
    },
    resolver: yupResolver(subjectSchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createS,
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
          name="experience"
          id="experience"
          register={register}
          label="Experience"
          placeholder="0"
          type="text"
          error={errors?.experience?.message}
          required
        />
        <Input
          name="subject"
          id="subject"
          register={register}
          label="Subject"
          placeholder="mathematics"
          type="text"
          error={errors?.subject?.message}
          required
        />
        <Input
          name="salary"
          id="salary"
          register={register}
          label="Salary"
          placeholder="30000"
          type="text"
          error={errors?.salary?.message}
          required
        />
        <Input
          name="phone"
          id="phone"
          register={register}
          label="Phone"
          placeholder="9810928263"
          type="text"
          error={errors?.phone?.message}
        />
        <Input
          register={register}
          label="Profile_Image"
          name="profile_image"
          id="profile_image"
          required
          type="file"
          error={errors?.profile_image?.message}
        />

        <div className="mt-3 p-1">
          <Select
            register={register("gender")}
            label="Gender"
            options={genderOptions}
            error={errors?.gender?.message}
          />
        </div>

        <div className="mt-4 col-span-2">
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

export default SubjectForm;
