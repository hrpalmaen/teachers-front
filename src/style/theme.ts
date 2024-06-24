import { createTheme } from "@mui/material";

const fontDefault = "'Lato', sans-serif";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#193b58",
    },
    secondary: {
      main: "#fff",
      light: "#ffffffad",
    },
    text: {
      primary: "#fff",
      secondary: "#F44336",
    },
  },
  typography: {
    fontFamily: fontDefault,
  },
  components: {
    // textfield
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#ffffffad",
        },
      },
    },
    // value textfield
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    // button icon
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#ffffffad",
        },
      },
    },
    // button
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#193b58",
          borderRadius: "40px",
          fontSize: "1rem",
          transition: "0.4s",
        },
      },
    },
  },
});
