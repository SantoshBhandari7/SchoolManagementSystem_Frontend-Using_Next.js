"use client";
import { createStudent } from "@/api/student.api";
import { createSubject } from "@/api/subject.api";
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
    mutationFn: createSubject,
    onSuccess: (response) => {
      toast.success(response?.message ?? "Teacher Created Successfully");
      router.replace("/admin");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Failed To Create Teacher");
    },
  });

  const OnSubmit = (data: ICreateSubject) => {
    const formData = new FormData();

    formData.append("subjectname", data.subjectname);
    formData.append("teacher", data.teacher);
    formData.append("program", data.program);
    formData.append("credithour", String(data.credithour));
    formData.append("class", data.class);
    mutate(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-3"
      >
        <Input
          name="subjectname"
          id="subjectname"
          register={register}
          label=" Subject Name"
          placeholder="Physics"
          type="text"
          error={errors?.subjectname?.message}
          required
        />
        <Input
          name="credithour"
          id="credithour"
          register={register}
          label="credithour"
          placeholder="0"
          type="email"
          error={errors?.credithour?.message}
          required
        />

        <div className="mt-3 p-1">
            <

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
