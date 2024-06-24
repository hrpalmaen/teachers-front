import { CustomBreadcrumbsItem } from "@interfaces/CustomBreadcrumbs.interface";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CustomBreadcrumbs } from "./Index";

interface PageTitleProps {
  title: string;
  tooltip?: string;
  functions?: { label: string; onClick: () => void; disabled?: boolean }[];
  breadcrumbsItems?: CustomBreadcrumbsItem[];
}

export const PageTitle = ({
  title,
  functions,
  breadcrumbsItems,
}: // breadcrumbsItems = [
//   {
//     label: "string",
//     href: "string",
//   },
//   {
//     label: "string",
//     href: "string",
//   },
// ],
PageTitleProps) => {
  return (
    <Box
      sx={{
        backdropFilter: "saturate(2)",
        border: "2px solid rgba(255, 255, 255, 0.6)",
        borderRadius: "20px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 1.5rem .5rem 2rem",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: "1.4rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        {breadcrumbsItems && <CustomBreadcrumbs items={breadcrumbsItems} />}
      </Box>

      {/*  action buttons */}
      <Box>
        {functions &&
          functions.length > 0 &&
          functions.map((func, index) => (
            <Button
              key={index}
              onClick={func.onClick}
              variant="contained"
              sx={{
                width: "100%",
                fontWeight: "bold",
                padding: "0 .5rem",
              }}
            >
              {func.label}
            </Button>
          ))}
      </Box>
    </Box>
  );
};
