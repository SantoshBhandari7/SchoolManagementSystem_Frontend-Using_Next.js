"use client";

import { getMe, login, Logout, signup } from "@/api/auth.api";
import { getStudentProfile } from "@/api/student.api";
import { getTeacherProfile } from "@/api/teacher.api";
import AuthContext from "@/context/auth.context";
import { Role } from "@/types/enum.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AuthProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Get the authenticated user for ADMIN, STUDENT, and TEACHER
  const { data: authResponse, isLoading: isAuthLoading } = useQuery({
    queryKey: ["auth-profile"],
    queryFn: getMe,
    retry: false,
  });

  const user = authResponse?.data ?? null;

  const { data: profileResponse, isLoading: isProfileLoading } = useQuery({
    queryKey: ["profile", user?._id, user?.role],
    queryFn: async () => {
      if (user?.role === Role.STUDENT) {
        return getStudentProfile();
      }

      if (user?.role === Role.TEACHER) {
        return getTeacherProfile();
      }

      return null;
    },
    enabled: user?.role === Role.STUDENT || user?.role === Role.TEACHER,
    retry: false,
    refetchOnWindowFocus: true,
    refetchInterval: 5 * 60 * 1000,
  });

  // Logout
  const { mutate: logout, isPending: isLogoutPending } = useMutation({
    mutationFn: Logout,
    onSuccess: async (response) => {
      queryClient.clear();
      toast.success(response?.message ?? "Logout successful");
      router.replace("/");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Logout failed");
    },
  });

  // Login
  const { mutate: loginMutation, isPending: isLoginPending } = useMutation({
    mutationFn: login,
    onSuccess: async (response) => {
      const loggedInUser = response?.data?.data;
      const role = loggedInUser?.role;

      if (!loggedInUser || !role) {
        toast.error("User information not found in login response");
        return;
      }

      queryClient.setQueryData(["auth-profile"], {
        message: "Login successful",
        data: loggedInUser,
      });

      toast.success(response?.message ?? "Login successful");

      if (role === Role.ADMIN) {
        router.replace("/admin");
      } else if (role === Role.STUDENT) {
        router.replace("/student");
      } else if (role === Role.TEACHER) {
        router.replace("/teacher");
      } else {
        toast.error(`Invalid user role: ${String(role)}`);
      }
    },
    onError: (error) => {
      toast.error(error?.message ?? "Login failed");
    },
  });

  // Signup
  const { mutate: signupMutation, isPending: isRegisterPending } = useMutation({
    mutationFn: signup,
    onSuccess: (response) => {
      toast.success(response?.message ?? "Registration successful");
      router.replace("/login");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Registration failed");
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading:
          isAuthLoading ||
          isProfileLoading ||
          isLogoutPending ||
          isLoginPending ||
          isRegisterPending,
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
