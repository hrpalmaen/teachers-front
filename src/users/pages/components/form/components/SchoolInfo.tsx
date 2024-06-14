import { SelectComponent } from "@components/SelectComponent";
import { Grid } from "@mui/material";
import { IUser } from "../Interfaces";
import { SwithComponent } from "@components/SwithComponent";

interface SchoolInfoProps {
  defaultValues?: IUser;
}

export const SchoolInfoUser = ({ defaultValues }: SchoolInfoProps) => {
  const Grades = [
    { id: "0", name: "Pre-escolar" },
    { id: "1", name: "Mujer" },
    { id: "2", name: "Otro" },
    { id: "3", name: "Otro" },
    { id: "4", name: "Otro" },
    { id: "5", name: "Otro" },
    { id: "6", name: "Otro" },
    { id: "7", name: "Otro" },
    { id: "8", name: "Otro" },
    { id: "9", name: "Otro" },
    { id: "10", name: "Otro" },
    { id: "11", name: "Otro" },
  ];

  return (
    <Grid container spacing={2}>
      {/* gradeId */}
      <Grid item xs={12} sm={6}>
        <SelectComponent
          label="Grado"
          name="gradeId"
          data={Grades}
          fieldKey="id"
          fieldValue="name"
          defaultValue={defaultValues?.grade || ""}
        />
      </Grid>
      {/* status */}
      <Grid item xs={12} sm={6}>
        <SwithComponent label={"Usuario"} name="isActive" />
      </Grid>
    </Grid>
  );
};
