"use client";
import SignupForm from "@/components/common/form/sign-up";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { RiDeleteBackLine, RiSkipBackLine } from "react-icons/ri";

const queryClient = new QueryClient();
const SignUpPage = () => {
  return (
    <main className="w-full min-h-screen p-3 flex items-center justify-center">
      <section className="flex flex-col gap-3 border shadow-background shadow-2xl border-gray-600 rounded-md w-90 p-4 ">
        <div className="flex flex-col gap-0.5 text-center">
          <h1 className="text-blue-500 tracking-wider text-xl font-bold">
            Signup Form
          </h1>
          <p className="text-gray-500">Fill-up this form to create account</p>
        </div>

        <QueryClientProvider client={queryClient}>
          <SignupForm />
        </QueryClientProvider>

        <div className="">
          <p className="flex gap-0.5 items-center justify-center px-3">
            you have an already account?
            <span className="text-blue-500 font-semibold">
              <Link href={"/login"}>Login</Link>
            </span>
          </p>
          <Link
            href={"/home"}
            className="flex justify-center items-center gap-0.5 text-purple-400 font-semibold"
          >
            <RiSkipBackLine /> Back to home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
