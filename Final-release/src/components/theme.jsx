import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7c4dff",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f8f9fa",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;