import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";

interface Option {
  _id: string;
  name?: string;
  user?: {
    _id: string;
    name: string;
  };
  classname?: string;
  subjectname?: string;
}

interface IProps {
  label: string;
  // value: string;
  options: Option[];
  disabled?: string;
  required?: boolean;
  error?: string;
  register: UseFormRegisterReturn;
}

export const Select = ({
  label,

  options = [],
  error,
  register,
  required = false,
}: IProps) => {
  return (
    <div className="flex gap-3 flex-col sm:flex-col md:flex-row">
      <div className="text-md font-semibold tracking-wide">
        <label>{label}</label>
        {required && <FaStarOfLife className="text-red-500 text-[80px]" />}
      </div>

      <select {...register}>
        <option
          value=""
          className="border border-gray-400 rounded-md text-black"
        >
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={`${option._id}-${index}`} value={option._id}>
            {option.classname || option.name || option.user?.name}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
