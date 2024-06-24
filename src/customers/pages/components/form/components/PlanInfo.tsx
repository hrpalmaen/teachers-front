import { Grid } from "@mui/material";
import { ICustomer } from "@/customers/interface";
import { SwithComponent } from "@components/SwithComponent";
import { FieldComponent } from "@components/FieldComponent";
import { DateFieldComponent } from "@components";

interface PlanInfoProps {
  defaultValues?: ICustomer;
}

export const PlanInfoCustomer = ({ defaultValues }: PlanInfoProps) => {
  return (
    <Grid container spacing={2}>
      {/* licenses */}
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <FieldComponent
          label="# de estudiantes *"
          name="licenses"
          defaultValue={defaultValues?.licenses}
        />
      </Grid>
      {/* expirationDate */}
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <DateFieldComponent
          label="Fecha de expiración plan"
          name="expirationDate"
          defaultValue={defaultValues?.expirationDate}
        />
      </Grid>
      {/* status */}
      <Grid item xs={12} sm={6}>
        <SwithComponent label="Institución" name="isActive" />
      </Grid>
    </Grid>
  );
};
