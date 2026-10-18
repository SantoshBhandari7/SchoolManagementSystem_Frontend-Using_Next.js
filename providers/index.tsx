import AuthProvider from "./auth.provider";
import QueryProvider from "./react-query.provider";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <QueryProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </QueryProvider>;
};

export default Providers;
