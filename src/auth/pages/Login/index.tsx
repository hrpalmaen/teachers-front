import { Box } from "@mui/material";
// components
import { FormBody } from "./components";
import { SectionFormComponent } from "@components/SectionFormComponent";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SectionFormComponent>
        <Box
          sx={{
            width: "30rem",
            height: "25rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormBody />
        </Box>
      </SectionFormComponent>
    </Box>
  );
};
