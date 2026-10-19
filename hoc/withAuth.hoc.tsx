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
      if (isLoading) {
        return;
      }

      if (!isLoading && !user) {
        toast.error("login required");
        router.replace("login");
      }

      if (user && !roles.includes(user.role)) {
        router.replace("/");
        toast.error("Unauthorized. you cannot access this page");
      }
    }, [router, user, isLoading]);

    if (isLoading) {
      return <Loading />;
    }

    if (!user) {
      return null;
    }
    if (user && !roles.includes(user.role)) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
