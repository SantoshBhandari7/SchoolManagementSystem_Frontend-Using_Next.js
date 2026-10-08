"use client";
import Loading from "@/components/common/ui/loading";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import React from "react";
import { getTeacherProfile } from "@/api/teacher.api";
import { ITeachers } from "@/types/teacher.types";
import DataTable from "../common/table/data.table";
import { useParams } from "next/navigation";

const TeacherDataTable = () => {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryKey: ["getTeacherProfile"],
    queryFn: getTeacherProfile,
  });

  const Teacher: ITeachers = data?.data?.teacher ?? [];
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
                alt="user.name"
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
  ];

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="flex min-h-75 w-full items-center justify-center">
        <p className="text-sm text-red-500 sm:text-base">
          Failed to load about you
        </p>
      </div>
    );
  }

  return (
    <section className="w-full min-w-0">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
          My Personal Information
        </h1>
      </div>
      <div className="w-full min-w-0 overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="w-full overflow-x-auto">
          <div className="min-w-225">
            <DataTable columns={columns} data={Teacher} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDataTable;
