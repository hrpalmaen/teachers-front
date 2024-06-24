import { useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

import { User } from "@interfaces/User";
import { StateType, authReducer } from "./authReducer";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: StateType = { isActive: false, user: null };

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = async (userLogin: User) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        id: userLogin._id,
        token: userLogin.token,
        sessionToken: userLogin.sessionToken,
      })
    );
    dispatch({ type: "login", payload: userLogin });
  };
  const logout = async () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("path");
    dispatch({ type: "logout", payload: null });
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, login, logout, setAuthState: dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
