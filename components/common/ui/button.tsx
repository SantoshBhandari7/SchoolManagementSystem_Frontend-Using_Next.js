import React from "react";

interface IButton {
  label: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button = ({ label, type, disabled }: IButton) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="cursor-pointer w-full border-bs-indigo-500 py-3 rounded-md bg-blue-500 font-bold text-md disabled:cursor-not-allowed disabled:bg-gray-500"
    >
      {label}
    </button>
  );
};

export default Button;
