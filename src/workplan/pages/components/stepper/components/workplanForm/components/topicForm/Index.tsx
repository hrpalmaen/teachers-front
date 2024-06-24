import { Box } from "@mui/material";
import { useState } from "react";
import * as yup from "yup";

import { ActivityFields } from "./components/activitiesForm/Fields";

import { Actions } from "@components/actions";
import { Form } from "@components/Index";
import { SectionFormComponent } from "@components/SectionFormComponent";

import { ActivitiesForm } from "./components";
import { IWorkplan, IActivityForm } from "../../Interfaces";

interface ITopicFormProps {
  defaultValues?: IWorkplan;
  setTopic: React.Dispatch<React.SetStateAction<IWorkplan>>;
}

export const TopicForm = ({ defaultValues, setTopic }: ITopicFormProps) => {
  const [activities, setActivities] = useState<IActivityForm[]>(
    [] as IActivityForm[]
  );

  const handleSubmit = (data: IActivityForm) => {
    setTopic({
      ...data,
      activities,
    });
  };

  return (
    <SectionFormComponent>
      <Form<IActivityForm>
        id="workplan-form"
        onSubmit={handleSubmit}
        schema={yup.object({
          activity: yup.string().required("Este campo es requerido"),
          percentage: yup.number().required("Este campo es requerido"),
        })}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "1rem",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Actions
              label="Crear tema de evaluación"
              disabled={activities.length === 0}
            />
          </Box>
        </Box>
        <ActivityFields
          label="Tema de evaluación"
          // defaultValues={defaultValues?.activities[0]}
        />
      </Form>
      <br />
      {/* activities */}
      <SectionFormComponent title="Actividades">
        <ActivitiesForm setActivities={setActivities} />
      </SectionFormComponent>
    </SectionFormComponent>
  );
};
