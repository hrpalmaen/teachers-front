import { Box, Slide } from "@mui/material";
import { useEffect, useState } from "react";

import { StepperComponent, ListCardComponent } from "@components";
import { CreateWorkplan } from "./components";

export const CreateWorkplanStepper = () => {
  const [gradeSelected, setGradeSelected] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [subjectSelected, setSubjectSelected] = useState<string>("");

  const GRADES = [
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

  const SUBJECT = [
    { id: "1234", name: "Matemáticas" },
    { id: "1235", name: "Inglés" },
    { id: "1236", name: "Español" },
  ];

  const PERIOD = [
    { id: "1", name: "primero", cycle: "Periodo escolar 2024" },
    { id: "2", name: "segundo", cycle: "Periodo escolar 2024" },
    { id: "3", name: "terccero", cycle: "Periodo escolar 2024" },
  ];

  const handleSubmit = async (data: any) => {
    console.log("data", data);
  };

  const [stepActive, setStepActive] = useState(0);
  const steps = ["Cursos", "Materias", "Periodo", "Plan de estudio"];

  const handleContinueStep = () => setStepActive(stepActive + 1);

  const handleBackStep = () => setStepActive(stepActive - 1);

  // handle grade selected in first step
  useEffect(() => {
    if (gradeSelected && stepActive === 0) handleContinueStep();
  }, [gradeSelected]);

  useEffect(() => {
    if (subjectSelected && stepActive === 1) handleContinueStep();
  }, [subjectSelected]);

  useEffect(() => {
    if (period && stepActive === 2) handleContinueStep();
  }, [period]);

  return (
    <Box sx={{ p: "1rem" }}>
      <StepperComponent stepActive={stepActive} steps={steps} />
      <Box height={"auto"}>
        {/* Cursos */}
        <Slide in={stepActive === 0} mountOnEnter unmountOnExit timeout={300}>
          <Box>
            <ListCardComponent selected={setGradeSelected} items={GRADES} />
          </Box>
        </Slide>

        {/* Materias */}
        <Slide
          direction="right"
          in={stepActive === 1}
          mountOnEnter
          unmountOnExit
          timeout={300}
        >
          <Box>
            <ListCardComponent selected={setSubjectSelected} items={SUBJECT} />
          </Box>
        </Slide>

        {/* Periodos*/}
        <Slide
          direction="right"
          in={stepActive === 2}
          mountOnEnter
          unmountOnExit
          timeout={300}
        >
          <Box>
            <ListCardComponent selected={setPeriod} items={PERIOD} />
          </Box>
        </Slide>

        {/* Plan de estudios */}
        <Slide
          direction="right"
          in={stepActive === 3}
          mountOnEnter
          unmountOnExit
          timeout={300}
        >
          <Box
            sx={{
              borderRadius: "18px",
              paddingInline: "1rem",
            }}
          >
            <CreateWorkplan />
          </Box>
        </Slide>
      </Box>
    </Box>
  );
};
