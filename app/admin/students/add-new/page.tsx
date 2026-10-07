import StudentForm from "@/components/admin/form/student.form";
import React from "react";

const CreateStudent = () => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center px-4 py-6 sm:px-6 lg:px-8">
      <section className="w-full max-w-3xl flex flex-col px-4 py-6 sm:px-6 sm:py-8 border border-gray-400 rounded-xl shadow-sm bg-white">
        <div className="flex flex-col text-center mb-4 gap-1">
          <h1 className="text-blue-500 text-xl font-bold tracking-wide">
            Student Form
          </h1>
          <p className="text-sm text-gray-500">
            Fill up this form to add new student
          </p>
        </div>
        <StudentForm />
      </section>
    </main>
  );
};

export default CreateStudent;
