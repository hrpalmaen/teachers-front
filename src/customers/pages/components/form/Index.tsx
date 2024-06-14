import * as yup from "yup";
import { Box } from "@mui/material";

import { ICustomer } from "@/customers/interface";

import { Actions } from "@components/actions/actions";
import { Form, ModalComponent, SectionFormComponent } from "@components";
import {
  ContactInfo,
  PlanInfoCustomer,
  BranchInfoCustomer,
  FieldsCompany,
} from "./components";

interface FormCompany extends ICustomer {
  emailconfirm: string;
}

interface CompanyModalProps {
  open: boolean;
  onClose: () => void;
  defaultValues?: ICustomer;
}
export const CreateCompanyModal = ({
  open,
  onClose,
  defaultValues,
}: CompanyModalProps) => {
  const handleSubmit = async (data: ICustomer) => {
    console.log("data submit", data);
    onClose();
  };

  return (
    <ModalComponent
      title={"Crear institución educativa"}
      open={open}
      onClose={onClose}
    >
      <Form<FormCompany>
        id="company-form"
        onSubmit={handleSubmit}
        schema={yup.object({
          name: yup.string().required("Este campo es requerido"),
          nickname: yup.string().required("Este campo es requerido"),
          nit: yup.string().required("Este campo es requerido"),
          licenses: yup.number().required("Este campo es requerido"),
          expirationDate: yup.string().required("Este campo es requerido"),
          rectorId: yup.string().required("Este campo es requerido"),
          colors: yup.array().required("Este campo es requerido"),
          logo: yup.string().required("Este campo es requerido"),
          rulesQualifications: yup.string().required("Este campo es requerido"),
          quantityGrades: yup.string().required("Este campo es requerido"),
          phone: yup.string().required("Este campo es requerido"),
          email: yup
            .string()
            .email("Email invalido")
            .required("Este campo es requerido"),
        })}
      >
        <SectionFormComponent>
          <FieldsCompany defaultValues={defaultValues} />
        </SectionFormComponent>
        <br />
        <SectionFormComponent title="Información de marca">
          <BranchInfoCustomer defaultValues={defaultValues} />
        </SectionFormComponent>
        <br />
        <SectionFormComponent title="Información de contacto">
          <ContactInfo defaultValues={defaultValues} />
        </SectionFormComponent>
        <br />
        <SectionFormComponent title="Información del plan">
          <PlanInfoCustomer defaultValues={defaultValues} />
        </SectionFormComponent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "15px 0 0 0",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Actions label="Guardar" loading={false} />
          </Box>
        </Box>
      </Form>
    </ModalComponent>
  );
};
