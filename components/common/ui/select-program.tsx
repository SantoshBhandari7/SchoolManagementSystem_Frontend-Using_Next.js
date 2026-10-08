import { getAllProgram } from "@/api/program.api";
import { useQuery } from "@tanstack/react-query";
import { register } from "module";
import { UseFormRegisterReturn } from "react-hook-form";
import { Select } from "./select";

interface IProps {
  register: UseFormRegisterReturn;
}

const ProgramSelect = ({ register }: IProps) => {
  const { data } = useQuery({
    queryFn: getAllProgram,
    queryKey: ["getAllProgram"],
  });

  return (
    <div>
      <Select
        register={register}
        label="Program"
        options={data?.data?.programs}
      />
    </div>
  );
};

export default ProgramSelect;
