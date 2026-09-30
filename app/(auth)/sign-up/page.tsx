"use client";
import SignupForm from "@/components/common/form/sign-up";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();
const SignUpPage = () => {
  return (
    <main>
      <section>
        <div>
          <h1>Signup Form</h1>
          <p>Fill-up ths form to create account</p>
        </div>

        <QueryClientProvider client={queryClient}>
          <SignupForm />
        </QueryClientProvider>
      </section>
    </main>
  );
};

export default SignUpPage;
