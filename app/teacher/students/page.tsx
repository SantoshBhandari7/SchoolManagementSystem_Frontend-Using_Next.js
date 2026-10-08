"use client";
import { getStudent } from "@/api/student.api";
import DataTable from "@/components/common/table/data.table";
import Loading from "@/components/common/ui/loading";
import { IStudent } from "@/types/student.types";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef, useReactTable } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StudentSection = () => {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryFn: getStudent,
    queryKey: ["getStudent"],
  });

  const students: IStudent[] = data?.data?.students ?? [];
  const columns: ColumnDef<IStudent>[] = [
    {
      accessorKey: "profile_image",
      header: "Profile-Image",
      cell: ({ row }) => {
        const student = row.original;

        return (
          <div>
            {student.profile_image?.path ? (
              <Image
                src={student.profile_image.path}
                alt="getStudent.name"
                width={100}
                height={100}
              />
            ) : (
              <span className="text-[10px] text-gray-400 text-center">
                No Image
              </span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: " Student Name",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.user?.name}
        </span>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.user?.email}
        </span>
      ),
    },
    {
      accessorKey: "parentName",
      header: " Parent-Name",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.parentName}
        </span>
      ),
    },
    {
      accessorKey: "roll_no",
      header: " Rollno",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.roll_no}
        </span>
      ),
    },
  ];

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="flex min-h-75 w-full items-center justify-center">
        <p className="text-sm text-red-500 sm:text-base">
          Failed to load Students
        </p>
      </div>
    );
  }

  return (
    <section className="w-full min-w-0">
      <div className="mb-4">
        <h1 className="text-xl font-bold px-4 py-3 text-gray-800 sm:text-2xl">
          Recent Students
        </h1>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Recently Admitted Students
        </p>
      </div>
      <div className="w-full min-w-0 overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="w-full overflow-x-auto">
          <div className="min-w-225">
            <DataTable columns={columns} data={students} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
