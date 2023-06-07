import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { typography } from "./typography/typography";
import { components } from "./components/components";

//Changing sass variables to css custom variables and creating colors
const pokedexTheme = extendTheme({
    cssVarPrefix: "pokedex",
    colorSchemes: {
        light: { ...lightTheme },
        dark: { ...darkTheme },
    },
    typography: {
        ...typography,
    },
    components: {
        ...components,
    },
});

export default pokedexTheme;
