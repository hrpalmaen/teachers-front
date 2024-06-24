import { Grid, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "fixed",
        bottom: 0,
      }}
    >
      <Typography fontSize="0.7rem" sx={{ color: "secondary.light" }}>
        &#169;{new Date().getFullYear()} Powered by |{" "}
        <Link
          color="text.secondary"
          href="https://localhost/"
          style={{ textDecoration: "none" }}
        >
          KameHouse
        </Link>
      </Typography>
    </Grid>
  );
};
