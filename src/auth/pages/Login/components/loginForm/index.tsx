import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import * as yup from "yup";

// import { useAuth } from "@auth/context/AuthProvider";
import { Actions } from "@components/actions/actions";
import { Form, useSnackbarUtils } from "@components/index";

import { Fields } from "./components/Index";
import { LoginDto } from "./Interfaces";

export const LoginForm = () => {
  // const { login: loginContext } = useAuth();
  const [loadingIcon, setLoadingIcon] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { showSnackbar } = useSnackbarUtils();

  useEffect(() => {
    if (error) {
      showSnackbar(error.message, "error");
    }
  }, [error]);

  useEffect(() => {
    if (loading) {
      setLoadingIcon(loading);
    }
  }, [loading]);

  const handleSubmit = async (data: LoginDto) => {
    console.log("data submit", data);

    // loginContext(data);
    // navigate(lastPath, { replace: true });
  };
  return (
    <>
      <Typography color={"#fff"}>
        <h2>Iniciar Sesión</h2>
      </Typography>
      {/* login */}
      <Form<LoginDto>
        id="login-form"
        onSubmit={handleSubmit}
        schema={yup.object({
          email: yup
            .string()
            .email("Email invalido")
            .required("Este campo es requerido"),
          password: yup
            .string()
            .min(8, "Minimo 8 caracteres")
            .required("Este campo es requerido"),
        })}
      >
        <Fields />
        <Box sx={{ padding: "1.5rem 0" }}>
          <Actions label="Iniciar sesión" loading={loadingIcon} />
        </Box>
      </Form>
    </>
  );
};
