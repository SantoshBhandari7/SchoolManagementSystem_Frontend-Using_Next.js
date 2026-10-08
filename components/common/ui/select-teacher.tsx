import { getAllSubjects } from "@/api/subject.api";
import { useQuery } from "@tanstack/react-query";
import { register } from "module";
import { UseFormRegisterReturn } from "react-hook-form";
import { Select } from "./select";
import { getTeacher } from "@/api/teacher.api";

interface IProps {
  register: UseFormRegisterReturn;
}

const TeacherSelect = ({ register }: IProps) => {
  const { data } = useQuery({
    queryFn: getTeacher,
    queryKey: ["get-all-teachers"],
  });

  return (
    <div className="flex flex-col gap-1">
      <Select
        register={register}
        label="Teacher"
        options={data?.data?.teachers ?? []}
      />
    </div>
  );
};

export default TeacherSelect;
