import React from "react";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import { TSignUp } from "@/types/auth.types";
import { SignUpSchema } from "@/schema/auth.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUp>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    resolver: yupResolver(SignUpSchema),
    mode: "all",
  });

  return (
    <form>
      <Input
        name="name"
        register={register}
        id="name"
        type="text"
        required
        placeholder="john doe"
        label="Name"
        error={errors?.name?.message}
      />

      <Input
        name="email"
        register={register}
        id="email"
        type="email"
        required
        placeholder="john@gmail.com"
        label="Email"
        error={errors?.email?.message}
      />

      <Input
        register={register}
        name="password"
        id="password"
        placeholder="enter your password"
        label="Password"
        required
        type="password"
        error={errors?.password?.message}
      />

      <Input
        register={register}
        name="cnfPassword"
        required
        id="cnfPass"
        label="Confirm Password"
        type="password"
        placeholder="re-enter your password"
        error={errors?.confirmPassword?.message}
      />
      <Input
        register={register}
        name="phone"
        type="text"
        placeholder="9802912302"
        label="Phone"
        id="phone"
        error={errors?.phone?.message}
      />
    </form>
  );
};

export default SignupForm;
