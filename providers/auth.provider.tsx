"use client";
import { login, Logout, signup } from "@/api/auth.api";
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

  const { mutate: loginMutation, isPending: isLoginPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      toast.success(response?.message ?? "login success"),
        queryClient.invalidateQueries({
          queryKey: ["auth-profile"],
        });

      const role = response.data?.data?.role;

      if (role === Role.STUDENT) {
        router.replace("/student");
      } else if (role === Role.TEACHER) {
        router.replace("/teacher");
      } else if (role === Role.ADMIN) {
        router.replace("/admin");
      } else {
        toast.error("Invalid user role");
      }
    },
    onError: (error) => {
      toast.error(error?.message ?? "Login failed");
    },
  });

  const { mutate: signupMutation, isPending: isRegisterPending } = useMutation({
    mutationFn: signup,
    onSuccess: (response) => {
      toast.success(response?.message ?? "register success"),
        queryClient.invalidateQueries({
          queryKey: ["auth-profile"],
        });
      router.replace("/login");
    },
    onError: (error) => {
      toast.error(error?.message ?? "register failed");
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: data?.data,
        isLoading:
          !!isLoading || !!isPending || !!isLoginPending || !!isRegisterPending,
        login: loginMutation,
        logout,
        signup: signupMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
