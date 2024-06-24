import EditIcon from "@mui/icons-material/Edit";
import { FormControlLabel, Switch } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { UserDto } from "src/users/interfaces";

interface useListUsersProps {
  onEditUser: (user: UserDto & { id: string }) => void;
  onChangeStatusUser: (user: UserDto) => void;
}

export const useListUsersColumns = ({
  onEditUser,
  onChangeStatusUser,
}: useListUsersProps) => {
  const columns = [
    {
      headerName: "Opciones",
      field: "actions",
      type: "actions",
      flexBasis: 200,
      flexGrow: 0,
      getActions: (params: any) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Editar"
          onClick={() => onEditUser(params.row)}
        />,
        <FormControlLabel
          control={
            <Switch
              size="small"
              onChange={() => onChangeStatusUser(params.row)}
              checked={params.row?.isActive}
            />
          }
          label=""
        />,
      ],
    },
    { field: "email", headerName: "Usuario", type: "email", flex: 1 },
    {
      field: "firstName",
      headerName: "Nombre completo",
      flex: 1,
      renderCell: (params: any) => (
        <div>
          {params.row.firstName} {params.row.lastName}
        </div>
      ),
    },
    { field: "isActive", headerName: "Estado", type: "boolean", flex: 1 },
    {
      field: "dateCreated",
      headerName: "Fecha de creación",
      type: "datetime",
      flex: 1,
      renderCell: (params: any) => (
        <div>
          {params.row.dateCreated &&
            new Date(params.row.dateCreated).toLocaleString()}
        </div>
      ),
    },
    {
      field: "lastAccess",
      headerName: "Ultima conexión ",
      type: "datetime",
      flex: 1,
      renderCell: (params: any) => (
        <div>
          {params.row.lastAccess
            ? new Date(params.row.lastAccess).toLocaleString()
            : ""}
        </div>
      ),
    },

    {
      field: "dateUpdated",
      headerName: "Fecha de Actualización",
      type: "datetime",
      flex: 1,
      renderCell: (params: any) => (
        <div>
          {params.row.dateUpdated &&
            new Date(params.row.dateUpdated).toLocaleString()}
        </div>
      ),
    },
  ];

  return columns;
};
