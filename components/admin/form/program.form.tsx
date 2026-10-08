"use client";
import { createProgram } from "@/api/program.api";
import { createStudent } from "@/api/student.api";
import { createSubject } from "@/api/subject.api";
import { createTeacher } from "@/api/teacher.api";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { Select } from "@/components/common/ui/select";
import CLassSelect from "@/components/common/ui/select-class";
import ProgramSelect from "@/components/common/ui/select-program";
import TeacherSelect from "@/components/common/ui/select-teacher";
import { programSchema, TProgram } from "@/schema/program.schema";
import { subjectSchema } from "@/schema/subject.schema";
import { teacherSchema } from "@/schema/teacher.schema";
import { Gender } from "@/types/enum.types";
import { ICreateProgram, IProgram } from "@/types/program.types";
import { ICreateStudent } from "@/types/student.types";
import { ICreateSubject } from "@/types/subject.types";
import { ICreateTeacher } from "@/types/teacher.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProgramForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProgram>({
    defaultValues: {
      name: "",
      description: "",
      duration: undefined,
      eligibility: "",
    },
    resolver: yupResolver(programSchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createProgram,
    onSuccess: (response) => {
      toast.success(response?.message ?? "Teacher Created Successfully");
      router.replace("/admin");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Failed To Create Teacher");
    },
  });

  const OnSubmit = (data: ICreateProgram) => {
    mutate(data);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="grid w-full grid-cols-1 gap-5 md:grid-cols-2"
      >
        <div className="w-full min-w-0">
          <Input
            name="name"
            id="name"
            register={register}
            label="Program Name"
            placeholder="Science "
            type="text"
            error={errors?.name?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="description"
            id="description"
            register={register}
            label="Description"
            placeholder="description about program"
            type="text"
            error={errors?.description?.message}
            required
          />
        </div>
        <div className="w-full min-w-0">
          <Input
            name="eligibility"
            id="eligibility"
            register={register}
            label="Eligibility"
            placeholder="eligibility for this program"
            type="text"
            error={errors?.eligibility?.message}
            required
          />
        </div>
        <div className="w-full min-w-0">
          <Input
            name="duration"
            id="duration"
            register={register}
            label="Duration"
            placeholder="0"
            type="text"
            error={errors?.duration?.message}
            required
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

export default ProgramForm;
