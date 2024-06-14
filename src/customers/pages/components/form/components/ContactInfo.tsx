import { FieldComponent } from "@components/FieldComponent";
import { Grid } from "@mui/material";
import { ICustomer } from "@/customers/interface";

interface ContactInfoProps {
  defaultValues?: ICustomer;
}

export const ContactInfo = ({ defaultValues }: ContactInfoProps) => {
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
