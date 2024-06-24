import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Close } from "@mui/icons-material";
import { IActivityForm } from "../../../../Interfaces";

interface ColumnsProps {
  handleRemove: (id: string) => void;
}

const useColumns = ({ handleRemove }: ColumnsProps): GridColDef[] => {
  return [
    {
      headerName: "Actividad",
      field: "activity",
      flex: 2,
    },
    {
      headerName: "Porcentaje (%)",
      field: "percentage",
      flex: 1,
    },
    {
      headerName: "Quitar",
      field: "actions",
      type: "actions",
      flex: 1,
      getActions: (params: { row: IActivityForm }) => [
        <Button onClick={() => handleRemove(params.row.id)}>
          <Close />
        </Button>,
      ],
    },
  ];
};

export { useColumns };
