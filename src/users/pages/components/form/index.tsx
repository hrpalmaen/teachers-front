import { Box } from "@mui/material";
import * as yup from "yup";

import { Actions } from "@components/actions/actions";
import { Form, ModalComponent, useSnackbarUtils } from "@components";
import { SectionFormComponent } from "@components/SectionFormComponent";

import { IUser } from "./Interfaces";
import { FieldsUser } from "./components/PersonalInfo";
import { ContactInfoUser } from "./components/ContactInfo";
import { SchoolInfoUser } from "./components/SchoolInfo";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultValues?: IUser & { _id: string };
}

export const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  onClose,
  defaultValues,
}: UserModalProps) => {
  const { showSnackbar } = useSnackbarUtils();
  const handleClose = () => onClose();

  const handleSubmit = async (data: IUser) => {
    if (defaultValues) {
      await editUser(defaultValues.id, data as IUser);
    } else {
      await saveUser(data as IUser);
    }
    handleClose();
  };

  const saveUser = async (data: IUser) => {
    console.log("data upload", data);
    showSnackbar("Usuario creado con éxito", "success");
  };

  const editUser = async (id: string, data: IUser) => {
    console.log("data to update", id, data);
    showSnackbar("Usuario actualizado con éxito", "success");
  };

  return (
    <ModalComponent
      title={defaultValues ? "EDITAR USUARIO" : "CREAR USUARIO"}
      open={isOpen}
      onClose={handleClose}
    >
      <Form<IUser>
        id="login-form"
        onSubmit={handleSubmit}
        schema={yup.object({
          firstName: yup.string().required("Este campo es requerido"),
          lastName: yup.string().required("Este campo es requerido"),
          secondLastName: yup.string().required("Este campo es requerido"),
          gender: yup.string().required("Este campo es requerido"),
          documentType: yup.string().required("Este campo es requerido"),
          document: yup
            .string()
            .matches(/^\d+$/, "El documento solo puede contener números")
            .required("Este campo es requerido"),
          phone: yup.string().required("Este campo es requerido"),
          birthdate: yup.string().required("Este campo es requerido"),
          email: yup
            .string()
            .email("Email invalido")
            .required("Este campo es requerido"),
          address: yup
            .string()
            // .oneOf([yup.ref("email")], "Los correos no coinciden")
            .required("Este campo es requerido"),
          rolId: yup.string().required("Este campo es requerido"),
          isActive: yup.boolean().required("Este campo es requerido"),
          // gradeId: yup.string().required("Este campo es requerido"),
        })}
      >
        {/* personal information */}
        <SectionFormComponent title="Información personal">
          <FieldsUser defaultValues={defaultValues} />
        </SectionFormComponent>
        <br />
        {/* school information */}
        <SectionFormComponent title="Información institucional">
          <SchoolInfoUser defaultValues={defaultValues} />
        </SectionFormComponent>
        <br />
        {/* contact information */}
        <SectionFormComponent title="Información de contacto">
          <ContactInfoUser defaultValues={defaultValues} />
        </SectionFormComponent>
        <Box
          sx={{ display: "flex", justifyContent: "end" }}
          paddingTop={"1rem"}
        >
          <Box width={"30%"} sx={{ display: "flex", justifyContent: "end" }}>
            <Actions label="Guardar" loading={false} />
          </Box>
        </Box>
      </Form>
    </ModalComponent>
  );
};
