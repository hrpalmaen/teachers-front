import * as yup from "yup";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { Form, Actions } from "@components/Index";
import { ActivityFields } from "./Fields";
import { useColumns } from "./Hooks";
import { IActivityForm } from "../../../../Interfaces";

interface ActivitiesFormProps {
  setActivities: React.Dispatch<React.SetStateAction<IActivityForm[]>>;
}

export const ActivitiesForm = ({
  setActivities: handelSetActivities,
}: ActivitiesFormProps) => {
  const [activities, setActivities] = useState<IActivityForm[]>(
    [] as IActivityForm[]
  );

  const handleRemoveActivity = (id: string) => {
    setActivities(activities.filter((act) => act.id !== id));
  };

  const columns = useColumns({ handleRemove: handleRemoveActivity });

  const handleSubmit = async (data: IActivityForm) => {
    let totalPercentaje = data.percentage;
    if (activities.length) {
      const totalCurrentPercentaje = activities
        .map((a) => a.percentage)
        .reduce((a, b) => a + b);

      totalPercentaje = totalCurrentPercentaje + data.percentage;
    }
    if (totalPercentaje > 100) {
      enqueueSnackbar("El porcentaje no puede superar el 100%", {
        variant: "error",
      });
      return;
    }
    const datas = {
      ...data,
      id: Math.random().toString(),
    };
    setActivities((prev: IActivityForm[]) => [...prev, datas]);
    if (totalPercentaje === 100) {
      enqueueSnackbar("El porcentaje es el que es", {
        variant: "success",
      });
      handelSetActivities([...activities, datas]);
    }
  };

  return (
    <>
      <Form<IActivityForm>
        id="activity-form"
        onSubmit={handleSubmit}
        schema={yup.object({
          activity: yup.string().required("Este campo es requerido"),
          percentage: yup.number().required("Este campo es requerido"),
        })}
      >
        <ActivityFields label="Actividad de evaluación" />
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ width: "20%" }}>
            <Actions label={"Agregar"} loading={false} />
          </Box>
        </Box>
      </Form>
      {/* activities grid */}
      {activities.length > 0 && (
        <>
          <br />
          <DataGrid columns={columns} rows={activities || []} />
        </>
      )}
    </>
  );
};
