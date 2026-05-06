import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#4CAF50" },
    secondary: { main: "#FF9800" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;