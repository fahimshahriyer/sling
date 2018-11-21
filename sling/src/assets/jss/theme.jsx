import { createMuiTheme } from "@material-ui/core/styles";
import shadows from "./overrides/shadows";
import button from "./overrides/button";
import snackbar from "./overrides/snackbar";
import tooltip from "./overrides/tooltip";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5b6dff",
      light: "#969bff",
      lighter: "#e8f0fe",
      dark: "#0042cb",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#f27092",
      light: "#ffa2c2",
      dark: "#bc3f65",
      contrastText: "#ffffff"
    },
    text: {
      primary: "#303880",
      secondary: "#7278b2",
      disabled: "#aaaed3",
      hint: "#aaaed3"
    },
    background: {
      paper: "#ffffff",
      default: "#f4f5f9"
    },
    action: {
      active: "#aaaed3"
    },
    divider: "#e8eaf6"
  },
  status: {
    success: "#10ac84",
    warning: "#feca57",
    error: "#ff6b6b",
    info: "#5b6dff"
  },
  shadows: shadows,
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"]
  },

  // Material-ui Components overrides
  overrides: {
    MuiButton: button,
    MuiSnackbarContent: snackbar,
    MuiTooltip: tooltip
  }
});

export default theme;
