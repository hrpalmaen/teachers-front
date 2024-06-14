import { FieldComponent } from "@components/FieldComponent";
import { Grid } from "@mui/material";
import { IUser } from "../Interfaces";

interface ContactInfoProps {
  defaultValues?: IUser;
}

export const ContactInfoUser = ({ defaultValues }: ContactInfoProps) => {
  return (
    <Grid container spacing={2}>
      {/* phone */}
      <Grid item xs={12} sm={6}>
        <FieldComponent
          label="Teléfono/Célular"
          name="phone"
          defaultValue={defaultValues ? defaultValues?.phone : ""}
        />
      </Grid>

      {/* email */}
      <Grid item xs={12} sm={6}>
        <FieldComponent
          label="Correo electrónico"
          name="email"
          defaultValue={defaultValues ? defaultValues?.email : ""}
        />
      </Grid>
    </Grid>
  );
};
