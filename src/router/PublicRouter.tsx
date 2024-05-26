import { useAuth } from "@auth/context";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" />;
};
