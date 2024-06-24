import { Grid } from "@mui/material";

import {
  DateFieldComponent,
  FieldComponent,
  SelectComponent,
} from "@components";
import { IUser } from "../Interfaces";

interface FieldsProps {
  defaultValues?: IUser;
}
export const FieldsUser = ({ defaultValues }: FieldsProps) => {
  const DocumentType = [
    { id: "TD", name: "Tarjeta de identidad" },
    { id: "RC", name: "Registro civil" },
    { id: "CC", name: "Cédula ciudadanía" },
    { id: "CE", name: "Cédula de extranjería" },
    { id: "PA", name: "Pasaporte" },
  ];

  const Roles = [
    { id: "TCH", name: "Docente" },
    { id: "ST", name: "Estudiante" },
    { id: "AD", name: "Administrativo" },
  ];

  const GenderType = [
    { id: "H", name: "Hombre" },
    { id: "M", name: "Mujer" },
    { id: "O", name: "Otro" },
  ];

  return (
    <Grid container spacing={2}>
      {/* firstname */}
      <Grid item xs={12} sm={12}>
        <FieldComponent
          label="Nombres"
          name="firstName"
          defaultValue={defaultValues?.firstName || ""}
        />
      </Grid>
      {/* lastname */}
      <Grid item xs={12} sm={6}>
        <FieldComponent
          label="Primer Apellido"
          name="lastName"
          defaultValue={defaultValues?.lastName || ""}
        />
      </Grid>
      {/* second lastname */}
      <Grid item xs={12} sm={6}>
        <FieldComponent
          label="Segundo Apellido"
          name="secondLastName"
          defaultValue={defaultValues?.secondLastName || ""}
        />
      </Grid>
      {/* documentType */}
      <Grid item xs={12} sm={6}>
        <SelectComponent
          label="Tipo de documento"
          name="documentType"
          data={DocumentType}
          fieldKey="id"
          fieldValue="name"
          defaultValue={defaultValues?.documentType || ""}
        />
      </Grid>
      {/* document */}
      <Grid item xs={12} sm={6}>
        <FieldComponent
          label="Documento"
          name="document"
          defaultValue={defaultValues?.document || ""}
        />
      </Grid>
      {/* gender */}
      <Grid item xs={12} sm={6}>
        <SelectComponent
          label="Género"
          name="gender"
          data={GenderType}
          fieldKey="id"
          fieldValue="name"
          defaultValue={defaultValues?.gender || ""}
        />
      </Grid>
      {/* birthdate */}
      <Grid item xs={12} sm={6}>
        <DateFieldComponent
          label="Fecha de nacimiento"
          name="birthdate"
          defaultValue={defaultValues?.birthdate || ""}
        />
      </Grid>
      {/* address */}
      <Grid item xs={12} sm={6}>
        <FieldComponent
          label="Dirección de residencia"
          name="address"
          defaultValue={defaultValues?.address || ""}
        />
      </Grid>
      {/* rol_id */}
      <Grid item xs={12} sm={6}>
        <SelectComponent
          label="Tipo de usuario"
          name="rolId"
          data={Roles}
          fieldKey="id"
          fieldValue="name"
          defaultValue={defaultValues?.rolId || ""}
        />
      </Grid>
    </Grid>
  );
};
