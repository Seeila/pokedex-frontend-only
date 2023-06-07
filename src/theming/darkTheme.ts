import { colors } from "./palette/colors";
import { status } from "./palette/status";
import { alerts } from "./palette/alerts";

export const darkTheme = {
    palette: {
        ...colors,
        ...status,
        ...alerts,
        primary: {
            main: colors.white,
            light: colors.grey[100],
            dark: colors.grey[700],
        },
        secondary: {
            main: colors.grey[800],
            light: colors.grey[600],
            dark: colors.grey[900],
        },
        common: {
            background: colors.grey[800],
            onBackground: colors.white,
        },
        text: {
            primary: colors.white,
            secondary: colors.water.main,
            disabled: colors.grey[300],
        },
        divider: colors.grey[700],
        background: {
            paper: colors.grey[800],
            default: colors.grey[800],
        },
        action: {
            active: colors.white,
            hover: colors.white,
            selected: colors.white,
        },
    },
};
