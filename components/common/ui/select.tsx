import { UseFormRegister } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";

interface Option {
  _id: string;
  name: string;
}

interface IProps {
  label: string;
  value: string;
  options: Option[];
  disabled?: string;
  required?: boolean;
  error?: string;
  register: UseFormRegister<any>;
}

export const Select = ({
  label,
  value,
  options = [],
  error,
  register,
  required = false,
}: IProps) => {
  return (
    <div className="flex gap-3">
      <div className="text-lg font-bold tracking-wide">
        <label>{label}</label>
        {required && <FaStarOfLife className="text-red-500 text-[80px]" />}
      </div>

      <select {...register} onChange={() => {}}>
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={`${option._id}-${index}`} value={option._id}>
            {" "}
            {option.name}{" "}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
