import React from "react";
import Input from "../ui/input";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {} = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    mode: "all",
  });

  return (
    <form>
      <Input
        name="name"
        id="name"
        type="text"
        required
        placeholder="john doe"
        label="Name"
      />
      <Input
        name="email"
        id="email"
        type="email"
        required
        placeholder="john@gmail.com"
        label="Email"
      />

      <Input
        name="password"
        id="password"
        placeholder="enter your password"
        label="Password"
        required
        type="password"
      />

      <Input
        name="cnfPassword"
        required
        id="cnfPass"
        label="Confirm Password"
        type="password"
        placeholder="re-enter your password"
      />
      <Input
        name="phone"
        type="text"
        placeholder="9802912302"
        label="Phone"
        id="phone"
      />
    </form>
  );
};

export default SignupForm;
