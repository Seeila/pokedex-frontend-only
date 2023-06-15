import { PaletteColorOptions, PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
    interface Palette {
        normal: PaletteColor;
        fire: PaletteColor;
        water: PaletteColor;
        electric: PaletteColor;
        grass: PaletteColor;
        ice: PaletteColor;
        fighting: PaletteColor;
        poison: PaletteColor;
        ground: PaletteColor;
        flying: PaletteColor;
        psychic: PaletteColor;
        bug: PaletteColor;
        rock: PaletteColor;
        ghost: PaletteColor;
        dragon: PaletteColor;
        steel: PaletteColor;
        fairy: PaletteColor;
    }
    interface PaletteOptions {
        normal: PaletteColorOptions;
        fire: PaletteColorOptions;
        water: PaletteColorOptions;
        electric: PaletteColorOptions;
        grass: PaletteColorOptions;
        ice: PaletteColorOptions;
        fighting: PaletteColorOptions;
        poison: PaletteColorOptions;
        ground: PaletteOptions;
        flying: PaletteColorOptions;
        psychic: PaletteColorOptions;
        bug: PaletteColorOptions;
        rock: PaletteColorOptions;
        ghost: PaletteColorOptions;
        dragon: PaletteColorOptions;
        steel: PaletteColorOptions;
        fairy: PaletteColorOptions;
    }
}

export const colors = {
    white: "#fff",
    black: "#000",
    grey: {
        50: "#edeeee",
        100: "#d1d5d9",
        200: "#b3b9c1",
        300: "#949daa",
        400: "#6d747c",
        500: "#596068",
        600: "#49535f",
        700: "#3b4149",
        800: "#272C33",
        900: "#1A2027",
    },
    normal: {
        main: "#BED4B0",
        light: "#D9EACE",
        dark: "#A3B499",
    },
    fire: {
        main: "#F37843",
        light: "#FC9B71",
        dark: "#CF4C14",
    },
    water: {
        main: "#64ABED",
        light: "#7BBCF8",
        dark: "#3A93E5",
    },
    electric: {
        main: "#F4C74D",
        light: "#F3DC9B",
        dark: "#DEA50E",
    },
    grass: {
        main: "#99A98F",
        light: "#A4B49A",
        dark: "#7E9271",
    },
    ice: {
        main: "#81D3D3",
        light: "#9EE5E5",
        dark: "#41AAAA",
    },
    fighting: {
        main: "#C55151",
        light: "#D67E7E",
        dark: "#9F3333",
    },
    poison: {
        main: "#A7456B",
        light: "#B65379",
        dark: "#8B2E52",
    },
    ground: {
        main: "#FAAA53",
        light: "#F6BF82",
        dark: "#E98F2F",
    },
    flying: {
        main: "#A3A6DE",
        light: "#BBBEF3",
        dark: "#8185D2",
    },
    psychic: {
        main: "#C781A3",
        light: "#D398B4",
        dark: "#AE5580",
    },
    bug: {
        main: "#678D72",
        light: "#7F9886",
        dark: "#3C6748",
    },
    rock: {
        main: "#B0736C",
        light: "#D09993",
        dark: "#8A4C44",
    },
    ghost: {
        main: "#8E649E",
        light: "#9A78A7",
        dark: "#6B397E",
    },
    dragon: {
        main: "#A494C1",
        light: "#B7AACF",
        dark: "#8876AB",
    },
    dark: {
        main: "#A4826A",
        light: "#B08B70",
        dark: "#8E5831",
    },
    steel: {
        main: "#A6B7C0",
        light: "#C1CBD0",
        dark: "#899FAB",
    },
    fairy: {
        main: "#F0AFC7",
        light: "#FFCDE0",
        dark: "#C5859C",
    },
};
