import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  type: "dark",
  primary: {
    main: "#FFCD00",
    contrastText: "#242526",
  },
  background: {
    default: "#242526",
  },
};

const theme = createMuiTheme({
  palette,
});

export default theme;

//Material UI - Biblioteca de componentes visuais React que utiliza o conceito de Material Design
//Tailwind - Biblioteca de interface visual