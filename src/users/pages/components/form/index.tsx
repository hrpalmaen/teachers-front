import { ApolloError } from "@apollo/client";
import { Box } from "@mui/material";
import { useEffect } from "react";
import * as yup from "yup";

import { useUsers } from "../list/service";
import { FieldsUser } from "./components/fields/PersonalInfo";
import { IUser } from "./interface";
import { useCreateUser, useUpdateUser } from "./service";

import { useAuth } from "@auth/context";
import { Actions } from "@components/actions/actions";
import { Form, ModalComponent, useSnackbarUtils } from "@components/index";
import { formatErrorsGraphql } from "@utils/errorsGraphql";
import { SectionFormComponent } from "@components/SectionFormComponent";
import { ContactInfoUser } from "./components/fields/contactInformation";
import { SchoolInfoUser } from "./components/fields/SchoolInfo";

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
  const { user } = useAuth();
  const { createUser, loading, error } = useCreateUser();
  const {
    updateUser,
    loading: loadingUpdate,
    error: errorUpdate,
  } = useUpdateUser();
  const { refetch: refetchUsers } = useUsers(
    { page: 0, pageSize: 15 },
    user?.companyId || null
  );
  const { showSnackbar } = useSnackbarUtils();

  useEffect(() => {
    if (error || errorUpdate) {
      const errors = formatErrorsGraphql(
        (defaultValues ? errorUpdate : error) as ApolloError
      )[0];
      showSnackbar(errors.message, "error");
    }
  }, [error, errorUpdate]);

  const handleSubmit = async (data: IUser) => {
    if (defaultValues) {
      await editUser(defaultValues.id, data as IUser);
    } else {
      await saveUser(data as IUser);
    }
    handleClose();
    refetchUsers();
  };

  const saveUser = async (data: IUser) => {
    data["isActive"] = true;
    const response = await createUser(data);
    console.log("response", response);
    showSnackbar("Usuario creado con éxito", "success");
  };

  const editUser = async (id: string, data: IUser) => {
    const response = await updateUser(id, data);
    console.log("response", response);
    showSnackbar("Usuario actualizado con éxito", "success");
  };

  const handleClose = () => {
    onClose();
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
        <SectionFormComponent title="Información personal">
          <FieldsUser defaultValues={defaultValues} />
        </SectionFormComponent>
        <br />
        <SectionFormComponent title="Información institucional">
          <SchoolInfoUser defaultValues={defaultValues} />
        </SectionFormComponent>
        <br />
        <SectionFormComponent title="Información de contacto">
          <ContactInfoUser defaultValues={defaultValues} />
        </SectionFormComponent>
        <Box
          sx={{ display: "flex", justifyContent: "end" }}
          paddingTop={"1rem"}
        >
          <Box width={"30%"} sx={{ display: "flex", justifyContent: "end" }}>
            <Actions label="Guardar" loading={loading || loadingUpdate} />
          </Box>
        </Box>
      </Form>
    </ModalComponent>
  );
};
