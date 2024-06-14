import * as yup from "yup";
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";
// components
import { Form } from "@components/Form";
import { Actions } from "@components/actions/actions";
import { FieldComponent } from "@components/FieldComponent";

export const ForgotPasswordForm = () => {
  const [loadingIcon, setLoadingIcon] = useState(false);

  const handleSubmit = async (data: { email: string }) => {
    console.log("data", data);
  };

  return (
    <Form
      id="forgot-password"
      onSubmit={handleSubmit}
      schema={yup.object({
        email: yup.string().email("Email invalido").required(),
      })}
    >
      <Typography
        variant="body1"
        color="secondary"
        sx={{ paddingBottom: "2rem" }}
      >
        Usted ha solicitado recuperar su contraseña. Será notificado por correo
        electrónico.
      </Typography>
      <FieldComponent
        label="Correo electrónico"
        name="email"
        endIcon={
          <IconButton>
            <EmailOutlined />
          </IconButton>
        }
      />
      <Box sx={{ padding: "1.5rem 0" }}>
        <Actions label="Confirmar" loading={loadingIcon} />
      </Box>
    </Form>
  );
};
