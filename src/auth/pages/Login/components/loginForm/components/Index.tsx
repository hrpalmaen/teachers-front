import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { FieldComponent } from "@components/FieldComponent";

export const Fields = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* email */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <FieldComponent
          label="Correo electrónico"
          name="email"
          endIcon={
            <IconButton>
              <EmailOutlined />
            </IconButton>
          }
        />
      </Grid>
      {/* password */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <FieldComponent
          type={showPassword ? "text" : "password"}
          label="Contraseña"
          name="password"
          endIcon={
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          }
        />
      </Grid>
    </>
  );
};
