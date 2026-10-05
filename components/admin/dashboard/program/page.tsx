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
import { getAllProgram } from "@/api/program.api";
import { IProgram } from "@/types/program.types";

const ProgramTable = () => {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryFn: getAllProgram,
    queryKey: ["get-all-program"],
  });

  const programs: IProgram[] = data?.data ?? [];
  const columns: ColumnDef<IProgram>[] = [
    {
      accessorKey: "name",
      header: " Program Name",
      cell: ({ row }) => (
        <span className="block max-w-35 truncate font-semibold text-gray-800 sm:max-w-50">
          {row.original.name}
        </span>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <span className="block max-w-45 text-xs py-2 overflow-hidden  text-gray-700 line-clamp-3 sm:max-w-70">
          {row.original.description}
        </span>
      ),
    },
    {
      accessorKey: "duration",
      header: " Duration",
      cell: ({ row }) => (
        <span className="block max-w-35  truncate  text-gray-800 sm:max-w-50">
          {row.original.duration}
        </span>
      ),
    },
    {
      accessorKey: "eligibility",
      header: " Eligibility",
      cell: ({ row }) => (
        <span className="block max-w-45 py-2  line-clamp-2 text-xs text-gray-800 sm:max-w-50">
          {row.original.eligibility}
        </span>
      ),
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => {
        const program = row.original;

        return (
          <div className="flex min-w-max gap-2">
            <Link
              href={`/admin/programs/${program._id}/update`}
              className="rounded-md bg-blue-200 px-2.5 py-1.5 text-xs font-bold text-black transition hover:bg-blue-400 sm:px-3 sm:py-2 sm:text-sm "
            >
              Edit
            </Link>
            <button
              onClick={() => {
                console.log("delete:", program._id);
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
          Failed to load Programs
        </p>
      </div>
    );
  }

  return (
    <section className="w-full min-w-0">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Recent Programs
        </h1>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Recently Added programs
        </p>
      </div>
      <div className="w-full min-w-0 overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="w-full overflow-x-auto">
          <div className="min-w-225">
            <DataTable columns={columns} data={programs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTable;
