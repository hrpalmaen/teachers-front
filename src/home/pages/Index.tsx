import { Link as RouterLink } from "react-router-dom";
import DataObjectIcon from "@mui/icons-material/DataObject";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Box, Grid, Link, Typography } from "@mui/material";

import { SectionFormComponent } from "@components/SectionFormComponent";

export const HomePage = () => {
  const items = [
    {
      icon: <FormatListBulletedIcon />,
      title: "Mis cursos",
      to: "/cursos",
    },
    {
      icon: <DataObjectIcon />,
      title: "Mis calificaciones",
      to: "/calificaciones",
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" height={"auto"}>
      {/* logo */}
      <Grid item xs={12} md={5} lg={5} sm={5}>
        <Box
          padding={"0.5rem"}
          sx={{
            flex: 1,
          }}
        >
          <SectionFormComponent>
            <Box height={{ lg: "60vh", md: "60vh", sm: "60vh" }}>
              Tu navegador no admite la reproducción de videos.
            </Box>
          </SectionFormComponent>
        </Box>
      </Grid>
      {/* boxes */}
      <Grid item xs={12} lg={5} md={5} sm={5} height={"100%"}>
        {items.map((item) => (
          <Box padding={"0.5rem"}>
            <SectionFormComponent>
              <Link
                color={"text.secondary"}
                height={"4rem"}
                width={"100%"}
                component={RouterLink}
                to={item.to}
                style={{
                  display: "grid",
                  textDecoration: "none",
                  gridTemplateColumns: "auto 1fr",
                  paddingLeft: "3rem",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center" }}>{item.icon}</Box>
                <Typography align="center" sx={{ fontSize: "1.1rem" }}>
                  {item.title}
                </Typography>
              </Link>
            </SectionFormComponent>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};
