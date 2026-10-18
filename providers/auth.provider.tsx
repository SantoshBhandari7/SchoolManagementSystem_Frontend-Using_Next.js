"use client";
import { Logout } from "@/api/auth.api";
import { getStudentProfile } from "@/api/student.api";
import { getTeacherProfile } from "@/api/teacher.api";
import AuthContext from "@/context/auth.context";
import useAuth from "@/hook/auth.hook";
import { Role } from "@/types/enum.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AuthProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const router = useRouter();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["profile", user?._id, user?.role],
    queryFn: async () => {
      if (user?.role === Role.STUDENT) {
        return getStudentProfile();
      }

      if (user?.role === Role.TEACHER) {
        return getTeacherProfile();
      }

      throw new Error("Invalid user role");
    },
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
    retry: false,
    enabled: user?.role === Role.STUDENT || user?.role === Role.TEACHER,
  });

  const { mutate: logout, isPending } = useMutation({
    mutationFn: Logout,
    onSuccess: (response) => {
      toast.success(response?.message ?? "logout success");
      queryClient.invalidateQueries({
        queryKey: ["auth-profiles"],
      });
      queryClient.setQueryData(["auth-profiles"], null);
      router.replace("/");
    },
    onError: (error) => {
      toast.error(error?.message ?? "logout failed");
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: data?.data,
        isLoading: !!isLoading || !!isPending,
        logout,
        register: () => {},
        login: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
