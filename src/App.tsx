import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { customTheme } from "./style/theme";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./contexts";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <SnackbarProvider>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
