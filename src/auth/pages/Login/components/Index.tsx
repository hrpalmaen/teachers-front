import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// components
import { ForgotPasswordForm } from "./forgotPasswordForm";
import { LoginForm } from "./loginForm/Index";

export const FormBody = () => {
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);

  const handleForgotPasswordClick = () => setForgotPassword(true);
  const handleGoBackToLoginClick = () => setForgotPassword(false);

  return (
    <Box sx={{ textAlign: "center", width: "80%" }}>
      {!forgotPassword ? (
        //  login form
        <Box>
          <LoginForm />
          {/* password recovery */}
          <Box
            onClick={handleForgotPasswordClick}
            sx={{
              color: "secondary.light",
              cursor: "pointer",
              transition: "0.3s",
              fontSize: ".9em",
              ...styles.hoverStep,
            }}
          >
            Olvidé la contraseña
          </Box>
        </Box>
      ) : (
        //  recovery password form
        <Box>
          <ForgotPasswordForm />
          {/* return login */}
          <Box
            onClick={handleGoBackToLoginClick}
            sx={{
              color: "secondary.main",
              cursor: "pointer",
              ...styles.hoverStep,
            }}
          >
            <IconButton onClick={handleGoBackToLoginClick}>
              <ArrowBackIcon />
            </IconButton>
            Volver al inicio sesión
          </Box>
        </Box>
      )}
    </Box>
  );
};

const styles = {
  hoverStep: {
    ":hover": {
      textDecoration: "underline",
      color: "secondary.main",
    },
  },
};
