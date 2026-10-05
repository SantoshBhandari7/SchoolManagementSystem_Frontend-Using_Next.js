"use client";
import { createContact } from "@/api/contact.api";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { contactSchema } from "@/schema/contact.schema";
import { TContact } from "@/types/contact.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TContact>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
    resolver: yupResolver(contactSchema),
    mode: "all",
  });

  const { mutate } = useMutation({
    mutationFn: createContact,
    onSuccess: (response) => {
      console.log("mutation success on contact form");
    },
    onError: (error) => {
      console.log("mutation error on contact form");
    },
  });

  const onSubmit = (data: TContact) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Input
        name="name"
        id="name"
        placeholder="john doe"
        type="text"
        label="Name"
        register={register}
        required
        error={errors?.name?.message}
      />
      <Input
        name="email"
        id="email"
        placeholder="john@gmail.com"
        type="email"
        label="Email"
        register={register}
        required
        error={errors?.email?.message}
      />

      <Input
        name="subject"
        id="subject"
        register={register}
        label="Subject"
        type="text"
        placeholder="enter subject"
        required
        error={errors?.subject?.message}
      />

      <Input
        register={register}
        name="message"
        id="message"
        type="text"
        placeholder="message about you thoughts"
        label="Message"
        required
        error={errors?.message?.message}
      />

      <div className="mt-2">
        <Button type="submit" label="Message" />
      </div>
    </form>
  );
};

export default ContactForm;
