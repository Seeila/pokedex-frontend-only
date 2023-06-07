import { colors } from "./palette/colors";
import { status } from "./palette/status";
import { alerts } from "./palette/alerts";

export const lightTheme = {
    palette: {
        ...colors,
        ...status,
        ...alerts,
        primary: {
            main: colors.grey[50],
            light: colors.white,
            dark: colors.grey[100],
        },
        secondary: {
            main: colors.grey[800],
            light: colors.grey[700],
            dark: colors.grey[900],
        },
        common: {
            background: colors.white,
            onBackground: colors.grey[800],
        },
        text: {
            primary: colors.grey[800],
            secondary: colors.water.main,
            disabled: colors.grey[600],
        },
        divider: colors.grey[300],
        background: {
            paper: colors.white,
            default: colors.white,
        },
        action: {
            active: colors.grey[800],
            hover: colors.grey[800],
            selected: colors.grey[800],
        },
    },
};
