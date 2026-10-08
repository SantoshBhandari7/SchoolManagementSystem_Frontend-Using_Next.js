"use client";
import { createStudent } from "@/api/student.api";
import { createSubject } from "@/api/subject.api";
import { createTeacher } from "@/api/teacher.api";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { Select } from "@/components/common/ui/select";
import CLassSelect from "@/components/common/ui/select-class";
import ProgramSelect from "@/components/common/ui/select-program";
import TeacherSelect from "@/components/common/ui/select-teacher";
import { classSchema, TClass } from "@/schema/class.schema";
import { subjectSchema } from "@/schema/subject.schema";
import { teacherSchema } from "@/schema/teacher.schema";
import { ICreateClass } from "@/types/class.types";
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
  } = useForm<TClass>({
    defaultValues: {
      classname: "",
      room_no: undefined,
      section: "",
      teacher: "",
    },
    resolver: yupResolver(classSchema),
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

  const OnSubmit = (data: ICreateClass) => {
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
            name="classname"
            id="classname"
            register={register}
            label="Class Name"
            placeholder="Math"
            type="text"
            error={errors?.classname?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <Input
            name="room_no"
            id="room_no"
            register={register}
            label="Room_No"
            placeholder="0"
            type="number"
            error={errors?.room_no?.message}
            required
          />
        </div>

        <div className="w-full min-w-0">
          <TeacherSelect register={register("teacher")} />
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

export default SubjectForm;
