"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/input";

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
      <Input
        name="email"
        id="email"
        placeholder="john@gmail.com"
        label="Email"
        required
        type="email"
      />

      <Input
        type="password"
        placeholder="enter your password"
        required
        label="Password"
        id="password"
        name="password"
      />
    </form>
  );
};

export default LoginForm;
