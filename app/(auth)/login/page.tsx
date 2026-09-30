"use client";
import LoginForm from "@/components/common/form/login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { HiBackspace } from "react-icons/hi";

const queryClient = new QueryClient();
const LoginPage = () => {
  return (
    <main className="w-full min-h-screen p-3 flex items-center justify-center">
      <section className=" min-h-90 flex flex-col gap-2  ">
        <div className="flex flex-col gap-1 w-80  p-6 border border-gray-500 rounded-md justify-center  ">
          <div className="flex flex-col gap-0.5 text-center">
            <h1 className="text-lg font-bold tracking-wide text-blue-500">
              Login Form
            </h1>
            <p className="text-ts text-gray-500">Welcome back</p>
          </div>
          <QueryClientProvider client={queryClient}>
            <LoginForm />
          </QueryClientProvider>
          <Link
            href={"/forgot-password"}
            className="text-blue-400 font-serif text-center"
          >
            ForgotPassword?
          </Link>
          {/* <div>
            <p>don't have an account? </p>
            <p>Firstly contact to your college</p>
          </div> */}

          <Link
            href={"/"}
            className="flex gap-0.5 text-purple-500 justify-center items-center"
          >
            <HiBackspace />
            <p>Back to home</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
