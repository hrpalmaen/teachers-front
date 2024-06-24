import { Box } from "@mui/material";

import { Layout, Footer } from "@components/Layout";
import { PrivateRoutes } from "./Routes";

export const AppPrivateRoutes = () => {
  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      sx={{ backgroundColor: "primary.main" }}
    >
      <Layout />
      <Box>
        <PrivateRoutes />
      </Box>
      <Footer />
    </Box>
  );
};
