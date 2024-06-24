import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  esES,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";

type dataTable = {
  _id?: string | number;
  [key: string]: any;
};

interface pagination {
  page: number;
  pageSize: number;
}

interface CustomTableProps {
  columns: GridColDef[];
  data: dataTable[];
  loading?: boolean;
  rowCount?: number;
  pagination: pagination;
  autoHeight?: boolean;
  paginationHeight?: boolean;

  setPagination: React.Dispatch<React.SetStateAction<pagination>>;
  checkboxSelection?: boolean;
  handleRowClick?: (row: string) => void;
  handleAllRowClick?: (row: string) => void;
  handleSelectionChange?: (row: GridRowSelectionModel) => void;
}

export const Table = ({
  columns,
  data,
  pagination,
  rowCount,
  setPagination,
  checkboxSelection,
  handleRowClick,
  handleAllRowClick,
  handleSelectionChange,
  autoHeight = false,
  paginationHeight = true,
  ...props
}: CustomTableProps) => {
  const handlePageChange = (model: { page: number; pageSize: number }) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: model.page,
    }));
  };

  const [height, setheight] = useState("");

  useEffect(() => {
    const header = document.getElementById("header");

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === header) {
          setheight(
            `calc(100vh - ${
              entry.contentRect.height + 50 + (paginationHeight ? 20 : 0)
            }px)`
          );
        }
      }
    });

    if (header) {
      resizeObserver.observe(header);
    }

    return () => {
      if (header) {
        resizeObserver.unobserve(header);
      }
    };
  }, []);

  return (
    <Box
      id="table"
      sx={{
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,

        "& .MuiDataGrid-columnHeaderTitle": {
          color: "#6c757d",
          fontWeight: "700!important",
          "font-size": "16px",
        },
      }}
    >
      <DataGrid
        columns={columns.map((column) => ({
          ...column,
          wrap: true, // Permite que el texto se ajuste al ancho de la celda
        }))}
        rows={data}
        // rowHeight={50}
        getRowHeight={() => (autoHeight ? "auto" : 50)}
        paginationMode="server"
        pageSizeOptions={[]}
        initialState={{
          pagination: {
            paginationModel: {
              page: pagination?.page || 0,
              pageSize: pagination?.pageSize || 15,
            },
          },
        }}
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            whiteSpace: "normal",
            lineHeight: "normal",
          },
          "& .MuiDataGrid-columnHeaders": {
            maxHeight: "168px !important",
          },
        }}
        rowCount={rowCount}
        checkboxSelection={checkboxSelection}
        onRowSelectionModelChange={handleSelectionChange}
        onPaginationModelChange={handlePageChange}
        filterMode="server"
        filterDebounceMs={500}
        getRowId={(row) => row.id}
        onRowClick={(tableData) => {
          if (handleRowClick) {
            handleRowClick(tableData.row._id);
          }
          if (handleAllRowClick) {
            handleAllRowClick(tableData.row);
          }
        }}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        {...props}
      />
    </Box>
  );
};
