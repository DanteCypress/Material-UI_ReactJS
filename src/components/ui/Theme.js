import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      dark: "#0A535B",
      light: "#14B2C9",
      contrastText: "#FFFFFF",
      gradient: {
        lightMainGradient: "linear-gradient(#14B2C9, #118E9D)"
      }
    },
    secondary: {
      main: "#8A2BE2",
      dark: "#BA55D3",
      light: "#D8BFD8",
      contrastText: "#FFFFFF"
    },
    extras: {
      veryLightGreen: "#EBF5F7"
    },
    errorColor: "#FF0F54",
    successColor: "#017C68"
  },
  typography: {
    tabs: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem"
    },
    estimate: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    }
  }
});
