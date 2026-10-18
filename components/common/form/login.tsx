"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import Button from "../ui/button";
import { login, signup } from "@/api/auth.api";
import { TLogin, TSignUp } from "@/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/schema/auth.schema";
import AuthContext from "@/context/auth.context";

const LoginForm = () => {
  const { login, isLoading: isPending } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
    mode: "all",
  });

  const onsubmit = (data: TLogin) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-2">
      <Input
        register={register}
        name="email"
        id="email"
        placeholder="john@gmail.com"
        label="Email"
        required
        type="email"
        error={errors?.email?.message}
      />

      <Input
        register={register}
        type="password"
        placeholder="enter your password"
        required
        label="Password"
        id="password"
        name="password"
        error={errors?.password?.message}
      />

      <div className="mt-2">
        <Button type="submit" label="Login" />
      </div>
    </form>
  );
};

export default LoginForm;
