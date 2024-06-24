import { Box } from "@mui/material";
import { Footer } from "@components/Layout/Footer/Index";

import { PublicRoutes } from "./Routes";

export const AppPublicRoutes = () => {
  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      sx={{ backgroundColor: "primary.main" }}
    >
      <Box>
        <PublicRoutes />
      </Box>
      <Footer />
    </Box>
  );
};
