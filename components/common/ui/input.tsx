import { error } from "console";
import { register } from "module";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";

interface IInputProps {
  type: "text" | "email" | "password" | "phone" | "file";
  required?: boolean;
  name: string;
  label: string;
  placeholder: string;
  id: string;
  error?: string;
  // register: UseFormRegister<any>;
}

const Input = ({
  type,
  required,
  name,
  // register,
  label,
  id,
  placeholder,
  error,
}: IInputProps) => {
  return (
    <div className="h-full flex flex-col w-full">
      <div className="flex flex-row gap-0.5">
        <label>{label}</label>
        {required && (
          <FaStarOfLife size={10} className="text-red-500 text-[5px]" />
        )}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        // {...register(name)}
        placeholder={placeholder}
        className={`w-full border rounded-md px-2 py-1 hover:outline-1 ${error ? "border-red-500 focus:border-red-600 border-2" : "border-b-green-300 focus:border-cyan-600"}`}
      />
      <small className="text-red-600 p-0 m-0 h-2">{error}</small>
    </div>
  );
};

export default Input;
