import { useState } from "react";
import { Box } from "@mui/material";
// components
import { PageTitle } from "@components/PageTitle";
import { CreateCompanyModal, ListCompanies } from "./components";

export const Schools = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      {/* header */}
      <PageTitle
        title={"Instituciones Educativas"}
        functions={[
          {
            label: "Registrar institución educativa",
            onClick: handleOpenModal,
          },
        ]}
      />
      <br />
      {/* CreateCompany */}
      <CreateCompanyModal open={isModalOpen} onClose={handleCloseModal} />
      {/* ListCompanies */}
      <ListCompanies />
    </Box>
  );
};
