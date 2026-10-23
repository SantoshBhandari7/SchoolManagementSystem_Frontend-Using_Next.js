"use client";

import Loading from "@/components/common/ui/loading";
import useAuth from "@/hook/auth.hook";
import { Role } from "@/types/enum.types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const withAuth = (Component: any, roles: Role[]) => {
  return function ProtectedComponent(props: any) {
    const router = useRouter();
    const { isLoading, user } = useAuth();

    useEffect(() => {
      console.log("Auth loading:", isLoading);
      console.log("Authenticated user:", user);

      if (isLoading) return;

      if (!user) {
        toast.error("Login required");
        router.replace("/login");
        return;
      }

      if (!roles.includes(user.role)) {
        toast.error("Unauthorized. You cannot access this page");
        router.replace("/");
      }
    }, [isLoading, user, router, roles]);

    if (isLoading || !user || !roles.includes(user.role)) {
      return <Loading />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
