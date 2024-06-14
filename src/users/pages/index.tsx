import { useState } from "react";
import { Box } from "@mui/material";
// components
import { PageTitle } from "@components/PageTitle";
import { ListUsers, UserModal } from "./components";

export const InformationUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Box>
      {/* header */}
      <PageTitle
        title={"Usuarios"}
        functions={[
          {
            label: "Registrar usuario",
            onClick: handleOpenModal,
          },
        ]}
      />
      <br />
      {/* listUser */}
      <ListUsers />
      {/* createUser */}
      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};
