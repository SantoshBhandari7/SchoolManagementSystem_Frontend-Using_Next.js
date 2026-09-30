"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/input";
import { useMutation } from "@tanstack/react-query";

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

  const {} = useMutation({});

  return (
    <form className="flex flex-col gap-5">
      <Input
        register={register}
        name="email"
        id="email"
        placeholder="john@gmail.com"
        label="Email"
        required
        type="email"
      />

      <Input
        register={register}
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
