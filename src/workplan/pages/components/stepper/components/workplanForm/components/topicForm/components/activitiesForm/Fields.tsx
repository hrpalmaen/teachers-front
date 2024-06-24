import { Grid } from "@mui/material";
import { FieldComponent } from "@components/FieldComponent";
import { IActivityForm } from "../../../../Interfaces";

type ActivityFieldsProps = {
  label: string;
  defaultValues?: IActivityForm;
};

export const ActivityFields = ({
  defaultValues,
  label = "Actividad",
}: ActivityFieldsProps) => {
  return (
    <Grid container spacing={2}>
      {/* activity */}
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <FieldComponent
          label={label}
          name="activity"
          defaultValue={defaultValues?.activity}
        />
      </Grid>
      {/* percentage */}
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <FieldComponent
          label="Porcentaje %"
          name="percentage"
          type="number"
          defaultValue={defaultValues?.percentage}
        />
      </Grid>
    </Grid>
  );
};
