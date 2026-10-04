"use client";
import Input from "@/components/common/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
    mode: "all",
  });
  return (
    <form className="flex flex-col gap-3">
      <Input
        name="name"
        id="name"
        placeholder="john doe"
        type="text"
        label="Name"
        register={register}
        required
      />
      <Input
        name="email"
        id="email"
        placeholder="john@gmail.com"
        type="email"
        label="Email"
        register={register}
        required
      />

      <Input
        name="subject"
        id="subject"
        register={register}
        label="Subject"
        type="text"
        placeholder="enter subject"
        required
      />

      <Input
        register={register}
        name="message"
        id="message"
        type="text"
        placeholder="message about you thoughts"
        label="Message"
        required
      />
    </form>
  );
};

export default ContactForm;
