import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { HomePage } from "../../home/pages/Home";

import { Schools } from "../../customers/pages";
import { InformationUsers } from "../../users/pages";

import { ListJsonRoutes } from "../../rips/pages/jsonRips/routes/ListJsonRoutes";
import { PackagesRips } from "../../rips/pages/packagesRips";

import { useAuth } from "@auth/context";
import { Analytics } from "../../analytics/pages";
import { TypeNotes } from "../../rips/pages/typeNotasRips";
import { ListNotasFevRoutes } from "../../rips/pages/typeNotasRips/routes/ListJsonRoutes";
import { UploadRips } from "../../rips/pages/uploadFiles/UploadRips.rips";

export const AppRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (
    user?.rol.name === "user" &&
    (location.pathname.includes("/escuelas") ||
      location.pathname.includes("/usuarios"))
  ) {
    return <Navigate to="/" />;
  }

  if (user?.rol.name === "admin" && location.pathname.includes("/escuelas")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usuarios" element={<InformationUsers />} />
        <Route path="/escuelas" element={<Schools />} />

        <Route path="/listadocarga" element={<PackagesRips />} />
        <Route path="/listadojson/*" element={<ListJsonRoutes />} />
        <Route path="/listadoNotas/*" element={<ListNotasFevRoutes />} />
        <Route path="/cargaarchivos" element={<UploadRips />} />
        <Route path="/notas" element={<TypeNotes />} />
        <Route path="/analiticas" element={<Analytics />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
