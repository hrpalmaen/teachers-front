import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Box, Button } from "@mui/material";
import { Add, Close } from "@mui/icons-material";

import { SectionFormComponent } from "@components/SectionFormComponent";

import { TopicForm, WorkplanTree } from "./components";
import { IWorkplan } from "./Interfaces";

interface CreateWorkplanProps {
  defaultValues?: IWorkplan[];
}
export const CreateWorkplan = ({ defaultValues }: CreateWorkplanProps) => {
  const [addTopic, setAddTopic] = useState<boolean>(false);
  const [workplan, setWorkplan] = useState<IWorkplan[]>([] as IWorkplan[]);
  const [topic, setTopic] = useState<IWorkplan>({} as IWorkplan);

  useEffect(() => {
    console.log(Object.keys(topic).length);
    if (Object.keys(topic).length) {
      handleSubmitTopic(topic);
    }
  }, [topic]);

  const handleSubmitTopic = async (data: IWorkplan) => {
    let totalPercentaje = data.percentage;
    if (workplan.length) {
      const totalCurrentPercentaje = workplan
        .map((a) => a.percentage)
        .reduce((a, b) => a + b);

      totalPercentaje = totalCurrentPercentaje + data.percentage;
    }
    if (totalPercentaje > 100) {
      enqueueSnackbar("Los temas de evaluación no pueden superar el 100%", {
        variant: "error",
      });
      return;
    }
    setWorkplan((prev: IWorkplan[]) => [...prev, data]);

    if (totalPercentaje === 100) {
      enqueueSnackbar("El porcentaje es el que es", {
        variant: "success",
      });
    }
  };

  return (
    <>
      {/* tree workplan */}
      <SectionFormComponent title="Temas de evaluación">
        {/* tree */}
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <WorkplanTree workplan={workplan} />
        </Box>
        {/* button */}
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button
            disabled={false}
            variant="contained"
            sx={{
              width: "50%",
              textTransform: "none",
              fontWeight: 400,
              height: "2.7rem",
            }}
            endIcon={addTopic ? <Close /> : <Add />}
            onClick={() => setAddTopic(!addTopic)}
          >
            {addTopic
              ? "Ocultar el panel de creación"
              : "Agregar tema de evaluación"}
          </Button>
        </Box>
      </SectionFormComponent>
      <br />
      {/* topic form */}
      {addTopic ? <TopicForm setTopic={setTopic} /> : null}
    </>
  );
};
