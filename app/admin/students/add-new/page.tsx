import StudentForm from "@/components/admin/form/student.form";
import React from "react";

const CreateStudent = () => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center  ">
      <section className="flex  flex-col px-6 py-8 w-150 border rounded-xl shadow-sm ">
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
