import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form className="flex flex-col gap-5">
      <input
        type="email"
        placeholder="jodn@gmail.com"
        id="email"
        name="email"
      />

      <input
        type="password"
        placeholder="enter your password"
        required
        name="password"
        id="password"
      />
    </form>
  );
};

export default LoginForm;
