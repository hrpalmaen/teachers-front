import { PageTitle } from "@components/PageTitle";
import { Box } from "@mui/material";

import { CreateWorkplanStepper } from "./components/stepper/Index";

export const Workplan = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        overflowY: "auto",
      }}
    >
      <PageTitle title={"Planes de estudio"} />
      <CreateWorkplanStepper />
    </Box>
  );
};
