import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "@/home";

import { Schools } from "@/customers/pages";
import { Workplan } from "@/workplan/pages";
import { InformationUsers } from "@/users/pages";

import { Analytics } from "@/analytics/pages";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/usuarios" element={<InformationUsers />} />
      <Route path="/escuelas" element={<Schools />} />
      <Route path="/notas" element={<Workplan />} />

      {/* <Route path="/analiticas" element={<Analytics />} /> */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
