import { useAuth } from "@/contexts";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, setAuthState } = useAuth();
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  // validate user in context
  const auth =
    localStorage.getItem("auth") && !user
      ? JSON.parse(localStorage.getItem("auth") || "{}")
      : {};

  return !user && !auth?.id ? <Navigate to="/login" /> : children;
};
