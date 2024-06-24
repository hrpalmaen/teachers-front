import { Box, Typography } from "@mui/material";

interface SectionFormProps {
  title?: string | React.ReactElement;
  children: React.ReactNode;
}

export const SectionFormComponent = ({
  title = "",
  children,
}: SectionFormProps) => {
  return (
    <Box
      sx={{
        backdropFilter: "saturate(2)",
        border: "2px solid rgba(255, 255, 255, 0.6)",
        borderRadius: "20px",
      }}
    >
      {/* header */}
      {title && (
        <Box sx={{ borderRadius: "12px" }}>
          <Typography
            sx={{
              color: "secondary.main",
              fontWeight: "600",
              textAlign: "left",
              padding: "0.1rem 1rem",
            }}
            id="card-title"
          >
            {title}
          </Typography>
          <hr
            style={{ backgroundColor: "#fff", border: "none", height: "1.5px" }}
          />
        </Box>
      )}
      <Box padding={"1rem"}>{children}</Box>
    </Box>
  );
};
