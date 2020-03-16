import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#118E9D",
      dark: "#0A535B",
      light: "#14B2C9",
      contrastText: "#FFFFFF",
      gradient: {
        lightMainGradient: "linear-gradient(#14B2C9, #118E9D)"
      }
    },
    secondary: {
      main: "#303F9F",
      dark: "#1A237E",
      light: "#3F51B5",
      contrastText: "#FFFFFF"
    },
    extras: {
      veryLightGreen: "#EBF5F7"
    },
    errorColor: "#FF0F54",
    successColor: "#017C68"
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Lato, Helvetica, Arial, sans-serif",
    body2: {
      letterSpacing: 1
    }
  }
});
