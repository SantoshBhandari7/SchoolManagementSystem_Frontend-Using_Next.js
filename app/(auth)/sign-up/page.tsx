import SignupForm from "@/components/common/form/sign-up";
import React from "react";

const SignUpPage = () => {
  return (
    <main>
      <section>
        <div>
          <h1>Signup Form</h1>
          <p>Fill-up ths form to create account</p>
        </div>
        <SignupForm />
      </section>
    </main>
  );
};

export default SignUpPage;
