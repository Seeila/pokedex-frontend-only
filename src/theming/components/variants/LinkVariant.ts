import { ComponentsVariants } from "@mui/material/styles/variants";

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        navigation: true;
        textPill: true;
    }
}

const variants: ComponentsVariants["MuiLink"] = [
    {
        props: {
            variant: "navigation",
        },
        style: {
            position: "relative",
            textDecoration: "none",
            "&::after": {
                content: `""`,
                width: "100%",
                height: "2px",
                color: "inherit",
                backgroundColor: "var(--pokedex-palette-primary-main)",
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%) scaleX(0)",
                transition: "250ms ease-in",
            },
            "&:hover": {
                color: "inherit",
                "&::after": {
                    transform: "translateX(-50%) scaleX(1)",
                },
            },
        },
    },
    {
        props: {
            variant: "textPill",
        },
        style: {
            padding: "20px 18px",
            position: "relative",
            textDecoration: "none",
            borderRadius: "12px",
            color: "var(--pokedex-palette-white)",
            overflow: "hidden",
            boxShadow: "0px 9px 6px var(--pill-color-shadow)",
            "&::before": {
                content: `""`,
                width: "4.125rem",
                height: "4.125rem",
                backgroundColor: "var(--pill-color-light)",
                position: "absolute",
                top: "0",
                left: "0",
                transform: "translate(-50%, -50%)",
                transition: "0.2s ease-in",
                borderRadius: "50%",
                zIndex: "-1",
            },
            "&::after": {
                content: `""`,
                width: "100%",
                height: "100%",
                background: "var(--pill-color)",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "-2",
            },
            "&:hover": {
                color: "var(--pokedex-palette-white)",
                "&::before": {
                    transform: "translate(-50%, -50%) scale(5)",
                },
            },
        },
    },
];

export const MuiLink = {
    variants: [...variants],
};
