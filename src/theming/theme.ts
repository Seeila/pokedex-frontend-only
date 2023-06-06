import { experimental_extendTheme as extendTheme, SimplePaletteColorOptions} from '@mui/material/styles';


//Colors definition

const colors = {
    white: '#fff',
    black: '#000',
    grey: {
      50: '#edeeee',
      100: '#d1d5d9',
      200: '#b3b9c1',
      300: '#949daa',
      400: '#6d747c',
      500: '#596068',
      600: '#49535f',
      700: '#3b4149',
      800: '#272C33',
      900: '#1A2027'
    },
    normal: {
      main: '#BED4B0',
      light: '#D9EACE',
      dark: '#A3B499'
    },
    fire: {
      main: '#F37843',
      light: '#FC9B71',
      dark: '#CF4C14'
    },
    water: {
      main: '#64ABED',
      light: '#7BBCF8',
      dark: '#3A93E5'
    },
    electric: {
      main: '#F4C74D',
      light: '#F3DC9B',
      dark: '#DEA50E'
    },
    grass: {
      main: '#99A98F',
      light: '#A4B49A',
      dark: '#7E9271'
    },
    ice: {
      main: '#81D3D3',
      light: '#9EE5E5',
      dark: '#41AAAA'
    },
    fighting: {
      main: '#C55151',
      light: '#D67E7E',
      dark: '#9F3333'
    },
    poison: {
      main: '#A7456B',
      light: '#B65379',
      dark: '#8B2E52'
    },
    ground: {
      main: '#FAAA53',
      light: '#F6BF82',
      dark: '#E98F2F'
    },
    flying: {
      main: '#A3A6DE',
      light: '#BBBEF3',
      dark: '#8185D2'
    },
    psychic: {
      main: '#C781A3',
      light: '#D398B4',
      dark: '#AE5580'
    },
    bug: {
      main: '#678D72',
      light: '#7F9886',
      dark: '#3C6748'
    },
    rock: {
      main: '#B0736C',
      light: '#D09993',
      dark: '#8A4C44'
    },
    ghost: {
      main: '#8E649E',
      light: '#9A78A7',
      dark: '#6B397E'
    },
    dragon: {
      main: '#A494C1',
      light: '#B7AACF',
      dark: '#8876AB'
    },
    dark: {
      main: '#A4826A',
      light: '#B08B70',
      dark: '#8E5831'
    },
    steel: {
      main: '#A6B7C0',
      light: '#C1CBD0',
      dark: '#899FAB'
    },
    fairy: {
      main: '#F0AFC7',
      light: '#FFCDE0',
      dark: '#C5859C'
    }
};

//Statuses definitions depending the colors already declared to avoid duplicate values
const shared = {
  error: {
    main: colors.fire.main,
    light: colors.fire.light,
    dark: colors.fire.dark
  },
  warning: {
    main: colors.electric.main,
    light: colors.electric.light,
    dark: colors.electric.dark
  },
  info: {
    main: colors.water.main,
    light: colors.water.light,
    dark: colors.water.dark
  },
  success: {
    main: colors.grass.main,
    light: colors.grass.light,
    dark: colors.grass.dark
  },

};

//Changing sass variables to css custom variables and creating colors
const theme = extendTheme({
  colorSchemes: {
        light: {
          palette: {
            ...colors,
            ...shared,
            primary: {
              main: colors.grey[50],
              light: colors.white,
              dark: colors.grey[100]
            },
            secondary: {
              main: colors.grey[800],
              light: colors.grey[700],
              dark: colors.grey[900]
            },
            common: {
              background: colors.white,
              onBackground: colors.grey[800]
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
            Alert: {
              errorColor: colors.fire.light,
              infoColor: colors.water.light,
              warningColor: colors.electric.light,
              successColor: colors.grass.light,
              errorFilledBg: colors.fire.main,
              infoFilledBg: colors.water.main,
              warningFilledBg: colors.electric.main,
              successFilledBg: colors.grass.main,
              errorFilledColor: colors.white,
              infoFilledColor: colors.white,
              warningFilledColor: colors.grey[800],
              successFilledColor: colors.white,
              errorStandardBg: colors.fire.dark,
              infoStandardBg: colors.water.dark,
              warningStandardBg: colors.electric.dark,
              successStandardBg: colors.grass.dark,
              errorIconColor: colors.fire.main,
              infoIconColor: colors.water.main,
              warningIconColor: colors.electric.main,
              successIconColor: colors.grass.main
            },
          },
        },
        dark: {
          palette: {
            ...colors,
            ...shared,
            primary: {
              main: colors.white,
              light: colors.grey[100],
              dark: colors.grey[700]
            },
            secondary: {
              main: colors.grey[800],
              light: colors.grey[600],
              dark: colors.grey[900]
            },
            common: {
              background: colors.grey[800],
              onBackground: colors.white
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
            Alert: {
              errorColor: colors.fire.light,
              infoColor: colors.water.light,
              warningColor: colors.electric.light,
              successColor: colors.grass.light,
              errorFilledBg: colors.fire.main,
              infoFilledBg: colors.water.main,
              warningFilledBg: colors.electric.main,
              successFilledBg: colors.grass.main,
              errorFilledColor: colors.white,
              infoFilledColor: colors.white,
              warningFilledColor: colors.grey[800],
              successFilledColor: colors.white,
              errorStandardBg: colors.fire.dark,
              infoStandardBg: colors.water.dark,
              warningStandardBg: colors.electric.dark,
              successStandardBg: colors.grass.dark,
              errorIconColor: colors.fire.main,
              infoIconColor: colors.water.main,
              warningIconColor: colors.electric.main,
              successIconColor: colors.grass.main
            }
          },
        },
      },
    });

export default theme;