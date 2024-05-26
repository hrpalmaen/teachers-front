import { PageTitle } from "@components/PageTitle";
import { Box } from "@mui/material";
import { useState } from "react";
import { ListCompanies } from "./components";
import { CreateCompanyModal } from "./components/form/create";

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
      <Box>
        <PageTitle
          title={"Instituciones educativas"}
          functions={[
            { label: "Crear institución educativa", onClick: handleOpenModal },
          ]}
        />
      </Box>
      <CreateCompanyModal open={isModalOpen} onClose={handleCloseModal} />
      <Box>
        <ListCompanies />
      </Box>
    </Box>
  );
};
