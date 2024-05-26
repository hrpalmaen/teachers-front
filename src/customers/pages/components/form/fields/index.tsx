import { Grid } from "@mui/material";
import { FieldComponent } from "@components/FieldComponent";
import { SelectComponent } from "@components/SelectComponent";
import { ICustomer } from "@/customers/interface";

type FieldsCompanyProps = {
  defaultValues?: ICustomer;
};

export const FieldsCompany = ({ defaultValues }: FieldsCompanyProps) => {
  const users = [
    { id: "1", name: "pepito pere" },
    { id: "2", name: "juanito" },
    { id: "3", name: "rintingo" },
  ];

  const qualifications = [
    { id: "15", name: "1-5" },
    { id: "110", name: "1-10" },
  ];

  const grades = [
    { id: "0", name: "Pre-escolar" },
    { id: "1", name: "Primero" },
    { id: "2", name: "Segundo" },
    { id: "3", name: "Tercero" },
    { id: "4", name: "Cuarto" },
    { id: "5", name: "Quinto" },
    { id: "6", name: "Sexto" },
    { id: "7", name: "Septimo" },
    { id: "8", name: "Octavo" },
    { id: "9", name: "Noveno" },
    { id: "10", name: "Decimo" },
    { id: "11", name: "Once" },
  ];
  return (
    <Grid container spacing={2}>
      {/* name */}
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <FieldComponent
          label="Nombre completo de la institución educativa *"
          name="name"
          defaultValue={defaultValues?.name}
        />
      </Grid>
      {/* nickname */}
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <FieldComponent
          label="Nombre corto o siglas *"
          name="nickname"
          defaultValue={defaultValues?.nickname}
        />
      </Grid>
      {/* nit */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <FieldComponent
          label="Nit *"
          name="nit"
          defaultValue={defaultValues?.nit}
        />
      </Grid>
      {/* rectorId */}
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <SelectComponent
          label="Rector o representante legal *"
          name="rectorId"
          data={users}
          fieldKey="id"
          fieldValue="name"
          defaultValue={defaultValues?.rectorId || ""}
        />
      </Grid>
      {/* rulesQualifications */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <SelectComponent
          label="Escala de calificación *"
          name="rulesQualifications"
          data={qualifications}
          fieldKey="id"
          fieldValue="name"
          defaultValue={defaultValues?.rulesQualifications || ""}
        />
      </Grid>
      {/* quantityGrades */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <SelectComponent
          label="Nivel de escolaridad *"
          name="quantityGrades"
          data={grades}
          fieldKey="id"
          fieldValue="name"
          defaultValue={defaultValues?.quantityGrades || ""}
          multiple={true}
        />
      </Grid>
    </Grid>
  );
};
