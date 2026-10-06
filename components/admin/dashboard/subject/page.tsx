"use client";
import { getStudent } from "@/api/student.api";
import Loading from "@/components/common/ui/loading";
import { IStudent } from "@/types/student.types";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef, useReactTable } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DataTable from "../../table/data.table";
import { ISubjects } from "@/types/subject.types";
import { getAllSubjects } from "@/api/subject.api";

const SubjectTable = () => {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryFn: getAllSubjects,
    queryKey: ["get-all-subjects"],
  });

  const subjects: ISubjects[] = data?.data ?? [];
  const columns: ColumnDef<ISubjects>[] = [
    {
      accessorKey: "subjectname",
      header: "Subject Name",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.subjectname}
        </span>
      ),
    },
    {
      accessorKey: "credithour",
      header: "Credit Hour",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.credithour}
        </span>
      ),
    },
    {
      accessorKey: "teacher",
      header: "Teacher Name",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.subjectname}
        </span>
      ),
    },

    {
      accessorKey: "program",
      header: "Program",
      cell: ({ row }) => (
        <span className="block max-w-35  truncate  text-gray-800 sm:max-w-50">
          {row.original.program}
        </span>
      ),
    },
    {
      accessorKey: "class",
      header: " Class",
      cell: ({ row }) => (
        <span className="block max-w-45 py-2  line-clamp-2 text-xs text-gray-800 sm:max-w-50">
          {row.original.class}
        </span>
      ),
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => {
        const subject = row.original;

        return (
          <div className="flex min-w-max gap-2">
            <Link
              href={`/admin/programs/${subject._id}/update`}
              className="rounded-md bg-blue-200 px-2.5 py-1.5 text-xs font-bold text-black transition hover:bg-blue-400 sm:px-3 sm:py-2 sm:text-sm "
            >
              Edit
            </Link>
            <button
              onClick={() => {
                console.log("delete:", subject._id);
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
          Failed to load Subjects
        </p>
      </div>
    );
  }

  return (
    <section className="w-full min-w-0">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Recent Subjects
        </h1>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Recently Added Subjects
        </p>
      </div>
      <div className="w-full min-w-0 overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="w-full overflow-x-auto">
          <div className="min-w-225">
            <DataTable columns={columns} data={subjects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectTable;
