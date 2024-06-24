import { User } from "@interfaces/User";

export interface Action {
  type: "login" | "logout" | "setUser";
  payload: User | null;
}

export type StateType = {
  user: User | null;
  isActive: boolean;
};

export const authReducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "login":
      return { isActive: true, user: action.payload };
    case "logout":
      return { isActive: false, user: null };
    case "setUser":
      return { isActive: true, user: action.payload };
    default:
      return state;
  }
};
