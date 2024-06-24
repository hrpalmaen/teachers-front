import EditIcon from "@mui/icons-material/Edit";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { Box } from "@mui/material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";

import { dateToDisplay } from "@utils";
import { Company } from "src/customers/interface";

interface ColumnsProps {
  editData: (company: Company) => void;
  handleOpenLogs: (company: Company) => void;
  onChangeStatusCompany: (company: Company) => void;
}

const useColumns = ({
  editData,
  handleOpenLogs,
  onChangeStatusCompany,
}: ColumnsProps): GridColDef[] => {
  return [
    {
      headerName: "Opciones",
      field: "actions",
      type: "actions",
      flex: 1,
      getActions: (params: { row: Company }) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Editar"
          onClick={() => editData(params.row)}
        />,
        <GridActionsCellItem
          icon={<ManageHistoryIcon />}
          label="Histórico de cambios"
          onClick={() => handleOpenLogs(params.row)}
        />,
        // <Switch
        //   size="small"
        //   onChange={() => onChangeStatusCompany(params.row)}
        //   checked={params.row?.isActive || false}
        // />,
      ],
    },
    {
      field: "name",
      headerName: "Nombre del cliente",
      flex: 1,
    },
    { field: "nit", headerName: "Nit", flex: 1 },
    { field: "licenses", headerName: "Usuarios", flex: 1 },
    { field: "isActive", headerName: "Estado", type: "boolean", flex: 1 },
    {
      field: "expirationDate",
      headerName: "Fecha de expiración",
      renderCell: (params) => (
        <Box>{params.value ? params.value.split("T")[0] : ""}</Box>
      ),
      flex: 1,
    },
    {
      field: "dateCreated",
      headerName: "Fecha de creación",
      renderCell: (params) => <Box>{dateToDisplay(params.value)}</Box>,
      flex: 1,
    },
  ];
};

export { useColumns };
