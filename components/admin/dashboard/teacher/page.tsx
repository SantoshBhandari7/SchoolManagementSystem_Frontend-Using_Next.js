"use client";
import Loading from "@/components/common/ui/loading";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef, useReactTable } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DataTable from "../../table/data.table";
import { getTeacher } from "@/api/teacher.api";
import { ITeachers } from "@/types/teacher.types";

const TeacherTable = () => {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryFn: getTeacher,
    queryKey: ["getTeacher"],
  });

  const teachers: ITeachers[] = data?.data ?? [];
  const columns: ColumnDef<ITeachers>[] = [
    {
      accessorKey: "profile_image",
      header: "Profile-Image",
      cell: ({ row }) => {
        const teacher = row.original;

        return (
          <div>
            {teacher.profile_image?.path ? (
              <Image
                src={teacher.profile_image.path}
                alt="teacher.name"
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
      header: " teacher Name",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.name}
        </span>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.email}
        </span>
      ),
    },
    {
      accessorKey: "experience",
      header: " Experience",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.experience}
        </span>
      ),
    },
    {
      accessorKey: "subject",
      header: " Subject",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.subject}
        </span>
      ),
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => {
        const teacher = row.original;

        return (
          <div>
            <Link
              href={`/admin/teachers/${teacher._id}/update`}
              className="rounded-md bg-blue-200 px-2.5 py-1.5 text-xs font-bold text-black transition hover:bg-blue-400 sm:px-3 sm:py-2 sm:text-sm "
            >
              Edit
            </Link>
            <button
              onClick={() => {
                console.log("delete:", teacher._id);
              }}
              className="rounded-md bg-red-100 px-2.5 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-300 sm:px-3 sm:py-2 sm:text-sm"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="flex min-h-75 w-full items-center justify-center">
        <p className="text-sm text-red-500 sm:text-base">
          Failed to load teachers
        </p>
      </div>
    );
  }

  return (
    <section className="w-full min-w-0">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Recent teachers
        </h1>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Recently Hired teachers
        </p>
      </div>
      <div className="w-full min-w-0 overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="w-full overflow-x-auto">
          <div className="min-w-225">
            <DataTable columns={columns} data={teachers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherTable;
