import { Box } from "@mui/material";
// components
import { FormBody } from "./components";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#193b58",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "30rem",
          backdropFilter: "saturate(2)",
          border: "2px solid rgba(255, 255, 255, 0.6)",
          borderRadius: "20px",
          height: "25rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormBody />
      </Box>
    </Box>
  );
};
