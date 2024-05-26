import { useAuth } from "@auth/context";
import CircularProgress from "@mui/material/CircularProgress";
import { useUserById } from "@services/user";
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
  const { data, error, loading } = useUserById(auth?.id);

  if (error && !user) {
    // console.log("error ******", error);
  }

  if (loading) {
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "45%",
        }}
      />
    );
  }

  if (data) {
    setAuthState({ type: "setUser", payload: data });
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "45%",
        }}
      />
    );
  }
  return !user && !auth?.id ? <Navigate to="/login" /> : children;
};
