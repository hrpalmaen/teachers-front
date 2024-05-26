// AppRouter.js
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/Login";
import { AppRoutes } from "./routes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <AppRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
