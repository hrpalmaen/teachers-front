import { Box } from "@mui/material";

import { PageTitle } from "@components/PageTitle";
import { ListUsers, UserModal } from "./components";

export const InformationUsers = () => {
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
          title={"Usuarios"}
          functions={[
            {
              label: "Registrar usuario",
              onClick: handleOpenModal,
              // disabled: licenses && licenses.avalible > 0 ? false : true,
            },
          ]}
        />
      </Box>
      <ListUsers />
      <UserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};
