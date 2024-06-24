import { User } from "@interfaces/User";
import { Dispatch, createContext } from "react";
import { Action } from ".";

type AuthContextProps = {
  login: (user: User) => void;
  logout: () => void;
  user: User | null;
  setAuthState: Dispatch<Action>;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
