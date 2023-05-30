import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { colors } from './colors';
const theme = extendTheme({
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: colors.main.default,
              light: colors.main.light,
              dark: colors.main.dark
            },
            secondary: {
              main: colors.white,
              light: colors.grey[400],
              dark: colors.grey[600]
            },
            error: {
              main: colors.fire.default,
              light: colors.fire.light,
              dark: colors.fire.dark
            },
            warning: {
              main: colors.electric.default,
              light: colors.electric.light,
              dark: colors.electric.dark
            },
            info: {
              main: colors.water.default,
              light: colors.water.light,
              dark: colors.water.dark
            },
            success: {
              main: colors.grass.default,
              light: colors.grass.light,
              dark: colors.grass.dark
            },
            grey: {
              50: colors.grey[50],
              100: colors.grey[100],
              200: colors.grey[200],
              300: colors.grey[300],
              400: colors.grey[400],
              500: colors.grey[500],
              600: colors.grey[600],
              700: colors.grey[700],
              800: colors.grey[800],
              900: colors.grey[900],
              A100: colors.grey[100],
              A200: colors.grey[200],
              A400: colors.grey[400],
              A700: colors.grey[700]
            },
            text: {
              primary: colors.main.default,
              secondary: colors.water.default,
              disabled: colors.grey[700],
            },
            divider: colors.grey[300],
            background: {
              paper: colors.white,
              default: colors.white,
            },
            action: {
              active: colors.main.default,
              hover: colors.main.default,
              selected: colors.main.default,
            },
            Alert: {
              errorColor: colors.fire.light,
              infoColor: colors.water.light,
              warningColor: colors.electric.light,
              successColor: colors.grass.light,
              errorFilledBg: colors.fire.default,
              infoFilledBg: colors.water.default,
              warningFilledBg: colors.electric.default,
              successFilledBg: colors.grass.default,
              errorFilledColor: colors.white,
              infoFilledColor: colors.white,
              warningFilledColor: colors.main.default,
              successFilledColor: colors.white,
              errorStandardBg: colors.fire.dark,
              infoStandardBg: colors.water.dark,
              warningStandardBg: colors.electric.dark,
              successStandardBg: colors.grass.dark,
              errorIconColor: colors.fire.default,
              infoIconColor: colors.water.default,
              warningIconColor: colors.electric.default,
              successIconColor: colors.grass.default
            },
          },
        },
        dark: {
          palette: {
            primary: {
              main: colors.white,
              light: colors.grey[100],
              dark: colors.grey[700]
            },
            secondary: {
              main: colors.main.default,
              light: colors.main.light,
              dark: colors.main.dark
            },
            error: {
              main: colors.fire.default,
              light: colors.fire.light,
              dark: colors.fire.dark
            },
            warning: {
              main: colors.electric.default,
              light: colors.electric.light,
              dark: colors.electric.dark
            },
            info: {
              main: colors.water.default,
              light: colors.water.light,
              dark: colors.water.dark
            },
            success: {
              main: colors.grass.default,
              light: colors.grass.light,
              dark: colors.grass.dark
            },
            common: {
              background: colors.main.default,
              onBackground: colors.white
            },
            grey: {
              50: colors.grey[50],
              100: colors.grey[100],
              200: colors.grey[200],
              300: colors.grey[300],
              400: colors.grey[400],
              500: colors.grey[500],
              600: colors.grey[600],
              700: colors.grey[700],
              800: colors.grey[800],
              900: colors.grey[900],
              A100: colors.grey[100],
              A200: colors.grey[200],
              A400: colors.grey[400],
              A700: colors.grey[700]
            },
            text: {
              primary: colors.white,
              secondary: colors.water.default,
              disabled: colors.grey[300],
            },
            divider: colors.grey[700],
            background: {
              paper: colors.main.default,
              default: colors.main.default,
            },
            action: {
              active: colors.white,
              hover: colors.white,
              selected: colors.white,
            },
            Alert: {
              errorColor: colors.fire.light,
              infoColor: colors.water.light,
              warningColor: colors.electric.light,
              successColor: colors.grass.light,
              errorFilledBg: colors.fire.default,
              infoFilledBg: colors.water.default,
              warningFilledBg: colors.electric.default,
              successFilledBg: colors.grass.default,
              errorFilledColor: colors.white,
              infoFilledColor: colors.white,
              warningFilledColor: colors.main.default,
              successFilledColor: colors.white,
              errorStandardBg: colors.fire.dark,
              infoStandardBg: colors.water.dark,
              warningStandardBg: colors.electric.dark,
              successStandardBg: colors.grass.dark,
              errorIconColor: colors.fire.default,
              infoIconColor: colors.water.default,
              warningIconColor: colors.electric.default,
              successIconColor: colors.grass.default
            }
          },
        },
      },
    });

    export default theme;