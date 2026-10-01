"use client";
import { getAllProgram } from "@/api/program.api";
import DataNotFound from "@/components/common/ui/data-not-found";
import Loading from "@/components/common/ui/loading";
import { IProgram } from "@/types/program.types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProgramCard from "./program.card";

const ProgramLists = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryFn: getAllProgram,
    queryKey: ["get-all-program"],
  });
  return (
    <div className="min-h-70">
      {isLoading && <Loading />}

      {!isLoading && data?.data && data?.data.length === 0 && (
        <DataNotFound message="Programs not found" />
      )}

      {!isLoading && data?.data && data?.data.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
          {data?.data?.map((program: IProgram) => (
            <ProgramCard key={program._id} program={program} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgramLists;
